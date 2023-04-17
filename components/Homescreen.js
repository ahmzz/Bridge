import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";
import TabNavigator from "../components/TabNavigator";
import { TabContextProvider } from "./TabContext";

const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
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
      <View style={{ width: "100%", height: "100%" }}>
        <Camera style={styles.camera} ref={cameraRef}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="person-outline" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="logout"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
};

const Homescreen = (props) => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && <CameraView />}
      <TabContextProvider>
        <TabNavigator />
      </TabContextProvider>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});