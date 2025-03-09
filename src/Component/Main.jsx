import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router"
export default function Main() {
  const Container=styled.div`
    width:100%;
    display:flex;
    flex-direction:columns;
    align-items:center;
    justify-content:center;
  `

  const NavBar=styled.div`
    max-width:90%;
   
    color:white;
  

  `
  const [status,setStatue]=React.useState('signup')

  const navigationBarStatus=(status)=>{
          
  }
  return (
    <Container className='nav--tag--container' >
       <NavBar className="w-[80%]  flex ...">
       <NavLink className={`nav--bar--tag text-center w-[20%] ${status==="signup"?"active-nav-tag nav--bar--tag-active ":""} rounded-t-xl ... p-8 grow-1 ...`} onClick={()=>{setStatue("signup")}}  to="/" end>SIGN UP </NavLink>
       <NavLink className={`nav--bar--tag text-center w-[20%] ${status==="email"?"active-nav-tag nav--bar--tag-active ":""} rounded-t-xl ... p-8 grow-1 ...`} onClick={()=>{setStatue("email")}}  to="/passwordEmail" end>LOGIN EMAIL & PASSWORD</NavLink>
       <NavLink className={`nav--bar--tag text-center w-[20%] ${status==="magic"?"active-nav-tag nav--bar--tag-active ":""} rounded-t-xl ... p-8 grow-1 ...`} onClick={()=>{setStatue("magic")}}  to="/magicLink" end>LOGIN WITH MAGIC LINK</NavLink>
       <NavLink className={`nav--bar--tag text-center w-[20%] ${status==="otp"?"active-nav-tag nav--bar--tag-active ":""} rounded-t-xl ... p-8 grow-1 ...`} onClick={()=>{setStatue("otp")}}  to="/loginviaotp" end>LOGIN WITH OTP</NavLink>
       </NavBar>
    </Container>
  )
}