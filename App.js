import React from "react"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

export default function App(){
  return <AppContainer/>
} 

const StackNavigator= createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Details: {
      screen: DetailsScreen,

    },
    initialRouteName: "Home"
  }
)

const AppContainer= createAppContainer(StackNavigator)