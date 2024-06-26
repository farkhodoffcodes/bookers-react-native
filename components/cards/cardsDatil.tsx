import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import tw from 'tailwind-react-native-classnames';

type MasterCardProps = {
    name: string;
    alias: string;
    rating: number;
    location: string;
    imageUrl: string;
    orders: number;
    orderZakaz:string;
    orderKlent:string;
    clients: number;
    master: string;
    openChildComponent?:JSX.Element
    
};

const CardsDatail: React.FC<MasterCardProps> = ({
    name,
    alias,
    rating,
    location,
    orders,
    clients,
    imageUrl,
    master,
    orderKlent,
    orderZakaz,
    openChildComponent
}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <View key={i} style={[tw`flex-row text-sm`]}>
                    <Text style={i < rating ? tw`text-red-600` : tw`text-gray-400`}>★</Text>
                </View>
            );
        }
        return stars;
    };

    return (
        <View style={tw`bg-red`}>
            <View className="bg-[#B9B9C9] rounded-xl p-7 my-4 shadow-md">
                <View style={tw`flex-row items-center mb-5`}>
                    <Image source={{ uri: imageUrl }} style={tw`w-12 h-12 rounded-full mr-2`} />
                    <View style={tw`flex`}>
                        <View style={tw`flex-row flex-wrap items-center`}>
                            <Text style={tw`text-lg font-bold mr-2`}>{name}</Text>
                            <Text style={tw`bg-gray-300 rounded px-2 text-xs`}>{alias}</Text>
                        </View>
                        <Text style={tw`text-gray-700 text-sm`}>{master}</Text>
                    </View>
                    <View style={tw`items-end flex flex-row flex-wrap`}>
                        <View style={tw`flex-col flex items-start flex flex-wrap`}>
                            <View style={tw`flex-row justify-start `}>
                                {renderStars()}
                            </View>
                            <Text style={tw`text-sm text-gray-700`}>{orders} {orderZakaz} {clients}{orderKlent}</Text>
                        </View>
                    </View>
                </View>
                <Text style={tw`text-gray-700 `}>{location}
                </Text>
                <View className="flex flex-row mt-2">
                  <Text>{openChildComponent}</Text>
                  <Text>{openChildComponent}</Text>
                  <Text>{openChildComponent}</Text>
                </View>

            </View>
        </View>
    );
};

export default CardsDatail;
