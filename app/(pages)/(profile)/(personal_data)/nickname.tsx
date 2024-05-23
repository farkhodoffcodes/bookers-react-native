import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NotificationNav from '@/components/navigation/notification_nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import CustomInput from '@/components/inputs/nickname_input'
import ModalButton from '@/components/(buttons)/modal-btn'

const NickName = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-[#1E1E1E] flex-1 px-3 min-h-screen">
            <SafeAreaView>
                <NotificationNav
                    name="Никнейм"
                    deleteIcon={false}
                    backIcon={() => navigation.goBack()}
                />
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <Text className='text-2xl text-white font-bold mt-2 mb-4'>Придумайте свой</Text>
                <CustomInput
                    key={1}
                    placeholder='Никнейм'
                    valLength={5}
                    i18nIsDynamicList
                />
                <Text className='text-base text-white mt-5 opacity-70'>Будем использовать вместо вашего имени</Text>
            </ScrollView>
            <View className='absolute bottom-5 right-3 left-3'>
                <ModalButton
                    backgroundColor='#9C0A35'
                    title='Готово'
                    textColor='white'
                    key={1}
                    i18nIsDynamicList
                />
            </View>
        </View>
    )
}

export default NickName