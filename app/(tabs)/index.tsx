import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/Services/api";
import useFetch from "@/Services/useFetch";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import MovieCard from "../compontents/MovieCard";
import Search from "../compontents/Search";

export default function Index() {
  const {data:Movies,loading:MoviesLoading , error:erroeMessage , } = useFetch(()=>fetchMovie({query:"Marvel"}))
  return (
    <View
      className='flex-1  bg-[#1f1652] '>
        {/* Bg images */}
        <Image 
        source={images.bg}
        className="w-full absolute z-0"  />

          <ScrollView   className="flex-1 px-5 " 
            >

                <Image 
                className="w-12 h-10 mt-20 mb-5 mx-auto"
                source={icons.logo}/>

       {MoviesLoading?
        <ActivityIndicator 
        size='large'
        color='#000ff'
        className="mt-10 self-center"
        /> 
       : erroeMessage?(
        <Text className="text-white" >Error : { erroeMessage?.message }</Text>
       ) : 
       <View className="flex-1 " >
        <Search/>
        <Text className="text-white font-bold text-xl mb-5 mt-5" >Latest Movie</Text>
          <FlatList
          data={Movies}
          renderItem={({item})=>(
              <>
              
              <MovieCard {...item} />
              </>
          )}
          keyExtractor={ (item)=>item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent:'flex-start',
            gap:20,
            paddingRight:5,
            marginBottom:10
          }}
          scrollEnabled={false}
          />
       </View> 
       }
   
     </ScrollView>
    </View>
  );
}
