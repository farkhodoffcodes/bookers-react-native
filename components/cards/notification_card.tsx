import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

interface INotificationProps {
  iconJsxElement: JSX.Element;
  title: string;
  description: string;
  date: string;
}

const NotificationCard: React.FC<INotificationProps> = (props) => {
  const { iconJsxElement, title, description, date } = props;
  return (
    <View
      style={styles.card}
      className={`bg-[#B9B9C9] p-5 rounded-3xl w-full flex-row items-start justify-start`}
    >
      <View className='w-[15%]'>
        <View className='w-10 h-10 justify-center items-center rounded-full bg-white'>
          {iconJsxElement}
        </View>
      </View>
      <View className='w-[80%]'>
        <Text className={`text-[20px] font-semibold text-black mt-1 mb-4`}>{title}</Text>
        <Text className={`text-[17px] text-black opacity-60 mb-3 pr-5`}>
          {description.length > 50 ? description.slice(0, 50) + '...' : description}
        </Text>
        <View className={`flex-row justify-between items-center`}>
          <Text className={`text-[16px] text-black opacity-50`}>{date}</Text>
          <Feather name="chevron-right" size={25} color="gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  }
});

export default NotificationCard;