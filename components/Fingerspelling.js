import{Camera,CameraType} from 'expo-camera'
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import React, { useState,useEffect,useRef } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from './Button';


export default  FingerSpelling=(props)=> {
  const [hasCameraPermission,setHasCameraPermission]=useState(null)
  const [ type, setType]=useState(Camera.Constants.Type.back);
  const [ flash, setFlash]=useState(Camera.Constants.FlashMode.off);
  const [showTextField, setShowTextField] = useState(false);
  const cameraRef=useRef(null);
  
  const handleButtonPress=()=>{
    setShowTextField((prevState)=>!prevState);
  };
  useEffect(()=>{
  (async() => {
    MediaLibrary.requestPermissionsAsync();
    const cameraStatus=await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status==='granted');

  })();
},[])
    if (hasCameraPermission===false){
     return <Text>No Access to</Text>
}
  return (
    <View style={styles.container}>
     <View style={styles.cameraContainer}>
      <View style={{  width: '100%', height: '100%', }}>
      <Camera style={styles.camera}
       type={type}
       flashMode={flash}
       ref={cameraRef}
       
      >
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:30,
        
      }}>
     <Button  icon='retweet' onPress={()=>{
      setType(type===CameraType.back?CameraType.front:CameraType.back)
      }}/>
      <Button  icon='cross' onPress={()=>props.navigation.navigate("Homescreen")}/>
       </View>
       <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:30,
        marginTop:-60,
        
        }}>
       <Button icon="flash" onPress={() =>setFlash( flash === Camera.Constants.FlashMode.off ?
       Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)} 
       color={flash === Camera.Constants.FlashMode.off ? '#fff' : 'gray'}/>
      </View>
      
     <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
       <MaterialCommunityIcons name="circle-outline" size={60} color="#fff" />
       </TouchableOpacity>
       {showTextField&&(
       <View style={styles.textContainer2}>
        <Text style={[styles.text,{marginTop:50,marginRight:230}]}>Suggestions:</Text>
        </View>
         )}
       </View>
      </Camera>
      </View>
      </View> 
      <View style={styles.textContainer}>
      <Text style={[styles.text,{marginRight:280}]}>Words:</Text>
      <Text style={[styles.text,{marginRight:280,marginTop:5}]}>Letters:</Text>
      </View>
    </View>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex:1, 
    
  },
  camera: {
    width: '100%',
    height: '100%', 
  },
  cameraContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },

  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:170,
    flexWrap:'wrap'  
  },
  textContainer2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:120,
    flexWrap:'wrap'  
  },
  text: {
    fontSize: 20,
    color: 'black', 
    textAlign:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
    
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 20,
  },

});
   

  
