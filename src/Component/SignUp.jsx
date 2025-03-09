import React from 'react'
import { SupabaseClientURL } from '../App';

// do not commit you have to modify the chnages in the code 
// there is sonme mistake 

export default function SignUp() {
  const {supabase}=React.useContext(SupabaseClientURL);  
  const [passwordStatus,setPasswordStatus]=React.useState(false);
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
        let resultStatus=passwordReset(inputData.password);
        if(!resultStatus[0]){
          
          setTimeout(()=>{
            setPasswordStatus(true);
          },5000);
          setPasswordStatus(false); 
          return;
        }
        
let { data, error } = await supabase.auth.signUp({
  email: inputData.email,
  password: inputData.password,
  options:{
    emailRedirectTo:"http://localhost:3000/confirmuser",
  }
})
    if(data){
      console.log("OK");
    }else{

      console.error(error);
    }
  };


  return (
    <div className='flex flex-col items-center justify-center  sign--up--tag' >
    <title className="title--tag">Sign Up Supabase</title>
    <div className="mt-[20vh] flex flex-col items-center justify-center rounded w-[50%] ">
        <h1 className="title---tag---border pt-5 pb-5">Sign Up</h1>
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
       {passwordStatus &&
       <p className='text-center text-white'>Password Credentials are missing </p>
       }
        
    </div>
    </div>
  )
}


function passwordReset(password){
         if(password.length<8) return [false,"password is weak"];
         let result_1=password.match('[a-z]');
         let result_2=password.match('[A-Z]');
         let result_3=password.match(/\d/g);
         let result_4=password.match(/[~!@#$%^&*]/g);
         return [result_1!==null && result_2!==null && result_3!==null && result_4!==null,"please check the password criteria !"];
} 