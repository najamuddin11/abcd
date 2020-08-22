import React, { Component } from 'react';

import './SearchBar.styles.scss'
import { MDBInputGroup, MDBBtn } from 'mdbreact';
export class SearchBar extends Component {
    render() {
        return (
            <MDBInputGroup
            
          hint="Find The Trip..."
          containerClassName="mb-3"
          
          append={
            <MDBBtn color='info' className="m-0 px-3 py-2 z-depth-0">
              Search
            </MDBBtn>
          }
        />
              
        );
    }
}

export default SearchBar;
