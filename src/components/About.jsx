import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-red-500 via-white to-red-500 p-[1px] rounded-[20px] shadow-2xl shadow-white/20'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#360f11] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-17 h-17 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-300` }>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

     
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
      >
 
 Experienced professional in Graphic and UI/UX Design, Web Development, and Video Editing. Proficient in HTML, CSS, JavaScript, Three.js, PHP, MySQL, Bootstrap, Tailwind CSS, Photoshop, Illustrator, Premiere Pro, Figma, and Blender. Specializing in visually appealing and functional designs, with a focus on web development using HTML, CSS, and JavaScript. Expert in Three.js for 3D graphics and interactive web experiences. Committed to delivering high-quality solutions tailored to your needs. Let's bring your creative ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about")