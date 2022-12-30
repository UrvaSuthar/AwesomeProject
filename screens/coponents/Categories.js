import { View,ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
    }}
    >
      {/* CategoryCard */}
      <CategoryCard 
      imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae' 
      title='testing1'
      />
      <CategoryCard 
      imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae' 
      title='testing1'
      />
      <CategoryCard 
      imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae' 
      title='testing1'
      />
      <CategoryCard 
      imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae' 
      title='testing1'
      />
      <CategoryCard 
      imgUrl='https://img.freepik.com/free-vector/hand-drawn-delicious-indian-cuisine_23-2149336169.jpg?w=1800&t=st=1671703475~exp=1671704075~hmac=3cf1e32160c27bcf8af7822468b52a969afeb2916f4b80b71423b267f78005ae' 
      title='testing1'
      />

    </ScrollView>
  )
}

export default Categories