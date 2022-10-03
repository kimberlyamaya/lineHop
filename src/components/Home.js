import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {
  return (
    
    <View style={styles.container}>
      <TextInput style={styles.text}> Welcome to LineHop!</TextInput>
             <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({
                    username: text
                })}
                placeholder='Search'
             />
               <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({
                    username: text
                })}
                placeholder='Add Username'
             />
      </View>
    );
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 textInput: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
 }

});
export default Home;