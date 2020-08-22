import React, { Component } from 'react';
import './CustomiseTrip.styles.scss'
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';

export class CustomiseTrip extends Component {
    render() {
        return (
            <div className="customise-trip">
                 <MDBRow>
                     <MDBCol lg='5' md='12'>
                     <div className='title'>Create your own trip</div>
               
                        <div className='list-title'>
                        <MDBIcon icon="check-square" />{` Service We Provide`}
                        </div>
                           <ul className='list'>
                               
                                <li><MDBIcon far icon="check-square" /> Tranportaion</li>
                                <li><MDBIcon far icon="check-square" /> Car Rental</li>
                                <li><MDBIcon far icon="check-square" /> Hotels of your choice</li>
                                <li><MDBIcon far icon="check-square" /> Tents for Camping</li>
                                <li><MDBIcon far icon="check-square" /> Breakfast, Launch, Dinner</li>
                                <li><MDBIcon far icon="check-square" /> Safe and Secure Trip</li>
                                <li><MDBIcon far icon="check-square" /> Professional Driver</li>
                                <li><MDBIcon far icon="check-square" /> Photoshoot</li>
                                <li><MDBIcon far icon="check-square" /> Information about weather and region</li>
                                <li><MDBIcon far icon="check-square" /> Plan your trip</li>
                            </ul>
                      
                     </MDBCol>
                     <MDBCol lg='7' md='12'>
                        <div className='image'>
                       <img src={require('../../../assets/trips/cutomiseTrip.jpg')} alt="" className="img-thumbnail"/>
                       </div>
                       <MDBRow end>
                    <MDBCol >
                        <div style={{textAlign:'center'}}>
                        <MDBBtn style={{width:'100%'}}>
                            Customise your trip
                        </MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
                     </MDBCol>
                </MDBRow> 
               
            </div>
        );
    }
}

export default CustomiseTrip;
