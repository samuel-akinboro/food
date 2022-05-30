import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const ResultCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: result.image_url }} 
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} stars - {result.review_count} reviews</Text>
    </View>
  )
}

export default ResultCard

const styles = StyleSheet.create({
  image: {
    width: 250,
    borderRadius: 4,
    height: 150
  },
  container: {
    marginLeft: 15
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5
    // paddingHorizontal: 15
  }
})