import React from 'react'
import { SupabaseClientURL } from '../App';
export default function LoginWithPasswordEmail() {
    const {supabase}=React.useContext(SupabaseClientURL);  
  
  const [inputData,setInputData]=React.useState({
    email:'',
    password:''
  });

  const handleOnChange=(e)=>{
       const {name,value}=e.target;

       setInputData(prev=>({
        ...prev,
        [name]:value 
       }))
  }

  const handleOnSubmit=async(e)=>{

         e.preventDefault();
        
let { data } = await supabase.auth.signInWithPassword({
  email: inputData.email,
  password:inputData.password
})
   console.log(data)
  }
  return (
    <div className='flex flex-col items-center justify-center  sign--up--tag' >
    <title className="title--tag">Login</title>
    <div className="mt-[20vh] flex flex-col items-center justify-center rounded w-[50%] ">
        <h1 className="title---tag---border pt-5 pb-5">Login</h1>

   <form className="w-[80%] "  onSubmit={handleOnSubmit}>
         
         <div className=" flex flex-col justify-center items-center input---tag--label">
         {/* <div className='p-4 label--tag '>

          <label htmlFor='email' className="label--tag" >Email : </label>
         </div> */}
          <input  placeholder="Please Enter Your Email Address"  className="px-10 py-7 input--tag" type="email" name="email" value={inputData.email||""} id="email" onChange={handleOnChange}/>
          
         </div>
          <br></br>

          <div className=" flex flex-col justify-center items-center input---tag--label ">
            {/* <div className='p-4 label--tag '>

          <label htmlFor="password" className="label--tag" > Password : 
          </label>
            </div> */}
          <input placeholder="Please Enter Your Password"   className="px-10 py-7 input--tag" id="password" type="password" name="password" value={inputData.password||""}  onChange={handleOnChange}/>
          </div>

          <br></br>
          <div className="pt-5 pb-5 flex flex-col justify-center items-center">

          <input className="w-[50%] text-white text-center pt-4 pb-4  btn--tag" type="submit" value="Submit"/>
          </div>
        </form>
   </div>

    </div>
  )
}
