import React, { useState, useRef } from 'react';
import { MapPin, Zap } from 'lucide-react';
import cityMap from '@/assets/city-map.jpg';

interface ParkingMarker {
  id: string;
  x: number;
  y: number;
  availableSpaces: number;
  totalSpaces: number;
  name: string;
}

const MapView = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [markers] = useState<ParkingMarker[]>([
    { id: '1', x: 25, y: 30, availableSpaces: 5, totalSpaces: 10, name: 'Downtown Mall' },
    { id: '2', x: 60, y: 45, availableSpaces: 12, totalSpaces: 20, name: 'City Center' },
    { id: '3', x: 40, y: 70, availableSpaces: 3, totalSpaces: 8, name: 'Park Avenue' },
    { id: '4', x: 75, y: 25, availableSpaces: 8, totalSpaces: 15, name: 'Business District' },
    { id: '5', x: 15, y: 60, availableSpaces: 0, totalSpaces: 12, name: 'Shopping Center' },
  ]);

  const mapRef = useRef<HTMLDivElement>(null);

  const handleMapClick = () => {
    setIsZoomed(!isZoomed);
  };

  const getMarkerColor = (available: number, total: number) => {
    const ratio = available / total;
    if (ratio > 0.5) return 'bg-success border-success';
    if (ratio > 0.2) return 'bg-warning border-warning';
    return 'bg-destructive border-destructive';
  };

  const getMarkerAnimation = (available: number) => {
    return available > 0 ? 'animate-marker-pulse' : '';
  };

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-elevated">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-out ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
        onClick={handleMapClick}
      >
        {/* Base Map Image */}
        <img 
          src={cityMap} 
          alt="City map showing parking locations"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        
        {/* Parking Markers - only show when zoomed */}
        {isZoomed && (
          <>
            {markers.map((marker, index) => (
              <div
                key={marker.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 animate-fade-up ${getMarkerAnimation(marker.availableSpaces)}`}
                style={{ 
                  left: `${marker.x}%`, 
                  top: `${marker.y}%`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Marker Circle */}
                <div className={`
                  relative w-12 h-12 rounded-full border-3 
                  ${getMarkerColor(marker.availableSpaces, marker.totalSpaces)}
                  flex items-center justify-center text-white font-bold text-sm
                  shadow-marker cursor-pointer hover:scale-110 transition-transform
                `}>
                  {marker.availableSpaces > 0 ? marker.availableSpaces : <Zap size={16} />}
                </div>
                
                {/* Marker Label */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 
                  bg-card/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-soft
                  text-xs font-medium whitespace-nowrap opacity-0 hover:opacity-100 
                  transition-opacity duration-300"
                >
                  {marker.name}
                  <div className="text-xs text-muted-foreground">
                    {marker.availableSpaces}/{marker.totalSpaces} spaces
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        
        {/* Zoom indicator */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm 
          px-3 py-1.5 rounded-lg shadow-soft text-xs font-medium flex items-center gap-2"
        >
          <MapPin size={12} className="text-primary" />
          {isZoomed ? 'Tap to zoom out' : 'Tap to explore'}
        </div>
      </div>
      
      {/* Map Status Bar */}
      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm 
        px-4 py-2 rounded-xl shadow-soft flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-sm font-medium">Live parking data</span>
      </div>
    </div>
  );
};

export default MapView;