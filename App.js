import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNav from './Navigation'

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
