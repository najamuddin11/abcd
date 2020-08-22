import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBProgress, MDBLink, MDBBtnGroup } from 'mdbreact';
import classnames from 'classnames'
import ValidationError from '../../common/ValidationError.component'
export class BasicInfo extends Component {

    continue = e =>
    {
         e.preventDefault();
         this.props.nextStep();
    }
    render() {
        
        const {values, handleChange,resetFields, errors} = this.props

        return (
            <div id='basic-info'>
               
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            label="First Name" 
                            size='sm' 
                            type='text' 
                            icon='user' 
                            onChange={handleChange('firstName')}
                            value={values.firstName}
                            className = {classnames({'is-invalid':errors.firstName})}
                        />
                       {errors.firstName && (<ValidationError className='pl-4 ml-2' error={errors.firstName}/>)}
                       
                    </MDBCol>
                <MDBCol>
                    <MDBInput 
                        label="Last Name" 
                        size='sm' 
                        type='text' 
                        icon='user'
                        onChange={handleChange('lastName')}
                        value={values.lastName}
                        className = {classnames({'is-invalid':errors.lastName})}
                     />
                         {errors.lastName && (<ValidationError className='pl-4 ml-2' error={errors.lastName}/>)}
                </MDBCol>
                
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            label="Username" 
                            size='sm' 
                            type='text' 
                            icon='user' 
                            onChange={handleChange('username')}
                            value={values.username}
                            className = {classnames({'is-invalid':errors.username})}
                            
                        />
                            {errors.username && (<ValidationError className='pl-4 ml-2' error={errors.username}/>)}
                    </MDBCol>
                <MDBCol>
                    <MDBInput 
                        label="Phone" 
                        size='sm' 
                        type='tel' 
                        icon='phone-alt'
                        onChange={handleChange('phone')}
                        value={values.phone}
                        className = {classnames({'is-invalid':errors.phone})}
                    />
                        {errors.phone && (<ValidationError className='pl-4 ml-2' error={errors.phone}/>)}
                </MDBCol>
                
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            label="Email" 
                            size='sm' 
                            type='email' 
                            icon='envelope'
                            onChange={handleChange('email')}
                            value={values.email}
                            className = {classnames({'is-invalid':errors.email})}
                        />
                            {errors.email && (<ValidationError className='pl-4 ml-2' error={errors.email}/>)}
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput 
                            label="Passowrd" 
                            size='sm' 
                            type='password' 
                            icon='key' 
                            onChange={handleChange('password')}
                            value={values.password}
                            className = {classnames({'is-invalid':errors.password})}
                        />
                            {errors.password && (<ValidationError className='pl-4 ml-2' error={errors.password}/>)}
                    </MDBCol>
                <MDBCol>
                    <MDBInput 
                        label="Confirm Password" 
                        size='sm' 
                        type='password' 
                        icon='key'
                        onChange={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                        className = {classnames({'is-invalid':errors.confirmPassword})}
                    />
                        {errors.confirmPassword && (<ValidationError className='pl-4 ml-2' error={errors.confirmPassword}/>)}
            
                </MDBCol>
                
                </MDBRow>
                <br/>
                
                <div style={{height:'39.5px'}}/>
                    
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
                </MDBCol>

                  
                </MDBRow>
            </div>
        );
    }
}

export default BasicInfo;
