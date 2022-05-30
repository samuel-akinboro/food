import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ResultCard from './ResultCard'

const RestaurantGroup = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ResultCard result={item} />}
      />
    </View>
  )
}

export default RestaurantGroup

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  title: {
    marginLeft: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  }
})