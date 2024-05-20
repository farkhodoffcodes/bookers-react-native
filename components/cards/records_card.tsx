import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";

interface ICardRecordsProp {
    name: string;
    label: string;
    pageRoute: string;
}

const RecordsCard: React.FC<ICardRecordsProp> = ({label, name, pageRoute}) => {
    const router = useRouter();
    return (
        <TouchableWithoutFeedback onPress={() => router.push('/')}>
            <View style={styles.cardMain}>
                <View>
                    <Text style={styles.cardDescription}>{label}</Text>
                    <Text style={[styles.cardName, {marginTop: 6}]}>{name}</Text>
                </View>
                <MaterialIcons name="navigate-next" size={30} color="gray"/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    cardMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#B9B9C9',
        borderRadius: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardDescription: {
        color: '#000000',
        fontSize: 15,
        opacity: .5,
        marginTop: 5
    }
})

export default RecordsCard;