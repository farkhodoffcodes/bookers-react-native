// CustomButton.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Props = {
  title: string;
  backgroundColor: string;
  textColor: string;
 
};

const CustomButton: React.FC<Props> = ({ title, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      style={[
        tw`w-[100%] px-9 py-4 rounded-xl`,
        { backgroundColor: backgroundColor,   }
      ]}
   
    >
      <Text style={[{ color: textColor, textAlign: 'center' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
