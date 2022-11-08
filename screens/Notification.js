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

const Notification = () => {
  return ( 
    <View style={StyleSheet.container}>
      <Text>Notification</Text>
    </View>
   );
}
 
export default Notification;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})