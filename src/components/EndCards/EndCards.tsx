import React, { useContext } from "react";
import "./EndCards.scss";
import { motion } from "framer-motion";
import { store } from "../../App";

export default function EndCards() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-cards">
      <div className={`left-card card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`clean ${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "Sauberer Code" : "Proficiency in Libraries"}</h3>
        <img
          className="code"
          src={state.darkmode ? require("../../assets/images/libraries.PNG") : require("../../assets/images/libraries2.PNG")}
        />
      </div>

      <div className={`right-card card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "Performance-Optimierung" : "Skills"}</h3>
        <img
          className="code"
          src={state.darkmode ? require("../../assets/images/skills.PNG") : require("../../assets/images/skillswh.PNG")}
        />
        </div>
      </div>
    </div>
  );
}
