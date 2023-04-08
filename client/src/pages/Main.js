import React, {useState} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from '../components/Header';
import Create from '../components/Create'
import Home from '../components/Home'
import Signin from '../components/Signin';
import EventPage from '../components/EventPage';

export const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [user,setLoginUser] = useState({

  })

  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} user={user}/>
      <Routes>
        <Route exact path="/" element={<Home user={user} setShowModal={setShowModal} />}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/event/:id" element={<EventPage user={user} setShowModal={setShowModal} />} />
      </Routes>
      {showModal && <Signin showModal={showModal} setShowModal={setShowModal} setLoginUser={setLoginUser}/>}
    </>
  )
}

export default Main;