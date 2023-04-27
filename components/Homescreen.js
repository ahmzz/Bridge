import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { Camera ,CameraType} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";


const CameraView = (props) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [ type, setType]=useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No Access to</Text>;
  }

  return (
    <View style={styles.cameraContainer}>
      
      <Camera style={styles.camera} 
      type={type}
      ref={cameraRef}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            marginTop: -74,
            marginRight:-10
          }}
        >
         <TouchableOpacity  style={{ marginLeft:-10 }}>
           <View style={styles.iconWrapper}>
            <Ionicons name="person-outline" size={24} color="#fff" />
          </View>
          </TouchableOpacity>
          <View style={styles.iconWrapper2}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
          <TouchableOpacity onPress={()=>{ setType(type===CameraType.back?CameraType.front:CameraType.back)}}>
          <EvilIcons name="retweet" size={38} color="#fff" style={{ marginTop: 8,marginLeft:-20 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Searchword")} style={{ marginTop: 14,marginLeft:-20 }} >
          <Feather name="search" size={28} color="#FFF" />
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Fingerspelling")} style={{ marginTop: 14,marginLeft:-20 }}>
          <Ionicons name="hand-left-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Dailypractice")} style={{ marginTop: 10,marginLeft:-20 }}>
          <Ionicons name="book-outline" size={28} color="#fff" />
          </TouchableOpacity>
          </View>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const Homescreen = ({navigation}) => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && <CameraView navigation={navigation} />}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  cameraContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#fff',
    marginTop: 40,
    marginLeft:155,
    
    
    
  },
  iconWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 50,
    padding: 10,
   
  },
  iconWrapper2: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius:50,
    padding: 2,
  },
});