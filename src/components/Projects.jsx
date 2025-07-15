import project1 from "../assets/project1.jpg";
import project2 from "../assets/email.jpg"
import project3 from "../assets/chatt.jpg"
import project4 from "../assets/book.jpg"
import project5 from "../assets/jwt.jpg"
// import project6 from "../assets/a.png"
const Projects = () => {
    return (
        <>
            <h2 className="pt-5 text-3xl underline  text-center font-bold ">
                Projects
            </h2>

            <div>
                <div className="flex flex-wrap">
                    <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project1}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Course Registration (Frontend + Backend)</div>
                                <p className="text-gray-700 text-base w-full  justify-center">
                                    <b>Backend:</b>Backend: using Spring Boot, CRUD, DB-MySql, jpa,
                                    <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/courseBackend.git">https://github.com/rai11lajpat/courseBackend.git</a></u>
                                </p>
                                <p className="text-gray-700 text-base">
                                    <b>Frontend:</b>
                                    Web App built with React.js and Bootstrap, offering seamless CRUD
                                    operations.Manage courses effortlessly with user-friendly interface
                                    <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/coursefront.git">https://github.com/rai11lajpat/coursefront.git</a>
                                    </u>
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootstrap5</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CRUD</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project2}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">SMPT API</div>
                                <p className="text-gray-700 text-base ">
                                    <b>Backend:</b>using Spring Boot with automated email sending, history
                                    storage in MySQL, and integrated caching for enhanced performance.

                                    <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/emailapi.git">https://github.com/rai11lajpat/emailapi.git</a></u>
                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#emailApi</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mail</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
                            </div>

                        </div>
                    </div>

                    <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project3}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Real Time Chatt Application</div>
                                <p className="text-gray-700 text-base w-full  justify-center">
                                Spring Boot MVC, Bootstrap 5, and STOMP WebSocket delivers fast, seamless messaging with an interactive, responsive interface.
                                <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/chatroamapp.git">https://github.com/rai11lajpat/chatroamapp.git</a></u>
                                </p>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#STOMP</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootstrap</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mvc</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project4}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Book Management System</div>
                                <p className="text-gray-700 text-base ">
                                    <b>Backend:</b>API’s using Spring Boot,CRUD, DB
connection MySql, LOG4j (to generate log)

                                    <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/bootrestbook.git">https://github.com/rai11lajpat/bootrestbook.git</a></u>
                                </p>
                                
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Log4j</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Logging</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CRUD</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mysql</span>
                            </div>

                        </div>
                    </div>


                    <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project5}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">JWT token generation</div>
                                <p className="text-gray-700 text-base ">
                                    <b>Backend:</b>A JWT token generation with Spring Boot secures APIs with token-based authentication, generates logs for monitoring and debugging, and tracks user activity, ensuring efficient and secure access using JWT.
                                    <u><a className="text-sky-600 underline-offset-auto" href="https://github.com/rai11lajpat/bootrestbook.git">https://github.com/rai11lajpat/bootrestbook.git</a></u>
                                </p>
                                
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jwt</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#authentication</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#logging</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mysql</span>
                            </div>

                        </div>
                    </div>
                    
                    {/* <div className="w-1/3 px-4 py-4" >
                        <div className=" max-w-md roundedS shadow-lg">
                            <img className="w-full" src={project6}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">DUET WhatsApp Assistant</div>
                                <p className="text-gray-700 text-base ">
                                    <b>Backend:</b>A JWT token generation with Spring Boot secures APIs with token-based authentication, generates logs for monitoring and debugging, and tracks user activity, ensuring efficient and secure access using JWT.
                                
                                </p>
                                
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jwt</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#springBoot</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#authentication</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#logging</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mysql</span>
                            </div>

                        </div>
                    </div> */}



                </div>
            </div>

        </>
    );
}

export default Projects;