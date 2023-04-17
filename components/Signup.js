import React,{useState}from'react';
import {View, Text,  TouchableOpacity,StyleSheet,Image,} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

const Signup = props => {
  const[password,setPassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const handlePasswordVisibility=()=>setShowPassword(!showPassword);

  return (
  <View >
  <ImageBackground source={require("../assets/images/Signup.png")} style={{ height: '100%' }} />
  <View style={{ position: "absolute" }}>
  <View style={styles.container}>
  <View style={styles.login}> 
   <Image source={require("../assets/images/logo.png")} style={styles.logo} />
  <Text style={{ fontSize: 20, color:"#fff" ,marginBottom:40,fontWeight:'bold'}}>Create New Account </Text>
  <View>

 <View style={{flexDirection :'row',alignItems:'center'}}>
 <TextInput mode="outlined"
  theme={{roundness: 10,colors: {primary: '#fff'}}}
  outlineColor="#ffffff"
  placeholder="Name"
  placeholderTextColor="#fff"
  textColor='#fff'
  style={styles.input}
  inputStyle={{color:'#fff'}}
  left={<TextInput.Icon icon= {'account-outline'} 
  iconColor="#fff"
  size={15} />}/>
  </View>

 <View style={{flexDirection :'row',alignItems:'center'}}>
 <TextInput mode="outlined"
  theme={{roundness: 10,colors: {primary: '#fff'}}}
  outlineColor="#ffffff"
  placeholder="Email"
  placeholderTextColor="#fff"
  textColor='#fff'
  style={styles.input} 
  left={<TextInput.Icon icon= {'email-outline'} 
  iconColor="#fff"
  size={15} />}/>
  </View>

  <View style={{flexDirection :'row',alignItems:'center'}}>
  <TextInput mode="outlined"
  theme={{roundness: 10,colors: {primary: '#fff'}}}
  secureTextEntry={true}
  outlineColor="#ffffff"
  placeholder="Password"
  placeholderTextColor="#fff"
  textColor='#fff'
  style={styles.input}
  left={<TextInput.Icon icon= {'lock-outline'} 
  iconColor="#fff"
  size={15}/>}
  right={<TextInput.Icon icon= {showPassword?'eye-off-outline':'eye-outline'} 
  iconColor="#fff"
  size={15}
  style={{marginRight:10}}
  onPress={handlePasswordVisibility}/>}/>
 </View>
  <View style={{marginBottom:40}}/>

  <Button  style={styles.Button} labelStyle={styles.Buttonlabel}
   mode='contained' onPress={()=>props.navigation.navigate("Login")}>Signup</Button>
  <Button  icon={() => (<Image source={require('../assets/images/google.png')}
   style={ styles.Buttonicon } />)} style={styles.SignupButton} labelStyle={styles.SignupButtonLabel}
   mode='outlined' onPress={()=>props.navigation.navigate("")}>Sign up with Google</Button>

  </View>
  <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
   <Text style={{ fontSize: 13, color:"#fff" }}>Already have an account ?</Text>
   <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
   <Text style={{ fontWeight:'bold',color: "#fff",  fontSize: 13 }}> Login</Text>
   </TouchableOpacity>
    </View> 
    </View>
    </View>
    </View>
  </View>  

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  login: {
    padding: 50,
    alignItems: 'center',
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#fff',
    marginTop: 100
  },

  input: {
    flex:1,
    fontSize: 15,
    height: 40,
    width: 250,
    marginVertical: 5,
    backgroundColor:'transparent',
    alignSelf:'flex-start'
    
  },
  Button:{
    borderRadius: 12,
    width:250,
    marginTop:100,
    height:40,
    paddingVertical:3,
    marginVertical:2,
    backgroundColor: '#ffffff',
    marginTop: 7
  },
  Buttonlabel:{
    fontSize: 14,
    color:'#0a1440',
    marginTop: 5
  },
  Buttonicon:{
   width: 20,
   height: 25
  },
  SignupButton:{
    borderRadius: 12,
    width:250,
    marginTop:10,
    height:40, 
    paddingVertical:3,
    marginVertical:2,
    borderColor: 'white'

  },
  SignupButtonLabel:{
    fontSize: 14,
    color:'#ffffff',
    marginTop: 3
  },

  
  
});

export default Signup;