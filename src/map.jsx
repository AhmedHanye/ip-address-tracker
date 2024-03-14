import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

function Map({ location }) {
  useEffect(() => {
    const map = L.map("map").setView(
      [location.lat, location.lng],
      location.zoom
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker([location.lat, location.lng]).addTo(map);

    // Clean up function to remove the map and marker when the component unmounts
    return () => {
      map.remove();
      marker.remove();
    };
  }, [location]);

  return <div id="map"></div>;
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
};

export default Map;
