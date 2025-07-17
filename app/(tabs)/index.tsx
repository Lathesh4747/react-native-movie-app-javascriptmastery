import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import Search from "../compontents/Search";

export default function Index() {
  return (
    <View
      
    className='flex-1  bg-[#1f1652] '
    >
      <Image 
      source={images.bg}
      className="w-full absolute z-0"  />
      <ScrollView   className="flex-1 px-5 " 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{minHeight:"100%", 
      paddingBottom:10}}  >
      <Image 
      className="w-12 h-10 mt-20 mb-5 mx-auto"
       source={icons.logo}/>
       <View className="flex-1 ml-4" >
        <Search/>
       </View>
      </ScrollView>
     
    </View>
  );
}
