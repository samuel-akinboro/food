import { useEffect, useState } from "react";
import yelp from '../api/yelp'

export default () => {
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    handleSearchApi('pasta')
  }, [])

  const handleSearchApi = async (searchParam) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchParam,
          location: 'san jose',
          limit: 50
        }
      })
  
      setSearchResult(await response.data.businesses)
    } catch (err){
      setErrorMessage('Something went wrong.')
    }
  }

  return {
    searchResult,
    errorMessage,
    handleSearchApi
  }
}