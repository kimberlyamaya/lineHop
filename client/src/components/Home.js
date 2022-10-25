import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import COLORS from '../components/colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';

 
const Home = () => {
  return (
    <ScrollView overScrollMode>
        <GooglePlacesAutocomplete
          placeholder="Search" 
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBgjuTAK0jde0Ub8eucengRIZkC66efifI',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'restaurants',
          }}
        />
        </ ScrollView>
   );
  }




const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 10,
   backgroundColor: '#ddd',
   flexDirection: 'row',
 },
 textInput: {
   fontSize: 25,
   fontWeight: 'bold',
 },
   searchInputContainer: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },

});

export default Home;