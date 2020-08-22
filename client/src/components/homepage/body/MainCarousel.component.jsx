import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBCarouselCaption } from 'mdbreact';
import './MainCarousel.styles.scss'

const MainCarousel = () => {
    return (
        <div>
       
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        fade
        interval={2000}
        
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="C-item">
            
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic7.jpg")}
                alt="First slide"
              />
              <MDBMask overlay="black-light"/>
             
            </MDBView>

          <MDBCarouselCaption className='carousel-caption'>
            <h1 className="h1-responsive">Islamabad</h1>
          </MDBCarouselCaption>
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className="C-item">
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic4.jpg")}
                alt="Second slide"
              />
            </MDBView>
            <MDBMask overlay="black-light"/>
            <MDBCarouselCaption className='carousel-caption'>
            <h1 className="h1-responsive">Hunza</h1>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="C-item">
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic11.jpg")}
                alt="Third slide"
              />
            </MDBView>
            <MDBMask overlay="black-light"/>
            <MDBCarouselCaption className='carousel-caption'>
            <h1 className="h1-responsive">Kashmir</h1>
          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </div>
    );
}

export default MainCarousel;
