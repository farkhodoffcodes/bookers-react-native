import { View, ScrollView } from 'react-native'
import React from 'react'
import NotificationNav from '@/components/navigation/notification_nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import CustomCalendar from '@/components/(calendar)'

const UserDate = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-[#1E1E1E] flex-1 px-3 min-h-screen">
            <SafeAreaView>
                <NotificationNav
                    name="Date"
                    deleteIcon={false}
                    backIcon={() => navigation.goBack()}
                />
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <CustomCalendar />
            </ScrollView>
        </View>
    )
}

export default UserDate