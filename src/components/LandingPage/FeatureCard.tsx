import { motion } from "framer-motion";
import Image from "next/image";
import { isVisible } from "@/hooks/isVisible";

type FeatureCardProps = {
  heading: string;
  content: string;
  imageUrl: string;
  index: number;
};

const FeatureCard = ({ heading, content,imageUrl ,index }: FeatureCardProps) => {
  const { ref, isInView } = isVisible(0.3); // 30% visible to trigger animation

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x:index%2==0? 100: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-1 flex flex-col p-6 gap-5"
    >
      <div className="flex flex-col gap-3">
        <h4 className="text-3xl text-primary font-semibold">{heading}</h4>
        <p className="text-lg text-muted-foreground">{content}</p>
      </div>
      <div className="flex -z-1 items-center justify-center py-3">
        <div className="absolute rounded-full -z-10 h-auto w-auto bg-teal-400 blur-lg opacity-10 p-10">
          <Image src={imageUrl} alt="image" className="opacity-0" width={250} height={250} />
        </div>
        <Image src={imageUrl}  alt="image" width={250} height={250} />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
