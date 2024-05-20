import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Language() {
	return (
		<View>
			<TouchableOpacity onPress={() => router.push("/(tabs)")}>
				<Text style={tw`text-white`}>Salom</Text>
			</TouchableOpacity>
		</View>
	);
}

