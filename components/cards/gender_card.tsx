// RadioButton.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonProps {
    label: string;
    value: string;
    selected: boolean;
    onSelect: (value: string) => void;
}

const GenderCard: React.FC<RadioButtonProps> = ({ label, value, selected, onSelect }) => {
    return (
        <TouchableOpacity style={styles.radioButton} onPress={() => onSelect(value)}>
            <View style={styles.outerCircle}>
                {selected && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c00000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#c00000',
    },
    label: {
        marginLeft: 10,
        fontSize: 18,
        color: '#4F4F4F',
    },
});

export default GenderCard;
