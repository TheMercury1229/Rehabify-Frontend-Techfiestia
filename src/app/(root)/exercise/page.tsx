"use client";
import React, { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import axios from "axios";

export default function Exercise() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const socketRef = useRef<Socket>(io("http://localhost:5000"));
    const streamingRef = useRef<boolean>(false);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [stepImages, setStepImages] = useState<string[] | null>(null);

    socketRef.current.on("frame-response", (message) => {
        console.log("Frame response received:", message);
        setResponse(message); // Update state with the response
    });

    useEffect(()=>{
        async function getSteps(){
            const response = await axios.get("http://localhost:5000/exercise/getExercise");
            setStepImages(response.data);
            console.log(response.data);
        }
        getSteps();
    } , [])
    const startStreaming = async () => {
        if (streamingRef.current) return;
        streamingRef.current = true;

        try {
            // Request video stream with user media API
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            // Ensure the stream is valid
            if (!stream) {
                throw new Error("No video stream available");
            }

            // Assign stream to the video element
            mediaStreamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }

            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            const sendFrame = () => {
                if (!streamingRef.current) return;

                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(
                    (blob) => {
                        if (socketRef.current.connected) {
                            socketRef.current.emit("frame", blob);
                        }
                    },
                    "image/jpeg",
                    0.7
                );
                setTimeout(sendFrame, 100); // Adjust frame rate
            };

            sendFrame();
        } catch (err) {
            console.error("Error accessing webcam:", err);
            alert("Failed to access webcam. Please make sure the camera is available and permissions are granted.");
        }
    };

    const stopStreaming = () => {
        streamingRef.current = false;
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach((track) => track.stop());
            mediaStreamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center px-2">
            <div className="flex flex-row h-5/6 w-full space-x-2">
                <div className="w-1/2 border-4 border-green-700 rounded-lg overflow-hidden">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline />
                    <canvas ref={canvasRef} style={{ display: "none" }} width="640" height="480" />
                </div>
                <div className="w-1/2 rounded-lg border-4 border-green-700">
                    {/* Step images or additional content */}
                </div>
            </div>

            <div className="w-full flex justify-center space-x-4 mt-4">
                <div onClick={startStreaming} className="rounded-md border-2 border-[#99F6E4] py-1 px-8 text-base cursor-pointer">
                    Start Streaming
                </div>
                <div onClick={startStreaming} className="rounded-md border-2 border-[#99F6E4] py-1 px-8 text-base cursor-pointer">
                    Connect Server
                </div>
                <div onClick={stopStreaming} className="rounded-md border-2 border-[#99F6E4] py-1 px-8 text-base cursor-pointer">
                    Stop
                </div>
            </div>
        </div>
    );
}
