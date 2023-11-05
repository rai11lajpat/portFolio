const Services = () => {
  return (
    <>
      <h2 className="pt-5 text-3xl underline  text-center font-bold ">
        My Services
      </h2>
      <div className="mt-5 flex space-x-5 p-5">
        <div className="cursor-pointer hover:bg-gray-100  web flex  bg-gray-200 rounded-2xl shadow-lg">
          <div className="p-5">
            <div className="text-center">
            <i class="fa-brands fa-react text-5xl"></i>
            </div>
               <h1 className="text-center text-3xl">Web Development</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              porro qui nostrum sequi, aperiam minus libero alias eligendi
              ratione voluptates, accusantium atque tenetur placeat. Ipsum ipsam
              sequi at eius quod!
            </p>
            <br />
            <div className="text-center">
              <a
                className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
                href="/contact me"
              >
                Check
              </a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 back flex bg-gray-200 rounded-2xl shadow-lg">
          <div className="p-5">
          <div className="text-center">
          <i class="fa-solid fa-server text-5xl"></i>
            </div>
            <h1 className="text-center text-3xl">Backend Development</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              porro qui nostrum sequi, aperiam minus libero alias eligendi
              ratione voluptates, accusantium atque tenetur placeat. Ipsum ipsam
              sequi at eius quod!
            </p>
            <br />
            <div className="text-center">
              <a
                className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
                href="/contact me"
              >
                Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
