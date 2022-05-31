import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import yelp from '../api/yelp'

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = React.useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  }

  React.useEffect(()=>{
    getResult(id);
  }, [])

  if(!result){
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        style={styles.imageList}
        contentContainerStyle={{
          alignItems: 'center'
        }} 
        data={result.photos}
        renderItem={({ item })=> <Image style={styles.image} source={{uri: item}} />}
        keyExtractor={photo => photo}
      />
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginTop: 15
  },
  imageList: {
    flex: 1
  },
  container: {
    flex: 1
  },
  name: {
    fontWeight: '400',
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#fff'
  }
})