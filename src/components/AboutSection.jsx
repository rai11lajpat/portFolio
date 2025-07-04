import bannerImage from "../assets/file2.jpg";
const AboutSection = () => {
  return (
    <>
      <h2 className="pt-5 text-3xl underline  text-center font-bold ">
        About Me
      </h2>
      <div className="about  bg-gray-200 rounded-2xl ml-5 mr-5">

        <div className="flex mt-5 ms-28">
          <div className="flex justify-center w-full p-4">
            <img
              className="rounded-xl shadow-lg max-w-sm"
              src={bannerImage}
              alt=""
            />
          </div>
          <div className="flex justify-center w=2/3 ms-48 mt-12 mx-24">
            <div>
              <h1 className="font-semibold text-3xl">Java backend Developer</h1>
              <p className="mt-10 mb-10">
                I am Lajpat Rai, a passionate Backend Developer with strong skills in Java, Spring Boot, Oracle, MySQL, and RESTful APIs. Alongside my backend expertise, I also have hands-on experience in frontend development using React and Tailwind CSS. I recently graduated with a Bachelor's degree in Computer Science from Dawood University of Engineering and Technology, Karachi, where I served as the Co-Lead of the Google Developer Student Club (GDSC) – DUET Chapter.

              </p>
              <br />
              <a
                className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
                href="https://github.com/rai11lajpat"
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
