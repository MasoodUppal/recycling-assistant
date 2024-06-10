import React, { useState, useEffect, useRef } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";

const MapViewComponent = () => {


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disposalLocation, setDisposalLocation] = useState(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [mapType, setMapType] = useState("standard");
  const mapRef = useRef();

  const narowal = {
    latitude: 32.10195118685104,
    longitude: 74.87986079939046,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Permission to access location was denied. Please enable location services."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setErrorMsg(null); // Clear any previous error message
    } catch (error) {
      setErrorMsg(error.message);
    }
  };


  const setDisposalToCurrentLocation = () => {
    if (location) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
      const newLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setDisposalLocation(newLocation);
      setUseCurrentLocation(true);
      Alert.alert(
        "Disposal Location Set",
        `Latitude: ${newLocation.latitude}, Longitude: ${newLocation.longitude},Go back to home if no further change is required`
      );
      sendDataToBackend(newLocation);
    } else {
      Alert.alert("Error", "Current location is not available");
    }
  };



  const handleMarkerDrag = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const newLocation = { latitude, longitude };
    setDisposalLocation(newLocation);
    setMarkerPosition(newLocation);
    setUseCurrentLocation(false);
    Alert.alert(
      "Disposal Location Updated",
      `Latitude: ${latitude}, Longitude: ${longitude},Go back to home if no further change is required`
    );
    sendDataToBackend(newLocation);
  };

  const sendDataToBackend = async (location) => {
    //   try {
    //     const response = await fetch('https://your-backend-endpoint.com/api/location', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         address: {
    //           latitude: location.latitude,
    //           longitude: location.longitude,
    //         },
    //       }),
    //     });
    //     const data = await response.json();
    //     console.log('Location sent to backend:', data);
    //   } catch (error) {
    //     console.error('Error sending location to backend:', error);
    //   }
    console.log(
      "pick up address sent back",
      location.latitude,
      "and",
      location.longitude
    );
  };

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === "standard" ? "hybrid" : "standard"));
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }
            : narowal
        }
        zoomEnabled={true}
        zoomControlEnabled={true}
        mapType={mapType}
      >
        {(disposalLocation || location) && (
          <Marker
            coordinate={
              disposalLocation || {
                latitude: location
                  ? location.coords.latitude
                  : narowal.latitude,
                longitude: location
                  ? location.coords.longitude
                  : narowal.longitude,
              }
            }
            title="Disposal Location"
            pinColor="green"
            draggable
            onDrag={handleMarkerDrag}
            onDragEnd={handleMarkerDragEnd}
          >
            <Callout>
              <Text>This loation will be set as disposal collection</Text>
              <Text>Hold and drag to change location</Text>
            </Callout>
          </Marker>
        )}
      </MapView>
      {errorMsg && (
        <View style={styles.errorOverlay}>
          <Text style={styles.errorText}>{errorMsg}.Please turn on locatioin and try agian</Text>
          <Button title="Retry" onPress={requestLocationPermission} />
        </View>
      )}
      <View style={styles.instructions}>
        <Text>Hold and drag the marker to set the disposal location</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Set my current location"
          onPress={setDisposalToCurrentLocation}
        />
        <TouchableOpacity onPress={toggleMapType} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {mapType === "standard" ? "Satellite View" : "Standard View"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "90%",
  },
  errorOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  errorText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  instructions: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  toggleButton: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  toggleButtonText: {
    color: "white",
  },
});
