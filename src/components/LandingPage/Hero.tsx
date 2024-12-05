import { ArrowRight, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react'
import { Button } from '@/components/ui/button';


const Hero = () => {
  return (
    <div className="w-full px-[5%] mx-auto text-white h-screen bg-[#043030]">
      {/* Navbar */}
      <nav className="flex py-3 items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        <Menu className="text-white size-8" />
      </nav>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-10">
        {/* Text Section */}
        <div className="flex flex-col gap-7 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[3.25rem] md:text-6xl lg:text-7xl font-light leading-[4.2rem] "
          >
            Your{" "}
            <span className="text-[#FDE68A] font-semibold">
              Smart Rehabilitation
            </span>{" "}
            Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
            className="w-[90%] md:w-[80%] lg:w-full mx-auto text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed"
          >
            AI-Powered Feedback and Video Demonstrations to guide your recovery
            with confidence
          </motion.p>
          <Button className="mx-auto lg:mx-0 text-black border-2 border-black bg-[#99F6E4] w-[70%] md:w-96 lg:w-[50%] py-4 lg:py-6 text-xl font-bold hover:bg-[#99F6E4] hover:shadow-md">
            <span className="mr-2">Get Started</span>
            <ArrowRight className="text-black size-10" />
          </Button>
        </div>
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="hidden lg:flex justify-center"
        >
          {/* will insert image of dashboard here when completed */}
          <Image
            src="/hero-image.png"
            alt="Dashboard image"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
