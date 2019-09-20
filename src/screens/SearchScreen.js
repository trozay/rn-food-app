import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/restaurantsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterRestaurantsByPrice = price => {
        return restaurants.filter(restaurant => restaurant.price === price);
    }

    return (
        <>
            <View>
                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ScrollView>
                    <RestaurantsList
                        restaurants={filterRestaurantsByPrice("£")}
                        title={"Cost Effective"}
                    />
                    <RestaurantsList
                        restaurants={filterRestaurantsByPrice("££")}
                        title={"Bit Pricier"}
                    />
                    <RestaurantsList
                        restaurants={filterRestaurantsByPrice("£££")}
                        title={"Big Spender"}
                    />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;