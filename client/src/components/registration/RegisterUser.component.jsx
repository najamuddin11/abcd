import React, { Component } from 'react';
import BasicInfo from './BasicInfo.component';
import UserForm from './UserForm.component';
import './RegisterUser.styles.scss'
import { MDBContainer } from 'mdbreact';
import { withRouter } from 'react-router-dom';

export class RegisterUser extends Component {
   render()
    {
        return(
            <div className='bg'>
                
              <div className='opacityCover'>
              <div className='formContainer'>

                            <UserForm/>
                        </div>    
              </div>
             
            </div>
        )
    }
}

export default withRouter(RegisterUser);
