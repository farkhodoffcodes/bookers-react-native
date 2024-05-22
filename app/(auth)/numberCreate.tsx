import { View, Text, StyleSheet, SafeAreaView,} from 'react-native'
import React from 'react'
import Navbar from '../(navigation)/navbar';
import NumberPhoneInput from './phoneNumberInput';

const NumberCreate = () => {
  return (
    <>
      <View className='bg-[#1E1E1E] '>
        <View className='mt-5'>
          <Navbar name="" back={true} icons={false} centerName={false} />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <View className='items-center mb-5'>
          <Text className='text-white text-lg mb-3'>Ваш номер телефона</Text>
          <Text className='text-[#4F4F4F] text-center'>Мы отправили вам SMS с кодом подтверждения.</Text>
        </View>
        <NumberPhoneInput />
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