import React, { Component, useEffect,useState } from 'react';
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
// import axios from 'axios';
const Profile = () => {
    // const baseURL = 'https://api.sampleapis.com/avatar/characters';
    const baseURL = 'https://knf.coretechitplc.com/getMyProfile/650';
    const [myProfile, setMyProfile] = useState([]);
    // const [firstName, setFirstName] = useState("-");
    const getData =()=>{
        fetch(baseURL)
        .then(response=>response.json())
        .then((data)=>{
            setMyProfile(data)
        })
        .catch((err)=>{
            alert("Fetching Error");
        })
    }
    useEffect(()=>{
        getData();
    },[])

    const Process= () => {
      let data=[
        {
          id:'',
          firstName:'',
          studentId:'',
        }]
      if(myProfile.length>0)
      {
        data= myProfile[0];
        let {id, firstName, studentId}= data;
      }
      return (
        <View>
          <Text>{data.id}</Text>
          <Text>{data.firstName}</Text>
          <Text>{data.studentId}</Text>
        </View>
      )
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.heading}>Manage My Profile</Text>
            <ScrollView style={styles.container2}>
            <Process/>
            {/* <Text style={{fontSize:20}}>{firstName}</Text> */}
            </ScrollView>
        </View>
   );
}
 
export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:15,
  },
  container2:{
    flex:1,
    margin:1,
  },
  heading:{
    fontSize:25,
    fontWeight:'bold',
  },
  
  
})