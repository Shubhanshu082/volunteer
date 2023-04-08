import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import '../css/EventPage.css'

const StyledContainer = styled(Container)`
  background-color: #f7f7f7;
  padding: 40px;
  border-radius: 10px;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const StyledCol = styled(Col)`
  text-align: left;
`;

const StyledTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  margin-bottom: 20px;
`;

const StyledDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const StyledDate = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
`;

const StyledLocation = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 30px;
  border: none;
  background-color: #5c6ac4;
  padding: 15px 30px;
  &:hover {
    background-color: #4d59ad;
  }
  &:focus {
    box-shadow: none;
  }
`;

const EventPage = ({user,  setShowModal}) => {
  const eventId = useParams().id;
  const [event, setEvent] = useState(null);

  const handleRegister = async() =>{
    if(user && user._id){
      const res = await fetch(`http://localhost:3000/api/event/register/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user._id }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'User registered successfully' || data.message === 'User already registered for this event') {
        // Update the UI to show that the user has registered for the event
        console.log(data.message);
        const registrationButton = document.getElementById(`registration-button-page-${eventId}`);
        registrationButton.innerText = 'Registered';
        registrationButton.classList.add('registered');
      }
    }
    else{
        setShowModal(true);
    }
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`http://localhost:3000/api/event/fetch/${eventId}`);
      const eventData = await res.json();
      setEvent(eventData);
    };
    fetchEvent();
  }, [eventId]);

  return (
    <StyledContainer>
      {event ? (
        <>
          <StyledRow>
            <StyledCol>
              <StyledTitle>{event.name}</StyledTitle>
              <StyledDescription>{event.description}</StyledDescription>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol>
              <StyledDate>
                <strong>Start date:</strong> {new Date(event.startDate).toLocaleDateString()}
              </StyledDate>
              <StyledDate>
                <strong>End date:</strong> {new Date(event.endDate).toLocaleDateString()}
              </StyledDate>
              <StyledLocation>
                <strong>Location:</strong> {event.location}
              </StyledLocation>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol>
              <StyledButton id={`registration-button-page-${event._id}`} onClick={() => {handleRegister()}}>Register</StyledButton>
            </StyledCol>
          </StyledRow>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </StyledContainer>
  );
};

export default EventPage;
