import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

import App from './App'
import DrawerContent from './src/drawercontent'

export default function Route (){
    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="App"
                drawerContent={()=> <DrawerContent/>} >
                <Drawer.Screen name="App" component={App} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}