import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Collapsible from "react-native-collapsible";
import Slider from "@react-native-community/slider";
import SliderCompoenent from "@/components/slider";
import Navbar from "@/app/(navigation)/navbar";
import tw from "tailwind-react-native-classnames";

interface Style {
	button: ViewStyle;
	buttonText: TextStyle;
	content: ViewStyle;
}

const styles: Style = StyleSheet.create({
	button: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#E8E8E8",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		margin: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	buttonText: {
		fontSize: 16,
		color: "black",
	},
	content: {
		width: "90%",
		alignSelf: "center",
		backgroundColor: "#fff",
	},
});

const MasterButton: React.FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<View style={tw`bg-gray-900`}>
			<Navbar name="Здоровье и красота волос" centerName={true} back={true} icons={false} />
			{/* <Navbar name=""back={true} icons={false} centerName={false}/> */}
			<TouchableOpacity style={styles.button} onPress={toggleCollapsed}>
				<Text style={styles.buttonText}>Пол мастера</Text>
				{collapsed ? (
					<AntDesign name="right" size={24} color="black" />
				) : (
					<AntDesign name="down" size={24} color="black" />
				)}
			</TouchableOpacity>
			<Collapsible collapsed={collapsed} align="center">
				<SliderCompoenent initialSliderValue={5} />
				<View style={styles.content}></View>
			</Collapsible>
		</View>
	);
};

export default MasterButton;
