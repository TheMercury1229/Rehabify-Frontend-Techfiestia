import {motion} from "motion/react"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isVisible } from "@/hooks/isVisible";

const CTA = () => {
  const { ref, isInView } = isVisible(0.3); // 30% visible to trigger animation

  return (
    <motion.div
     ref={ref}
     initial={{ opacity: 0,y:100 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: .7, ease: "easeOut" }}
     className="px-[5%] relative  w-[100%] mx-auto py-8 flex flex-col gap-4">
      <h2 className="text-5xl font-bold text-center text-primary mb-3">
        Start Now
      </h2>
      <p className="text-xl text-center">
        Personalized guidance, real-time feedback, measurable progress.
      </p>
      <Button className="text-black border-2 border-black bg-[#99F6E4] w-[70%] py-8 text-xl font-bold hover:bg-[#99F6E4] hover:shadow-md mx-auto">
        <span className="mr-2">Join Now</span>
        <ArrowRight className="text-black  size-10" />
      </Button>
    </motion.div>
  );
}

export default CTA