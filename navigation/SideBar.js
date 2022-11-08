import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Attendance from '../screens/Attendance';
import Calendar from '../screens/Calendar';
import ClassSchedule from '../screens/ClassSchedule';
import Conduct from '../screens/Conduct';
import GradeBook from '../screens/GradeBook';
import Notification from '../screens/Notification';
import Payment from '../screens/Payment';
import SchoolInformation from '../screens/SchoolInformation';
import SocialMediaLinks from '../screens/SocialMediaLinks';
import Setting from '../screens/Setting';
import Header from './Header';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <Header {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="GradeBook" component={GradeBook} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Attendance" component={Attendance} />
      <Drawer.Screen name="Conduct" component={Conduct} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="ClassSchedule" component={ClassSchedule} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="SchoolInformation" component={SchoolInformation} />
      <Drawer.Screen name="SocialMediaLinks" component={SocialMediaLinks} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  )
}

export default function SideBar() {
  return (
    // <NavigationContainer>
      <MyDrawer/>
    // </NavigationContainer>
  );
}