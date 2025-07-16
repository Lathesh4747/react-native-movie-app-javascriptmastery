import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        {/* hide that file name  */}
        <Tabs.Screen
        name="index"
        options={{
            title:'Home',
            headerShown:false
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