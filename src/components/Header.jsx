import { useState } from "react";
import cv from '../assets/Lajpat Rai_Spring_Boot_java_intern.pdf';
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
        {
          title:"Projects",
          link:"/Projects",
          id:5,
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
          <Link className="text-2xl font-bold hover:text-orange-600" to="/portFolio/">{brandName}</Link>
          
        </div>

        <div className="space-x-6">
            {/* {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className="hover:text-orange-600">
                {link.title}
              </a>
            ))} */}
            <Link to="/portFolio/" className="hover:text-orange-600">Home</Link>
            <Link to="/portFolio/About" className="hover:text-orange-600">About</Link>
            <Link to="/portFolio/Expertise" className="hover:text-orange-600">Expertise</Link>
            <Link to="/portFolio/Projects" className="hover:text-orange-600">Projects</Link>
            <Link to="/portFolio/services" className="hover:text-orange-600">Services</Link>
            

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
