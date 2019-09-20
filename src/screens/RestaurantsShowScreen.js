import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async id => {
    const { data } = await yelp.get(`/${id}`);
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant(id)
  }, []);
  console.log(restaurant)
  if (restaurant) {
    return (
      <View>
        <Text>{restaurant.name}</Text>
        <FlatList
          data={restaurant.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />
          }}
        />
      </View>
    )
  } else {
    return (
      <View></View>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantsShowScreen;