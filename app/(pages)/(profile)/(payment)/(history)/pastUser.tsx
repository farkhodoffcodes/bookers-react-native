import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotificationNav from '@/components/navigation/notification_nav'
import { router, useNavigation } from 'expo-router'
import IconsButton from '@/components/(buttons)/iconsButton'
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import RecordsCard from '@/components/cards/records_card'
import MasterCard from '@/components/cards/aboutMaster'
import CardsDatail from '@/components/cards/cardsDatil'
import CustomButton from '@/components/(buttons)'
import MasterCardLocation from '@/components/cards/aboutMasterLOcation'
import CenteredModal from '@/components/(modals)/centeredModal'

const History = () => {
    const [isModal, setIsModal] = useState<boolean>(false)
    const openModal = () => setIsModal(!isModal)
    
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
                            imageUrl='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
                            name='Натали'
                            btnText='Оставить отзыв'
                            price='500 000 ming'
                            alias='Beauty Wave'
                            master='Женский мастер'
                            rating={5}
                            icons={<MaterialIcons name="delete" size={25} color="#FFFFFF" />}
                            onPress={openModal}
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
                    isModal={isModal}
                    toggleModal={openModal}
                    onConfirm={openModal}                    
                />
            </View>
        </SafeAreaView>
    )
}
export default History;