import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#1e0103]'>
      <StarsCanvas />
        <div className='min-h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
          
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
