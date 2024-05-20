import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';//react-native-picker/picker
import tw from 'tailwind-react-native-classnames';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const monthsOfYear = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

interface CalendarProps {
  initialDate?: Date;
  highlightColor?: string;
  selectedColor?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  highlightColor = 'bg-red-800',
  selectedColor = 'bg-yellow-500'
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(initialDate.getMonth());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1 sekundda yangilanadi

    return () => clearInterval(timer); // komponent unmount bo'lganda timerni to'xtatish
  }, []);

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setTimeout(() => setSelectedDate(null), 2000); // 2 sekunddan keyin selectedDate-ni null qilish
  };

  const getDatesForMonth = (year: number, month: number) => {
    const dates: (number | '')[][] = [];
    const firstDay = new Date(year, month, 1).getDay();
    let day = 1 - (firstDay === 0 ? 6 : firstDay - 1);

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++, day++) {
        const date = new Date(year, month, day);
        week.push(date.getMonth() === month ? date.getDate() : '');
      }
      dates.push(week);
    }

    return dates;
  };

  const dates = getDatesForMonth(currentDate.getFullYear(), selectedMonth);

  return (
    <View style={tw`p-3 mt-3 w-full max-h-screen`}>
      <Text style={tw`text-lg font-bold mb-5`}>
        Сегодня {daysOfWeek[currentDate.getDay() - 1]}, <Text style={tw`p-1 rounded-xl`}>{currentDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
      </Text>
      <View style={tw`bg-white p-4 rounded-2xl`}>
        <View style={tw`bg-white p-4 border-0 mb-5`}>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            style={tw`w-[50%] border-0 text-center text-xl`}
          >
            {monthsOfYear.map((month, index) => (
              <Picker.Item key={index} label={month} value={index} />
            ))}
          </Picker>
        </View>
        <View style={tw`flex flex-row justify-between mb-2`}>
          {daysOfWeek.map((day, idx) => (
            <Text key={day} style={tw.style('text-center w-8 text-lg font-sans', idx === 5 || idx === 6 ? 'text-red-800' : '')}>{day}</Text>
          ))}
        </View>
        {dates.map((week, index) => (
          <View key={index} style={tw`flex flex-row justify-between mb-2 text-lg`}>
            {week.map((date, idx) => (
              <TouchableOpacity
                key={date}
                onPress={() => date && handleDateSelect(date)}
                style={tw.style(
                  'w-10 h-10 justify-center items-center rounded-xl text-lg',
                  date === currentDate.getDate() && selectedMonth === currentDate.getMonth() ? highlightColor : '',
                  date === selectedDate ? selectedColor : ''
                )}
              >
                <Text style={tw.style(
                  date === currentDate.getDate() && selectedMonth === currentDate.getMonth() ? 'text-white' : '',
                  idx === 5 || idx === 6 ? 'text-red-700' : ''
                )}>{date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
