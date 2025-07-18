import { icons } from '@/constants/icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({poster_path,original_title,release_date,vote_average}:Movie) => {
  return (
   
    <TouchableOpacity className='w-[30%]' >
        <Image 
        source={ {
             uri:poster_path ?
            `https://image.tmdb.org/t/p/w500${poster_path}` 
            : 
            `https://placehold.co/600x400`
        }}
        className='w-full h-56 rounded-lg '
        resizeMode='cover'
        />
        <Text numberOfLines={1} className='text-white text-sm mt-2' >
            {original_title}
        </Text>
        <View className='flex-row justify-start items-center gap-x-1' >
            <Image source={icons.star}  />
            <Text className='text-white text-sm font-bold'>{Math.round(vote_average/2)}</Text>
            
        </View>
        <Text className='text-sm text-white mt-2 font-bold' >{release_date?.split('-')[0]}</Text>
    </TouchableOpacity>
    
  )
}

export default MovieCard