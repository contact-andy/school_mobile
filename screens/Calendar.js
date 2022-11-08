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
import { SpeedDial } from '@rneui/themed';
const Calendar = () => {
  const [open, setOpen] = React.useState(false);
  return ( 
    <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => console.log('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      onPress={() => console.log('Delete Something')}
    />
  </SpeedDial>
   );
}
 
export default Calendar;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})