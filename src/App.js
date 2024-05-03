import React, { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Leftbar from './components/Leftbar'
import './components/style.css'
import Auth from './components/Auth'
function App() {
  const [isAuth,setIsAuth] = useState(false);
  
  
  return (
    <div>
    {isAuth ? (
        <>
          <Header />
          <div className='main'>
            
          {/* <Leftbar/> */}
            <Home />
          </div>
        </>
      ) : (
        <Auth setIsAuth={setIsAuth} />
      )}
      </div>
  );
}

export default App