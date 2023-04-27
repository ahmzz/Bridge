import React from 'react';
import {View, StyleSheet,} from 'react-native';
import { ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

const Background = ({ children }) => {
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  
     });
   
     if (!loaded) {
       return null;
     }
    return (
      <View>
      <ImageBackground source={require("../assets/images/Home.png")} style={{ height: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default Background;