import { View,FlatList,StyleSheet,Text,Image,TouchableOpacity,ImageBackground,Animated} from 'react-native';
import React, { useRef,useState } from "react"

const data = [
    {
      title: 'A',
      image: require('../assets/images/a.png'),
    },
    {
      title: 'B',
      image: require('../assets/images/b.png'),
    },
    {
      title: 'C',
      image: require('../assets/images/c.png'),
    },
    {
        title: 'D',
        image: require('../assets/images/d.png'),
      },

      {
        title: 'E',
        image: require('../assets/images/e.png'),
      },
      {
        title: 'F',
        image: require('../assets/images/f.png'),
      },
      {
        title: 'G',
        image: require('../assets/images/g.png'),
      },
      {
        title: 'H',
        image: require('../assets/images/h.png'),
      },
      {
        title: 'I',
        image: require('../assets/images/i.png'),
      },
      {
        title: 'J',
        image: require('../assets/images/j.png'),
      },
      {
        title: 'K',
        image: require('../assets/images/k.png'),
      },
      {
        title: 'L',
        image: require('../assets/images/l.png'),
      },
      {
        title: 'M',
        image: require('../assets/images/m.png'),
      },
      {
        title: 'N',
        image: require('../assets/images/n.png'),
      },
      {
        title: 'O',
        image: require('../assets/images/o.png'),
      },
      {
        title: 'P',
        image: require('../assets/images/p.png'),
      },
      {
        title: 'Q',
        image: require('../assets/images/q.png'),
      },
      {
        title: 'R',
        image: require('../assets/images/r.png'),
      },
      {
        title: 'S',
        image: require('../assets/images/s.png'),
      },
      {
        title: 'T',
        image: require('../assets/images/t.png'),
      },
      {
        title: 'U',
        image: require('../assets/images/u.png'),
      },
      {
        title: 'V',
        image: require('../assets/images/v.png'),
      },
      {
        title: 'W',
        image: require('../assets/images/w.png'),
      },
      {
        title: 'X',
        image: require('../assets/images/x.png'),
      },
      {
        title: 'Y',
        image: require('../assets/images/y.png'),
      },
      {
        title: 'Z',
        image: require('../assets/images/z.png'),
      },     
      
  ];
 
  
  const ITEM_HEIGHT = 100;
  const SCROLL_DISTANCE = 80;
  
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  
  const Alphabets = () => {
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
  export default Alphabets;
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