import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect,useState } from 'react'
import AuthNavigation from './Navigation/authNavigation';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [user,setUser]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
            console.log("Splachscreen")
            setUser(true)
          }, 5000);
    },[])
  return (
    <>
      <NavigationContainer>
      {user===true?<AuthNavigation/>:<SplashScreen/>}
      
      </NavigationContainer>   
      
    </>
    
  );
};
export default App;
