import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/(buttons)';
import ChatList from './(chat_base)';

const ChatSupport = () => {
    const handlePress = () => {
        // Tugma bosilganda amalga oshiriladigan funksiya
        console.log('Support button pressed');
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-gray-900 p-4`}>
            {0 &&
                <View>
                    <Text style={tw`text-white text-2xl font-bold mb-8`}>Чат</Text>
                    <Ionicons name="chatbubble-ellipses-outline" size={80} color="gray" style={tw`mb-8`} />
                    <Text style={tw`text-white text-lg font-bold mb-2`}>Поддержка Bookers</Text>
                    <Text style={tw`text-gray-400 text-center mb-8`}>Свяжитесь с нами когда вам будет удобно</Text>
                    <CustomButton
                        title="Написать в поддержку"
                        backgroundColor="#A42E2B"
                        textColor="#FFFFFF"
                    // onPress={handlePress}
                    />
                </View>
            }

            <ChatList />
        </View>
    );
};

export default ChatSupport;
