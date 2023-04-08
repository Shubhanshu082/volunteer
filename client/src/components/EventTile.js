import React from 'react'
import '../css/EventTile.css'
import LinkIcon from '../icons/icons8-link-64.png'
import {useNavigate} from 'react-router-dom'

const EventTile = ({user, setShowModal ,...props}) => {
  let navigate = useNavigate();
  const handleRegister = async() =>{
    if(user && user._id){
      const res = await fetch(`http://localhost:3000/api/event/register/${props._id}`, {
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
        const registrationButton = document.getElementById(`registration-button-${props._id}`);
        registrationButton.innerText = 'Registered';
        registrationButton.classList.add('registered');
      }
    }
    else{
      setShowModal(true);
    }
  }
  const date1 = new Date(props.startDate).toLocaleDateString();
  const date2 = new Date(props.endDate).toLocaleDateString();
  return (
    <div className="event-tile"
    onClick={(e) => {
      // Prevent event page from opening up when user clicks on Register button
      if (e.target.className !== "registration-button") {
        navigate(`/event/${props._id}`);
      }
    }}>
    <div className='event-tile'>
      <div className='flex justify-between px-4 pt-4 pb-2'>
          <div className='flex flex-col'>
            <div className='title'>
              {props.name}
            </div>
            <div className='text-gray-400 font-semibold'>Event</div>
          </div>
          <div className='icon'>
              <img src={LinkIcon} className='sepia' alt='Link'/>
          </div>
      </div>
      <div className='div2'>
          <div className='text-gray-500 font-bold text-lg lmao mb-1'>Description</div>
          <div className='text-gray-500 font-thin text-sm'>{props.description}</div>
      </div>
      <div className='flex justify-between px-4 py-1'>
          <div className='flex flex-col'>
              <div className='tags'>
                  {date1} - {date2}
              </div>
              <div className='tags'>
                  {props.location}
              </div>
          </div>
          <div></div>
          <div className='my-auto'>
          <div className='registration-button' id={`registration-button-${props._id}`} onClick={() => {handleRegister()}}>Register</div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default EventTile;