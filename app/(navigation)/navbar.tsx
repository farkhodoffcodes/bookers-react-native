import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface Props {
	back: boolean;
	centerName: boolean;
	name: string;
	icons: boolean;
}

const Navbar: React.FC<Props> = ({ back, centerName, name, icons }) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{back && <AntDesign name="left" size={24} color="white" />}
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
		// backgroundColor: "#fff", // Or your preferred background color
		// borderBottomWidth: 1,
		// borderBottomColor: "#ddd",
		width: "100%",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
	},
	back: {
		marginRight: 10,
		fontSize: 18,
		color: "#007aff", // Or your preferred text color
	},
	name: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold", // Or your preferred text color
	},
	centerName: {
		fontSize: 18,
		color: "#fff", // Or your preferred text color
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
