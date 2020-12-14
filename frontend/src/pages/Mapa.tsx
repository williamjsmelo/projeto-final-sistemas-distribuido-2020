import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

import siteImg from "../images/construction.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/mapa.css";

interface local {
  id: number;
  latitude: number;
  longitude: number;
}

export default function LocalMap() {
  const [data, setData] = useState<local[]>([]);
  /*
   **Mude o endereço aqui para o endereço do banco de dados
   **Mantenha o /api/locations pois está definido no backend
   */
  const apiURL = "http://localhost:3001/api/locations";
  //const apiURL = "http://backend:3001/api/locations";

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={siteImg} alt="Prefeitura" />

          <h2>Veja os buracos na cidade</h2>
          <p>A prefeitura já está trabalhando neles</p>
        </header>

        <footer>
          <strong>Boa Vista</strong>
          <span>Roraima</span>
        </footer>
      </aside>

      <Map
        center={[2.820709654991085, -60.67234928671152]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.map(data => {
          return (
            <Marker
              //Existe um problema aqui que estou tentando resolver
              //pois o data.id está saindo como undefined
              key={data.id}
              icon={mapIcon}
              position={[data.latitude, data.longitude]}></Marker>
          );
        })}
      </Map>
    </div>
  );
}
