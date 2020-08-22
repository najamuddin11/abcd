import React, { Component } from 'react';
import './RegisterUser.styles.scss'
import OrganizerForm from './OrganizerForm.component';

export class RegisterOrganizer extends Component {
   render()
    {
        return(
            <div className='bg'>
                
              <div className='opacityCover'>
              <div className='formContainer'>

                            <OrganizerForm/>
                        </div>    
              </div>
             
            </div>
        )
    }
}

export default RegisterOrganizer;
