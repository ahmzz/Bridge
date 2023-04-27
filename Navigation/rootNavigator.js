import { StyleSheet,  View } from 'react-native'
import React, { useEffect } from 'react'
import AuthNavigation from './authNavigation'
import SplashScreen from '../../components/SplashScreen'

const RootNavigator = () => {
    const [user,setUser]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            console.log("SplashScreen")
            setUser(true)
          }, 15000);
    },[])

  return (
    <View>
        {user===true?<AuthNavigation/>:<SplashScreen/>}
    </View>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})