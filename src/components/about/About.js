import React from "react";
import "./About.css";
import mcarla from "../../media/foto-carla.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
        <p>
          Soy Licenciada en Nutrición Pediátrica. <br/> Actualmente trabajo en el hospital Humberto Notti en la provincia de Mendoza. <br/> Además presto servicios en Casa Hualpa en donde trabajamos con niños y adolescentes con problemas de TCA.
        </p>
      </div>
      <div className="about-img">
        <img 
          src={mcarla}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
