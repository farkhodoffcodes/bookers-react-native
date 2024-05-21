import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

interface CustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  image: ImageSourcePropType;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ coordinate, title, image }) => {
  // console.log('my location', coordinate);
  return (
    <Marker coordinate={coordinate}>
      <View style={styles.markerContainer}>
        <Image source={image} style={styles.markerImage} />
      </View>
      <Callout tooltip>
        <View style={styles.calloutContainer}>
          <Text style={styles.calloutText}>{title}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerImage: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#FF0',
    borderWidth: 4,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  calloutContainer: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  calloutText: {
    textAlign: 'center',
  },
});

export default CustomMarker;
