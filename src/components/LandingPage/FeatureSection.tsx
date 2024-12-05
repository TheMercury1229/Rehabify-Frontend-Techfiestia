import React from 'react'
import FeatureCard from "@/components/LandingPage/FeatureCard";

const featureData = [
  {
    heading: "Select the exercise",
    content:
      "Browse a range of exercises designed for different recovery needs. Choose the one your physiotherapist recommended to begin.",
    imageUrl: "/feature2.png",
  },
  {
    heading: "Exercise walkthrough",
    content:
      "View instructions, static images, and videos demonstrating the proper technique before starting the exercise.",
    imageUrl: "/feature1.png",
  },
  {
    heading: "Setup your device",
    content:
      "Place your device in a stable position where it can capture your movements clearly. Make sure you’re within the camera’s view to receive accurate guidance.",
    imageUrl: "/feature3.png",
  },
  // Commented-out card due to image size issue -> Image is some how too large
  // {
  //   heading: "Begin the exercise with AI Guidance",
  //   content:
  //     "Start your exercise with visual instructions and follow each step. The AI tracks your movements and provides real-time feedback to help you maintain proper posture and technique.",
  //   imageUrl: "/feature4.png",
  // },
  {
    heading: "Progress & Score feedback",
    content:
      "Watch your progress in real-time and receive a performance score at the end to track your improvement.",
    imageUrl: "/feature5.png",
  },
];
const FeatureSection = () => {
  return (
    <div className="px-[5%] w-[100%] mx-auto py-8 overflow-hidden">
      {/* Heading */}
      <h2 className="text-6xl font-bold text-center text-primary mb-3">
        How it Works!
      </h2>
      <div className="grid gap-5 grid-cols-1 mt-5">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            heading={feature.heading}
            content={feature.content}
            imageUrl={feature.imageUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSection