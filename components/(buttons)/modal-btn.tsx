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
        tw`w-full py-3 rounded-2xl `,
        { backgroundColor: backgroundColor }
      ]}
      onPress={onPress}
    >
      <Text style={[{
        color: textColor,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
      }]}
      >
        {/* 34,37,38,39,43,44,45 */}
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
