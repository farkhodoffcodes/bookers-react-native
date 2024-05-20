// CustomButton.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Props = {
  title: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({ title, backgroundColor, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        tw`m-1 px-5 py-3 rounded-lg`,
        { backgroundColor: backgroundColor,   }
      ]}
      onPress={onPress}
    >
      <Text style={[{ color: textColor, textAlign: 'center' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
