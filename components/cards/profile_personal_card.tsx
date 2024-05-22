import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

interface IProfilePersonalCardProps {
    label: string;
    value: string;
    borderBottom?: boolean;
}

const ProfilePersonalCard: React.FC<IProfilePersonalCardProps> = ({label, value, borderBottom}) => {
    return (
        <View className={`w-full flex-row justify-between p-4 bg-[#B9B9C9] ${borderBottom ? '' : 'border-b-2 border-[#949494a6]'}`}>
            <View className='flex-row justify-between items-center w-[90%]'>
                <Text className='text-base font-bold text-black opacity-90'>{label}</Text>
                <Text className='text-base font-semibold text-[#828282]'>{value}</Text>
            </View>
            <Feather name="chevron-right" size={25} color="#828282" style={{transform: 'translateY(2px)'}} />
        </View>
    )
}

export default ProfilePersonalCard