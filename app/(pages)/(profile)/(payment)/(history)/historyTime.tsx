import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Navbar from '@/app/(navigation)/navbar'
import HistoryCard from '@/components/cards/historyCard'
import RecordsCard from '@/components/cards/records_card'
import CardsDatail from '@/components/cards/cardsDatil'
import CustomButton from '@/components/(buttons)'
import { AntDesign } from '@expo/vector-icons';
import Modals from '@/components/(modals)'

const HistoryTime = () => {
  return (
    <ScrollView style={tw``}> 
    <View style={tw` bg-gray-900 max-h-screen`}>
    <View style={tw`flex p-4 w-full`}>
       <Navbar back={true} name="История сеансов" icons={false} centerName={true} />
        <View style={tw`flex-row justify-around w-full  bg-gray-900`}>
          <CustomButton
            title='Предстоящие'
            iconName='clockcircleo'
            iconColor='#9C0A35'
            iconSize={24}
            backgroundColor='#B9B9C9'
            textColor='#9C0A35'
            border='#B9B9C9'
          />
          <CustomButton
            title='Прошедшие'
            iconName='calendar'
            iconColor='#fff'
            iconSize={24}
            backgroundColor='#B9B9C9'
            textColor='#fff'
            border='#B9B9C9'
          />
        </View>
 
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