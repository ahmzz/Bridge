import React,{useState}from'react';
import {View, Text,  TouchableOpacity,StyleSheet,Image,} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const Login = (props) => {
const[password,setPassword]=useState('');
const [showPassword,setShowPassword]=useState(false);
const handlePasswordVisibility=()=>setShowPassword(!showPassword); 
const [isChecked, setIsChecked] = useState(false);
  return (
<View >
  <ImageBackground source={require("../assets/images/Login.png")} style={{ height: '100%' }} />
  <View style={{ position: "absolute" }}>
  <View style={styles.container}>
  <View style={styles.login}> 
  <Image source={require("../assets/images/logo.png")} style={styles.logo} />
  <Text style={{ fontSize: 20, color:"#fff" ,marginBottom:40,fontWeight:'bold'}}>Log In To Your Account </Text>
  <View>

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
   size={15}/>}/>
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
   <View style={{flexDirection: 'row', alignItems:'center'}}>
    <CheckBox
      checked={isChecked}
      onPress={() => setIsChecked(!isChecked)}
      checkedIcon={<FontAwesome name="check-square" size={15} color="#fff" />}
      uncheckedIcon={<FontAwesome name="square-o" size={15} color="#fff" />}
      containerStyle={{marginTop:-25,marginLeft:-8}}
    />
    <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: -15 ,marginBottom:30}}>
      Remember me
    </Text>
  </View>
   <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", paddingLeft:140,marginTop:-50}}>
   Forgot Password ?
   </Text>
   <View style={{ flexDirection: "row",marginBottom:30, }}>
   <View style={{ marginLeft: 140 }}>
   </View>
   </View>

  <View style={{marginBottom:40}}/>
  <Button style={styles.Button} labelStyle={styles.Buttonlabel}mode='contained' onPress={()=>props.navigation.navigate("Homescreen")}>Login</Button>
  </View>
  <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
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
    width: 250,
    height: 40,
    
    marginVertical: 5,
    backgroundColor:'transparent',
    alignSelf:'flex-start',  
    
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
});
export default Login;
