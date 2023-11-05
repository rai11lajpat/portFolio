import backgroundImage from "../assets/ex.jpg";
const Expertise = () => {
  return (
    <>
      <h2 className=" text-3xl underline  text-center font-bold ">
        My Expertise
      </h2>

      <div className="flex items-center space-x-10 mt-10">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
          className="main-con flex "
        >
          <div className=" w-full flex justify-center text-white">
            <div className="w-2/3  mt-16 mb-8 mr-24">
              <h2 className="mt-4 text-3xl text-center font-semibold">
                I love these technologies
              </h2>
              <p className="mt-4 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur vel placeat optio est cumque porro laboriosam
                laudantium delectus tenetur, inventore voluptas qui eaque
                aliquid aliquam officiis eos, perspiciatis magnam corrupti!
              </p>
              <br />
              <div className="text-center">
                <a
                  className="bg-orange-500 text-1xl px-3 py-2 rounded-full"
                  href="/contact me"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-center">
        <div className="flex space-x-3 flex-wrap w-2/3 justify-center">
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">core java</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">jdbc</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">servlet</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">spring boot</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">javaScript</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">React</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">tailwand css</p>
          <p className="px-5 py-3 bg-gray-300 w-fit rounded-full mt-2 hover:bg-orange-500 cursor-pointer">MySql</p> 
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Expertise;
