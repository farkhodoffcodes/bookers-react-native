import { View, Text, Image } from 'react-native'
import React from 'react';

interface GreetingsProp {
    img: any;
    title: string;
    bottomTitle: string;
    bottomText: string;
}

const Greetings: React.FC<GreetingsProp> = ({ img, title, bottomText, bottomTitle }) => {
    return (
        <View>
            <View>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', paddingHorizontal: 30 }}>{title}</Text>
            </View>
            <View style={{ marginVertical: 30, alignItems: 'center' }}>
                <Image source={img} />
            </View>
            <View>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{bottomTitle}</Text>
            </View>
            <View>
                <Text style={{ color: '#828282', fontSize: 13, textAlign: 'center', paddingHorizontal: 27, paddingVertical: 10 }}>{bottomText}</Text>
            </View>
        </View>
    )
}

export default Greetings;