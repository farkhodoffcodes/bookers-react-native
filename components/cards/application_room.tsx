import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface IAppointProps {
    img: string;
    name: string;
    beautyWave: string;
    status: string;
    types: ITypesList[];
    date: string;
    isBtn: boolean;
}

interface ITypesList {
    id: number,
    name: string;
}

const AppointmentCard: React.FC<IAppointProps> = (props) => {
    const {
        img,
        name,
        beautyWave,
        status,
        types,
        date,
        isBtn
    } = props

    // modal open close uchun state va functions
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const handleConfirm = (): void => setConfirmed(true);
    const handleReject = (): void => setConfirmed(false);

    return (
        <View style={styles.card}>
            <View style={styles.profileSection}>
                <Image
                    source={{
                        uri: `${img
                            ? img
                            : 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'}`
                    }}
                    style={styles.profileImage}
                />
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={[styles.salon, styles.service]}>{beautyWave}</Text>
                    </View>
                    {/*status dynamic bg va color uzgarishi un shu yerga style berilgan*/}
                    <Text style={[styles.status, {backgroundColor: '#4CAF50', color: 'white'}]}>{status}</Text>
                </View>
            </View>
            <View style={styles.servicesSection}>
                {types
                    ? types.map(item => <Text style={styles.service} key={item.id}>{item.name}</Text>)
                    : <Text style={styles.service}>Not found</Text>
                }
            </View>
            {isBtn && <Text style={styles.confirmText}>Пожалуйста подтвердите визит на</Text>}
            <Text style={[styles.date, {marginBottom: isBtn ? 15 : 0}]}>{date}</Text>
            {isBtn && (
                <View style={styles.buttonSection}>
                    <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
                        <Text style={{color: '#9C0A35', fontSize: 16, fontWeight: '700'}}>Отклонить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                        <Text style={styles.buttonText}>Подтвердить</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#B9B9C9',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        marginHorizontal: 10
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    salon: {
        fontSize: 12,
        color: '#4F4F4F',
    },
    status: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    servicesSection: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15,
    },
    service: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        borderWidth: 1,
        color: '#4F4F4F',
        borderColor: '#828282'
    },
    confirmText: {
        fontSize: 16,
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    rejectButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#9C0A35'
    },
    confirmButton: {
        backgroundColor: '#9C0A35',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
});

export default AppointmentCard;
