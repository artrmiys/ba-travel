import { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap, Tooltip } from "react-leaflet";
import * as L from "leaflet";
import type { Place } from "../data/places";
import { BA_EXTRA_PINS } from "../data/ba_extra_pins";
import { PLACES } from "../data/places";

function FitBounds({ places }: { places: Place[] }) {
  const map = useMap();
  const signature = useMemo(() => places.map((p) => p.id).join("|"), [places]);

  useEffect(() => {
    if (!places.length) return;
    const bounds = L.latLngBounds(places.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14 });
  }, [map, signature, places]);

  return null;
}

export default function MapSection() {
  const [day, setDay] = useState<string>("All");

  const ALL_PLACES = useMemo(() => [...PLACES, ...BA_EXTRA_PINS], []);

  const days = useMemo(() => {
    const uniq = Array.from(new Set(ALL_PLACES.map((p) => p.day)));
    return ["All", ...uniq];
  }, []);

  const filtered = useMemo(() => {
    if (day === "All") return ALL_PLACES;
    return ALL_PLACES.filter((p) => p.day === day);
  }, [day]);

  return (
    <section className="mapSection" data-reveal>
      <div className="mapHeader">
        <div>
          <div className="mapTitle">Map</div>
          <div className="mapSubtitle">Маршрут по точкам (OpenStreetMap)</div>
        </div>

        <div className="mapControls">
          <label className="mapLabel">
            Day
            <select className="mapSelect" value={day} onChange={(e) => setDay(e.target.value)}>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mapFrame">
        <MapContainer
          center={[-34.6037, -58.3816]}
          zoom={12}
          scrollWheelZoom
          className="leafletRoot"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds places={filtered} />

          {filtered.map((p) => (
            <CircleMarker
              key={p.id}
              center={[p.lat, p.lng]}
              radius={7}
              pathOptions={{
                color: "rgba(255,60,60,0.95)",
                fillColor: "rgba(255,60,60,0.75)",
                fillOpacity: 1,
                weight: 1,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={0.95}>
                {p.title}
              </Tooltip>

              <Popup>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{p.title}</div>
                <div style={{ opacity: 0.85, marginBottom: 8 }}>{p.day} · {p.group}</div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer">
                    Open link
                  </a>
                ) : null}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="mapHint">
        Подсказка: можно фильтровать по дню, а карта сама подгонит область под видимые точки.
      </div>
    </section>
  );
}
