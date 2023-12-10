import { useState } from "react";
import cv from '../assets/CV_LajpatRai_11.pdf';
import { Link } from "react-router-dom";

const Header = () => {
 
    const [brandName,setBrandName]=useState("Lajpat Rai Malhi");
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Baner",
            link:"./Baner",
            id:1,
        },
        {
            title:"About",
            link:"/AboutSection",
            id:2,
        },
        {
            title:"Skills",
            link:"/Skills",
            id:3,
        },
        {
            title:"Contact",
            link:"/Contact",
            id:4,
        },
    ])
    const [actionButton,setActionButton]=useState({
        title:"Download CV",
        link:{cv},
    })
  return (
    <>
      <div className="h-20  main flex justify-between items-center p-10 bg-gray-200">
        <div>
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
            {/* {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className="hover:text-orange-600">
                {link.title}
              </a>
            ))} */}
            <Link to="/website/" className="hover:text-orange-600">Home</Link>
            <Link to="/About" className="hover:text-orange-600">About</Link>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <Link to="/Expertise" className="hover:text-orange-600">Expertise</Link>

        </div>

        <div>
          <a href={cv} className="bg-orange-500 shadow px-4 py-2 rounded-full text-1xl">
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
