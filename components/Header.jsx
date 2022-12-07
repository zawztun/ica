import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full ease-in duration 300">
      <div className="max-w[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">LOGO</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Videos</Link>
          </li>
          <li  className="p-4">
            <Link href="/">Statements</Link>
          </li>
          <li  className="p-4">
            <Link href="/">About</Link>
          </li>
          <li  className="p-4 ">
            <Link href="/">Projects</Link>
          </li>
        </ul>
        
        {/* {Mobile button} */}
        <div className="z-10 block sm:hidden">
          <AiOutlineMenu size ={20}/>
        </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen ease-in bg-black sm:hidden duration 300"> 
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

export default Header;
