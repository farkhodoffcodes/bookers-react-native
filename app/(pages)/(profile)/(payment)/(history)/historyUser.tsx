import CardsDatail from '@/components/cards/cardsDatil';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import HistoryCard from '@/components/cards/historyCard';
import HistoryTime from './historyTime';
import CustomButton from '@/components/(buttons)';
import Contact from '@/components/cards/contact';
import { router } from 'expo-router';

const HistoryUser = () => {
  const Repet = () =>{
    router.push("/repet")
  }
  const Click = () =>{
    router.push('')
  }
  return (
    <SafeAreaView style={styles.container}>
    
    <ScrollView style={tw`bg-gray-900 w-full max-h-screen p-3 `}>
      <View style={tw` `}>
        <CardsDatail name='Натали' alias='Beauty Wave' master='Женский мастер' location='Мирабадский р-н, ул. Нурафшон, 32' imageUrl='' orders={20} orderZakaz='заказа ,'orderKlent='клинетов' clients={12} rating={5}/>
      <View>
      <HistoryCard name='Четверг, 12 января' description='Длительность - 1 час' price='12:30 - 14:00' btnOrText/>
      </View>
      <View style={tw`mt-3 mb-6`}>
        <HistoryCard name='Итого:' price='350 000 сум' description='' btnOrText/>
      </View>
      <Text className='mb-4 text-xl text-white'>Контактная информация</Text>
      <View style={tw`mb-4`}>
        <Contact phone='+998907748674' instagram='olimoffdev' telegram='omadbekolimov'/>
      </View>
      
     <View style={tw`mb-2 `}>
      <CustomButton title='Оставить отзыв' backgroundColor='#FFFFFF' textColor='#9C0A35' onPress={Click}/>
      <View style={tw`mb-2 mt-2`}>
      <CustomButton title='Оставить отзыв' backgroundColor='#9C0A35' textColor='#FFFFFF' onPress={Click}/>
      </View>
     </View>
     <View className='bg-[#B9B9C9] w-full max-h-screen rounded-xl mb-10'>
       <Text className='text-xl text-center text-[#9C0A35] p-5 '>Вам снова нужна эта услуга?</Text>
       <Text className='text-center p-2 mb-8'>Если вы хотите воспользоваться этой услугой еще раз, нажмите кнопку «Повторить», либо «Записаться» если вам нужны другие услуги мастера.</Text>
       <View className='flex flex-row flex-wrap gap-2 mb-5 w-full justify-evenly'>
         <CustomButton title='Повторить' backgroundColor='#B9B9C9' textColor='#9C0A35' onPress={Repet} borderColor='#9C0A35'/>
         <CustomButton title='Записаться' backgroundColor='#9C0A35' textColor='#FFFFFF' onPress={Click} borderColor=''/>
       </View>
     </View>
     </View>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
 
});

export default HistoryUser