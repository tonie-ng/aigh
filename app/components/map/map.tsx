"use client";

import mapboxgl from "mapbox-gl";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./map.module.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;
function Mapbox() {
  const mapContainer: MutableRefObject<HTMLDivElement | any> =
    useRef<HTMLDivElement>(null);
  const map: MutableRefObject<mapboxgl.Map | any> = useRef(null);
  const [lng, setLng] = useState<any>(-70.9);
  const [lat, setLat] = useState<any>(42.35);
  const [zoom, setZoom] = useState<any>(9);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    return () => {
      ("");
    };
  });

  return (
    <section className={styles.map_section}>
      <div ref={mapContainer} className={styles.map_container} />
    </section>
  );
}

export default Mapbox;
