import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ServicesScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-900`}>
      <Text style={tw`text-white`}>Services Screen</Text>
    </View>
  );
};

export default ServicesScreen;
