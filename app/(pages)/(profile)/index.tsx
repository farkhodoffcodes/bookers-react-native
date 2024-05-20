import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

interface AccordionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={tw`mb-2`}>
      <TouchableOpacity
        style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg`}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={tw`flex-row items-center`}>
          <FontAwesome name={"home"} size={20} color="#E74C3C" />
          <Text style={tw`text-white ml-4`}>{title}</Text>
        </View>
        <FontAwesome name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color="#E74C3C" />
      </TouchableOpacity>
      {expanded && <View style={tw`p-4 bg-gray-800 rounded-lg mt-2`}>{children}</View>}
    </View>
  );
};

const ProfilePage: React.FC = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      <View style={tw`flex-row items-center mb-6`}>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={tw`w-16 h-16 rounded-full mr-4`} />
        <View>
          <Text style={tw`text-white text-lg font-bold`}>Лола Ахмедова</Text>
          <Text style={tw`text-gray-400`}>+998 93 123-45-67</Text>
        </View>
      </View>
      <Accordion title="Поделиться" icon="share-alt">
        <Text style={tw`text-white`}>Поделиться информацией о профиле.</Text>
      </Accordion>
      <Accordion title="Способы оплаты" icon="credit-card">
        <Text style={tw`text-white`}>Настройте способы оплаты.</Text>
      </Accordion>
      <Accordion title="История записей" icon="history">
        <Text style={tw`text-white`}>Посмотреть историю записей.</Text>
      </Accordion>
      <Accordion title="Профиль" icon="user">
        <Text style={tw`text-white`}>Информация о профиле.</Text>
      </Accordion>
      <Accordion title="Справка" icon="info-circle">
        <Text style={tw`text-white`}>Получите справочную информацию.</Text>
      </Accordion>
      <Accordion title="Уведомления" icon="bell">
        <Text style={tw`text-white`}>Настройки уведомлений.</Text>
      </Accordion>
      <Accordion title="Карта лояльности" icon="credit-card">
        <Text style={tw`text-white`}>Информация о карте лояльности.</Text>
      </Accordion>
      <Accordion title="Настройки" icon="cogs">
        <Text style={tw`text-white`}>Настройте ваш аккаунт.</Text>
      </Accordion>
      <TouchableOpacity style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mt-2`}>
        <View style={tw`flex-row items-center`}>
          <FontAwesome name="sign-out" size={20} color="#E74C3C" />
          <Text style={tw`text-white ml-4`}>Выйти</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
