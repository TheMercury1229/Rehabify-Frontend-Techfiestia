import { ArrowRight, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react'
import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div className="w-[100%] px-[5%] mx-auto text-white h-screen bg-[#043030]">
      {/* Navbar */}
      <nav className=" flex py-3 items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        <Menu className="text-white size-8" />
      </nav>
      {/* Hero */}
      <div className="flex flex-col gap-7 h-[100%] items-center mt-[10%]">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-[3.25rem] font-light text-center leading-[4.2rem]"
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
          className="w-[80%] mx-auto text-xl font-light leading-relaxed text-center"
        >
          AI-Powered Feedback and Video Demonstrations to guide your recovery
          with confidence
        </motion.p>
        <Button className="text-black border-2 border-black bg-[#99F6E4] w-[70%] py-8 text-xl font-bold hover:bg-[#99F6E4] hover:shadow-md ">
          <span className="mr-2">Get Started</span>
          <ArrowRight className="text-black  size-10" />
        </Button>
      </div>
    </div>
  );
}

export default Hero