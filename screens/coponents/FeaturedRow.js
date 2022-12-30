import { View, Text } from 'react-native'
import React from 'react'
import {
  ArrowRightIcon
} from "react-native-heroicons/outline";
const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='flex-row space-x-2 items-center p-3 m-2'>
        <Text className = 'text-xl'>{title}</Text>
        <ArrowRightIcon size={25}/>
      </View>
    </View>
  )
}

export default FeaturedRow