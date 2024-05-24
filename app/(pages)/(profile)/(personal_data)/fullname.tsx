import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NotificationNav from '@/components/navigation/notification_nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import CustomInput from '@/components/inputs/nickname_input'
import ModalButton from '@/components/(buttons)/modal-btn'

const FullName = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-[#1E1E1E] flex-1 px-3 min-h-screen">
            <SafeAreaView>
                <NotificationNav
                    name="Имя Фамилия"
                    deleteIcon={false}
                    backIcon={() => navigation.goBack()}
                />
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <Text className='text-2xl text-white font-bold mt-2 mb-4'>
                    Введите свое имя и фамилию
                </Text>
                <View className='mb-5'>
                    <CustomInput
                        key={1}
                        placeholder='Last Name'
                        valLength={3}
                        i18nIsDynamicList
                    />
                </View>
                <View className='mb-5'>
                    <CustomInput
                        key={2}
                        placeholder='First Name'
                        valLength={3}
                        i18nIsDynamicList
                    />
                </View>
            </ScrollView>
            <View className='absolute bottom-5 right-3 left-3'>
                <ModalButton
                    key={1}
                    title='Готово'
                    textColor='white'
                    backgroundColor='#9C0A35'
                    i18nIsDynamicList
                />
            </View>
        </View>
    )
}

export default FullName