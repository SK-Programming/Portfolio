import React, {useEffect , useState} from 'react';

import { Link } from 'react-router-dom';

import { styles } from '../style';

import { navLinks } from '../constants';

import {logo,menu,close} from '../assets'

const Navbar = () => {
  
  const [ active, setActive] = useState('')
  const [ toggle, setToggle] = useState(false)
  
  return (


    <nav
    className={`
    ${styles.paddingX}  w-full flex items-center py-5 z-20 fixed top-0 bg-gradient-to-b from-black to-[#100404] `}
    >
<div className="flex justify-between w-full items-center max-w-7xl mx-auto">
  <Link 
  to="/" 
  className="flex items-center gap-2"
  onClick={() =>{
    setActive("");
    window.scrollTo(0,0)
  }}
  >
<img src={logo}  alt="" className="w-30 h-20 object-contain "/>
  <p className="text-white-[18px] text-white font-bold cursor-pointer flex">Shaad Khan &nbsp;<span className="sm:block hidden">| SK Design</span></p>
  
  </Link>
<ul className="list-none hidden sm:flex flex-row gap-10">
  
{navLinks.map((link) => (
  <li
    key={link.id}
    className={`${
      active === link.title ? 'text-white' : 'text-gray-700'
    } hover:text-white text-[18px] font-medium cursor-pointer`}
    onClick={() => setActive(link.title)}
  >
    <a href={`#${link.id}`}
    className={`${
      active === link.title 
      ? 'text-red-700' 
      : 'text-white'
    } hover:text-red-700 text-[15px] font-medium cursor-pointer `}
    onClick={() => setActive(link.title)}>{link.title}</a>
  </li>
))}


</ul>
<div className="sm:hidden flex flex-1 justify-end items-center ">
<img src={toggle ? close : menu}
 alt="menu" 
 className="w-5 h-5 object-contain cursor-pointer" 
 onClick={() => setToggle(!toggle)}/>
<div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-black to-rose-700 absolute top-20 right-0 mx-4  min-w-[140px] z-10 rounded-xl `}>
<ul className="list-none flex gap-4 justify-end items-start z-20 flex-col">
  
{navLinks.map((link) => (
  <li
    key={link.id}
    className={`${
      active === link.title ? 'text-white' : 'text-gray-700'
    } hover:text-white text-[18px] font-medium cursor-pointer`}
    onClick={() => setActive(link.title)}
  >
    <a href={`#${link.id}`}
    className={`${
      active === link.title 
      ? 'text-red-700' 
      : 'text-white'
    } hover:text-red-700 text-[15px] font-medium cursor-pointer `}
    onClick={() => setActive(link.title)}>{link.title}</a>
  </li>
))}


</ul>
</div>

</div>
</div>

    </nav>
  )
}

export default Navbar