import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isVisible } from "@/hooks/isVisible";

const CTA = () => {
  const { ref, isInView } = isVisible(0.3); // 30% visible to trigger animation

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-[10%] relative w-full mx-auto py-8 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-64 shadow-inner "
    >
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[600px]">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
          Start Now
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Personalized guidance, real-time feedback, measurable progress.
        </p>
      </div>

      {/* Button Section */}
      <Button className="text-black border-2 border-black bg-[#99F6E4] w-[80%] md:w-[50%] lg:w-[300px] py-6 lg:py-8 text-lg lg:text-xl font-bold hover:bg-[#99F6E4] hover:shadow-md">
        <span className="mr-2">Join Now</span>
        <ArrowRight className="text-black size-10" />
      </Button>
    </motion.div>
  );
};

export default CTA;
