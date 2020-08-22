import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const TripCard = ({img,price,destination,duration,total,joined,date}) => {
    return (
      <MDBCol md='4'>
        <MDBCard className="mb-2">
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover zoom
            src={require(`../../../assets/trips/${img}.jpg`)}
            style={{height:'360px',width:'100%'}}
          />
          <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
          <MDBCardTitle>{`${duration} trip to ${destination}`}</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
            <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                <MDBIcon icon="clock" />
                  {` Date: ${date}`}
                </a>
              </li>
              
              
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                <MDBIcon icon="arrow-down" />
                  {` Joined: ${joined}`}
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#!' className='white-text'>
                <MDBIcon icon="question" />{` Vacant: ${total-joined}`}
                </a>
              </li>
              <li className='list-inline-item pr-2 white-text'>
              <MDBIcon icon="coins" /> {` Price: ${price} PKR`}
              </li>
            </ul>
          </div>
        </MDBCard>
        </MDBCol>
    );
}

export default TripCard;
