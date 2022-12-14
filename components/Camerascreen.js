import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Camera, useCameraDevices,frameProcessor } from "react-native-vision-camera"

export default  Camerascreen  =  ()=> {
     
  useEffect (async()=>{const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission()

  },[]);

    const devices = useCameraDevices()
    const device = devices.back
  
    if (device == null) return  <Text>loading</Text> 
    
    return (
      
      <Camera
      
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true} 
        />
             
    );
    
  };

  
  

 
        
      