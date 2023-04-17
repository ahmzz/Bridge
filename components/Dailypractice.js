import { View,Text, Dimensions,StyleSheet,TouchableOpacity,Image } from "react-native";
import { Emitter } from "react-native-particles";
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';



const Dailypractice = (props) => {
  
  const [fromPosition, setFromPosition] = useState({ x: 0, y: 0 });
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPosition = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      };
      setFromPosition(randomPosition);
    }, 200);

    return () => clearInterval(interval);
  }, [width, height]);
  return (
    <View style={{ flex: 1,backgroundColor:'#add8e6'}}>
    
    
      <Emitter
        numberOfParticles={20000}
        emissionRate={2}
        interval={100}
        particleLife={3000}
        particleSize={8}
        particleDispersion={32}
        direction={-90}
        spread={360}
        fromPosition={fromPosition}
        fullscreen={true}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
        />
      </Emitter>
      <Emitter
        numberOfParticles={50000}
        emissionRate={2}
        interval={100}
        particleLife={3000}
        particleSize={4}
        particleDispersion={16}
        direction={-90}
        spread={360}
        fromPosition={fromPosition}
        fullscreen={true}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 4,
            height: 4,
            borderRadius: 2,
          }}
        />
        
      </Emitter>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:35,
         }}>
        
       <TouchableOpacity onPress={()=>props.navigation.navigate("Homescreen")}>
       <Ionicons name="chevron-back" size={30} color="black" />
       </TouchableOpacity>
       <View style={{flex: 1, justifyContent: 'flex-start', marginLeft: -20, marginTop: 60}}>
       <Text style={{fontSize: 25, textAlign: 'center',fontWeight:'bold'}}>Daily Practice</Text>
       
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
      <Text style={{fontSize: 22, marginTop: 50, textAlign: 'left',fontWeight:'bold'}}>Alphabets</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Alphabets")} style={{justifyContent:'space-between',flexDirection:'row'}}>
      <Text  style={{fontSize: 15, color:'#000080',marginTop:-26,marginLeft:245,}}>see more</Text>
       <Ionicons  name="chevron-forward" size={20} color="#000080" style={{ marginTop: -26,marginRight:20}} />  
      </TouchableOpacity>
      
      <View style={{ flexDirection: 'row', marginTop: 40}}>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/a.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
        <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>A</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/b.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>B</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/c.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>C</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70,marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/d.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>D</Text>
      </View>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row',}}>
      <Text style={{fontSize: 22, marginTop: 50, textAlign: 'left',fontWeight:'bold'}}>Numbers</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Numbers")}  style={{justifyContent:'space-between',flexDirection:'row'}}>
      <Text  style={{fontSize: 15,marginTop:-26,marginLeft:245, color:'#000080'}}>see more</Text>
       <Ionicons  name="chevron-forward" size={20} color="#000080" style={{ marginTop: -26,marginRight:20}} />  
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 40}}>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/1.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
        <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>1</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/2.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>2</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70, marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/3.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>3</Text>
      </View>
      <View style={{backgroundColor: 'white', width: 70, height: 70,marginRight: 13,borderRadius:10}}>
      <Image source={require('../assets/images/4.png')}style={{alignSelf: "center", height:50,width:50,marginTop:4 }} />
      <Text style={{fontWeight:'bold',color:'black',marginTop:-2,textAlign:'center'}}>4</Text>
      </View>
      </View>
      <Text style={{fontSize: 22, textAlign:'left',marginTop:30,fontWeight:'bold'}}>Join Course</Text> 

      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#2492B4', '#3D7EAA', ]}
      style={{backgroundColor: 'white', width: 340, height: 100,marginRight: 13,borderRadius:10,marginTop:30}}>
      <Text style={{fontSize: 22, textAlign:'left',marginTop:60,marginLeft:240,fontWeight:'bold'}}>Register</Text>
      </LinearGradient>
      

    </View>
       </View>
       
    </View>
   
  );
};

export default Dailypractice