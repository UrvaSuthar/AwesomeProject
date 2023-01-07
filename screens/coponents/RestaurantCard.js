import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const RestaurantCard = ({ name, image, description }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: '32%', margin: 8 }}
    >
      <Card
        title={name}
        image={{ uri: image }}
        containerStyle={{
          borderRadius: 8,
          overflow: 'hidden',
        }}
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}
        imageStyle={{
          height: 120,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Text className="text-gray-600 text-sm">{description}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
