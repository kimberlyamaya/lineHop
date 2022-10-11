import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './colors';
import Icon from 'react-native-vector-icons/Ionicons'

const Favorites = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.FavoriteList}> My Lists</Text>
        <Icon name="add" size={25} style={{marginLeft: 285}} />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ddd',
    flexDirection: 'row',
  },
  FavoriteList: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
export default Favorites;