import React from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/Main'
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route exact path ="/*" element={<Main/>}/>
      {/* <Route  path ="/signin" element = {<Signin/>}/> */}
    </Routes>
    </>
  );
}

export default App;
