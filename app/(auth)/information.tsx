import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ModalButton from '@/components/(buttons)/modal-btn';
import { router } from 'expo-router';
import Navbar from '../(navigation)/navbar';

const Information = () => {
    return (
        <>
            <View className='bg-[#1E1E1E] '>
                <View className='mt-5'>
                    <Navbar name="" back={true} icons={false} centerName={false} />
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                <View className='w-[90%] rounded-xl bg-[#B9B9C9] p-4 mb-4'>
                    <Text className='font-bold text-[12px] text-center pb-5'>Онлайн сервис для самостоятельного бронирования услуг спеецциалистов в сфере красоты и ухода за внешностью</Text>
                    <Text className='font-normal text-[#4F4F4F] text-[10px]'>
                        На сервис уже на протяжении 2х лет дарит пользователям ...... Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации систем массового участия. Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. авным образом сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач.
                    </Text>
                </View>
                <View className='w-[90%] mt-4' >
                    <ModalButton title='Я согласен' backgroundColor='#9C0A35' textColor='' onPress={() => router.push('/chat')}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Information;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center'
    },
})