import React from "react";
import "./Home.css";

// import MyVideoSlider from './MyVideoSlider'

import HomeCourses from "./HomeCourses";
import HomeCarOpp from "./HomeCarOpp";
import HomeWCS from "./HomeWCS";
import HomeWFS from "./HomeWFS";
import HomeApp from "./HomeApp";
import HomeFWA from "./HomeFWA";

export default function Home() {
  return (
    <>
      <div className="hbgclr">
   

        <div className="hcourse">
          <center>
            <h1>OUR COURSES</h1>
          </center>

          <div className="homecrs">
            <ul>
              <li>
                <HomeCourses />
              </li>
              <li>
                <HomeCourses />
              </li>
              <li>
                <HomeCourses />
              </li>
            </ul>
          </div>
          <div className="homecrs">
            <ul>
              <li>
                <HomeCourses />
              </li>
              <li>
                <HomeCourses />
              </li>
              <li>
                <HomeCourses />
              </li>
            </ul>
          </div>
        </div>

        <div className="hco">
          <div className="co">
            <center>
              <h1>CAREER OPPORTUNITIES</h1>
              <p>
                WedCell Institute of Event Management will give you a platform
                to make your career in Event Industry
              </p>
            </center>
          </div>

          <div className="career" id="three">
            <ul>
              <li>
                <HomeCarOpp />
              </li>
              <li>
                <HomeCarOpp />
              </li>
              <li>
                <HomeCarOpp />
              </li>
            </ul>
          </div>

          <div className="career" id="four">
            <ul>
              <li>
                <HomeCarOpp />
              </li>
              <li>
                <HomeCarOpp />
              </li>
              <li>
                <HomeCarOpp />
              </li>
            </ul>
          </div>
        </div>

        <div className="hwcs">
          <center>
            <div className="wcs">
              <h1>WHY CHOOSE US</h1>
            </div>
          </center>

          <div className="chooseus" id="five">
            <ul>
              <li>
                <HomeWCS />
              </li>
              <li>
                <HomeWCS />
              </li>
              <li>
                <HomeWCS />
              </li>
            </ul>
          </div>
          <div className="chooseus" id="six">
            <ul>
              <li>
                <HomeWCS />
              </li>
              <li>
                <HomeWCS />
              </li>
              <li>
                <HomeWCS />
              </li>
            </ul>
          </div>
        </div>

        <div className="wfs">
          <HomeWFS />
        </div>

        <div className="ha">
          <center>
            <h1>WEDCEEL ONLINE WEDDING PLANNING APP</h1>
          </center>
          <HomeApp />
        </div>

        <div className="hfwa">
          <center>
            <div className="fwa">
              <h1>FEATURES AT WEDCELL APP</h1>
            </div>
          </center>

          <div className="features" id="seven">
            <ul>
              <li>
                <HomeFWA />
              </li>
              <li>
                <HomeFWA />
              </li>
            </ul>
          </div>
          <div className="features" id="eight">
            <ul>
              <li>
                <HomeFWA />
              </li>
              <li>
                <HomeFWA />
              </li>
            </ul>
          </div>
          <div className="features" id="nine">
            <ul>
              <li>
                <HomeFWA />
              </li>
              <li>
                <HomeFWA />
              </li>
            </ul>
          </div>

          <div className="featurebtn">
            <center>
              <button className="ftrsbtn">Know More</button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
