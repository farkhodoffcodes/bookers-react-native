import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ExploreScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-900`}>
      <Text style={tw`text-white`}>Explore Screen</Text>
    </View>
  );
};

export default ExploreScreen;
