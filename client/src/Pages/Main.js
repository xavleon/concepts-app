import React from "react";
import videoWP from "../assets/video_wp.mp4";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const enterSite = () => {
    navigate("/herox");
  };
  return (
    <div className="main">
      <div class="overlay"></div>
      <video src={""} autoPlay loop muted />
      <div className="content">
        <h1>Welcome To My Site</h1>
        <button onClick={enterSite}>Enter</button>
      </div>
    </div>
  );
};

export default Main;
