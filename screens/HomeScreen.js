import { View, Text, Button, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import img from '../assets/icons8-food-delivery-64.png'
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
  AdjustmentsHorizontalIcon

} from "react-native-heroicons/outline";
import Categories from './coponents/Categories';
import FeaturedRow from './coponents/FeaturedRow';



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
          className='h-10 w-10 bg-red-400 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='text-bold text-gray-500 text-xs'>
            Deliver Now!
          </Text>
          <Text className='text-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#DC0000' />
          </Text>
        </View>
        <UserIcon size={35} color='#DC0000' />
      </View>

      {/* SearchBar */}
      <View className='flex-row mx-4 pb-3 items-center space-x-3 '>
        <View className='flex-row flex-1 p-3 bg-gray-200 space-x-2 rounded-xl'>
          <MagnifyingGlassCircleIcon color='gray' />
          <TextInput placeholder='Enter Dish Name' keyboardType='default' />
        </View>
        <AdjustmentsHorizontalIcon color='#DC0000' />
      </View>


      {/* Body */}
      <ScrollView className='bg-gray-100'
      contentContainerStyle={{
        paddingBottom:100,
      }}
      >

        {/* Categories */}
        <Categories/>

        {/* FeaturedRow */}
        <FeaturedRow
        id='1'
        title='Deals For You'
        description='Deals!! Specialy Made For You!!'
        />
        <FeaturedRow
        id='2'
        title='Your Favrite Ones'
        description='Deals!! Specialy Made For You!!'
        />
        <FeaturedRow
        id='3'
        title='Check out! New Reastuarnts'
        description='Deals!! Specialy Made For You!!'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen