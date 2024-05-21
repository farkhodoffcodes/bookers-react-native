import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
type Props = {
    title: string;
    onPress: () => void;
    backgroundColor:string;
    textColor:string;
}

const TransparentButton:React.FC<Props> = ({title,onPress,backgroundColor,textColor}) => {
    return (
        <TouchableOpacity
        style={[
            tw`w-full py-3 rounded-lg border-[2px] border-solid border-[#828282]`,
            { backgroundColor: backgroundColor }
          ]}
            onPress={onPress}
        >
            <Text
                style={[{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: '500'
                  }]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default TransparentButton