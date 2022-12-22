import { View,ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CatagoryCard'


const Categories = () => {
  return (
    <ScrollView>
      <Text className='text-center text-xl'>Categories</Text>
      {/* CategoryCard */}
      <CategoryCard/>
    </ScrollView>
  )
}

export default Categories