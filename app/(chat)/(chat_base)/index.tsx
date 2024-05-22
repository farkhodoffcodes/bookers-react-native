import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ChatCard from '../userCard/card';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useChatStore } from '../../(state_managment)/zustand/chat/useChatStore';

const ChatList: React.FC = () => {
    const messages = useChatStore((state) => state.messages);
    const deleteMessages = useChatStore((state) => state.deleteMessages);

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const navigation = useNavigation();

    const handleLongPress = (id: string) => {
        if (!showDeleteButton) {
            setSelectedIds([id]);
            setShowDeleteButton(true);
        }
    };

    const handlePress = (id: string) => {
        let updatedSelectedIds;

        if (showDeleteButton) {
            if (selectedIds.includes(id)) {
                updatedSelectedIds = selectedIds.filter((selectedId) => selectedId !== id);
            } else {
                updatedSelectedIds = [...selectedIds, id];
            }
            setSelectedIds(updatedSelectedIds);
            if (updatedSelectedIds.length === 0) {
                setShowDeleteButton(false);
            }
        } else {
            navigation.navigate('(chat)/(chat_detail)', { messageId: id });
        }
    };

    const handleDelete = () => {
        deleteMessages(selectedIds);
        setSelectedIds([]);
        setShowDeleteButton(false);
    };

    return (
        <View style={tw`flex-1 bg-gray-900 w-full`}>
            <TextInput
                style={tw`bg-gray-700 rounded-lg p-3 mb-4 text-white py-4`}
                placeholder="Поиск сообщений"
                placeholderTextColor="#aaa"
            />
            {showDeleteButton && (
                <View style={tw`flex-row justify-between mb-2`}>
                    <View style={tw`flex-row justify-center items-center`}>
                        <Text style={tw`text-gray-400 mr-3 text-xl`}>{selectedIds.length}</Text>
                        <MaterialIcons style={tw`text-gray-400`} name="cancel" size={24} color="black" />
                    </View>
                    <Button title="Delete" onPress={handleDelete} color="#E74C3C" />
                </View>
            )}
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <ChatCard
                        item={item}
                        onPress={() => handlePress(item.id)}
                        onLongPress={() => handleLongPress(item.id)}
                        isSelected={selectedIds.includes(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ChatList;
