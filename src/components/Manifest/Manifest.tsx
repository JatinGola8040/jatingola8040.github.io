import React, { useContext } from 'react';
import './Manifest.scss';
import { motion } from "framer-motion";
import { store } from '../../App';

export default function Manifest () {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`container-manifest ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
        <motion.a className="manifest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
            <h1>{state.language === "english" ? "Ambitionierter Entwickler mit Vorliebe für beeindruckende User-Experiences" : "Advancing machine learning, pushing AI boundaries, and driving tech innovation."}</h1>
        </motion.a>
    </div>
  );
}
