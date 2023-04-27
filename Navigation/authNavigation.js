import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../components/Onboarding';
import Home from'../components/Home';
import Login from'../components/Login';
import Signup from'../components/Signup';
import Dailypractice from '../components/Dailypractice';
import Alphabets from '../components/Alphabets';
import Numbers from '../components/Numbers';
import Fingerspelling from '../components/Fingerspelling';
import Searchword from '../components/Searchword';
import Homescreen from '../components/Homescreen';
const authStack = createNativeStackNavigator();
function AuthNavigation() {
  return (
    <authStack.Navigator 
    initialRouteName='onboarding'
    screenOptions={{ headerShown: false }}
    >
    <authStack.Screen name="onboarding" component={Onboarding}/>
    <authStack.Screen name="Home" component={Home}/>
    <authStack.Screen name="Login" component={Login}/>
    <authStack.Screen name="Signup" component={Signup}/>
    <authStack.Screen name="Homescreen" component={Homescreen}/>
    <authStack.Screen name="Fingerspelling" component={Fingerspelling}/>
    <authStack.Screen name="Searchword" component={Searchword}/>
    <authStack.Screen name="Dailypractice" component={Dailypractice}/>
    <authStack.Screen name="Alphabets" component={Alphabets}/>
    <authStack.Screen name="Numbers" component={Numbers}/>
    </authStack.Navigator> 

  )
}

export default AuthNavigation