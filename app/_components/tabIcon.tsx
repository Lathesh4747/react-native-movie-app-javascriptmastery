import { View, Text } from 'react-native'
import React from 'react'

const tabIcon = () => {
  return (
   <ImageBackground
                 source={images.highlight}
                 className='flex ml-4 min-w-[100px] flex-row  p-3 rounded-full gap-2 min-h-16 flex-1 overflow-hidden  justify-center items-center'
                 >
           <Image className='font-bold w-5 text-black' source={icons.home} />
           <Text className='font-semibold text-black '>Home</Text>
       </ImageBackground>
  )
}

export default tabIcon