import bannerImage from "../assets/f2-r.png";
const AboutSection = () => {
  return (
    <>
    <h2 className="pt-5 text-3xl underline  text-center font-bold ">
          About Me
        </h2>
      <div className="about  bg-gray-200">
        
        <div className="flex mt-10 ms-28">
          <div className="flex justify-center w-full">
            <img
              className="rounded-xl shadow-lg max-w-sm "
              src={bannerImage}
              alt=""
            />
          </div>
          <div className="flex justify-center w=2/3 ms-48 mt-12 mx-24">
            <div>
            <h1 className="font-semibold text-3xl">Java backend Developer</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              eum consectetur doloremque optio repellendus, perferendis fugit
              ipsum cumque beatae ad ratione nisi deleniti? Voluptate
              consequatur soluta, suscipit fugiat obcaecati facilis!
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              eum consectetur doloremque optio repellendus, perferendis fugit
              ipsum cumque beatae ad ratione nisi deleniti? Voluptate
              consequatur soluta, suscipit fugiat obcaecati facilis!
            </p>
            <br />
            <a
              className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
              href="/contact me"
            >
              Read More...
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
