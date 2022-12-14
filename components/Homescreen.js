import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../login-signup/src/Background';

  const Homescreen = (props) => {
    
        return(
          
          <View style={{flex:1}}> 
          
           
          <Text
              style={{ paddingTop:10,paddingLeft:360}}> <Icon name="menu"size={40}/> </Text>
            <Text 
                style={{
                color: 'black',
                fontSize: 35,
                fontWeight: 'bold',
                marginTop : 2,
                marginBottom: 8,
                
                
             }}> Ready to Sign?
             </Text>
              <View
                style= {{
                 flex:1,
                 flexDirection:"row",
                 
                 
                }}>
               <View 
               style={{
                  allignItems:"center",
                  justifyContent:"flex-start",
                  flex:1,
                  backgroundColor:"#70a1ff",
                  margin:5,
                  borderRadius:10,
                  }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Camerascreen")}>
                <Text 
                   style={{
                   fontSize:20,
                   fontWeight:"bold",
                   color:"white"}}>  FingerSpelling
                </Text>
                </TouchableOpacity>
                </View>
                 <View 
                   style={{
                    allignItems:"center",
                    justifyContent:"flex-start",
                    flex:1,
                    backgroundColor:"#2ed573",
                    margin:5,
                    marginBottom:10,
                    borderRadius:10
                    }}>
                  <Text 
                   style={{
                   fontSize:20,
                   fontWeight:"bold",
                   color:"white", }}>  Common words
                   </Text>
                    </View>
                    </View>
                      <View
                          style={{
                            flex:1,
                            flexDirection:"row",
                            }}>
                      <View
                           style={{
                            allignItems:"center",
                            justifyContent:"flex-start",
                            flex:1,backgroundColor:"#8854d0",
                            margin:5,borderRadius:10,
                            }}>
                      <Text
                       style={{
                        fontSize:20,
                        fontWeight:"bold",
                        color:"white"}}>  DailyPractice
                         </Text>
                      </View>
                   <View
                    style={{
                      allignItems:"center",
                      justifyContent:"flex-start",
                      flex:1,
                      backgroundColor:"#ff6b81",
                      margin:5,
                      borderRadius:10
                      }}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white",alignItems: 'center'}}>  Interpreter
                     </Text>
                    </View>
                  </View>
                  <Text 
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop:20,
                    paddingBottom:10,
                    }}>  More Sign Language?
                   </Text>
                   <View>
                   <View 
                    style = 
                   {styles.lineStyle} 
                   />

                   <Text 
                   style={{
                    marginTop:8,
                    fontSize:15,
                    paddingBottom:5,
                    }}>
                      <Icon
                       name="person"size={15}/>  Sign Language and Deaf Culture
                         </Text>
                    <View 
                    style = 
                    {styles.lineStyle}
                     />
                    <Text 
                    style={{
                      marginTop:8,
                      fontSize:15,
                       paddingBottom:5,
                       }}>
                        <Icon name="favorite"size={15}/>  Sign Language Around the World</Text>
                    <View
                     style = 
                     {styles.lineStyle}
                      />
                    <Text 
                    style={{marginBottom:10,
                    fontSize:15,}}>
                      <Icon name="add"size={15}/>  More</Text>
                  </View>
                    </View>
                  
);

    };


export default Homescreen;
const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 0.3,
          borderColor:'grey',
          margin:8,
    
      
     }
   });