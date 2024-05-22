import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ModalButton from '@/components/(buttons)/modal-btn';
import { router } from 'expo-router';
import Navbar from '../(navigation)/navbar';

const NumberCreate = () => {
  return (
    <>
      <View className='bg-[#1E1E1E] '>
        <View className='mt-5'>
          <Navbar name="" back={true} icons={false} centerName={false} />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <View className='items-center'>
          <Text className='text-white text-lg mb-3'>Ваш номер телефона</Text>
          <Text className='text-[#4F4F4F] text-center'>Мы отправили вам SMS с кодом подтверждения.</Text>
        </View>
      </SafeAreaView>
    </>

  )
}

export default NumberCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})