import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
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

const MapView = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [lots, setLots] = useState<ParkingLot[]>([]);

  useEffect(() => {
    const fetchLots = async () => {
      const { data, error } = await supabase.from("parking_lots").select("*");
      if (error) console.error(error);
      else setLots(data);
    };
    fetchLots();
  }, []);

  const handleMapClick = () => setIsFullScreen(true);
  const closeMap = () => setIsFullScreen(false);

  return (
    <div
      className={`relative ${
        isFullScreen ? "fixed inset-0 z-50" : "w-full h-80 rounded-xl overflow-hidden"
      }`}
    >
      <MapContainer
        center={kadikoyCenter}
        zoom={14}
        scrollWheelZoom={true}
        className="w-full h-full"
        onClick={handleMapClick}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {lots.map((lot) => (
          <Marker key={lot.id} position={[lot.lat, lot.lng]}>
            <Popup>
              <b>{lot.name}</b> <br />
              {lot.available_spaces}/{lot.total_spaces} müsait
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {isFullScreen && (
        <>
          {/* Ortadaki Butonlar */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 animate-fade-up">
            <Button
              className="bg-gradient-to-r from-primary to-eco-green text-white px-6 py-4 rounded-2xl shadow-elevated animate-bounce-soft"
              onClick={() => alert("Park Yeri Bul")}
            >
              Park Yeri Bul
            </Button>
            <Button
              variant="outline"
              className="px-6 py-4 rounded-2xl shadow-soft animate-fade-up"
              onClick={() => alert("Park Alanı Oluştur")}
            >
              Park Alanı Oluştur
            </Button>
          </div>

          {/* Kapat */}
          <button
            onClick={closeMap}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
};

export default MapView;
