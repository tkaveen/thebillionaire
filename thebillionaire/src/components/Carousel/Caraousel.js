import Home from "../../components/images/home.jpg";
import S2 from "../../components/images/home2.jpg";
import T1 from "../../components/images/home3.jpg";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel infiniteLoop useKeyboardArrows autoPlay renderThumbs={() => {}}>
        <div>
          <img src={T1} style={{ height: "980px" }}></img>
        </div>
        <div>
          <img src={Home} style={{ height: "980px" }}></img>
        </div>
        <div>
          <img src={S2} style={{ height: "980px" }} />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
