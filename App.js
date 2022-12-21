import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
// import { TailwindProvider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from "./screens/HomeScreen.js"
import About from "./screens/About.js"
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <TailwindProvider> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* </TailwindProvider> */}
    </NavigationContainer>
  );
}