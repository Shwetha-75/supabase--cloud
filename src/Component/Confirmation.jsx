import React from 'react'
import {useNavigate} from "react-router-dom";

export default function Confirmation() {

      const [code,setCode]=React.useState("");
      const [email,setEmail]=React.useState("");

      const navigate=useNavigate(); 
      
      React.useEffect(()=>{
        const storageEmail=JSON.parse(localStorage.getItem("inputData"));
        console.log(storageEmail) 
        if (storageEmail){
             setEmail(storageEmail.email);
        }
        else{
            navigate("/")
        }
      },[navigate])
      
  return (
    <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-white text-[2rem] font-bold">Enter OTP</h1>
            <p className="text-gray-300">OTP sent to: {email}</p>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter OTP"
                className="border p-2 rounded text-black"
            />
            <button className="mt-4 p-2 bg-green-500 text-white rounded">
                Verify
            </button>
        </div>
  )
}
