import React from 'react';
import './LogIn.styles.scss';
import SignInAuth from './SignInAuth.component';

const LogIn = () => {

        return(
            <div className='login-bg'>
                
              <div className='log-in-opacityCover'>
              <div className='log-in-formContainer'>
                       <SignInAuth/>    
                </div>    
              </div>
             
            </div>
        )
}

export default LogIn;
