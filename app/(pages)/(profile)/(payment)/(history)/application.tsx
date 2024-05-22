import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotificationNav from '@/components/navigation/notification_nav'
import { router, useNavigation } from 'expo-router'
import ServiceCard from '@/components/cards/servicesMenu'
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '@/components/(buttons)'

const Application = () => {
    const Click = () => {

    }
    const Page = () => {
        router.push('/serviceHistory')
    }
    const navigation = useNavigation()

    return (
        <View className='p-3'>
            <SafeAreaView>
                <NotificationNav name='Натали' backIcon={() => navigation.goBack()} deleteIcon={false} />
            </SafeAreaView>
            <View className='mb-2'>
                <ServiceCard imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO211SYDlidvXxXeLJUymNqv8lDa05Hbbmly-wMYtZ2w&s' title='Натали' subtitle='Мирабадский р-н, ул. Нурафшон, 32' onPress={Click} />
            </View>
            <View>
                <Text className='text-white text-2xl mb-4'>
                Сегодня четверг, 23 февраля
                </Text>
            </View>
            <View>
                <Text className='text-gray-300 text-center mb-4'>
                К сожалению в указанную дату у мастера нет свободного времени.
                </Text>
                <Text className='text-white text-2xl text-center font-bold font-serif mb-4'>
                Но Вы можете оставить заявку в зал ожидания
                </Text>
            </View>
            <View className='flex flex-row justify-center p-3 mb-10'>
            <FontAwesome name="calendar" size={70} color="gray" />
            <Text className='text-white text-lg '>Если время Вашего мастера освободиться, то Ваш зарос может быть принят на этот день!</Text>
            </View>
            <View className='mb-10'>
                <CustomButton title='Оставить заявку' backgroundColor='#9C0A35' textColor='#FFFFFF' borderColor='' onPress={Page}/>
            </View>
        </View>
    )
}

export default Application