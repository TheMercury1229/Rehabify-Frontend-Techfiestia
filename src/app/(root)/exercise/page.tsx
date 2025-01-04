"use client";
import React, { useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Exercise() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const socketRef = useRef<Socket>(io("http://localhost:5000"));
    const streamingRef = useRef<boolean>(false);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const [response, setResponse] = useState<string | null>(null);

    // Handle socket response for frame processing
    socketRef.current.on("frame-response", (message: string) => {
        console.log("Frame response received:", message);
        setResponse(message); // Update state with the response
    });

    const startStreaming = async () => {
        if (streamingRef.current) return;
        streamingRef.current = true;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            mediaStreamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }

            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            const sendFrame = () => {
                if (!streamingRef.current) return;

                context.drawImage(videoRef.current as HTMLVideoElement, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(
                    (blob) => {
                        if (blob && socketRef.current.connected) {
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
        // <div>
        //   <video ref={videoRef} style={{ width: "100%", maxHeight: "300px" }} autoPlay playsInline />
        //   <canvas ref={canvasRef} style={{ display: "none" }} width={640} height={480} />
        //   <div>
        //     <button onClick={startStreaming}>Start Streaming</button>
        //     <button onClick={stopStreaming}>Stop Streaming</button>
        //   </div>
        //   {response && <div>{response}</div>}
        // </div>

        <div className="flex flex-col h-screen justify-center items-center px-2">
            
            <div className="flex flex-row h-5/6 w-full space-x-2">
                
                <div className="w-1/2 border-4 border-green-700 rounded-lg overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover "
                        autoPlay
                        playsInline
                    />
                </div>

                
                <div className="w-1/2 rounded-lg border-4 border-green-700">
                    
                </div>
            </div>

            
            <div className="w-full flex justify-center space-x-4 mt-4">
                <div
                    onClick={startStreaming}
                    className="rounded-md border-2 border-[#99F6E4] py-1 px-8 text-base cursor-pointer"
                >
                    Start
                </div>
                <div
                    onClick={stopStreaming}
                    className="rounded-md border-2 border-[#99F6E4] py-1 px-8 text-base cursor-pointer"
                >
                    Stop
                </div>
            </div>
        </div>

    );
};
