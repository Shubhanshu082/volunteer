import React, {useState, useEffect} from 'react'
import EventTile from './EventTile'

const Upcoming = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEvents = async() => {
       const data = await fetch("http://localhost:3000/api/event/fetch").then((response)=>response.json());
       console.log("data",data);
       setEvents(data);
       console.log("event",events);
     }
    getEvents();  
     }, []
     )

  return (
    <>
    {/* <div className='upcoming-container'>
        <div className='upcoming-line'></div>
        <div className='mx-2 text-gray-500 font-bold'>Upcoming</div>
        <div className='upcoming-line'></div>
      </div> */}
    <div className='container mx-auto mt-8 w-[80%]'>
      <div className='flex space-between grow text-3xl mb-10'>
        <div className='text-slate-800 font-bold'>
          Upcoming
        </div>
        <div className=' grow h-0.5 bg-slate-300 my-auto ml-5'>

        </div>
      </div>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      {events?.map((event) => <div className=''><EventTile {...event} key={event.id}/></div>)}
    </div>
     </div>
    </>
  )
}

export default Upcoming;