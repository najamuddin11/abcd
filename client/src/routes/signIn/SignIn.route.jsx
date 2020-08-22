import React, { Component } from 'react';
import LogIn from '../../components/signIn/LogIn.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/user/dashboard')
        }
        if(this.props.auth.isOrganizer){
            this.props.history.push('/organizer/dashboard')
        }
    }

    render() {
        return (
            <div>
            <LogIn/>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(SignIn));