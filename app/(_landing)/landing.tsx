import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import Navbar from "./../(navigation)/navbar";

const Landing = () => {
	return (
		<ThemedText>
			<Navbar back={false} centerName={false} name="Главная" icons={true} />
			<Text>Landing</Text>
		</ThemedText>
	);
};

export default Landing;
