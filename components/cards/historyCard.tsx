import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'

interface ICardHistory {
    name: string;
    price: string;
    description: string;
    btnOrText: boolean;
}

const HistoryCard: React.FC<ICardHistory> = ({ name, price, description, btnOrText }): JSX.Element => {
    return (
        <View style={styles.cardMain}>
            <View>
                <Text style={[styles.cardName, styles.cardText]}>{name}</Text>
                {description && <Text style={styles.cardDescription}>{description}</Text>}
            </View>
            <View>
                {btnOrText
                    ? <Text style={[styles.cardText, styles.cardPrice]}>{price}</Text>
                    : <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.cardPrice, {fontSize: 13}]}>{price}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

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
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardName: {
        color: '#000000',
    },
    cardDescription: {
        color: '#000000',
        fontSize: 15,
        opacity: .5,
        marginTop: 5
    },
    cardPrice: {
        color: '#9C0A35',
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9C0A35',
        alignItems: 'center',
    }
})

export default HistoryCard