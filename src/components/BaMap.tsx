import { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { BA_PLACES, type Place } from "../data/baPlaces";

function FitBounds({ places }: { places: Place[] }) {
  const map = useMap();

  useEffect(() => {
    if (!places.length) return;
    const bounds = L.latLngBounds(places.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 13 });
  }, [map, places]);

  return null;
}

export default function BaMap() {
  const [day, setDay] = useState<string>("All");

  const places = useMemo(() => {
    if (day === "All") return BA_PLACES;
    return BA_PLACES.filter((p) => p.day === day);
  }, [day]);

  const dayOptions = useMemo(() => {
    const set = new Set<string>();
    BA_PLACES.forEach((p) => set.add(p.day));
    return ["All", ...Array.from(set)];
  }, []);

  return (
    <section className="baPanel" id="map">
      <div className="baPanelHead">
        <div>
          <div className="baPanelTitle">Карта</div>
          <div className="baPanelSub">Кружочки = сохранённые точки (OpenStreetMap)</div>
        </div>

        <div className="baSelectWrap">
          <span className="baSelectLabel">Day</span>
          <select className="baSelect" value={day} onChange={(e) => setDay(e.target.value)}>
            {dayOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="baMapBox">
        <MapContainer
          center={[-34.6037, -58.3816]}
          zoom={12}
          scrollWheelZoom
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds places={places} />

          {places.map((p) => (
            <CircleMarker
              key={p.id}
              center={[p.lat, p.lng]}
              radius={6}
              pathOptions={{
                color: "#ff4d4d",
                fillColor: "#ff4d4d",
                fillOpacity: 0.8,
                weight: 1,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={0.95}>
                {p.name}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
