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
// kim added 10/04/22
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
// end
// kim added 10/12/22
import AsyncStorage from '@react-native-async-storage/async-storage';                
import { createIconSetFromFontello } from 'react-native-vector-icons';
// end

// kim added 10/04/22
const httpLink = createHttpLink({
  uri: '/graphql',
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

//kim added 10/12/22
const authLink = setContext(async (_, { headers }) => {
  try {
    // changed const token to var token
    var token = await AsyncStorage.getItem('id_token');

    console.log("app.js line 43")
    console.log(token)

    if (token !== null) {
      // We have data!!
      console.log(token);
    }
    
  } catch (error) {
    console.log("hitting catch error app.js 52")
    console.log(error)
    // Error retrieving data
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };

});
//end

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// end  

const API_endpoint = 'https://maps.googleapis.com/maps/api/geocode/';
const API_key = 'AIzaSyBgjuTAK0jde0Ub8eucengRIZkC66efifI'

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
    // kim wrapped return in ApolloProvider
    <ApolloProvider client={client}>
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
    </ApolloProvider>
    //end
  );
};



export default App;