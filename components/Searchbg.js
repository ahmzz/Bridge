import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, StatusBar, StyleSheet, View ,Image} from 'react-native';
import Svg, { Path, } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function Background() {
  StatusBar.setHidden(true);

  const [animation] = useState(new Animated.Value(0));
  const [topAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();

    Animated.timing(topAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-Dimensions.get('screen').width, 0],
  });

  const topTranslateX = topAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-Dimensions.get('screen').width, 0],
  });

  return (
    <View style={styles.container}>
      
      <View style={styles.top}>
        <View style={styles.box}>
        
          <Animated.View
            style={[
              styles.animatedWavy,
              {
                transform: [{ translateX: topTranslateX }],
              },
            ]}
          >
            
            <Svg
              height={160}
              width={Dimensions.get('screen').width * 2}
              viewBox="0 0 1440 320"
              style={styles.topWavy}
            >
              <Path
                fill="#8ecae6"
                d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
              />
            </Svg>
          </Animated.View>
          <Image
              source={require('../assets/images/search.png')}
              style={styles.images2}
            />
          
        </View>
        
      </View>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Animated.View
            style={[
              styles.animatedWavy,
              {
                transform: [{ translateX }],
              },
            ]}
          >
            
            <Svg
              height={200}
              width={Dimensions.get('screen').width * 2}
              viewBox="0 0 1440 320"
              style={styles.bottomWavy}
            >
              
              
              <Path
                fill="#8ecae6"
                d='M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
              />
            </Svg>
            
           
          </Animated.View>
          <Image
              source={require('../assets/images/search2.png')}
              style={styles.images}
            />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {},
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  
   box: {
    backgroundColor: '#add8e6',
    height: 60,
  },
  bottomWavy: {
    position: 'absolute',
    bottom: -60,
  },
  topWavy: {
    position: 'absolute',
    top:20,
  },
  images:{
    width: "120%",
     height: "80%",
     alignSelf: "center",
     
  },
  images2:{
  height :"100%",
  width: "110%",
  alignSelf: "center",
  bottom:10
  
  }
})