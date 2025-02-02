"use client";
import { jobOffers } from "@/lib/constants/jobOffers";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

// Correction des icônes par défaut (Leaflet ne les charge pas correctement sur Next.js)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const Map = () => {
  return (
    <MapContainer
      center={[46.603354, 1.888334]}
      zoom={6}
      className="absolute inset-0 z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {jobOffers.map((job) => (
          <Marker
            key={job.id}
            position={[
              job.location.coordinates.lat,
              job.location.coordinates.lng,
            ]}
          >
            <Popup>
              <strong>{job.title}</strong> <br />
              {job.company} <br />
              {job.location.address}, {job.location.city}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
