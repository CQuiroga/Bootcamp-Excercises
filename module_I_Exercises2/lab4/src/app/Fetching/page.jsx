"use client";
import { useState, useEffect } from 'react';

const FetchData = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Ejecutar la solicitud solo si isFetching es true
    if (isFetching) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        } finally {
          setIsFetching(false);
        }
      };

      fetchData();
    }
  }, [isFetching]);

  return (
    <div style={{ margin: "auto", width: "500px", padding: "20px" }}>
      <h1>Datos de la API</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No hay datos disponibles</p>
      )}
      <button onClick={() => setIsFetching(true)}>Obtener Datos</button>
    </div>
  );
};

export default FetchData;