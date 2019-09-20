import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
      console.log("calling api");
     try {
      const { data: { businesses }} = await yelp.get('/search', {
          params: {
              limit: 50,
              term: searchTerm,
              location: 'Manchester'
          }
      });
      setRestaurants(businesses);
     } catch (err) {
          setErrorMessage("Something went wrong!")
     }
  }

  useEffect(() => {
    searchApi('Pasta');
  }, [])

}