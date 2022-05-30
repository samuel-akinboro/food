import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RestaurantGroup from '../components/RestaurantGroup'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'

const SearchScreen = () => {
  const { errorMessage, handleSearchApi, searchResult } = useResult();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filterResultByPrice = (price) => {
    return searchResult.filter(item => item.price === price)
  }

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => handleSearchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>Welcome to Foodie, There are a total of {searchResult.length} restaurants</Text> */}
      <RestaurantGroup 
        title="Cost Effective" 
        results={filterResultByPrice('$')} 
      />
      <RestaurantGroup 
        title="Bit Pricier" 
        results={filterResultByPrice('$$')} 
      />
      <RestaurantGroup 
        title="Big Spender" 
        results={filterResultByPrice('$$$')} 
      />
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