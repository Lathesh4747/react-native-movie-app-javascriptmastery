import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

const Search = () => {
  return (
   
  
       <View className=' flex-row  bg-[#2a1d6b] justify-start items-center rounded-full px-5 py-4 mt-3' >
        <Image 
        source={icons.search}
        />
        <TextInput
        onPress={()=>{}}
        placeholder='Search for movie'
        value=''
        onChangeText={()=>{}}
        placeholderTextColor='#a8b5db' 
        className='flex-1 ml-2 text-white w-6'

        />
       </View>
      
   
  )
}

export default Search