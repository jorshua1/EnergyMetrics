"use client";

import { useEffect, useState } from "react";

export default function RegionesComponent() {
  const [regiones, setRegiones] = useState([]);

  useEffect(() => {
    console.log("Xd1");
    async function fetchRegiones() {
      const response = await fetch("/api/region");
      const { regiones } = await response.json();
      regiones.push("All");
      console.log(regiones);
      setRegiones(regiones);
    }
    fetchRegiones();
  }, []);

  return (
    <div>
      {regiones.sort().map((region) => (
        <div key={region}>
          <h2>{region}</h2>
        </div>
      ))}
    </div>
  );
}
