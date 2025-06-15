import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { bodegas } from "../data/bodegas";

const containerStyle = {
  width: "100vw",
  height: "100vh"
};

const center = {
  lat: 40.7128, // NYC center
  lng: -74.0060
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY_HERE" // Replace with your API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {bodegas.map((bodega, idx) => (
        <Marker key={idx} position={{ lat: bodega.lat, lng: bodega.lng }} label={bodega.name} />
      ))}
    </GoogleMap>
  );
}

export default Map;