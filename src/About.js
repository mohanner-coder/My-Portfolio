import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              A loving Mom and a sofware developer who is very proficient in
                Javascript and ReactJS. I have hands-on experience efficiently
                coding websites and applications using modern HTML, CSS,
                JavaScript, ReactJS.
              </p>
              <p className="about__text p__color">
              Building state-of-the-art, easy to use, user-friendly websites
                and applications is truly a passion of mine and I am confident I
                would be an excellent addition to your organization.
              </p>
              <p className="about__text p__color">
              In addition to my knowledge base, I actively seek out new
                technologies and stay up-to-date on industry trends and
                advancements. This has allowed me to stay ahead of the curve and
                deliver exceptional work to all of my employers, including those
                I've worked for on a project basis.
              </p>
              <div className="about__button d__flex align__items__center">
                {/*<a href="#">
                   <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
