import React, { Component } from 'react';
import tripsData from './TripsData.data'
import TripCard from './TripCard.component';
import { MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import './Trips.styles.scss'
export class Trips extends Component {
    constructor(props)
    {
        super(props);
        this.state={ 
            tripsData:tripsData 
        }
    }
    render() {
        const{tripsData} = this.state;
        return (
            <div className='collection-preview'>
            <div className='title'>Featured Trips</div> 
            <div className='preview'>
                
              
                
                {tripsData.map(({id,...tripData})=> <TripCard key={id} {...tripData}/> )}
               
          
            </div>
            </div>
        );
    }
}

export default Trips;
