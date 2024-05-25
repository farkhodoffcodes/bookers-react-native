import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Greetings from '@/components/greetings/greetings'
import ModalButton from '@/components/(buttons)/modal-btn'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
        <Greetings
          title={`${t`greeting`}`}
          img={require('../../assets/images/auth/Frame1.png')}
          bottomTitle='в удобное для вас время'
          bottomText='Бронирование свиданий без хлопот с волосами. Bookers позволяет выбрать день, время и стилиста, дает цену и сроки на все услуги в простом в использовании меню.'
        />
      </View>
      <View style={{ width: '90%', height: '10%', }}>
        <ModalButton onPress={() => router.push('/secondWelcome')} title='Продолжить' textColor='white' backgroundColor='#9C0A35' />
      </View>
    </SafeAreaView>
  )
}

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center'
  }
})