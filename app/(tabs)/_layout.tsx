import {  Text, ImageBackground, Image, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'






const TabIcon = ({focused,title,icon}:any) => {
  
    if(focused){
      return(
          <ImageBackground
                 source={images.highlight}
                 className='flex ml-4 mr-4 min-w-[90px] mt-4 flex-row  p-3 rounded-full gap-2 min-h-16 flex-1 overflow-hidden  justify-center items-center'
                 >
           <Image className='font-bold w-5' tintColor="#000000" source={icon} />
           <Text className='font-semibold text-black '>{title}</Text>
          </ImageBackground>
      )
     }
     return(
      <View>
        <Image className='font-bold w-5 mt-4' tintColor="#ffff" source={icon} />
      </View>
     )
    

    
  
}




const _layout = () => {
  return (
    <Tabs
    screenOptions={
      {
        tabBarShowLabel:false,
        tabBarItemStyle:{
          width:'100%',
          height:'100%',
        justifyContent:'center',
          alignItems:'center'
      },
        tabBarStyle:{
          backgroundColor:'#0f0D23',
          borderRadius:50,
          
          marginHorizontal:20,
          marginBottom:36,
          height:52,
          overflow:'hidden'
        }

      }
      
      
      
    }
    >
        {/* hide that file name  */}
        <Tabs.Screen 
                name="index"
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({focused})=>(
              <TabIcon focused ={focused} 
              title="Home" 
              icon ={icons.home} />
              
            )
        }}

      

        />
        <Tabs.Screen
        name='Search'
        options={{ headerShown:false,
          tabBarIcon:({focused})=>(
              <TabIcon focused ={focused} title="Search" icon ={icons.search} />

          )
         }}

        />
        <Tabs.Screen
        name='Saved'
        options={{ headerShown:false,
           tabBarIcon:({focused})=>(
              <TabIcon focused ={focused} title="Saved" icon ={icons.save} />

          )
         }}
        
        />
        <Tabs.Screen
        name='Profile'
        options={{ headerShown:false,
           tabBarIcon:({focused})=>(
              <TabIcon focused ={focused} title="Profile" icon ={icons.person} />

          )
         }}
        
        />
    </Tabs>
  )
}

export default _layout