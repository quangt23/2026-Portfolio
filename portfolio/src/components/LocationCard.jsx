import { useEffect, useState } from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

import L from "leaflet";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LocationCard() {
  const [time, setTime] = useState("");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const hour = now.getHours();
      setIsDay(hour >= 6 && hour < 18); // 6am–6pm = day

      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card location-card">
      <div className="card-title">
        <FaLocationDot className="card-title-icon" />
        <span>Currently based in</span>
      </div>

      <div className="location-map-wrap">
        <MapContainer
          center={[42.1492, -71.0429]}
          zoom={11}
          scrollWheelZoom={true}
          zoomControl={false}
          className="location-map"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap & CARTO'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>
      </div>

      <div className="location-footer">
        <div className="location-city">
          📍 Randolph, MA
        </div>

        <div className="location-time">
          {isDay ? (
            <FaSun
              className="location-footer-icon"
              style={{ color: "#f59e0b" }} // orange
            />
          ) : (
            <FaMoon
              className="location-footer-icon"
              style={{ color: "#3b82f6" }} // blue
            />
          )}
          {time}
        </div>
      </div>
    </div>
  );
}