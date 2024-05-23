import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Props = {
    title: string;
    backgroundColor: string;
    textColor?: string;
    borderColor?: string;
    onPress?: () => void;
    icons?: JSX.Element
};

const IconsButton: React.FC<Props> = (props) => {
    const { icons,
        title,
        backgroundColor,
        textColor = 'black',
        borderColor,
        onPress
    } = props
    return (
        <TouchableOpacity
            style={[
                tw`w-[100%] px-9 py-4 rounded-xl flex-row items-center justify-center`,
                { backgroundColor, borderColor, borderWidth: borderColor ? 1 : 0 }
            ]}
            onPress={onPress}
        >
            {icons}
            <Text style={[{ color: textColor, textAlign: 'center' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default IconsButton;
