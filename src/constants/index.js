import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Graphic Designer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
      {
      name: "docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    
    {
      name: "figma",
      icon: figma,
    },
  
  ];
  
  const experiences = [
    {
      title: "Graphics Designer",
      company_name: "Bs Architect",
      icon: starbucks,
      iconBg: "#fff",
      date: "September 2022 - Octuber 2023",
      points: [
        "Designing creative cover page designs.",
        "Created Logo Designs For Different Buliding Industeries.",
        "Implementing copyright free and self created content",
      ],
    },
    {
      title: "Video Editor",
      company_name: "Kick Verse Youtube Channel",
      icon: tesla,
      iconBg: "#63c609",
      date: "Octuber 2023 - November 2023",
      points: [
        "Edit Fooballer's Life, Past ,History Videos.",
        "Worked according to channel's theme.",
        "Ensured that content implemented is copyright free ",
      ],
    },
    {

      title: "Web Developer , Ui/Ux Designer , Video Editor And Graphics Designer",
      company_name: "Working On Discord",
      icon: shopify,
      iconBg: "#7e91d1",
      date: "November 2023 - Current ",
      points: [
        "Developing and Designing websites using Html, Css, Js, Php and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Designing Ui(User Interface) while caring for the Ux(User Experience) aswell.",
        "Deigning Logo , Bussiness Cards , Flyers And other things related to Graphics Designing.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Graphics Designing And Ui/UX",
      description:
        "These are one of the best projects related to graphics designing and Ui/Ux.",
      tags: [
        {
          name: "Photoshop",
          color: "#fff",
        },
        {
          name: "Illustrator",
          color: "#fff",
        },
        {
          name: "Figma",
          color: "#fff",
        },
      ],
      image: carrent,
      source_code_link: "https://www.behance.net/skdesignsz",
    },
    {
      name: "Web Design And Development",
      description:
        "One of the best projects related to Website Design And Development.",
      tags: [
        {
          name: "Html",
          color: "#fff",
        },
        {
          name: "Css",
          color: "#fff",
        },
        {
          name: "Js",
          color: "#fff",
        },
        {
          name: "Php",
          color: "#fff",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Video Editing ",
      description:
        "one of best video edits done for youtubers and for myself aswell.",
      tags: [
        {
          name: "premier pro",
          color: "#fff",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://vimeo.com/showcase/10811980",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };