import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Searchbg from './Searchbg';

export default function Searchword() {
  const [searchText, setSearchText] = useState('');
  const [gifUrl, setGifUrl] = useState('');
  const [searchBarY, setSearchBarY] = useState(new Animated.Value(300));
  const [showGif, setShowGif] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // new state variable to track loading state

  const handleSearch = async () => {
    const apiKey = 'ZCYIYGiylbPHVo3dc7LiQz6JX93uC5fJ';
    const apiUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=simax%20${searchText}&limit=1&offset=0&rating=g&lang=en&fmt=json&stickers=1&sticker_meta=1&sticker_sizes=original`;
    setShowGif(false);
    setIsLoading(true); // start loading when starting new search
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const gifData = data.data[0];
      if (gifData) {
        setGifUrl(gifData.images.downsized.url);
        Animated.timing(searchBarY, {
          toValue: 150,
          duration: 500,
          useNativeDriver: false,
        }).start();
      } else {
        console.log('No GIF found for search text:', searchText);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); 
      setShowGif(true);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbg/>
      <Animated.View style={[styles.searchBarContainer, { top: searchBarY }]}>
        
        <TextInput
          style={styles.searchBar}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Type sign you want"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </Animated.View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <View style={[styles.loadingDot, { backgroundColor: '#3D7EAA' }]} />
          <View style={[styles.loadingDot, { backgroundColor: '#FEBB4E' }]} />
          <View style={[styles.loadingDot, { backgroundColor: '#EB5757' }]} />
        </View>
      ) : showGif ? (
        <Image source={{ uri: gifUrl }} style={styles.gif} />
      ) : null}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  searchBarContainer: {
    position: 'absolute',
    top: 300,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    paddingLeft: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    height: 50,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
    
  },

  buttonContainer: {
    position: 'absolute',
    top: 18,
    right: 28,
    
  },
  button: {
    backgroundColor: '#3D7EAA',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 35,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  icon:{
  position: 'absolute',
  top:25,
  left:10
  },
  gif: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop:-500,
    marginBottom:300
    
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loadingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom:50,
    
  },
});