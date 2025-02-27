import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const IntersectionObserver = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return <div ref={ref}>{children({ inView, ref })}</div>;
};

export default IntersectionObserver;
