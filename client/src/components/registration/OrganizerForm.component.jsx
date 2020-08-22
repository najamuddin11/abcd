import React, { Component } from 'react';
import BasicInfo from './BasicInfo.component';
import DetailedInfo from './DetailedInfo.component';
import PaymentInfo from './PaymentInfo.component';
import Confirmation from './Confirmation.component';
import PropTypes from 'prop-types'
import axios from 'axios';
import { connect } from 'react-redux';
import { registerOrganizer } from '../../actions/authActions'
import { withRouter } from 'react-router-dom';
import { MDBBtnGroup, MDBBtn } from 'mdbreact';
import classNames from 'classnames'
import './UserForm.styles.scss'

class OrganizerForm extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {   
            step:1,
            isOrganizer:true,
            isUser:false,
            username:'',
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            password:'',
            confirmPassword:'',
            address:'',
            address2:'',
            city:'',
            zip:'',
            country: '', 
            region: '',
            cardNumber:'',
            expirationDate:'',
            nameOnCard:'',
            cvvOnCard:'',
            
            errors:{} 

                       
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    openBasicTab = () =>
    {
        const {step} = this.state;
        this.setState({
            step:1
        })
        
    }
    openDetailedTab = () =>
    {
        const {step} = this.state;
        this.setState({
            step:2
        })
    }
    openPaymentTab = () =>
    {
        const {step} = this.state;
        this.setState({
            step:3
        })
    }
    openFinishTab = () =>
    {
        const {step} = this.state;
        this.setState({
            step:4
        })
    }

    nextStep = () =>
    {
       const {step} = this.state;
       this.setState({
           step:step+1
       })       
     
        
    }

    prevStep = () =>{
        const {step} = this.state
        this.setState({
            step:step-1
        })    
        
      
    }
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    
    resetFields = (...values) => {
        const temp =  Object.getOwnPropertyNames({...values[0]})
        temp.map(t=>this.setState({[t]:''}))
     
    
    }
    onSubmit = e => {
        e.preventDefault();
        const newOrganizer = {
            isOrganizer:this.state.isOrganizer,
            isUser:this.state.isUser,
            username:this.state.username,
            firstName:this.state.firstName, 
            lastName:this.state.lastName,
            phone:this.state.phone,
            email:this.state.email, 
            password:this.state.password, 
            confirmPassword:this.state.confirmPassword,
            address:this.state.address, 
            address2:this.state.address2, 
            city:this.state.city, 
            zip:this.state.zip, 
            country:this.state.country, 
            region:this.state.region,
            cardNumber:this.state.cardNumber, 
            expirationDate:this.state.expirationDate, 
            nameOnCard:this.state.nameOnCard, 
            cvvOnCard:this.state.cvvOnCard,
            
            errors:{}
            
        }

       
        this.props.registerOrganizer(
            newOrganizer, 
            this.props.history, 
            ()=>{
            Object.getOwnPropertyNames(this.state.errors).length>0 && this.openBasicTab()
            }
        )
        


        // axios.post('/api/users/register',newUser)
        //     .then(res => console.log(res.data))
        //     .catch(err => this.setState({errors: err.response.data}))

    }

    renderSwitch = (step,basicInfo,errors,detailedInfo,paymentInfo) =>{
        switch(step)
        {
            case 1:
                return (
                    <BasicInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values = {basicInfo}
                    resetFields={this.resetFields}
                    errors = {errors}
                    />
                );
            
            case 2:
                return (
                    <DetailedInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values = {detailedInfo}
                    resetFields={this.resetFields}
                    />
                )
            case 3:
                return (
                    <PaymentInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values = {paymentInfo}
                    resetFields={this.resetFields}
                    />
                )
            case 4:
                return (
                    <Confirmation
                    prevStep={this.prevStep}
                    onSubmit={this.onSubmit}
                    openBasicTab={this.openBasicTab}
                    errors ={errors}
                    />
                )
                 
        }
    }

    render() {
        const {errors} = this.state;
        const {step, username, firstName, lastName, phone, email, password, confirmPassword,
            address, address2, city, zip, country, region,
            cardNumber, expirationDate, nameOnCard, cvvOnCard} = this.state

        const basicInfo = {username, firstName, lastName, phone, email, password, confirmPassword}
        const detailedInfo = {address, address2, city, zip, country, region}
        const paymentInfo = {cardNumber, expirationDate, nameOnCard, cvvOnCard}
        
        return(
            <div className='mycontainer'>
                <div style={{textAlign:'center', marginBottom:'25px'}}>
                <MDBBtnGroup >
                    <MDBBtn color='opaque'  onClick={this.openBasicTab} className={step==1 && ['btnIsActive','active']}>Basic Info</MDBBtn>
                    <MDBBtn color='opaque'  onClick={this.openDetailedTab} className={step==2 && ['btnIsActive','active']}>Detailed Info</MDBBtn>
                    <MDBBtn color='opaque'  onClick={this.openPaymentTab} className={step==3 && ['btnIsActive','active']}>Payment Info</MDBBtn>
                    <MDBBtn color='opaque'  onClick={this.openFinishTab} className={step==4 && ['btnIsActive','active']}>Finish</MDBBtn>
                </MDBBtnGroup>
                </div>
                {this.renderSwitch(step,basicInfo,errors,detailedInfo,paymentInfo)}
                {console.log(step)}
            </div>
        )
        
        
    }
}

OrganizerForm.propTypes = {
    registerOrganizer: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps,{registerOrganizer})(withRouter(OrganizerForm));