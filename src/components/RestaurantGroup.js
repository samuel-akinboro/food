import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultCard from './ResultCard'

const RestaurantGroup = ({title, results, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
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
    marginBottom: 15
  },
  title: {
    marginLeft: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  }
})