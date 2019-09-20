import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsList = ({ title, restaurants, navigation }) => {
  return <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={restaurant => restaurant.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantsShow', { id: item.id })}>
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )
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

export default withNavigation(RestaurantsList);