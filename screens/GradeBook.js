import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

const GradeBook = () => {
  return ( 
    <View style={StyleSheet.container}>
      <Text>GradeBook</Text>
    </View>
   );
}
 
export default GradeBook;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})