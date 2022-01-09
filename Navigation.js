import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// -----------TAB---------------- //
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import FastImage from 'react-native-fast-image';

const Tab = createBottomTabNavigator();
const AppNav = () => {
    return (
        <Tab.Navigator
         initialRouteName='Home'
         screenOptions={({route})=>({
             tabBarActiveTintColor:"#000",
             tabBarLabelStyle:{
                 fontFamily:'arial',
                 fontSize:12
             },
             headerShown:false,
             tabBarStyle:{
                 height:60
             }
         })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel:"Home",
                tabBarIcon: ({ focused,color}) => (
                    // <Icon name="sait-boat" color={color} size={20} type="fontisto" />
                    focused ? (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_active_1.png')} />
                    ) : (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_1.png')} />
                    )
                )
                }}
            />
            <Tab.Screen
                name="Rewards"
                component={Home}
                options={{
                tabBarLabel:"Rewards",
                tabBarIcon: ({ focused,color}) => (
                    // <Icon name="sait-boat" color={color} size={20} type="fontisto" />
                    focused ? (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_active_2.png')} />
                    ) : (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_2.png')} />
                    )
                )
                }}
            />
            <Tab.Screen
                name="My Orders"
                component={Home}
                options={{
                tabBarLabel:"My Orders",
                tabBarIcon: ({ focused,color}) => (
                    // <Icon name="sait-boat" color={color} size={20} type="fontisto" />
                    focused ? (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_active_3.png')} />
                    ) : (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_3.png')} />
                    )
                )
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Home}
                options={{
                tabBarLabel:"Bookings",
                tabBarIcon: ({ focused,color}) => (
                    // <Icon name="sait-boat" color={color} size={20} type="fontisto" />
                    focused ? (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_active_4.png')} />
                    ) : (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_4.png')} />
                    )
                )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                tabBarLabel:"Profile",
                tabBarIcon: ({ focused,color}) => (
                    // <Icon name="sait-boat" color={color} size={20} type="fontisto" />
                    focused ? (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_active_5.png')} />
                    ) : (
                    <FastImage style={{height:30,width:30,resizeMode:"contain"}} source={require('./assets/icons/nav_5.png')} />
                    )
                )
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNav

const styles = StyleSheet.create({})