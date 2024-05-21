import React from "react";
import { StyleSheet, View } from "react-native";

interface LocationCoords {
	latitude: number;
	longitude: number;
}

const initialLocation: LocationCoords = {
	latitude: 38.8472242,
	longitude: 65.7963916,
};

const Map = () => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calloutContainer: {
		width: 200,
		padding: 10,
	},
});

export default Map;
