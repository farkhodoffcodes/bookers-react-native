import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotificationNav from '@/components/navigation/notification_nav'
import { router, useNavigation } from 'expo-router'
import IconsButton from '@/components/(buttons)/iconsButton'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import RecordsCard from '@/components/cards/records_card'
import MasterCard from '@/components/cards/aboutMaster'
import CardsDatail from '@/components/cards/cardsDatil'
import CustomButton from '@/components/(buttons)'
import MasterCardLocation from '@/components/cards/aboutMasterLOcation'

const History = () => {
    const [isOpenCard, setIsOpenCard] = useState(false)
    const Click = () => router.push('/history')
    const Past = () => router.push('/pastUser')
    const navigation = useNavigation()
    const openCard = () => setIsOpenCard(!isOpenCard)

    return (
        <SafeAreaView className='mt-10 bg-black '>
            <NotificationNav name='История сеансов' backIcon={() => navigation.goBack()} deleteIcon={false} />
            <View className='flex flex-row w-full mt-10'>
                <View className='px-2'>
                    <IconsButton
                        title="Предстоящие"
                        backgroundColor="#B9B9C9"
                        textColor="#9C0A35"
                        borderColor="#B9B9C9"
                        onPress={Click}
                        icons={<AntDesign name={`clockcircleo`} size={24} color={`#9C0A35`} className='' />}
                    />
                </View>
                <IconsButton
                    title="Прошедшие"
                    backgroundColor=""
                    textColor="#828282"
                    borderColor="#828282"
                    onPress={Past}
                    icons={<AntDesign name={`clockcircleo`} size={24} color={`#828282`} className='' />}
                />

            </View>
            <View className='p-2 mt-3'>
                <RecordsCard
                    key={1}
                    name='Пн, 10 февраля 12:30 - 13:30'
                    label='Наращивание ресниц'
                    isOpenCard={isOpenCard}
                    openCard={openCard}
                    openChildComponent={
                        <MasterCardLocation
                            btnText='Написать сообщение'
                            imageUrl='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
                            name='Натали'
                            price='500 000 ming'
                            alias='Beauty Wave'
                            master='Женский мастер'
                            rating={5}
                            icons={<AntDesign name={`clockcircleo`} size={24} color={`#828282`} className='' />}
                            location='Яккасарайский р-н, ул. Мирабад, 62а'
                             openChildComponent={
                                <IconsButton
                                title='Написать сообщение'
                                backgroundColor='#9C0A35'
                                textColor='#FFFFFF'
                                borderColor='#9C0A35'    
                                />
                                
                            } />
                    } />
            </View>
        </SafeAreaView>
    )
}
export default History;