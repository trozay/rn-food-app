import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}    
        />
        <Text>We have found {restaurants.length} results.</Text>
        {errorMessage ? <Text>{errorMessage}</Text>: null}
    </View>
    )
}

const styles = StyleSheet.create({
});

export default SearchScreen;