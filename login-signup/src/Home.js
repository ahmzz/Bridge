import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { blueLight, blueDark } from './Constants';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
 
  
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>app</Text>
       <Btn bgColor={blueDark} textColor='white' btnLabel="Login" Press={()=>props.navigation.navigate("Login")} /> 
      <Btn bgColor='white' textColor={blueLight} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
  }

const styles = StyleSheet.create({})


export default Home;
