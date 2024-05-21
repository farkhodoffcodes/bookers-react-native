// ModalButton.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Props = {
  title: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
};

const ModalButton: React.FC<Props> = ({ title, backgroundColor, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        tw`w-[100%] py-3 rounded-lg`,
        { backgroundColor: backgroundColor }
      ]}
      onPress={onPress}
    >
      <Text style={[{
        color: textColor,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
      }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
