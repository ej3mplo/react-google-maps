import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './env'

const markers = [
  {lat: 47.49855629475769, lng: -122.14184416996333},
  {lat: 47.359423,         lng: -122.021071},
  {lat: 47.2052192687988,  lng: -121.988426208496},
  {lat: 47.6307081,        lng: -122.1434325},
];

const mapStyles = {width: '100vw', height: '100vh'};

const genClick = i => () => alert('Marcador ' + i) 

const MapContainer = ({google}) =>
  <Map google={google} zoom={10} style={mapStyles}
    disableDefaultUI={true}
    initialCenter={{lat: 47.444, lng: -122.176}}>

      {markers.map((p, i) => <Marker key={i} position={p} onClick={genClick(i)}/>)}

  </Map>;

const MapComponent = GoogleApiWrapper({apiKey: GOOGLE_MAPS_API_KEY})(MapContainer);

export default () => <MapComponent/>;