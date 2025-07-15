import fyp from "../assets/a.png";
const FinalYearProject = () => {
  return (
    <>
      <h2 className="pt-5 text-3xl underline  text-center font-bold ">
        Final Year Project
      </h2>
      <div className="about  bg-gray-200 rounded-2xl ml-5 mr-5">

        <div className="flex mt-5 ms-28">
          
          <div className="flex justify-center w=2/3  mt-12 ">
            <div>
              <h1 className="font-semibold text-3xl">DUET WhatsApp Assistant</h1>
              <p className="mt-10 mb-10">
               DUET WhatsApp Assistant is an intelligent WhatsApp-based university support system that bridges communication gaps between students and administration. It streamlines essential university services such as admissions, fee payment, examination results, transport details, campus locations, and access to the student portal. Designed for ease and accessibility, it enables students to interact directly via WhatsApp without needing websites or apps. Built using Java Spring Boot, Infobip API, and Oracle DB, the assistant ensures 24/7 availability and a fully digital experience—reducing administrative workload and enhancing student satisfaction.
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
          <div className="flex justify-center w-full p-4">
            <img
              className="rounded-xl shadow-lg w-64 h-auto"
              src={fyp}
              alt=""
            />
          </div>

          

        </div>

        {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#emailApi</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mail</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
                            </div> */}
      </div>
    </>
  );
};

export default FinalYearProject;
