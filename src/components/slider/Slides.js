import React from "react";
import "./Slider.css";


const slidesInfo = [
  {
    src:"https://cdn.pixabay.com/photo/2019/10/30/17/38/measuring-tape-4590162__340.jpg",
    alt:"obesidad",
    desc: "Obesidad",
    
  },
  {
    src:"https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg",
    alt: "TCA",
    desc: "TCA",
  },
  {
    src:"https://cdn.pixabay.com/photo/2017/12/03/12/46/diabetes-2994808_960_720.jpg",
    alt: "Diabetes",
    desc: "Diabetes",
  },
  {
    src:"https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_960_720.jpg",
    alt: "Ninos",
    desc: "Niños",
  },
];

const Slides = slidesInfo.map((Slide) => (
  <div className="slide-container">
    <img src={Slide.src} alt={Slide.alt} />
    <div className="slide-desc">
      <span>{Slide.desc}</span>
    </div>
  </div>
  
));

export default Slides;
