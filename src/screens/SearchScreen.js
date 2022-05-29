import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => console.log('submitted')}
      />
      <Text>Welcome to Foodie</Text>
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