import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.css"
const Slide = ({children , slidesToShow,arrowsScroll}) => {
  return (
    <div>
      <div className="Slide">
        <div className="container">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;
