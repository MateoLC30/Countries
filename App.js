import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  {HomeScreen}  from "./screens/HomeScreen";
import  {SecondScreen, coun}  from "./screens/SecondScreen";

const Stack = createStackNavigator()


export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}
      options={{
        title: 'Countries',
        headerStyle: {backgroundColor: '#A0A0A0'},
        headerTitleStyle: {color: '#ffffff'},
      }}/>
      <Stack.Screen name="SecondScreen" component={SecondScreen} 
      options={({route}) => ({
        title: route.params.name,
        headerStyle: {backgroundColor: '#A0A0A0'},
        headerTitleStyle: {color: '#ffffff'},
      })} />
    </Stack.Navigator>
  </NavigationContainer>
);}
