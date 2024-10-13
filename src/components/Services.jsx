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
              <i className="fa-brands fa-react text-5xl"></i>
            </div>
            <h1 className="text-center text-3xl">Web Development</h1>
            <p className="mt-5">
              Specializing in React, Tailwind CSS, Bootstrap, and more, I offer front-end development services that blend visual appeal with functionality. With React, I create dynamic and interactive web applications. Leveraging Tailwind CSS and Bootstrap, I ensure responsive and stylish designs. From crafting custom front-end solutions to optimizing user experiences, my expertise lies in delivering modern, user-friendly interfaces that elevate web applications to the next level.
            </p>
            <br />
            <div className="text-center">
              <a
                className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
                href="https://github.com/rai11lajpat?tab=repositories"
              >
                Check
              </a>
            </div>
          </div>
        </div>



        
        <div className="cursor-pointer hover:bg-gray-100 back flex bg-gray-200 rounded-2xl shadow-lg">
          <div className="p-5">
            <div className="text-center">
              <i className="fa-solid fa-server text-5xl"></i>
            </div>
            <h1 className="text-center text-3xl">Backend Development</h1>
            <p className="mt-5">
              As a Backend Developer, I specialize in Java, Spring Boot, JDBC, MySQL database, Servlets, and log4j for comprehensive logging. I also excel in developing REST APIs with Spring Boot. With this skill set, I design scalable backend solutions that ensure optimal functionality using Java and Spring Boot. Leveraging JDBC, I establish efficient database connectivity, while Servlets enable the creation of dynamic web applications. The integration of log4j enhances reliability and troubleshooting capabilities, providing robust logging, monitoring, and debugging functionalities. This expertise allows me to deliver backend solutions that prioritize performance, security, and scalability, including the development of RESTful APIs for seamless communication with other systems.
            </p>
            <br />
            <div className="text-center">
              <a
                className=" bg-orange-500 text-1xl font-bold px-3 py-2 rounded-full"
                href="https://github.com/rai11lajpat?tab=repositories"
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
