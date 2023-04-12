
import React from 'react';
import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import BlackM from './Black';
import DeathM from './Death';
import ThrashM from './Thrash';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Black Metal" component={BlackM} options={{tabBarIcon:({color, size})=><MaterialCommunityIcons name="music-box" size={size} color={color} />}}/>

      <Tab.Screen name="Death Metal" component={DeathM} options={{tabBarIcon:({color, size})=><MaterialCommunityIcons name="music-box-multiple-outline" size={size} color={color} />}}/>

      <Tab.Screen name="Thrash Metal" component={ThrashM} options={{tabBarIcon:({color, size})=><MaterialCommunityIcons name="music-box-outline" size={size} color={color} />}}/>
    </Tab.Navigator>
  );
} 