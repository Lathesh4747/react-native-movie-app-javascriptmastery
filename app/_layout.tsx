import { Stack } from "expo-router";
import './global.css'
export default function RootLayout() {
  return <Stack>
  {/* This is hide for that folder root name  */}

    <Stack.Screen
  name="(tabs)"
  options={{headerShown:false}} 
  
  />;
  {/* This is hide for that folder root name  */}
  <Stack.Screen 
  name="movies/[id]"
  options={{headerShown:false}} 
  />
    
  </Stack> 
}
