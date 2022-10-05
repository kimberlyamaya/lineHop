import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TextInput, Animated, TouchableOpacity } from 'react-native';
import  COLORS from '../components/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({navigation}) => {
  const categories = ['American', 'Mexican', 'Asian', 'Steakhouse','Mediterranean'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;


  const CategoryList = ({navigation}) => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 50,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}></Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={{fontSize: 17, paddingLeft: 10}}></TextInput>
        </View>
        <CategoryList />
      </ScrollView>
        
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  searchInputContainer: {
    height: 40,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Search;