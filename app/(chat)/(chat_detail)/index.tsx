import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useChatStore } from '../../(state_managment)/zustand/chat/useChatStore';

type ChatDetailsRouteProp = RouteProp<{ params: { messageId: string } }, 'params'>;

const ChatDetails: React.FC = () => {
    const route = useRoute<ChatDetailsRouteProp>();
    const { messageId } = route.params;

    const message = useChatStore((state) =>
        state.messages.find((msg) => msg.id === messageId)
    );

    return (
        <View style={styles.container}>
            {message ? (
                <>
                    <Image source={{ uri: message.avatar }} style={styles.avatar} />
                    <Text style={styles.name}>{message.name}</Text>
                    <Text style={styles.message}>{message.message}</Text>
                    <Text style={styles.time}>{message.time}</Text>
                </>
            ) : (
                <Text>Xabar topilmadi</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        marginBottom: 8,
    },
    time: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ChatDetails;
