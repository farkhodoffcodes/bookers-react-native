import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#21212e',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 10,
    },
    calendarText: {
        color: '#ffffff',
    },
    calendarDisabledText: {
        color: '#d3d3d3',
    },
});

const CustomCalendar = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#ffffff', marginBottom: 20, fontSize: 18 }}>Февраль 2024</Text>
            <Calendar
                style={styles.calendar}
                theme={{
                   
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#9c0935',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#9c0935',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    arrowColor: 'white',
                    monthTextColor: 'black',
                    indicatorColor: 'blue',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '500',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
                markedDates={{
                    '2024-02-23': { selected: true, marked: true, selectedColor: '#9c0935', },
                }}
            />
        </View>
    );
}

export default CustomCalendar;
