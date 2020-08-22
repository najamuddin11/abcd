import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export class PaymentInfo extends Component {

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
        const {values,handleChange,resetFields} = this.props
        return (
            <div>
               
                <MDBRow>
                    <MDBCol align='center'>
                    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png" alt="Buy now with PayPal" />
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol>
                    <MDBInput 
                            label="Name On Card" 
                            size='sm' 
                            type='text' 
                            icon='user' 
                            onChange={handleChange('nameOnCard')}
                            value={values.nameOnCard}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <MDBInput 
                            label="Card Number" 
                            size='sm' 
                            type='text' 
                            icon='credit-card' 
                            onChange={handleChange('cardNumber')}
                            value={values.cardNumber}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='6'>
                    <MDBInput 
                            label='Expiration Date' 
                            size='sm' 
                            type='month' 
                            icon='calendar-alt' 
                            onChange={handleChange('expirationDate')}
                            value={values.expirationDate}
                        />
                    </MDBCol>
                    <MDBCol md='6'>
                    <MDBInput 
                            label='CVV' 
                            size='sm' 
                            type='number' 
                            icon='credit-card' 
                            onChange={handleChange('cvvOnCard')}
                            value={values.cvvOnCard}
                        />
                    </MDBCol>
                </MDBRow>
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

export default PaymentInfo;
