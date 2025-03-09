import React, { createContext } from "react";
import { createClient } from '@supabase/supabase-js';
import SignUp from "./Component/SignUp";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginWithPasswordEmail from "./Component/LoginWithPasswordEmail";
import LoginWithMagicLink from "./Component/LoginWithMagicLink";
import LoginViaOTP from "./Component/LoginViaOTP";
import Main from "./Component/Main";
import Confirmation from "./Component/Confirmation";
import ConfirmationPage from "./Component/ConfirmationPage";
import {SUPABASE_KEY} from "./config";
import {SUPABASE_URL} from "./config"

export const SupabaseClientURL=createContext(null);

function App() {

  const [supabase,setSupabase]=React.useState(null);


  React.useEffect(()=>{

 
    const client=createClient(SUPABASE_URL,SUPABASE_KEY);

    setSupabase(client);
  },[])
  

  const [inputData,setInputData]=React.useState({
    email:'',
    password:''
  })
  return (
    <SupabaseClientURL.Provider value={{supabase}} >
      <BrowserRouter>
      <Main/>
      <Routes>
        <Route path="/" element={ <SignUp/>}></Route>
        <Route path="/passwordEmail" element={<LoginWithPasswordEmail/>}></Route>
        <Route path='/magicLink' element={<LoginWithMagicLink/>}></Route>
        <Route path="/loginviaotp" element={<LoginViaOTP/>}></Route>
        <Route path="/confirm" element={<Confirmation/>}></Route>
        <Route path="/confirmuser" element={<ConfirmationPage/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </SupabaseClientURL.Provider >
  );
}

export default App;