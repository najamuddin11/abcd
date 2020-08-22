import React, { Component } from 'react';
import './Track.styles.scss'
import { MDBCol, MDBRow, MDBInputGroup, MDBBtn } from 'mdbreact';
export class Track extends Component {
    render() {
        return (
            <div className='track-preview'>
                
                <hr/>
                <div className='title'>Track your trip</div>
                <MDBRow>
                <MDBCol md='8'>
                            <div style={{height:'500px'}}>
                            <div className="embed-responsive embed-responsive-16by9">
  <iframe title="embedsPage" className="embed-responsive-item" src="https://maps.google.com/maps?q=islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
    allowfullscreen></iframe>
</div>                      </div>
                    </MDBCol>
                    <MDBCol md='4'>
                        <div style={{marginTop:'190px'}}>
                        <h4>Enter the tracking Id</h4>
                        <MDBInputGroup
                                hint="Track the trip..."
                                containerClassName="mb-3"
                                append={
                                    <MDBBtn  className="m-0 px-3 py-2 z-depth-0">
                                    BUTTON
                                    </MDBBtn>
                                }
                                />
                        </div>
                    </MDBCol>

                   
                </MDBRow>

            </div>
        );
    }
}

export default Track;
