// Card.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'; //tailwindcss-react-native

type Props = {
    name: string;
    specialty: string;
    location: string;
    nextAppointment: string;
    orders: number;
    clients: number;
    rating: number;
};

const Card: React.FC<Props> = ({ name, specialty, location, nextAppointment, orders, clients, rating }) => {
    return (
        <View style={tw`bg-gray-100 p-4 rounded-lg shadow-md`}>
            <View style={tw`flex-row items-center`}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/50' }}
                    style={tw`w-12 h-12 rounded-full mr-4`}
                />
                <View>
                    <Text style={tw`text-lg font-bold mb-2`}>{name}</Text>
                    <Text style={tw`text-sm text-gray-600`}>{specialty}</Text>
                </View>
                <View style={tw` items-center mt-2 p-3`}>
                <Text style={tw`text-2xl text-red-800`}>{'★'.repeat(rating)}</Text>
                 <Text style={tw` text-gray-600 `}>{orders} заказов, {clients} клиентов</Text>     
                </View>
            </View>
            <Text style={tw`text-sm text-gray-600  mb-2`}>{location}</Text>
            <Text style={tw`text-sm text-black font-bold font-sans`}>Ближайшая запись: {nextAppointment}</Text>
            <TouchableOpacity style={tw`bg-red-800 rounded-xl mt-4 py-3 px-2`} onPress={() => alert('Записаться')}>
                <Text style={tw`text-white text-center`}>Записаться</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Card;
