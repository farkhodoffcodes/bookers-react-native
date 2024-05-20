import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '@/components/(buttons)'
import tw from 'tailwind-react-native-classnames'
import MasterCard from '@/components/cards/aboutMaster'
import { ThemedText } from '@/components/ThemedText'
import Navbar from '@/app/(navigation)/navbar'

const CardInfo = () => {
  return (
    <ThemedText>
			<Navbar back={false} centerName={false} name="Главная" icons={true} />
			<Text>Landing</Text>
    <View style={tw`w-full max-h-screen bg-dark`}>
      <CustomButton title='Отклонён' backgroundColor='red' textColor='#ffff' />
    <View style={tw`bg-dark w-full h-screen`}>
      <MasterCard name='Натали'alias='Beauty Wave' rating={5} location='Мирабадский р-н, ул. Нурафшон, 32' nextAppointment='2344' orders={52} clients={20} imageUrl='https://via.placeholder.com/50'/>
    </View> 
    
    </View>  
</ThemedText>
  );
};

export default CardInfo;