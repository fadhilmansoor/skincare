"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const locations = [
  {
    name: "Dubai Clinic",
    lat: 25.244475,
    lng: 55.343662,
  },
  {
    name: "Fujairah Clinic",
    lat: 25.1167,
    lng: 56.3347,
  },
  {
    name: "RAK Clinic",
    lat: 25.7917,
    lng: 55.9432,
  },
];

export default function ClinicMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAP_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 25.244475, lng: 55.343662 }}
        zoom={7}
      >
        {locations.map((loc, index) => (
          <Marker key={index} position={{ lat: loc.lat, lng: loc.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}