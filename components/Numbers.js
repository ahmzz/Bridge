import { View,FlatList,StyleSheet,Text,Image,TouchableOpacity,ImageBackground,Animated} from 'react-native';
import React, { useRef,useState } from "react"

const data = [
    {
      title: '1',
      image: require('../assets/images/1.png'),
    },
    {
      title: '2',
      image: require('../assets/images/2.png'),
    },
    {
      title: '3',
      image: require('../assets/images/3.png'),
    },
    {
        title: '4',
        image: require('../assets/images/4.png'),
      },

      {
        title: '5',
        image: require('../assets/images/5.png'),
      },
      {
        title: '6',
        image: require('../assets/images/6.png'),
      },   
      {
        title: '7',
        image: require('../assets/images/7.png'),
      },  
      {
        title: '8',
        image: require('../assets/images/8.png'),
      },
      {
        title: '9',
        image: require('../assets/images/9.png'),
      },
      {
        title: '10',
        image: require('../assets/images/10.png'),
      },     
      
  ];
 
  
  const ITEM_HEIGHT = 50;
  const SCROLL_DISTANCE = 80;
  
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  
  const Numbers = () => {
    const [scrollY] = useState(new Animated.Value(0));
    const flatListRef = useRef(null);
  
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    });
  
    const renderItem = ({ item, index }) => {
      const translateY = scrollY.interpolate({
        inputRange: [index * ITEM_HEIGHT, (index + 1) * ITEM_HEIGHT],
        outputRange: [0, -SCROLL_DISTANCE],
        extrapolate: 'clamp',
      });
  
      const opacity = scrollY.interpolate({
        inputRange: [(index - 1) * ITEM_HEIGHT, index * ITEM_HEIGHT, (index + 1) * ITEM_HEIGHT],
        outputRange: [1, 1, 1],
        extrapolate: 'clamp',
      });
  
      return (
        <Animated.View style={[styles.item, { opacity, transform: [{ translateY }] }]}>
          <Image source={item.image} style={[styles.image,{marginVertical:20}]} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.buttonContainer}>  
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

      );
    };
  
    const keyExtractor = (item) => item.title;
  
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/5702291/pexels-photo-5702291.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}>
        <View style={{ flex: 1 }}>
          <AnimatedFlatList
            ref={flatListRef}
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onScroll={onScroll}
            scrollEventThrottle={16}
          />
        </View>
      </ImageBackground>
    );
  };
  export default Numbers;
  const styles = StyleSheet.create({
    image: {
      marginVertical: 70,
      width: 60,
      height: 60,
      marginLeft: 270,
    },
    title: {
      fontSize: 24,
      color: 'black',
      textAlign: 'center',
      marginTop: -70,
      fontWeight:'bold'
    },
    buttonContainer: {
      alignItems: 'center',
      marginRight: 230,
      marginTop: -15,
      justifyContent: 'space-around',
      
    },
    button: {
      backgroundColor: '#3D7EAA',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      height: 50,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    item: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      width: 340,
      height: 100,
      marginLeft: 13,
      borderRadius: 12,
      marginTop: 30,
      shadowColor: '#000',
      shadowOffset: { height: 10, width: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 40,
      
    }
  
  })