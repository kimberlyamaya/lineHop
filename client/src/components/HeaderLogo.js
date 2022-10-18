import React from 'react';
import { View, Image, SafeAreaView, Text, button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useGeolocation from "react-hook-geolocation";



function HeaderLogo() {
    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../assets/logo.png')}
        />
        <Text style={{color: 'white', padding: 5, fontSize: 22}}>LineHop</Text>
        <Icon name="location" size={23} style={{ left: 210 }} /> 
      </View>
    );
  }
export default HeaderLogo;