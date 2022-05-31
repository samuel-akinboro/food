import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultScreen from "./src/screens/ResultScreen";
import SearchScreen from './src/screens/SearchScreen'

const navigation = createStackNavigator({
  Search: SearchScreen,
  Result: ResultScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigation)