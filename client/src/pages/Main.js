import React, {useState} from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from '../components/Header';
import Upcoming from '../components/Upcoming'
import Create from '../components/Create'
import Home from '../components/Home'
import Signin from '../components/Signin';

export const Main = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      {showModal && <Signin showModal={showModal} setShowModal={setShowModal}/>}
    </>
  )
}

export default Main;