"use client";

import LanguageToggle from "@/app/Components/LanguageToggle";
import Image from "next/image";

export default function Navbar() {

  
  return (
    <nav className="py-4 ">

      <div className="flex justify-between ">
      <div className="relative w-20 h-10 outline justify-start">

  {/* <Image 
    src="/Image/pngtree-salon.png" 
    fill 
    alt="image" 
    className="object-contain h-20  rotate-90 -mr-40 outline w-full"
  /> */}
</div>
        {/* <p>Home</p>
        <p>About</p>
        
        <p>Service</p> */}
        <p><LanguageToggle /></p>
        {/* <p>Login</p> */}
   

      </div>
      
    </nav>
  );
}