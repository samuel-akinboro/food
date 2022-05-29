import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const handleSearchApi = async () => {
    const response = yelp.get('/search', {
      params: {
        term: searchTerm,
        location: 'san jose',
        limit: 50
      }
    })

    setSearchResult((await response).data.businesses)
  }

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={handleSearchApi}
      />
      <Text>Welcome to Foodie, There are a total of {searchResult.length} restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default SearchScreen