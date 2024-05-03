import React from 'react'
import {auth,provider} from "./Firebase-config"
import {signInWithPopup} from "firebase/auth"
export default function Auth({setIsAuth}) {

    const SignInWithGoogle=async()=>{
        try{
         await signInWithPopup(auth,provider);
         setIsAuth(true);
        } catch(err){
            console.log(err);
        }
    }
    
  return (
    <div>
        <p>Sign In</p>
        <button onClick={SignInWithGoogle}>Sign In with Google</button>
    </div>
  )
}
