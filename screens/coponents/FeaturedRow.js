import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {
  ArrowRightIcon
} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard.js'
const FeaturedRow = ({ id, title, description }) => {

  return (
    <View>
      <View className='flex-row mt-4 items-center justify-between px-4'>
        <Text className='text-lg font-bold'>{title}</Text>
        <ArrowRightIcon size={25} color='#DC0000'/>
      </View>
      <Text className='text-xs text-gray-500 px-4' >{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant Cards */}
        <RestaurantCard
        id=''
        imgUrl=''
        title=''
        rating=''
        gener=''
        address=''
        short_description=''
        dishes=''
        long=''
        lat=''/>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
