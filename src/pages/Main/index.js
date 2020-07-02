import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';
import { metrics } from '../../styles';

function Main() {

  const [places, setPlaces] = useState([
    { id: 1, title: 'OBA • Hortifrut', description: 'Qualidade é aqui!', latitude: -15.840404, longitude: -48.022466 },
    { id: 2, title: 'Taguatinga shopping', description: 'O shopping para todo a família', latitude: -15.840607, longitude: -48.043802 },
    { id: 3, title: 'Park Shopping', description: 'Todo que você precisa tem aqui!', latitude: -15.833184, longitude: -47.955233 },
  ])

  function mapReady() {
    places[0].mark.showCallout();
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={ref => mapView = ref}
        initialRegion={{
          latitude: places[0].latitude,
          longitude: places[0].longitude,
          latitudeDelta: 0.0142,
          longitudeDelta: 0.0231,
        }}
        style={styles.map}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        // showsPointsOfInterest={false}
        showsBuildings={false}
        onMapReady={mapReady}
      >
        {places.map(place => (
          <MapView.Marker
            ref={ref => place.mark = ref}
            key={place.id}
            title={place.title}
            description={place.description}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        ))}
      </MapView>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const scrolled = e.nativeEvent.contentOffset.x;
          const place = (scrolled > 0) ? scrolled / metrics.SCREEN_WIDTH : 0;
          const { latitude, longitude, mark } = places[place];
          mapView.animateCamera({
            center: {
              latitude,
              longitude,
            },
          }, 1000);

          setTimeout(() => {
            mark.showCallout();
          }, 1000);
        }}
        style={styles.placesContainer}>
        {places.map(place => (
          <View key={place.id} style={styles.place} >
            <Text>{place.title}</Text>
            <Text>{place.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Main;