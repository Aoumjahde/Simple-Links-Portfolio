import React from "react";
import Image from "next/image";
import Aziz from "@/images/Aziz.png"; // Make sure this path is correct

export default function Home() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Image
          src={Aziz} 
          alt="Logo"
        />
      </div>
      <div className="urls">
        <ul>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Resume</a>
          <a href="">Contact</a>
  
        </ul>
      </div>
    </div>
  );
}