import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'

const SearchScreen = () => {
  const { errorMessage, handleSearchApi, searchResult } = useResult();
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => handleSearchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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