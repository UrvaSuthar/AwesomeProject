import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {
  ArrowRightIcon
} from "react-native-heroicons/outline";
const FeaturedRow = ({ id, title, description }) => {
  

  return (
    <View>
      <View className='flex-row mt-4 items-center justify-between px-4'>
        <Text className = 'text-lg font-bold'>{title}</Text>
        <ArrowRightIcon size={25}/>
      </View>
      <Text className = 'text-xs text-gray-500 px-4' >{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal :15,
      }}      
      >

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
