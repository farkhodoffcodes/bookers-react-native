import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
	back: boolean;
	centerName: boolean;
	name: string;
	icons: boolean;
}

const Navbar: React.FC<Props> = ({ back, centerName, name, icons }) => {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{back && (
					<TouchableOpacity onPress={() => router.back()}>
						<AntDesign name="left" size={24} color="white" />
					</TouchableOpacity>
				)}
				{!centerName && <Text style={styles.name}>{name}</Text>}
			</View>
			{centerName && <Text style={styles.centerName}>{name}</Text>}
			<View style={styles.right}>
				{icons && (
					<>
						<Ionicons name="notifications-outline" size={24} color="white" style={styles.icon} />
						<Ionicons name="bookmark-outline" size={24} color="white" style={styles.icon} />
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		width: "100%",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		fontSize: 30,
		color: "#fff",
		fontWeight: "bold",
	},
	centerName: {
		fontSize: 18,
		color: "#fff",
		position: "absolute",
		left: "50%",
		transform: [{ translateX: -50 }],
	},
	right: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginLeft: 15,
	},
});

export default Navbar;
