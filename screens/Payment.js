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

const Payment = () => {
  return ( 
    <View style={StyleSheet.container}>
      <Text>Payment</Text>
    </View>
   );
}
 
export default Payment;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})