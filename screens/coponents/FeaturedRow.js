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
        id='1'
        imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae'
        title='Test Name'
        rating='4'
        gener='Indian'
        address='Modhera Road'
        short_description='All dishes'
        dishes='Dal Bati'
        long='20'
        lat='30'/>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
