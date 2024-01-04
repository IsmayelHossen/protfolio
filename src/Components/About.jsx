import Axios from "axios";
import React, { useEffect, useState } from "react";
import profileimg from "../Components/Img/profile1.jpg";
const imageName = window.location.origin + "/images/ismayel.JPG";

const About = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="About">
          <div class="row">
            <>
              <div class="col-md-4">
                <div class="imageAbout">
                  <img src={profileimg} class="about-image" />
                </div>
              </div>
              <div class="col-md-8">
                <p>
                  {" "}
                  Hey ,This is Ismayel Hossen.I'm currently working at Tech
                  Valley Solutions Limited as Software Developer. I love
                  developing and it's really pleasure to me whenever i have face
                  problem &amp; accept as it challenge &amp; eventually solved
                  it. I have vast curiosity to up to date modern new tachnology.{" "}
                </p>
                <p>
                  {" "}
                  Web developing journey started at my university life when i
                  was in 2nd year student. In my univeristy life at the
                  beginning of developing i just simply tried to made my own
                  website using html and css &amp; after several approches
                  finally i had done it successfully though that was not looks
                  like professional but as a beginner that was fine.The website
                  i had made for myself that was static and i felt that time
                  must have control to change the content dynamically after that
                  i learnt &amp; used php and mysql database for backend.{" "}
                </p>
                <p>
                  {" "}
                  From my university life till now I have completd 7 above
                  projects using frontend(html,css,js,jquery,Ajax,Reactjs) and
                  Backend(Php,Laravel,Nodejs)(Database-Mysql,Oracle) .{" "}
                </p>
                <h6>
                  <strong style={{ color: "rgb(221, 94, 56)" }}>
                    Experience:{" "}
                  </strong>
                  Software developer at TVSL 20 February 2022 to Till
                </h6>

                <h6>
                  <strong>Hobby: </strong>Travelling,Watching Cricket
                </h6>
              </div>
            </>
          </div>
        </div>

        <div class="Education">
          <div class="row">
            <div class="col-md-12">
              <h3 class="educationHeading">Educational Background</h3>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Name of Degree</th>
                      <th>Subject/Group</th>
                      <th>Institution</th>
                      <th>Result(Gpa/Cgpa)</th>
                      <th>Passing Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SSC</td>
                      <td>Science</td>
                      <td>Comilla Zilla School</td>
                      <td>5.00</td>
                      <td>2013</td>
                    </tr>
                    <tr>
                      <td>HSC</td>
                      <td>Science</td>
                      <td>Comilla Govt. College</td>
                      <td>4.83</td>
                      <td>2015</td>
                    </tr>
                    <tr>
                      <td>B.Sc (Engg.)</td>
                      <td>ICT</td>
                      <td>MBSTU</td>
                      <td>3.41</td>
                      <td>2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
