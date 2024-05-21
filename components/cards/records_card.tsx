import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import MasterCard from './aboutMaster';

interface ICardRecordsProp {
    name: string;
    label: string;
    openCard: () => void;
    isOpenCard: boolean;
}

const RecordsCard: React.FC<ICardRecordsProp> = ({ label, name, openCard, isOpenCard }) => {
    return (
        <TouchableWithoutFeedback onPress={openCard}>
            <View style={styles.cardMain}>
                <View className={`flex-row items-center justify-between w-full ${isOpenCard ? 'mb-3' : ''}`}>
                    <View>
                        <Text style={styles.cardDescription}>{label}</Text>
                        <Text style={[styles.cardName]}>{name}</Text>
                    </View>
                    {isOpenCard
                        ? <Feather name="chevron-down" size={30} color="gray" />
                        : <Feather name="chevron-right" size={30} color="gray" />
                    }
                </View>
                {isOpenCard && (
                    <MasterCard
                        alias="dcfvgbn"
                        clients={5}
                        imageUrl=""
                        location="adsfgbfnhg"
                        name="asefdgrbfgdnfh"
                        nextAppointment="asedsvgfbd"
                        orders={4}
                        rating={5}
                        key={7}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    cardMain: {
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#B9B9C9',
        borderRadius: 20,
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
        opacity: .5
    }
})

export default RecordsCard;