import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/colors';

const Reservation = () => {
  return (
    <SafeAreaView styles={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}></Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.ReservationList}> My Reservations</Text>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput placeholder="Search Reservations" style={{fontSize: 17, paddingLeft: 10}}></TextInput>
        </View>
          </ScrollView>

        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    height: 40,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '99%',
  },
  ReservationList: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 10,
  },
})
export default Reservation;