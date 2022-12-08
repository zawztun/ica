import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Nav = () => {
  const [nav, setNav] =useState(false);
   const [color, setColor] = useState("red");
   const [textColor, setTextColor] = useState("black")
      
  const handleNav = () =>{
    setNav(!nav)
  };


  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor('#ffffff');
  //       setTextColor('#000000');
  //     } else {
  //       setColor('transparent');
  //       setTextColor('#ffffff');
  //     }
  //   };
  //   window.addEventListener('scroll', changeColor);
  // }, []);

  
  
  return (
    <div style = {{backgroundColor: `${color}`}} className="sticky top-0 left-0 z-10 w-full ease-in duration 300">
      <div className="max-w[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <h1 style = {{color: `${textColor}`}} className="text-4xl font-bold">LOGO</h1> */}
          <div className="relative items-center w-10 h-10 rounded-full">
            <Image
            objectFit="cover"
            src="/home/ica_logo.png"
            alt="Zaw Z Tun"
            layout="fill"
          />
          </div>
         
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-blue-300">
            <Link href="/">Videos</Link>
          </li>
          <li  className="p-4 hover:text-blue-300">
            <Link href="/">Statements</Link>
          </li>
          <li  className="p-4 hover:text-blue-300">
            <Link href="/">About</Link>
          </li>
          <li  className="p-4 hover:text-blue-300">
            <Link href="/">Projects</Link>
          </li>
        </ul>
        
        {/* {Mobile button} */}
        <div className="z-10 block sm:hidden" onClick = {handleNav }>
         { nav ? <AiOutlineClose size ={20} tyle = {{color: `${textColor}`}}/> : <AiOutlineMenu size ={20} tyle = {{color: `${textColor}`}}/>}
        </div>
      <div className={nav ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen  bg-black sm:hidden  ease-in duration-300" 
      : 
      "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen ease-in bg-black sm:hidden duration-300"
    }> 
        <ul>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Videos</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Statements</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">About</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Projects</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Nav;
