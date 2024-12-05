import ceo from "../assets/images/ceo.jpg";
import pro1 from "../assets/images/proj-manager1.jpg";
import pro2 from "../assets/images/proj-manager2.jpg";
import pro3 from "../assets/images/proj-manager3.jpg";
import fro1 from "../assets/images/front-end.jpg";
import fro2 from "../assets/images/front-end2.jpg";
import fro3 from "../assets/images/front-end3.png";
import back1 from "../assets/images/back-end1.jpg";
import back2 from "../assets/images/back-end2.jpg";
import back3 from "../assets/images/back-end3.jpg";
import grap1 from "../assets/images/graphics-des.jpg";
import grap2 from "../assets/images/graphics-des2.jpg";
import grap3 from "../assets/images/graphics-des3.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__comp">
          <h1>About Parallax Web Services</h1>
          <div className="about__desc">
            <p className="about__desc-txt">
              Started as a small company, Parallax Web Services have since grown
              into a large business, and making a name for itself in the Web
              Development Industry. Since 2020 Parallax Web Services have
              deployed 2,024 Website Projects and continuing to grow to this
              day.
              <br />
              We have gotten better, stronger and wiser. Join us in our path to
              success. Let’s Soar Together!
            </p>
          </div>
        </div>

        <div className="about__comp-teams">
          <h2 className="about_comp-job-title">
            Team Making Parallax Web Services Possible
          </h2>

          <div className="about__main">
            <div className="about__pic">
              <img
                src={ceo}
                alt=""
                className="about__emp-img about__emp-img--ceo"
              />
            </div>
            <p className="about__main-pos">President/CEO</p>
          </div>

          <div className="about__teams">
            <div className="about-emp">
              <div className="about__pic">
                <img src={pro1} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Project Manager</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={pro2} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Project Manager</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={pro3} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Project Manager</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={fro1} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Senior Front End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={fro2} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Junior Front End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={fro3} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Junior Front End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={back1} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Senior Back End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={back2} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Junior Back End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={back3} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Junior Back End Developer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={grap1} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Graphic Designer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={grap2} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Graphic Designer</p>
            </div>

            <div className="about-emp">
              <div className="about__pic">
                <img src={grap3} alt="" className="about__emp-img" />
              </div>
              <p className="about__main-pos">Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
