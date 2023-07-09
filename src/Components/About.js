import React from "react";
import "../Styles/Root.scss";

export const About = () => {
  return (
    <div>
      <div className="abt_container">
        <div className="v_lines_group">
          <div className="v_lines1 "></div>
          <div className="v_lines2 "></div>
          <div className="v_lines3 "></div>
        </div>
        <p className="abt_dot">ABOUT US</p>
        <p className="abt_sol">
          {" "}
          We build amazing web solutions <br />
          to make customers life easy
        </p>
        <div className="v1"></div>
        <p className="abt_paragraph">
          Byteever is a team of outstanding web strategists, designers, and
          engineers that together imagine, <br /> build, and grow amazing web
          solutions that our customers and their audience love. <br /> Our team
          of engineers consistently delivers code that is powerful, efficient,
          and secure. We will work <br /> with you on any aspect of WordPress
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
