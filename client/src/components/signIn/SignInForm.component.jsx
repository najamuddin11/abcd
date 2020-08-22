import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBLink, MDBRow, MDBCol, MDBFormInline } from 'mdbreact';
import classnames from 'classnames'
import ValidationError from '../../common/ValidationError.component';

export class SignInForm extends Component {
    render() {
        const {handleChange,values,errors,onSubmit,onRadioClick} = this.props
        return (
            <div>
                <h2 align='center'>Sign In</h2>
                <br/>
                <form>

                <div style={{paddingLeft:'55px'}}>
                                        <MDBFormInline>
                    <MDBInput
                    gap
                    onClick={onRadioClick(1)}
                    checked={values.radio === 1 ? true : false}
                    label='User'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    />
                    <MDBInput
                    gap
                    onClick={onRadioClick(2)}
                    checked={values.radio === 2 ? true : false}
                    label='Organizer'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    />
                    
                </MDBFormInline>
                </div>
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            type='text' 
                            size='sm' 
                            label="Email" 
                            icon="user" 
                            onChange={handleChange('email')}
                            value={values.email}
                            className = {classnames({'is-invalid':errors.email})}/>
                            
                            {errors.email && (<ValidationError className='pl-4 ml-2' error={errors.email}/>)}
                    </MDBCol>
                </MDBRow>    
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            type='password' 
                            size='sm' 
                            label="Password" 
                            icon="lock" 
                            onChange={handleChange('password')}
                            value={values.password}
                            className = {classnames({'is-invalid':errors.password})}/>
                            {errors.password && (<ValidationError className='pl-4 ml-2' error={errors.password}/>)}
                    </MDBCol>
                </MDBRow>
                <div style={{marginTop:'20px'}}>
                    <MDBBtn type='submit' onClick={onSubmit}style={{width:'100%'}}>Sign In</MDBBtn>
                    
                   
                    <MDBLink to='#' style={{textAlign:'center'}}>Forgot Password?</MDBLink>
                  
     
                </div>
                </form>
                
                <div style={{marginTop:'15px'}}>
                <span>Not A Member?</span><MDBLink to='/register/user' style={{display:'inline'}}>Sign up now</MDBLink>
                </div>
            </div>
        );
    }
}

export default SignInForm;
