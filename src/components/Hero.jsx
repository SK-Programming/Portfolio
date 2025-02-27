import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen mx-auto ">
 <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>       
  <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c50000]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-600 to-transparent" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#c50000]">Shaad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do Graphics Designing, User Interfaces, <br className="sm:block hidden" />
             Web Applications, 3d Website and Video Editing
          </p>
        </div>
       
      </div>
 
<div className="relative lg:top-[220px] md:top-[330px]  sm:top-[430px] lg:h-[800px] md:h-[600px] sm:h-[500px]">

<ComputersCanvas  />
</div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-red-700 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
