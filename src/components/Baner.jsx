import { useRef,useEffect } from "react";
import bannerImage from "../assets/f1-r.png";
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vel placeat optio est cumque porro laboriosam laudantium delectus
             
            </p>
            <div className="icon-container flex space-x-5 mt-2">
              <a className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 p-6 flex justify-center items-center rounded-full">
                <i class="fa-solid text-3xl fa-envelope"></i>
              </a>
              <a className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i class="fa-brands text-3xl fa-linkedin-in"></i>
              </a>
              <a className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i class="fa-brands text-3xl fa-github"></i>
              </a>
              <a className="hover:bg-orange-500 border cursor-pointer bg-slate-900 h-12 w-12 px-6 py-6 flex justify-center items-center rounded-full">
                <i class="fa-brands text-3xl fa-instagram"></i>
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
            className="rounded-full shadow-lg max-w-sm "
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
