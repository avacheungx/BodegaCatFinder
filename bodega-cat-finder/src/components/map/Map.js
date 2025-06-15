import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// TODO: Replace with your Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.006, 40.7128], // New York City coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Example bodega marker
    new mapboxgl.Marker()
      .setLngLat([-74.006, 40.7128])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Example Bodega</h3><p>This is a sample bodega location</p>'))
      .addTo(map.current);

    return () => map.current?.remove();
  }, []);

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: '100%', 
        height: 'calc(100vh - 64px)', // Subtract navbar height
        position: 'relative'
      }} 
    />
  );
};

export default Map; 