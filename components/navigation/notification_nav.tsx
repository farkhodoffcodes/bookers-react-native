import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface INotificationNavProps {
    name: string;
    deleteIcon: boolean;
    backIcon: () => void;
    toggleModal?: () => void;
}

const NotificationNav: React.FC<INotificationNavProps> = ({
    backIcon,
    toggleModal,
    name,
    deleteIcon
}) => {
    return (
        <View className="flex-row justify-between items-center mx-3 my-5">
            <Feather name="chevron-left" size={30} color="white" onPress={backIcon} />
            <Text className="text-white text-xl">{name}</Text>
            {deleteIcon
                ? <MaterialIcons name="delete" size={30} color="white" onPress={toggleModal} />
                : <Text></Text>
            }
        </View>
    )
}

export default NotificationNav