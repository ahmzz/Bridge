import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../components/Onboarding';
import Home from '../src/Home';
import Signup from '../src/Signup';
import Login from '../src/Login';
import Homescreen from'../../components/Homescreen';
import Camerascreen from'../../components/Camerascreen';
import { color } from 'react-native-reanimated';
import SplashScreen from '../src/SplashScreen';

const authStack = createNativeStackNavigator();
function AuthNavigation() {
  return (
    <authStack.Navigator 
    initialRouteName='onboarding'
    screenOptions={{ headerShown: false }}
    >
   
    <authStack.Screen name="onboarding" component={Onboarding}/>
    <authStack.Screen name="Home" component={Home} />
    <authStack.Screen name="Signup" component={Signup} />
    <authStack.Screen name="Login" component={Login} />
    <authStack.Screen name="Homescreen"component={Homescreen}/>
    <authStack.Screen name="Camerascreen"component={Camerascreen}/>
    </authStack.Navigator> 

  )
}

export default AuthNavigation