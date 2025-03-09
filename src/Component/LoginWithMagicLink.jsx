import React from 'react'
import { SupabaseClientURL } from '../App';

export default function LoginWithMagicLink() {
   const {supabase}=React.useContext(SupabaseClientURL);
  const [inputData,setInputData]=React.useState(JSON.parse(localStorage.getItem("inputData"))||{
    email:''
  });

  const handleOnChange=(e)=>{
    e.preventDefault();
    setInputData({
      email:e.target.value 
    })
  };

  const handleOnSubmit=async(e)=>{  
    e.preventDefault();
let { data } = await supabase.auth.signInWithOtp({
  email: inputData.email,
  options:{

    emailRedirectTo: "http://localhost:3000/confirm",
  }
}) 

console.log(data)

  };

  React.useEffect(()=>{
    localStorage.setItem(JSON.stringify(inputData),"inputData");
  })
  return (
    <div  className='flex flex-col items-center justify-center  sign--up--tag'>
      <title>Email</title>
       <div className="mt-[20vh] flex flex-col items-center justify-center rounded w-[50%] ">
        <h1 className="title---tag---border pt-5 pb-5">Email</h1>
            <form className="w-[80%]"  onSubmit={handleOnSubmit} >
            <div className=" flex flex-col justify-center items-center input---tag--label">
         {/* <div className='p-4 label--tag '>

          <label htmlFor='email' className="label--tag" >Email : </label>
         </div> */}
          <input  placeholder="Please Enter Your Email Address"  className="px-10 py-7 input--tag" type="email" name="email" value={inputData.email||""} id="email" onChange={handleOnChange}/>
          
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
