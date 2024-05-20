import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, Pressable, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';

interface Message {
    id: string;
    name: string;
    message: string;
    time: string;
    unread: number;
    avatar: string;
}

const initialMessages: Message[] = [
    {
        id: '1',
        name: 'Служба поддержки',
        message: 'Уважаемый клиент, мы при ...',
        time: '2:14 PM',
        unread: 1,
        avatar: 'https://example.com/support-avatar.png',
    },
    {
        id: '2',
        name: 'Натали',
        message: 'Не могли бы вы принять ме ...',
        time: '2:10 PM',
        unread: 1,
        avatar: 'https://example.com/natali-avatar.png',
    },
    {
        id: '3',
        name: 'Мелисара',
        message: 'Не могли бы вы принять ме ...',
        time: '10:16 PM',
        unread: 10,
        avatar: 'https://example.com/melisara-avatar.png',
    },
    {
        id: '4',
        name: 'Мадина',
        message: 'Вы: Не могли бы вы принять ...',
        time: 'Среда',
        unread: 0,
        avatar: 'https://example.com/madina-avatar.png',
    },
];

interface ChatCardProps {
    item: Message;
    onPress: (id: string) => void;
    onLongPress: (id: string) => void;
    isSelected: boolean;
}
const ChatCard: React.FC<ChatCardProps> = ({ item, onPress, onLongPress, isSelected }) => {

    const { name, message, time, unread, avatar } = item;

    return (
        <Pressable
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
                tw`flex-row bg-gray-500 rounded-xl p-5 mb-3 items-center`,
                isSelected && tw`bg-gray-700`,
            ]}
        >
            <View style={tw`relative`}>
                <Image source={{ uri: avatar }} style={tw`w-12 h-12 rounded-full mr-3`} />
                {isSelected &&
                    <AntDesign style={tw`text-xs text-white absolute right-2 bottom-0 bg-green-400 rounded-full flex justify-center w-4 h-4`} name="check" size={24} color="black" />
                }
            </View>
            <View style={tw`flex-1`}>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-dark font-bold`}>{name}</Text>
                    {unread > 0 && (
                        <View style={tw`bg-red-600 rounded-full px-2 py-1`}>
                            <Text style={tw`text-white text-xs font-bold`}>{unread}</Text>
                        </View>
                    )}
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`text-dark mt-1`}>{message}</Text>
                    <View style={tw`flex-row justify-between items-center mt-1 `}>
                        <Text style={tw`text-dark mr-2`}>{time}</Text>
                        {unread === 0 && <FontAwesome name="check" size={14} color="#ccc" />}
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default ChatCard