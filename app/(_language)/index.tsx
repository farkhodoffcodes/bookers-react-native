import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Language() {
	return (
		<View>
			<TouchableOpacity onPress={() => router.push("/(tabs)")}>
				<Text className='text-red-700 px-5 mx-10'>Salom</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => router.push("/(auth)/auth")}>
				<Text className='text-red-700 px-5 mx-10'>Salom</Text>
			</TouchableOpacity>
		</View>
	);
}

