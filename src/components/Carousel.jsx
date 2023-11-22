import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }
    
      decrement = () => {
        if(this.state.count<2) {
          this.setState({ count: this.state.count+1 });
        };
      }
        
    
      increment = () => {
        if(this.state.count>0) {
          this.setState({ count: this.state.count-1 })
        }
      };

      render() {
        return(
            <div className="container">
                <div className="sidebtn" onClick={this.increment}><ArrowBackIosIcon/></div>
                <div className="imgimg">
                <img src={images[this.state.count].img} alt="img"/>

                <h1 className="texter">{images[this.state.count].title}</h1>
                <h3 className="texter">{images[this.state.count].subtitle}</h3>
                </div>
                <div className="sidebtn" onClick={this.decrement}><ArrowForwardIosIcon/></div>
            </div>
        )
      }
}

export default Carousel;