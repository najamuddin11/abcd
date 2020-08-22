import React from 'react';
import './InnerCarousel.style.scss'
import SearchBar from './SearchBar.component';
import { MDBBtn, MDBRow, MDBCol, MDBBadge } from 'mdbreact';
import { Link } from 'react-router-dom';
const InnerCarousel = () => {
    return (
        <div className="inner-component">
                <div>
                    <Link to='sign-in' className='btn btn-default rounded' size='lg'>
                        Explore Now
                    </Link>
                </div>
        </div>
    );
}

export default InnerCarousel;
