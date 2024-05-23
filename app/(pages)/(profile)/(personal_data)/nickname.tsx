import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NotificationNav from '@/components/navigation/notification_nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import CustomInput from '@/components/inputs/nickname_input'

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
                contentContainerStyle={{ paddingBottom: 20, alignItems: 'center' }}
            >
                <CustomInput />
            </ScrollView>
        </View>
    )
}

export default NickName