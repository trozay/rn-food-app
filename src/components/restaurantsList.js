import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsList = ({ title, restaurants }) => {
  return <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={restaurant => restaurant.id}
      renderItem={({ item }) => {
        return <RestaurantCard restaurant={item} />
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default RestaurantsList;