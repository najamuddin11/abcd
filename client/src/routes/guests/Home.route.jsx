import React, { Component } from 'react';
import Header from '../../components/homepage/header/Header.component';
import { MDBView, MDBMask, MDBContainer } from 'mdbreact';
import MainCarousel from '../../components/homepage/body/MainCarousel.component';
import InnerCarousel from '../../components/homepage/body/InnerCarousel.component';
import Trips from '../../components/homepage/trips/Trips.component';
import CustomiseTrip from '../../components/homepage/trips/CustomiseTrip.component';
import Track from '../../components/homepage/track/Track.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/homepage/footer/Footer.component';

export class Home extends Component {

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
            <div className='body'>
                <Header/>
                    <InnerCarousel/>
                    <MainCarousel/>
                    <div className="shadow-box-example z-depth-1" style={{height:'62px'}}/>

                    <div style={{marginTop:'50px'}}>
                    <Trips/>
                    <CustomiseTrip/>
                    <Track/>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(Home));;
