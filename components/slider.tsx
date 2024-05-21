import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderCompoenentProps {
  initialSliderValue?: number;  // Boshlang'ich qiymatni prop sifatida berish imkoniyati
}

const SliderCompoenent: FC<SliderCompoenentProps> = ({ initialSliderValue = 0 }) => {
  const [sliderValue, setSliderValue] = useState<number>(initialSliderValue);

  const handleValueChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text style={styles.valueText}>{sliderValue.toFixed(1)} KM</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.1}
          maximumValue={10}
          step={0.1}
          value={sliderValue}
          onValueChange={handleValueChange}
          minimumTrackTintColor="#D81B60"
          maximumTrackTintColor="#000000"
          thumbTintColor="#000"
        />
      </View>
    </View>
  );
};

export default SliderCompoenent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#1E1E1E', // Oq-ish fon
    },
    sliderContainer: {
      width: '100%', // Slider'ni kengligi
      paddingHorizontal: 20,
    },
    valueText: {
      color: '#D81B60', // Qizil rang
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start',
    },
    slider: {
      width: '100%', // Slider'ni kengligi
      height: 40, // Slider'ni balandligi
    },
  });