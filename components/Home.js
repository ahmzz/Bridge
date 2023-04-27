import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Background from './Background';
import { Button } from 'react-native-paper';

const Home = (props) => { 
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100,}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.title}>Bridge</Text>
      <Text style={styles.subtitle}>
      Learning sign languages isn’t 
      just learning the various signs for very similar things.
      </Text>
      <Button style={styles.Button} labelStyle={styles.ButtonLabel} mode='contained' onPress={()=>props.navigation.navigate("Signup")}>Signup</Button>
      <Button style={{borderRadius: 12,width:290,marginTop:10,height:45, paddingVertical:3,marginVertical:10,borderColor: 'white'}} labelStyle={{fontSize: 17,color:'#ffffff', marginTop: 7}}mode='outlined' onPress={()=>props.navigation.navigate("Login")}>Login</Button>
      </View>
      
    </Background>
  );
  }

 const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom:5,
   },
  subtitle: {
   color: 'white',
   fontSize: 14,
   fontFamily: 'Poppins-Regular',
   textAlign:"center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    marginTop: 200,
    alignSelf:'center'
        
      },
    Button:{
      borderRadius: 12,
      width:290,
      marginTop:30,
      height:45,
      paddingVertical:3,
      marginVertical:10,
      backgroundColor: '#ffffff'
    },
    ButtonLabel:{
    fontSize: 17,
    color:'#0a1440'

    },


  });


export default Home;