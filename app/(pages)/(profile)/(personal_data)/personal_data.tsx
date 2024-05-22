import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationNav from '@/components/navigation/notification_nav';
import { useNavigation } from 'expo-router';
import ModalButton from '@/components/(buttons)/modal-btn';
import ProfilePersonalCard from '@/components/cards/profile_personal_card';

interface ProfilePersonalCard {
    id: number;
    label: string;
    value: string;
}

const profileData: ProfilePersonalCard[] = [
    {
        id: 1,
        label: 'Никнейм',
        value: 'Натали'
    },
    {
        id: 2,
        label: 'Имя Фамилия',
        value: 'Дайер Наталия'
    },
    {
        id: 3,
        label: 'Дата рождения',
        value: '27/10/1998'
    },
    {
        id: 4,
        label: 'Номер телефона',
        value: '+99 893 171-63-80'
    },
    {
        id: 5,
        label: 'Регион',
        value: 'Ташкент'
    },
    {
        id: 6,
        label: 'Телеграм',
        value: '@natalia'
    },
]

const PersonalData: React.FC = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Kamera rulxati kerak!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View className="bg-[#1E1E1E] flex-1 px-3 min-h-screen">
            <SafeAreaView>
                <NotificationNav
                    name="Личные данные"
                    deleteIcon={false}
                    backIcon={() => navigation.goBack()}
                />
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 70, alignItems: 'center' }}
            >
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.profileImage} />
                    ) : (
                        <Text style={styles.imagePlaceholder}>Rasm yuklash</Text>
                    )}
                </TouchableOpacity>
                <View className='rounded-3xl overflow-hidden mt-5'>
                    {profileData.length > 0 && profileData.map(item => (
                        <ProfilePersonalCard
                            key={item.id}
                            label={item.label}
                            value={item.value}
                            borderBottom={profileData.length === item.id ? true : false}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <ModalButton
                    backgroundColor='#9C0A35'
                    textColor='white'
                    title='Сохранить'
                    key={1}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    imagePlaceholder: {
        color: '#ffffff',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        alignItems: 'center'
    }
});

export default PersonalData;
