import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'

const ResultCard = ({ result, navigation }) => {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Result')}>
      <View style={styles.container}>
        <Image 
          source={{ uri: result.image_url }} 
          style={styles.image}
        />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} stars - {result.review_count} reviews</Text>
      </View>
    </TouchableOpacity>
  )
}

export default withNavigation(ResultCard)

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