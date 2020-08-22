import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {
    render() {
        return (
            <MDBFooter color="bg-dark" className="font-small mt-4">
            
            <div className="footer-copyright py-3">
              <MDBContainer >
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Najam Uddin </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        )
    }
}
