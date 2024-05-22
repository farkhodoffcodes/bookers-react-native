import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import CustomButton from '@/components/(buttons)'
import tw from 'tailwind-react-native-classnames'
import MasterCard from '@/components/cards/aboutMaster'
import { ThemedText } from '@/components/ThemedText'
import Navbar from '@/app/(navigation)/navbar'
import CardsDatail from '@/components/cards/cardsDatil'


const CardInfo = () => {
  return (
    <ScrollView style={tw`h-[100%] bg-dark`}>
      <Navbar back={true} name="Натали" icons={false} centerName={true} />
      <View style={tw`mt-3`}>
        <CustomButton onPress={() => {}} title='Отклонён' backgroundColor='red' textColor='#ffff' />
        <View style={tw`bg-dark w-full h-screen p-3`}>
          <CardsDatail name='Натали' alias='Beauty Wave' rating={5} location='Мирабадский р-н, ул. Нурафшон, 32' imageUrl='https://via.placeholder.com/50' orders={20} orderZakaz='заказа,' orderKlent=' клинетов' clients={50} master='Женский мастер' />
        </View>
        <View style={tw`p-3`}>
          <Text style={tw`font-bold text-xl`}>Предоплата</Text>
          <TextInput
            style={{ backgroundColor: '#6E7F80', color: '#fff', padding: 10, borderRadius: 10, borderColor:'#6E7F80', marginTop:10, fontSize:20 }}
            placeholder="100 000 сум"
            keyboardType="numeric"
          />
        </View>
        <View style={tw`px-3`}>
          <Text style={tw`text-center text-2xl font-bold py-6`}>
          По желанию вы можете добавить мастеру чаевые!
          </Text>
          <Text style={tw`mt-2 font-bold`}>
          Немного?
          </Text>
          <View style={tw`flex justify-between flex-row w-[100%] mt-3 fw-bold`}>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#ffff' textColor='#4F4F4F'/>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#9C0A35' textColor='#FFFFFF'/>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#ffff' textColor='#4F4F4F'/> 
          </View>
          <Text  style={tw`mt-2 font-bold`}>
          Побольше?
          </Text> 
          <View style={tw`flex justify-between flex-row w-[100%] mt-3 fw-bold`}>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#ffff' textColor='#4F4F4F'/>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#ffff' textColor='#4F4F4F'/>
            <CustomButton onPress={() => {}} title='10 000' backgroundColor='#ffff' textColor='#4F4F4F'/> 
          </View> 
        </View>
      </View>

    </ScrollView>
  );
};

export default CardInfo;