import React, { useEffect, useState } from "react";
import profileimg from "../Components/Img/profile1.jpg";
import { Slide, Zoom } from "react-reveal";
const Home = () => {
  //console.log(frontend);
  const [dgn, setdgn] = useState("ReactJs");
  const Experties = [
    "Php",
    "Laravel",
    "Express js(node js)",
    "Reactjs",
    "Redux",
    "CSS",
    "HTML",
    "BootStrap",
    "Mysql",
    "Oracle Database",
    "Git & Github",
    "Rest Api",
  ];

  useEffect(() => {
    let abc = setInterval(() => {
      //   Design();
      let index = Math.floor(Math.random() * 12);
      setdgn(Experties[index]);
    }, 3000);
    return () => {
      clearInterval(abc);
    };
  });

  return (
    <div>
      <div class="container-fluid">
        <>
          <div class="homepage">
            <Zoom>
              <div className="">
                <div class="row ">
                  <div class="col-md-4 ">
                    <div class="image">
                      <img src={profileimg} class="profile-image" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h4 className="nameTitle">Ismayel Hossen</h4>
                    <h5 className={`designation animate__animated  `}>
                      Full Stack Web Developer
                    </h5>
                    <p>
                      Currently Works at Tech Valley Solutions Limited <br />
                      <span style={{ color: "#a21c0d", fontWeight: "600" }}>
                        As{" "}
                      </span>
                      Web Developer
                    </p>
                    <h6
                      className={`designation  ${
                        dgn == "Php"
                          ? "animate__animated animate__bounce"
                          : dgn == "Laravel"
                          ? "animate__animated  animate__rotateOut"
                          : dgn == "Express js(node js)"
                          ? "animate__animated animate__slideOutRight"
                          : dgn == "Reactjs"
                          ? "animate__animated  animate__slideOutLeft"
                          : dgn == "Redux"
                          ? "animate__animated animate__slideOutRight"
                          : dgn == "CSS"
                          ? "animate__animated  animate__slideInUp"
                          : dgn == "HTML"
                          ? "animate__animated animate__slideInRight"
                          : dgn == "BootStrap"
                          ? "animate__animated  animate__slideInLeft"
                          : dgn == "Mysql"
                          ? "animate__animated animate__slideInDown"
                          : dgn == "Oracle Database"
                          ? "animate__animated  animate__zoomOutLeft"
                          : dgn == "Git & Github"
                          ? "animate__animated  animate__zoomOutLeft"
                          : dgn == "Rest Api"
                          ? "animate__animated  animate__slideInDown"
                          : "animate__animated  animate__rotateOut"
                      }  `}
                    >
                      Experties At-{" "}
                      <span style={{ color: "red" }}>({dgn})</span>
                    </h6>
                    <p>Email:ismayelHossen123@gmail.com</p>
                    <p>Phone:01952152883</p>
                    <p>
                      Github: <a href="https://github.com/IsmayelHossen"></a>{" "}
                      https://github.com/IsmayelHossen
                    </p>
                    <p>
                      Linkedin:
                      <a href="https://www.linkedin.com/in/ismayel-hossen-9630661a7/">
                        {" "}
                        https://www.linkedin.com/in/ismayel-hossen-9630661a7/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </>

        <div class="technologies ">
          <Zoom>
            <div>
              <h5 className="toolsTechnology text-center">
                Tools And Technologies knowledge
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="frontend">
                    <h4 class="frontend-title">Frontend</h4>
                    <div class="table-responsive">
                      <table>
                        <tr>
                          <th>CSS</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "85%" }}
                              >
                                85%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Bootstrap Framework</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Js</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "60%" }}
                              >
                                60%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>HTML</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "98%" }}
                              >
                                98%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th> Library(React Js)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              >
                                80%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Library(Redux)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Framework(Vue Js)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "40%" }}
                              >
                                40%
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="backend">
                    <h4 class="backend-title">Backend</h4>
                    <div class="table-responsive">
                      <table class="">
                        <tr>
                          <th>PhP</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "80%",
                                  backgroundColor: "rgb(35, 162, 126)",
                                }}
                              >
                                80%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Laravel</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "70%",
                                  backgroundColor: "rgb(35, 162, 126)",
                                }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>NodeJs(Express js)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "60%",
                                  backgroundColor: "rgb(35, 162, 126)",
                                }}
                              >
                                60%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Database(Mysql)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "60%",
                                  backgroundColor: "rgb(35, 162, 126)",
                                }}
                              >
                                60%
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>Database(Oracle)</th>
                          <td class="td-progressbar">
                            <div class="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "40%",
                                  backgroundColor: "rgb(35, 162, 126)",
                                }}
                              >
                                40%
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto text-center">
                <p>
                  <strong>Clear Understanding OOP</strong>
                  <br />
                </p>
                <p>
                  <strong>RestFull API</strong>
                  <br />
                </p>
                <p>
                  <strong>Git &amp; Github</strong>
                  <br />
                </p>
              </div>
            </div>
          </Zoom>
        </div>

        <div class="projectsLink">
          <h4 class="projetslink-title">
            Some Projects Github &amp; Live Links
          </h4>
          <div class="row">
            <div class="col-md-4">
              <h5>1: This Protfolio</h5>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen">
                  https://github.com/IsmayelHossen
                </a>{" "}
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> React Js</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Laravel </li>
                    <li> Mysql(Database) </li>
                    <li> Pusher Js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>2: Admission Help Line </h5>
              <p>An Educational(Informative) Website</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/MBSTU-Admission-Help-Line-2019-20">
                  https://github.com/IsmayelHossen/MBSTU-Admission-Help-Line-2019-20
                </a>{" "}
              </p>
              <p>
                Live:
                <a href="http://mbstuadmission.byethost7.com">
                  http://mbstuadmission.byethost7.com
                </a>
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> Jquery</li>
                    <li>Ajax</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Php </li>
                    <li> Mysql(Database)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>3: Online Exam System </h5>
              <p>MCQ Exam System</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/ExamForJob">
                  https://github.com/IsmayelHossen/ExamForJob
                </a>{" "}
              </p>
              <p>
                Live:
                <a href="https://examforjob.000webhostapp.com/">
                  https://examforjob.000webhostapp.com/
                </a>
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html Css </li>
                    <li> Bootstrap </li>
                    <li> Js </li>
                    <li> Toaster </li>
                    <li> Sweetalert</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Php </li>
                    <li> Mysql(Database)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>4: Meal Management</h5>
              <p>Daily wise monthly meal calculation System</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/Meal-Management">
                  https://github.com/IsmayelHossen/Meal-Management
                </a>{" "}
              </p>
              <p>
                Live:
                <a href="https://meal-management.000webhostapp.com">
                  https://meal-management.000webhostapp.com
                </a>
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> Js</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Php </li>
                    <li> Mysql(Database)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>
                5: OARS(Online Attendance &amp; Result System With Social
                Network){" "}
              </h5>
              <p>Institutions System with social connectivity</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/OARS">
                  https://github.com/IsmayelHossen/OARS
                </a>{" "}
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> React Js</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Laravel </li>
                    <li> Mysql(Database) </li>
                    <li> Pusher Js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>6: Banglaamr</h5>
              <p>News Portal Website</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/Banglaamar">
                  https://github.com/IsmayelHossen/Banglaamar
                </a>{" "}
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> Js</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Laravel </li>
                    <li> Mysql(Database)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h5>7: Shawpnobuzzbd</h5>
              <p>Ecommerce Website</p>
            </div>
            <div class="col-md-8">
              <p>
                Github:{" "}
                <a href="https://github.com/IsmayelHossen/Shawpnobuzzbd">
                  https://github.com/IsmayelHossen/Shawpnobuzzbd
                </a>{" "}
              </p>
              <h5>Tools &amp; Technologies Use</h5>
              <div class="d-flex mx-auto">
                <div class="tools-Frontend">
                  <h5>Frontend</h5>
                  <ul>
                    <li>Html </li>
                    <li> Css </li>
                    <li> Bootstrap </li>
                    <li> Js </li>
                    <li> Sweetalert</li>
                    <li>toaster</li>
                  </ul>
                </div>
                <div class="tools-Backend">
                  <h5>Backend</h5>
                  <ul>
                    <li>Php </li>
                    <li> Mysql(Database)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
