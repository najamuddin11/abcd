import React, { Component } from 'react';
import RegisterUser from '../../components/registration/RegisterUser.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserRegistraion extends Component {

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }
    render() {
        return (
            <RegisterUser/>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(UserRegistraion));