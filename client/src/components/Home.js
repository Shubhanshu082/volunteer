import React, {useState, useEffect} from 'react'
import EventTile from './EventTile'
import TabHeader from './TabHeader'

const Home = ({user, setShowModal}) => {

  const [activeTab, setActiveTab] = useState('All');
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const getEvents = async() => {
       const data = await fetch("http://localhost:3000/api/event/fetch").then((response)=>response.json());
       console.log("data",data);
       setUpcomingEvents(data.upcoming);
       setOngoingEvents(data.ongoing);
       setPastEvents(data.past);
     }
    getEvents();  
     }, []
     )

  return (
    <>
    <div className='bg-white flex justify-center items-center'>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
    <div className='container mx-auto mt-8 w-[80%]'>
      {(activeTab==='All' || activeTab==='Upcoming') && <div><div className='flex space-between grow text-3xl mb-10'>
        <div className='text-slate-800 font-bold'>
          Upcoming
        </div>
        <div className=' grow h-0.5 bg-slate-300 my-auto ml-5'>

        </div>
      </div>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      {upcomingEvents?.map((event) => <div className=''><EventTile user={user} setShowModal={setShowModal} {...event} key={event.id}/></div>)}
    </div>
    </div>
    }

      {(activeTab==='All' || activeTab==='Ongoing') && <div><div className='flex space-between grow text-3xl my-10'>
        <div className='text-slate-800 font-bold'>
          Ongoing
        </div>
        <div className=' grow h-0.5 bg-slate-300 my-auto ml-5'>

        </div>
      </div>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      {ongoingEvents?.map((event) => <div className=''><EventTile user={user} setShowModal={setShowModal} {...event} key={event.id}/></div>)}
    </div>
    </div>
    }

      {(activeTab==='All' || activeTab==='Past') && <div><div className='flex space-between grow text-3xl my-10'>
        <div className='text-slate-800 font-bold'>
          Past
        </div>
        <div className=' grow h-0.5 bg-slate-300 my-auto ml-5'>

        </div>
      </div>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      {pastEvents?.map((event) => <div className=''><EventTile user={user} setShowModal={setShowModal} {...event} key={event.id}/></div>)}
    </div>
    </div>
    }
     </div>
    </>
  )
}

export default Home;