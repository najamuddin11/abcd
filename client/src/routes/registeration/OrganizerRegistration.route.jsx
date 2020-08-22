import React, { Component } from 'react';
import RegisterOrganizer from '../../components/registration/RegisterOrganizer.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OrganizerRegistration extends Component {
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/user/dashboard')
        }
    }
    render() {
        return (
            <RegisterOrganizer/>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(OrganizerRegistration));