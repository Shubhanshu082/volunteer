import React from 'react'
import '../css/EventTile.css'
import LinkIcon from '../icons/icons8-link-64.png'
import Button from 'react-bootstrap/Button'

const EventTile = (props) => {
  const date = new Date(props.date).toLocaleDateString();
  return (
    <div className='event-tile'>
      {/* <h1 className='text-lg font-bold mb-2'>{props.name}</h1>
      <p className='text-gray-500 text-sm'>{props.date}</p>
      <p className='text-gray-500 text-sm mb-4'>{props.location}</p>
      <p className='text-gray-700 text-sm overflow-ellipsis overflow-hidden'>{props.description}</p> */}
      <div className='flex justify-between px-4 pt-4 pb-2'>
          <div className='flex flex-col'>
            <div className='title'>
              {props.name}
            </div>
            <div className='text-gray-400 font-semibold'>Event</div>
          </div>
          <div className='icon'>
              <img src={LinkIcon} className='sepia'/>
          </div>
      </div>
      <div className='div2'>
          <div className='text-gray-500 font-bold text-lg lmao mb-1'>Description</div>
          <div className='text-gray-500 font-thin text-sm'>{props.description}</div>
      </div>
      <div className='flex justify-between px-4 py-1'>
          <div className='flex flex-col'>
              <div className='tags'>
                  {date}
              </div>
              <div className='tags'>
                  {props.location}
              </div>
          </div>
          <div></div>
          <div className='my-auto'>
          <div className='registration-button'>Register</div>
          </div>
      </div>
    </div>
  )
}

export default EventTile;