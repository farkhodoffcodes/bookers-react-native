import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Navbar from '@/app/(navigation)/navbar'
import HistoryCard from '@/components/cards/historyCard'
import RecordsCard from '@/components/cards/records_card'
import CardsDatail from '@/components/cards/cardsDatil'

const HistoryTime = () => {
  return (
    <ScrollView style={tw`h-1000 bg-dark`}> 
    <View style={tw`flex-1  bg-gray-900 p-4 h-screen w-full`}>
       <Navbar back={true} name="История сеансов" icons={false} centerName={true} />
       <View style={tw`bg-gray-700 px-3 py-4 rounded-xl`}>
          <Text style={tw`text-red-700 fw-bold flex flex-row flex-col font-sans`}>
             Предстоящие
          </Text>
        </View>
        <View style={tw`w-full`}>
          <RecordsCard name='Пн, 10 февраля 12:30 - 13:30 ' label='Наращивание ресниц' pageRoute='nima'/>
        </View>
        
        <View style={tw`w-full mt-3`}>
          <RecordsCard name='Вт, 11 февраля 14:30 - 15:50  ' label='Стрижка, укладка, покраска волос' pageRoute='nima'/>
        </View>
       
     </View>
    </ScrollView>
    
  )
}

export default HistoryTime;