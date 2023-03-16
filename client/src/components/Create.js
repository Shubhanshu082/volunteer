import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

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
        date: "",
        location: "",
    });

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="Clean Greater Noida!" value={eventData.name} onChange={(e) => setEventData({...eventData, name: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEventDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description for the event" value={eventData.description} onChange={(e) => setEventData({...eventData, description: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEventDescription">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date of the event" value={eventData.date} onChange={(e) => setEventData({...eventData, date: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEventDescription">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location of the event" value={eventData.location} onChange={(e) => setEventData({...eventData, location: e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}

export default Create;