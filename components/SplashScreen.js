import React, {useRef, useState} from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';
import {useEffect} from 'react';
import {Video} from 'expo-av';
const { width, height } = Dimensions.get("window");

const SplashScreen = props => {
const [authLoaded, setAuthLoaded] = useState(false);
const ref = useRef(null);
useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 15000);
  }, []);

  const splash = require('../assets/splash.mp4');
  return (
  <View style={styles.container}>
<Video
    source={splash} 
        
    
  style={{width:width ,height:height }}
  controls={false}
  fullscreen={true}
  resizeMode="cover" 
  shouldPlay={true}
  />
</View>

);
}
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0 
      
    },
    
      
  });

export default SplashScreen;