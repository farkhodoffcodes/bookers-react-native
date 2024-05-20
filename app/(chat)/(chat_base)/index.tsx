import React from 'react';
import { View, Text, Image, FlatList, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const messages = [
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
interface obg {
    name: string,
    message: string,
    time: string,
    unread: number,
    avatar: string
}

const ChatCard = ({ name, message, time, unread, avatar }: obg) => {
    return (
        <View style={tw`flex-row bg-gray-800 rounded-lg p-3 mb-3 items-center`}>
            <Image source={{ uri: avatar }} style={tw`w-12 h-12 rounded-full mr-3`} />
            <View style={tw`flex-1`}>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-white font-bold`}>{name}</Text>
                    {unread > 0 && (
                        <View style={tw`bg-red-600 rounded-full px-2 py-1`}>
                            <Text style={tw`text-white text-xs font-bold`}>{unread}</Text>
                        </View>
                    )}
                </View>
                <Text style={tw`text-gray-400 mt-1`}>{message}</Text>
                <View style={tw`flex-row justify-between items-center mt-1`}>
                    <Text style={tw`text-gray-400`}>{time}</Text>
                    {unread === 0 && (
                        <FontAwesome name="check" size={14} color="#ccc" />
                    )}
                </View>
            </View>
        </View>
    );
};

const ChatList = () => {
    return (
        <View style={tw`flex-1 bg-gray-900 p-4`}>
            <TextInput
                style={tw`bg-gray-700 rounded-lg p-3 mb-4 text-white`}
                placeholder="Поиск сообщений"
                placeholderTextColor="#aaa"
            />
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <ChatCard
                        name={item.name}
                        message={item.message}
                        time={item.time}
                        unread={item.unread}
                        avatar={item.avatar}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ChatList;
