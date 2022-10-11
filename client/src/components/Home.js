import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/colors';


const Home = () => {
  return (
   <View style={styles.container}>
   <Text style={styles.textInput}> Welcome to LineHop!</Text>
   <Icon name="person" size={30} style={{marginLeft: 100}} />
   <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput placeholder="Search Restaurants" style={{fontSize: 17, paddingLeft: 10}}></TextInput>
        </View>
   </View>
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