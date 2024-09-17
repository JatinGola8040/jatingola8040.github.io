import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import returnTabName from "../../utils/helpers/returnTabName";
import Image from "../Image/Image";
import "./SkillTab.scss";

export interface SkillTabProps {
  topic: string;
}

export default function SkillTab(props: SkillTabProps) {
  const { topic } = props;
  const [state, dispatch] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${state.darkmode ? "dark-card" : "light-card"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: topic === "libraries" ? 0.35 : topic === "prototyping" ? 0.35 : topic === "code" ? 0.65 : 0.05 }}
    >
      <h3 className={`head ${state.darkmode ? "white" : ""}`}>{returnTabName(topic, state.language)}</h3>
      {topic === "languages" ? (
        <div className="skill-tab-list">
          <Image source="python" name="Python" />
          <Image source="c++" name="C++" />
          <Image source="java" name="Java" />
          <Image source="css" name="CSS" />
        </div>
      ) : null}
      {topic === "analysis" ? (
        <div className="skill-tab-list">
          <Image source="powerbi" name="PowerBI" />
          <Image source="tableau" name="Tableau Public" />
        </div>
      ) : null}      
      {topic === "frameworks" ? (
        <div className="skill-tab-list">
          <Image source="tf" name="TensorFlow" />
          <Image source={state.darkmode ? "flask2" : "flask"} name="Flask" />
          <Image source="pytorch" name="Pytorch" />
        </div>
      ) : null}
      {topic === "libraries" ? (
        <div className="skill-tab-list">
          <Image source={state.darkmode ? "pandas2" : "pandas1"} name="Pandas" />
          <Image source="numpy" name="Numpy" />
          <Image source="seaborn" name="Seaborn" />
        </div>
      ) : null}
      {topic === "collaborative" ? (
        <div className="skill-tab-list">
          <Image source="git" name="Git" />
          <Image source="github" name="GitHub" />
        </div>
      ) : null}
      {topic === "prototyping" ? (
        <div className="skill-tab-list">
          <Image source="figma" name="Figma" />
          <Image source="photoshop" name="Adobe Photoshop" />
        </div>
      ) : null}
      {topic === "code" ? (
        <div className="skill-tab-list one-item">
          <Image source="vscode" name="VSCode" />
        </div>
      ) : null}
    </motion.div>
  );
}
