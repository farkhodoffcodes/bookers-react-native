import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Services from "../(sevices)/services";

const ServicesScreen = () => {
	return (
		<View style={tw`flex-1 justify-center items-center bg-gray-900`}>
			<Services />
		</View>
	);
};

export default ServicesScreen;
