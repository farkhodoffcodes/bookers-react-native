import { View, Text, } from 'react-native'
import React from 'react'
import NotificationNav from '@/components/navigation/notification_nav'
import { router, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppointmentCard from '@/components/cards/application_room'
import CardsDatail from '@/components/cards/cardsDatil'
import RecordsCard from '@/components/cards/records_card'
import ServiceCard from '@/components/cards/servicesMenu'
import Calendar from '@/components/(calendar)'
import CustomButton from '@/components/(buttons)'

const Repet = () => {
    const Click =() =>{

    }
    const Page = () => {
        router.push('/application')
    }
    const navigation = useNavigation()
  return (
    
    <View className='flex p-3 '>
      <SafeAreaView>
      <NotificationNav name='Натали' backIcon={()=> navigation.goBack()} deleteIcon ={false}/>
      </SafeAreaView>
      <View className='mb-4'>
        <ServiceCard imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO211SYDlidvXxXeLJUymNqv8lDa05Hbbmly-wMYtZ2w&s' title='Натали' subtitle='Мирабадский р-н, ул. Нурафшон, 32' onPress={Click}/>
      </View>
      <View>
        <Text className='text-white text-xl'>Сегодня четверг, 23 февраля</Text>
      </View>
      <View>
        {/* <Calendar/> */}
      </View>
      <View>
        <Text className='text-white'>Свободное время</Text>
      </View>
      <View className='flex flex-row flex-wrap justify-center'>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
        <CustomButton backgroundColor='#F2F2F2' title='08:00' textColor='' borderColor='' onPress={Click}/>
      </View>
      <View>
         <CustomButton title='Продолжить' backgroundColor='#9C0A35' textColor='#FFFFFF' borderColor='' onPress={Page}/>
      </View>
    </View>
  );
};

export default Repet