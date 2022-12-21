import { View, Text, Button, Image, SafeAreaView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import img from '../assets/icons8-food-delivery-64.png'
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,

} from "react-native-heroicons/outline";
import { ScrollView } from 'react-native';
import About from './About';
import { SearchBar } from 'react-native-screens';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Test',
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-4'>
      {/* Header */}
      <View
        className='flex-row pb-3 mt-3 items-center space-x-3 mx-4'
      >
        <Image
          source={img}
          className='h-10 w-10 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='text-bold text-gray-500 text-xs'>
            Deliver Now!
          </Text>
          <Text className='text-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} />
          </Text>
        </View>
        <UserIcon size={35} color='#DC0000' />
      </View>

      {/* SearchBar */}
      <View>
        <View className='flex-row bg-gray-300 mx-4 mt-3 p-3 space-x-2 rounded-xl items-center'>
          <MagnifyingGlassCircleIcon color='gray' />
          <TextInput placeholder='Enter Dish Name' />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen