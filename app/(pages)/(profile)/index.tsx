import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const ProfilePage: React.FC = ({ navigation }: any) => {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen);
    };

    return (
        <View style={tw`flex-1 bg-gray-900 p-4`}>
            <View style={tw`flex-row items-center mb-6`}>
                <Image source={{ uri: 'https://picsum.photos/200/300' }} style={tw`w-16 h-16 rounded-full mr-4`} />
                <View>
                    <Text style={tw`text-white text-lg font-bold`}>Лола Ахмедова</Text>
                    <Text style={tw`text-gray-400`}>+998 93 123-45-67</Text>
                </View>
            </View>

            <View
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="share-alt" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Поделиться</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </View>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('PaymentMethods')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="credit-card" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Способы оплаты</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('History')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="history" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>История записей</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('Profile')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="user" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Профиль</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('Help')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="info-circle" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Справка</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('Notifications')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="bell" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Уведомления</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('LoyaltyCard')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="credit-card" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Карта лояльности</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg mb-2`}
                onPress={() => navigateTo('Settings')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="cogs" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Настройки</Text>
                </View>
                <FontAwesome name="chevron-right" size={20} color="#E74C3C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`flex-row justify-between items-center bg-gray-700 p-4 rounded-lg`}
                onPress={() => navigateTo('Logout')}
            >
                <View style={tw`flex-row items-center`}>
                    <FontAwesome name="sign-out" size={20} color="#E74C3C" />
                    <Text style={tw`text-white ml-4`}>Выйти</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePage;
