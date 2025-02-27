import { motion } from "framer-motion";
import React from "react"; 

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  const containerVariants = staggerContainer();

  return class HOC extends React.Component {
    render() {
      return (
        <motion.section
          variants={containerVariants}
          initial='hidden'
          animate='show'
          ease= 'easeIn'
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>

          <Component />
        </motion.section>
      );
    }
  };
};

export default StarWrapper;
