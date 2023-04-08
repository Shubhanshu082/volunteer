import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 600;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-bottom: 30px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  background-color: #3483db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
`;

export const Create = () => {

    const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
        event.preventDefault();
        axios.post("http://localhost:3000/api/event/create",eventData )
        .then(res=>console.log(res))
    };

    const [eventData, setEventData] = useState({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        location: "",
    });

  return (
    <CreateContainer>
      <Title>Create Event</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Event Name" value={eventData.name} onChange={(e) => setEventData({...eventData, name: e.target.value})}/>
        <TextArea type="text" placeholder="Description (max 300 characters)" maxLength="300" value={eventData.description} onChange={(e) => setEventData({...eventData, description: e.target.value})}/>
        <FormInput type="date" placeholder="Start date" value={eventData.startDate} onChange={(e) => setEventData({...eventData, startDate: e.target.value})}/>
        <FormInput type="date" placeholder="End date" value={eventData.endDate} onChange={(e) => setEventData({...eventData, endDate: e.target.value})}/>
        <FormInput type="text" placeholder="Location" value={eventData.location} onChange={(e) => setEventData({...eventData, location: e.target.value})}/>
        <SubmitButton type="submit">
            Create Event
        </SubmitButton>
      </FormContainer>
    </CreateContainer>
  )
}

export default Create;
