import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";

interface ParkingLot {
  id: string;
  name: string;
  lat: number;
  lng: number;
  available_spaces: number;
  total_spaces: number;
}

const kadikoyCenter: [number, number] = [40.9902, 29.0271];

// Şimdilik demo veriler
const demoLots: ParkingLot[] = [
  { id: "1", name: "Kadıköy Rıhtım Otoparkı", lat: 40.9906, lng: 29.0198, available_spaces: 12, total_spaces: 30 },
  { id: "2", name: "Bahariye Katlı Otoparkı", lat: 40.9879, lng: 29.0275, available_spaces: 5, total_spaces: 25 },
  { id: "3", name: "Moda Sahil Parkı", lat: 40.9823, lng: 29.0311, available_spaces: 0, total_spaces: 20 }
];

const MapView = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Harita Arka Plan */}
      <MapContainer
        center={kadikoyCenter}
        zoom={14}
        scrollWheelZoom={true}
        className="absolute inset-0 w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {demoLots.map((lot) => (
          <Marker key={lot.id} position={[lot.lat, lot.lng]}>
            <Popup>
              <b>{lot.name}</b> <br />
              {lot.available_spaces}/{lot.total_spaces} müsait
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay Butonlar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
        <Button
          className="bg-gradient-to-r from-primary to-eco-green text-white px-6 py-4 rounded-2xl shadow-xl pointer-events-auto"
          onClick={() => alert("Park Yeri Bul")}
        >
          Park Yeri Bul
        </Button>
        <Button
          variant="outline"
          className="px-6 py-4 rounded-2xl shadow pointer-events-auto"
          onClick={() => alert("Park Alanı Oluştur")}
        >
          Park Alanı Oluştur
        </Button>
      </div>
    </div>
  );
};

export default MapView;
