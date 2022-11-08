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
  NativeModules,
  PermissionsAndroid,
} from 'react-native';
import * as SMS from 'expo-sms';
import SendSMS from 'react-native-sms'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smsServiceAvailable:true,
      data: [
        {id:1, title: "Profile", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        {id:1, title: "Grade Book", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        {id:2, title: "Attendance", image:"https://img.icons8.com/color/70/000000/filled-like.png"} ,
        {id:3, title: "Conduct", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
        {id:4, title: "Payment", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
        {id:5, title: "Calendar", image:"https://img.icons8.com/color/70/000000/traffic-jam.png"} ,
        {id:6, title: "Class Schedule", image:"https://img.icons8.com/dusk/70/000000/visual-game-boy.png"} ,
        {id:8, title: "Notification", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
        {id:9, title: "School Info.", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
        {id:9, title: "Social Medias",image:"https://img.icons8.com/nolan/70/000000/job.png"} ,
      ]
    };
  }

sampleSendSMS = async ()=>{
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    console.log("do your SMS stuff here");
    // do your SMS stuff here
    const { result } = await SMS.sendSMSAsync(
      '0913075323',
      'My sample HelloWorld message'
    );
    console.log(result);
  } else {
    console.log("misfortune... there's no SMS available on this device");
    // misfortune... there's no SMS available on this device
  }
}

  onComposeSms = async () => {
    if (this.state.smsServiceAvailable) {
      await SMS.sendSMSAsync("0913075323","hello andy");
    }
  };
  clickEventListener= () => {
    
    // Alert.Alert(item.title)
    // this.onComposeSms();
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Send SMS App Sms Permission',
          message:
            'Send SMS App needs access to your inbox ' +
            'so you can send messages in background.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) 
      {
        //DirectSms.sendDirectSms(mobileNumber, bodySMS);
        this.sendSMS();
        alert('SMS sent');
      } else {
        alert('SMS permission denied123');
      }
    } catch (error) {
      console.warn(error);
      alert(error);
    }
  }

  sendSMS = () => {
    console.log('sendSMS123');
    // alert('clicked');
    SendSMS.send({
        body: 'Hello romi you have done well !',
        recipients: ['0913075323'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
        if (completed) {
            console.log('SMS Sent Completed');
        } else if (cancelled) {
            console.log('SMS Sent Cancelled');
        } else if (error) {
            console.log('Some error occured');
        }
        else{
          console.log(error);
        }
    });
    console.log("...again.")
}
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} 
              onPress={() => {this.sampleSendSMS()}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});   
