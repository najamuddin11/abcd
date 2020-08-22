import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard } from 'mdbreact';
import BasicInfo from './BasicInfo.component';

export class Confirmation extends Component {
    back = e =>
    {
         e.preventDefault();
         this.props.prevStep();
    }
    
    render() {
        const recaptchaRef = React.createRef();
        const {onSubmit} = this.props
        return (
            <div>
               <br/>
                <div >
                <h5>Thankyou for choosing our website</h5>
                <br/>
                <p>Your email has been created</p>
                <p>Please confirm your email!</p>
                <br/>
                </div>
                <MDBRow>
                    <MDBCol>
                        <Form.Check
                            custom
                            type='checkbox'
                            id={`checkbox1`}
                            label={`I accept the terms and conditions`}
                        />
                    </MDBCol>
                   
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="http://localhost:3000/"
                            />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn 
                        type='submit'
                        onClick={onSubmit}>Submit</MDBBtn>
                    </MDBCol>
                    
                </MDBRow>
                <div style={{height:'35px'}}/>
                <MDBRow>
                    <MDBCol>
                    <MDBBtn  
                    size='sm'
                    onClick={this.back.bind(this)}
                    style={{borderRadius:'50px',fontSize:'14px'}}>Back</MDBBtn>
                    </MDBCol>
                </MDBRow>
                
                
            </div>
        );
    }
}

export default Confirmation;
