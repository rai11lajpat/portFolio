import { useRef,useEffect } from "react";
import bannerImage from "../assets/dpp.png";
import backgroundImage from "../assets/two.jpg";
import Typed from "typed.js";

const Baner = () => {
  const el=useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="main-con flex items-center "
      >
        <div className=" w-full flex justify-center text-white">
          <div className="w-2/3  mt-16 mb-10">
            <h3 className="text-3xl font-semibold">Hi, I am </h3>
            <h1 className="mt-4 text-5xl font-bold">Lajpat Rai</h1>
            <h2 className="mt-4 text-2xl">And I am <span className="font-bold" ref={el}></span></h2>
            <p className="mt-4">
            Currently a Computer Science student at Dawood University. Serving as the Co-Lead at the Google Developer Student Club (GDSC) of Dawood University Chapter, and I'm also a motivational speaker
             
            </p>
            <div className="icon-container flex space-x-5 mt-2">
              <a href="https://www.lajpatsankhla@gmail.com" className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 p-6 flex justify-center items-center rounded-full">
                <i className="fa-solid text-3xl fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/11-lajpat-rai/" className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i className="fa-brands text-3xl fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/rai11lajpat" className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i className="fa-brands text-3xl fa-github"></i>
              </a>
              <a href="https://www.instagram.com/rai_lajpat11/" className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i className="fa-brands text-3xl fa-instagram"></i>
              </a>
            </div>
            <br />

            <a
              className="bg-orange-500 text-1xl px-3 py-2 rounded-full"
              href="/contact me"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className=" w-full flex justify-center">
          <img
            className="rounded-full shadow-lg max-w-lg "
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
{
  /* const Baner2 =()=>{
  return(
    <>
    </>
  );
} */
}

export default Baner;
