import React, { Component } from 'react';
import SignInForm from './SignInForm.component';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser, loginOrganizer} from '../../actions/authActions' 
import LogIn from './LogIn.component';
import { withRouter } from 'react-router-dom';


export class SignInAuth extends Component {

    constructor(props)
    {
        super(props)
        this.state= {
            email:'',
            password:'',
            errors:{},
            radio: ''
        }
    }
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    onSubmit = e =>{
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        if(this.state.radio==1){
            this.props.loginUser(userData,this.props.history)
        }
        if(this.state.radio==2){
            this.props.loginOrganizer(userData,this.props.history)
        }
    }
    onRadioClick = e => () => {
        this.setState({
          radio: e
        }, ()=> console.log(this.state.radio));
      };
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated && this.state.radio==1){
            this.props.history.push('/user/dashboard')
        }
        if(nextProps.auth.isAuthenticated && this.state.radio==2){
            this.props.history.push('/organizer/dashboard')
        }
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }
    render() {

        const {errors} = this.state 
        
        return(

            <div>
                <SignInForm
                handleChange={this.handleChange}
                values ={this.state}
                errors = {errors}
                onSubmit = {this.onSubmit}
                onRadioClick = {this.onRadioClick}
                />
            </div>
        )
    }
}

SignInAuth.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateProps, {loginUser, loginOrganizer})(withRouter(SignInAuth));
