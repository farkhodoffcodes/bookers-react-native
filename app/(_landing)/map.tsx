import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MasterCard from "./../../components/cards/aboutMaster";

interface LocationCoords {
	latitude: number;
	longitude: number;
}

const initialLocation: LocationCoords = {
	latitude: 38.8472242,
	longitude: 65.7963916,
};

const Map = () => {
	return (
		<View style={styles.container}>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calloutContainer: {
		width: 200, // Adjust width as needed
		padding: 10,
	},
});

export default Map;
