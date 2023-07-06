import React from "react";
import "../Styles/Join.scss";
import team from "../Assets/Team Members & You.png";
import { ButtonRed } from "./Button";

const JoinUs = () => {
  return (
    <div className="join_container">
      <p className="abt_dot">Career</p>
      <img className="team" src={team} />

      <p className="para_join">
        {" "}
        Want to serve the world and take <br /> your career to the next level?{" "}
      </p>
      <div className="join_button_red">
        <h4 className="join_button_text_red">Check Our Open Position</h4>
        <ButtonRed />
      </div>
    </div>
  );
};

export default JoinUs;
