import {  Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import tabIcon  from '../_components/tabIcon'
import Profile from './Profile'






const _layout = () => {
  return (
    <Tabs>
        {/* hide that file name  */}
        <Tabs.Screen 
                name="index"
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({focused})=>(
              
            )
        }}

      

        />
        <Tabs.Screen
        name='Search'
        options={{ headerShown:false }}

        />
        <Tabs.Screen
        name='Saved'
        options={{ headerShown:false }}
        
        />
        <Tabs.Screen
        name='Profile'
        options={{ headerShown:false }}
        
        />
    </Tabs>
  )
}

export default _layout