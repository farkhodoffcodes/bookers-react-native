import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons'; // Ikonlar uchun
import tw from 'tailwind-react-native-classnames';


type ContactInfoProps ={
    phone: string;
    instagram: string;
    telegram: string;
  }

const Contact: React.FC<ContactInfoProps> = ({ phone, instagram, telegram }) => {
  return (
    <View className='bg-[#B9B9C9] rounded-2xl p-6'>
    <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)} style={tw`flex-row items-center mb-2 font-bold text-black`}>
      <AntDesign name="phone " size={26} color="#9C0A35" />
      <Text style={tw`ml-2 text-blue-700`}>{phone}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${instagram}`)} style={tw`flex-row items-center mb-2 font-bold text-black`}>
      <FontAwesome name="instagram" size={26} color="#9C0A35" />
      <Text style={tw`ml-2 text-gray-700`}>@{instagram}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL(`https://t.me/${telegram}`)} style={tw`flex-row items-center font-bold text-black`}>
      <Feather name="send" size={26} color="#9C0A35" />
      <Text style={tw`ml-2 text-gray-700`}>@{telegram}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Contact;