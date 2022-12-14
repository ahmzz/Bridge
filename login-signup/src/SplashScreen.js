import React, {useRef, useState} from 'react';
import {View, StyleSheet,} from 'react-native';
import LottieView from 'lottie-react-native';
import {useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    Dimensions,
    Animated,
  } from 'react-native';

const SplashScreen = props => {
const [authLoaded, setAuthLoaded] = useState(false);
const [animationLoaded, setAnimationLoaded] = useState(false);
const moveAnim = useRef(new Animated.Value(0)).current;
const fadeAnim = useRef(new Animated.Value(0)).current;


  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 5000);
  }, []);

  const onAnimationFinish = () => {
    setAnimationLoaded(true); 
  };

  /*useEffect(() => {
    
 if (authLoaded && animationLoaded) {
      props.navigation.replace('Home');
    }  
  }, [authLoaded, animationLoaded, props.navigation]);*/


  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

 
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.contentContainer}>
  
    <View style={styles.root}>
     <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('./assets/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}/>
        </View>
        
       <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim,}]}>
           <Text style={[styles.logoText,]}>B</Text>
           <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
             RIDGE
           </Animated.Text>
         </Animated.View>
       </View>
     </SafeAreaView>

        
  );
};

  const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  lottieView: {
    width: '100%',
  },

  container: {
    display: 'flex',
    flex: 1,  
    backgroundColor: '#FFFFFF',
  },
  logoText: {
    fontSize: 40,
    marginTop: 100,
    color: '#000000',
    //fontWeight: '700',
    fontFamily:'LeagueSpartan-Thin',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    
  },
  
  
});

export default SplashScreen;