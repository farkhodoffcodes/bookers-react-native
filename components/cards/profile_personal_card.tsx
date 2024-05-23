import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface IProfilePersonalCardProps {
    label: string;
    value: string;
    borderBottom?: boolean;
    item?: any;
}

const ProfilePersonalCard: React.FC<IProfilePersonalCardProps> = ({
    label,
    value,
    borderBottom,
    item
}) => {
    const router = useRouter()
    return (
        <TouchableWithoutFeedback
            onPress={() => router.push({
                pathname: item.link,
                params: { item }
            })}
        >
            <View className={`w-full flex-row justify-between p-4 bg-[#B9B9C9] ${borderBottom ? '' : 'border-b-2 border-[#949494a6]'}`}>
                <View className='flex-row justify-between items-center w-[90%]'>
                    <Text className='text-base font-bold text-black opacity-90'>{label}</Text>
                    <Text className='text-base font-semibold text-[#828282]'>{value}</Text>
                </View>
                <Feather name="chevron-right" size={25} color="#828282" style={{ transform: 'translateY(2px)' }} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProfilePersonalCard