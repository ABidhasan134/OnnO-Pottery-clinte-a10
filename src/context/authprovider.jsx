import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
// createing context and we have to export. And cell by this name from other components
export const AuthContext=createContext(null)
// createing context component
const AuthProvider = ({children}) => {
  // state for loading and user 
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const [cardInfo,setCardInfo]=useState([])
  const [reload,setReload]=useState(false);
  // function for createuser function
  const createUser=(email,password)=>{
    // use firebase build in functions
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
    // when user is createing loading should be true 
  }
  const logInuser=(email,password)=>{
    // use firebase build in functions
    return signInWithEmailAndPassword(auth,email,password);
    // when user is createing loading should be true 
    setLoading(true);
  }
  const logOut=()=>{
    // use firebase build in functions
    return signOut(auth);
    // when user is createing loading should be true 
    setLoading(true)
  }
  // useEffect use for every time user is change
  useEffect(()=>{
    // obgarber for user and whice user is use this 
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
      // get currentUser in user state
      setUser(currentUser);
      console.log("Inside the useEffect", currentUser);
      // when user is loaded then loding is false
      setLoading(false);
    })
    // returning the user as unsubscribe
    return ()=>{
      unsubscribe();
    }
  },[]);
  // context value as object
  
  // card information loaded
  useEffect(()=>{
      fetch("./data.json")
      .then(result=>result.json())
      .then((data)=>{
        // console.log(data)
        setCardInfo(data)
      })
      .catch((error)=>console.log(error))
  },[])
  const authInfo={user,createUser,logInuser,logOut,loading,cardInfo,setUser,setReload}
  return (
    // context provideing for all childern 
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
