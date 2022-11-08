import React, { Component , useEffect, useState} from 'react';
import {StyleSheet,Text,View,Alert,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { Avatar } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Header(props) {
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [studGrade, setStudGrade] = useState("");
    const [studSection, setStudSection] = useState("");
    useEffect(() => {
        AsyncStorage.getItem('email').then((value) =>setEmail(value));
        AsyncStorage.getItem('userId').then((value) =>setUserId(value));

    },[])
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={[styles.drawerContent,{}]}>
                <View style={[styles.userInfoSection, {flexDirection:'row',}]}>
                    <View style={{margin:15,}}>
                        <Avatar size={85} rounded source={require('../assets/photo.jpg')}/>
                    </View>
                    <View style={{margin:25,marginLeft:5}}>
                        <Text style={styles.userName}>@{userId}</Text>
                        <Text style={styles.userPhone}>{email}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.row, styles.userInfoSection]}>
                <View style={styles.section}>
                    <Text style={styles.caption}>Grade:</Text>
                    <Text style={[styles.paragraph, styles.caption]}>{studGrade}</Text>
                </View>
                <View style={[styles.section,{marginLeft:15}]}>
                    <Text style={styles.caption}>Section:</Text>
                    <Text style={[styles.paragraph, styles.caption]}>{studSection}</Text>
                </View>
            </View>
            <View style={{flex:1}}>
                <DrawerItem 
                    label='Home' 
                    onPress={()=>props.navigation.navigate('Home') }
                    icon={({ focused, color, size }) => <Icon color='red' size={20} name='home' />}
                    active={true}
                />
                <DrawerItem label='Profile' onPress={()=>props.navigation.navigate('Profile') }/>
                <DrawerItem label='Grade Book' onPress={()=>props.navigation.navigate('GradeBook') }/>
                <DrawerItem label='Payment' onPress={()=>props.navigation.navigate('Payment') }/>
                <DrawerItem label='Attendance' onPress={()=>props.navigation.navigate('Attendance') }/>
                <DrawerItem label='Conduct' onPress={()=>props.navigation.navigate('Conduct') }/>
                <DrawerItem label='Calendar' onPress={()=>props.navigation.navigate('Calendar') }/>
                <DrawerItem label='Class Schedule' onPress={()=>props.navigation.navigate('ClassSchedule') }/>
                <DrawerItem label='Notification' onPress={()=>props.navigation.navigate('Notification') }/>
                <DrawerItem label='School Info.' onPress={()=>props.navigation.navigate('SchoolInformation') }/>
                <DrawerItem label='Social Media Links' onPress={()=>props.navigation.navigate('SocialMediaLinks') }/>
                <DrawerItem label='Setting' onPress={()=>props.navigation.navigate('Setting') }/>
            </View>
        </DrawerContentScrollView>
        <View style={styles.bottomDrawerSection}>
            <DrawerItem label='Logout' onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}/>
        </View>
    </View>
  );
}

const styles =StyleSheet.create({
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#141414',
        borderTopWidth:1,
    },
    caption:{
        fontSize:15,
        margin:10,
        marginLeft:2,
        marginRight:2,
    },
    drawerContent:{
        // backgroundColor:'red',  
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    row:{
        flexDirection:'row',
        margin:10,
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:0,
    },
    userInfoSection:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    userName:{
        fontSize:20,
        fontWeight:'500',
    },
    userPhone:{
        fontSize:12,
    }
})