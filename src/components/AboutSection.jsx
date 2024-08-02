import bannerImage from "../assets/dpp.png";
const AboutSection = () => {
  return (
    <>
      <h2 className="pt-5 text-3xl underline  text-center font-bold ">
        About Me
      </h2>
      <div className="about  bg-gray-200 rounded-2xl ml-5 mr-5">

        <div className="flex mt-5 ms-28">
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
              <p className="mt-10 mb-10">
                I am LAJPAT RAI, a passionate Backend Developer with a robust skill set in Java, Spring Boot, JDBC, and Servlets. In addition to my backend expertise, I bring a flair for front-end development, with hands-on experience in React, Tailwind CSS, and more. Currently, I'm on a journey towards a Bachelor's degree in Computer Science at Dawood University, Karachi.I proudly serve as the Co-Lead at the Google Developer Student Club (GDSC) of Dawood University Chapter.
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
