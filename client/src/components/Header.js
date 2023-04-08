import React from 'react'
import {
    Link,
    useNavigate,
  } from "react-router-dom";  
  import Button from 'react-bootstrap/Button';
 
//   const Button = styled.button`
//   background-color: rgb(192 38 211);
//   color: white;
//   font-size: 16px;
//   font-weight:500;
//   padding: 10px 16px;
//   border-radius: 5px;
//   cursor: pointer;

//   &:empty {
//     color: black;
//     background-color: white;
//   }
// `;

export const Header = ({showModal, setShowModal, user}) => {

  let navigate = useNavigate();
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <div className='bg-white'>
    <div className='font-semibold text-base text-slate-400 items-center mx-[5%]'>
    <div className='items-center w-[100%] inline-flex space-between'>
      <ul className='inline-flex grow items-center'>
        <li className='mr-[7%] my-3'>
          <Link to="/" className='font-bold text-green-500 text-4xl font-alacarte'>V</Link>
        </li>
        {/* <li className='mr-[2%] my-6'>
          <Link to="/upcoming">Upcoming</Link>
        </li> */}
        <li className='mx-[2%] my-6'>
          <div className='cursor-pointer hover:text-zinc-500' onClick={(e) => {
            if(user && user._id){
              navigate("/create");
            }
            else{
              setShowModal(true);
            }
          }}>Create Event</div>
        </li>
      </ul>
      <ul className='inline-flex grow flex-row-reverse items-center'>
          <li className='ml-[2%]'>
          {
            user && user._id ? user.userName:<Button variant="outline-success" onClick={handleClick}>Sign in</Button>
          }
          </li>
      </ul>

    </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Header;