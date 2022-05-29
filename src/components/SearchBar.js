import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({searchTerm, setSearchTerm, onTermSubmit}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search" 
        style={styles.inputStyle} 
        value={searchTerm}
        onChangeText={setSearchTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    marginHorizontal: 15,
    height: 50,
    marginTop: 10,
    borderRadius: 8
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  inputStyle: {
    flex: 1,
    fontSize: 17
  }
})

export default SearchBar