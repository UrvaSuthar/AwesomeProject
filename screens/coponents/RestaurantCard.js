import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const RestaurantCard = ({ 
  id,
  imgUrl,
  title,
  rating,
  gener,
  address,
  short_description,
  dishes,
  long,
  lat
 }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: '32%', margin: 8 }}
    >
      
    </TouchableOpacity>
  );
};

export default RestaurantCard;
