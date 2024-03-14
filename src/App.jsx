import { useEffect, useState } from "react";
import Header from "./header";
import Map from "./map";
import Details from "./details";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  // Use the IP address to fetch data from the API
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    zoom: 2,
  });
  const [data, setData] = useState(null);
  // Fetch data from the API
  const fetchData = async (ip) => {
    const api_key = "at_nFNYqpZW9ytAkAu0WqcjjFZow3gKl";
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching geolocation data");
      }
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  useEffect(() => {
    if (ip.trim() !== "") {
      fetchData(ip)
        .then((data) => {
          setLocation({
            lat: data.location.lat,
            lng: data.location.lng,
            zoom: 14,
          });
          setData(data);
        })
        .catch((error) => {
          // Handle errors properly
          console.error("Error fetching geolocation data:", error);
        });
    }
  }, [ip]);

  // Handle the click event
  const handleTrackButtonClick = () => {
    const ip_address = document.querySelector("input[name='ip-address']").value;
    setIp(ip_address);
  };

  // Render the app
  return (
    <>
      <div className="position-relative">
        <Header onTrackButtonClick={handleTrackButtonClick} />
        <Details ipData={data} />
      </div>
      <Map location={location} />
    </>
  );
}

export default App;
