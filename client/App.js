import React, { Component, useState } from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import Search from './src/components/Search';
import Favorites from './src/components/Favorites';
import Reservation from './src/components/Reservation';
import Account from './src/components/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/LoginScreen';
import HeaderLogo from './src/components/HeaderLogo';



const API_endpoint = 'https://maps.googleapis.com/maps/api/geocode/';
const API_key = 'AIzaSyBgjuTAK0jde0Ub8eucengRIZkC66efifI'

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if(route.name === "Home"){
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if(route.name === "Search"){
              iconName = focused ? "search-sharp" : "search-outline";
            }if(route.name === "Favorites"){
              iconName = focused ? "heart-circle" : "heart-circle-outline";
            }if(route.name === "Reservation"){
              iconName = focused ? "calendar" : "calendar-outline";
            }if(route.name === "Account"){
              iconName = focused ? "person" : "person-outline";
            }
            return <Icon name={iconName} size={size} colour={colour}/>
          },
        })}>
          
          <Tab.Screen
         name="Home"
         component={Home}
         options={{
           headerTitle: () => <HeaderLogo />,
           headerTitleAlign: 'left',
           headerStyle: {
             backgroundColor: 'darkblue',
           },
           headerTintColor: 'white',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
           }} />
          <Tab.Screen options= {{ headerShown: false }}name="Search" component={Search} />
          <Tab.Screen options= {{ headerShown: false }}name="Favorites" component={Favorites} />
          <Tab.Screen options= {{ headerShown: false }}name="Reservation" component={Reservation} />
          <Tab.Screen options= {{ headerShown: false }}name="Account" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};



export default App;