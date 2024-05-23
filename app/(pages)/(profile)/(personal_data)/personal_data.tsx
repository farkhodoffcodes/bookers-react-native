import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationNav from '@/components/navigation/notification_nav';
import { useNavigation } from 'expo-router';
import ModalButton from '@/components/(buttons)/modal-btn';
import ProfilePersonalCard from '@/components/cards/profile_personal_card';
import GenderCard from '@/components/cards/gender_card';
import ModalComponent from '@/components/(modals)/bottom-modal';
import CenteredModal from '@/components/(modals)/centeredModal';
import { MaterialIcons } from '@expo/vector-icons';

interface ProfilePersonalCard {
    id: number;
    label: string;
    value: string;
    link: string
}

const profileData: ProfilePersonalCard[] = [
    {
        id: 1,
        label: 'Никнейм',
        value: 'Натали',
        link: '/(pages)/(profile)/(personal_data)/nickname'
    },
    {
        id: 2,
        label: 'Имя Фамилия',
        value: 'Дайер Наталия',
        link: '/(pages)/(profile)/(personal_data)/fullname'
    },
    {
        id: 3,
        label: 'Дата рождения',
        value: '27/10/1998',
        link: '/(pages)/(profile)/(personal_data)/'
    },
    {
        id: 4,
        label: 'Номер телефона',
        value: '+99 893 171-63-80',
        link: '/(pages)/(profile)/(personal_data)/'
    },
    {
        id: 5,
        label: 'Регион',
        value: 'Ташкент',
        link: '/(pages)/(profile)/(personal_data)/'
    },
    {
        id: 6,
        label: 'Телеграм',
        value: '@natalia',
        link: '/(pages)/(profile)/(personal_data)/'
    },
]

const PersonalData: React.FC = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<string>('male');
    const [isModal, setIsModal] = useState<boolean>(false)
    const [isDeleteImgModal, setIsDeleteImgModal] = useState<boolean>(false)

    const openModal = () => setIsModal(!isModal)
    const openDeleteModal = () => setIsDeleteImgModal(!isDeleteImgModal)

    // ======================= gallery dan img yuklash uchun functions =======================
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Kamera rulxati kerak!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) setImage(result.assets[0].uri)
    };

    // ======================= camera dan img yuklash uchun functions =======================
    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Kamera ruxsati kerak!');
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) setImage(result.assets[0].uri)
    };

    // ======================= rasmni uchirish uchun function =======================
    const deletePhoto = () => {
        setImage(null);
        openDeleteModal()
    }

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
                contentContainerStyle={{ paddingBottom: 20, alignItems: 'center' }}
            >
                {/* =================== profile image =================== */}
                <TouchableOpacity style={styles.imageContainer} onPress={openModal}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.profileImage} />
                    ) : (
                        <Text style={styles.imagePlaceholder}>Rasm yuklash</Text>
                    )}
                </TouchableOpacity>

                {/*===================== profile info ========================== */}
                <View className='rounded-3xl overflow-hidden mt-5'>
                    {profileData.length > 0 && profileData.map(item => (
                        <ProfilePersonalCard
                            key={item.id}
                            item={item}
                            label={item.label}
                            value={item.value}
                            borderBottom={profileData.length === item.id ? true : false}
                        />
                    ))}
                </View>
                {/* ==================== gender section =============================== */}
                <View className='w-full mt-5 mb-10'>
                    <Text className='text-white text-xl font-bold mb-3'>Ваш пол</Text>
                    <View className='p-5 rounded-3xl bg-[#B9B9C9]'>
                        <GenderCard
                            label="Мужской"
                            value="male"
                            selected={selectedGender === 'male'}
                            onSelect={setSelectedGender}
                        />
                        <GenderCard
                            label="Женский"
                            value="female"
                            selected={selectedGender === 'female'}
                            onSelect={setSelectedGender}
                        />
                    </View>
                </View>
                {/* ====================== save button ========================== */}
                <ModalButton
                    backgroundColor='#9C0A35'
                    textColor='white'
                    title='Сохранить'
                    key={1}
                />

                {/* ======================= img modal component ============================ */}
                <ModalComponent
                    key={1}
                    isBottomModal={isModal}
                    toggleBottomModal={openModal}
                    children={
                        <>
                            <View className='w-full border-b border-[#828282] pb-2'>
                                <TouchableOpacity onPress={() => {
                                    takePhoto();
                                    openModal();
                                }}>
                                    <Text className='text-white text-lg mb-3 font-bold tracking-wide'>Сделать снимок</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    pickImage();
                                    openModal();
                                }}>
                                    <Text className='text-white text-lg mb-3 font-bold tracking-wide'>Выбрать из галереи</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (image) {
                                            openDeleteModal();
                                            openModal();
                                        }
                                    }}
                                    disabled={!image}
                                >
                                    <Text className={`${!image ? 'text-[#58454a]' : 'text-[#9C0A35]'} text-lg mb-3 font-bold tracking-wide`}>Удалить фотографию</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableWithoutFeedback onPress={openModal}>
                                <Text className='text-[#9C0A35] text-lg font-bold tracking-wide mt-3'>Отмена</Text>
                            </TouchableWithoutFeedback>
                        </>
                    }
                />

                {/* ======================= delete img modal ================================== */}
                <CenteredModal
                    key={1}
                    btnRed='Да'
                    btnWhite='Отмена'
                    isFullBtn={true}
                    children={
                        <View className="items-center justify-center">
                            <MaterialIcons name="delete" size={100} color="#9C0A35" />
                            <Text className="text-white text-base mt-1 opacity-80 text-center">
                                Вы хотите удалить фотографию?
                            </Text>
                        </View>
                    }
                    isModal={isDeleteImgModal}
                    toggleModal={openDeleteModal}
                    onConfirm={deletePhoto}
                />
            </ScrollView>
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
