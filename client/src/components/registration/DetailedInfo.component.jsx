import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export class DetailedInfo extends Component {
    continue = e =>
    {
         e.preventDefault();
         this.props.nextStep();
    }
    back = e =>
    {
         e.preventDefault();
         this.props.prevStep();
    }

    render() {
        const {values,resetFields,handleChange} = this.props
        return (
            <div>
                
                 <MDBRow>
                     <MDBCol>
                        <MDBInput 
                                label="Address" 
                                size='sm' 
                                type='text' 
                                icon='address-book' 
                                onChange={handleChange('address')}
                                value={values.address}
                            />
                     </MDBCol>
                 </MDBRow>
                 <MDBRow>
                     <MDBCol>
                        <MDBInput 
                                label=" Address 2 (Optional)" 
                                size='sm' 
                                type='text' 
                                icon='address-book' 
                                onChange={handleChange('address2')}
                                value={values.address2}
                            />
                     </MDBCol>
                 </MDBRow>

                 <MDBRow>
                     <MDBCol>
                        <MDBInput 
                                label="Country" 
                                size='sm' 
                                type='text' 
                                icon='flag' 
                                onChange={handleChange('country')}
                                value={values.country}
                                
                            />
                     </MDBCol>
                     <MDBCol>
                        <MDBInput 
                                label="State" 
                                size='sm' 
                                type='text' 
                                icon='map-marked-alt' 
                                onChange={handleChange('region')}
                                value={values.region}
                            />
                     </MDBCol>
                 </MDBRow>

                 <MDBRow>
                     <MDBCol>
                        <MDBInput 
                                label="City" 
                                size='sm' 
                                type='text' 
                                icon='city' 
                                onChange={handleChange('city')}
                                value={values.city}
                            />
                     </MDBCol>
                     <MDBCol>
                        <MDBInput 
                                label="Zip Code" 
                                size='sm' 
                                type='text' 
                                icon='money-check' 
                                onChange={handleChange('zip')}
                                value={values.zip}
                            />
                     </MDBCol>
                 </MDBRow>

                <div style={{height:'5.5px'}}/>
                <MDBRow>
                    <MDBCol>
                    <MDBBtn
                         color='link'
                         onClick={this.continue.bind(this)}
                         style={{paddingRight:'0px',float:'right'}}>Skip for now</MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol>
                        <MDBBtn
                         color='link'
                         onClick={()=>resetFields({...values})}
                         style={{paddingLeft:'0px'}}>Reset All</MDBBtn>
                </MDBCol>
                <MDBCol>
                    <MDBBtn  
                    size='sm' 
                    onClick={this.continue.bind(this)}
                    style={{float:'right',borderRadius:'50px',fontSize:'14px'}}>Continue</MDBBtn>
                    <MDBBtn  
                    size='sm' 
                    onClick={this.back.bind(this)}
                    style={{float:'right',borderRadius:'50px',fontSize:'14px'}}>Back</MDBBtn>
                </MDBCol>
                

                  
                </MDBRow>
                 
            </div>
        );
    }
}

export default DetailedInfo;
