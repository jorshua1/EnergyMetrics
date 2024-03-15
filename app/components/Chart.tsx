"use client";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";

interface DatoAPI {
  _id: string;
  Country: string;
  Year: number;
  Value: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {};

const Chart = () => {
  const [datos, setDatos] = useState<DatoAPI[]>([]);
  const [labels, setLabels] = useState<number[]>([]);
  const [datasets, setDatasets] = useState<
    {
      label: string;
      data: (number | null)[];
    }[]
  >([]);

  const data = {
    labels: labels,
    datasets: datasets.map((dataset, index) => ({
      ...dataset,
      tension: 0.2,
      fill: true,
      borderColor: getCountryColor(index), // Función para obtener el color del borde según el país
      pointRadius: 5,
      pointBorderColor: getCountryColor(index), // Función para obtener el color del borde de los puntos según el país
      pointBackgroundColor: getCountryColor(index), // Función para obtener el color de fondo de los puntos según el país
    })),
  };

  // Función para obtener el color según el país
  function getCountryColor(index: any, isBackground = false) {
    const colors: any = {
      0: "#2563eb",
      1: "#ef4444",
      2: "#22c55e",
      3: "#f97316",
      4: "#d946ef",
    };
    return colors[index] || "#000000"; // Color por defecto en caso de que el país no esté en el objeto colors
  }

  useEffect(() => {
    console.log("Entrando a la consulta");
    async function fetchData() {
      const response = await fetch(
        `/api/stats?value={"Country":{"$in":["Colombia","Brazil","Canada", "Spain", "Argentina"]},"Var":"gascons_ej"}`
      );
      const data: { datos: DatoAPI[] } = await response.json();
      setDatos(data.datos);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (datos.length > 0) {
      const dataByCountry = datos.reduce((acc, curr) => {
        const { Country, Year, Value } = curr;
        if (!acc[Country]) {
          acc[Country] = [];
        }
        acc[Country].push({ Year, Value });
        return acc;
      }, {} as { [key: string]: { Year: number; Value: number }[] });

      // Preparar los datos para la gráfica
      const preparedLabels = [...new Set(datos.map(({ Year }) => Year))].sort(
        (a, b) => a - b
      );
      const preparedDatasets = Object.entries(dataByCountry).map(
        ([country, countryData]) => ({
          label: country,
          data: preparedLabels.map(
            (year) =>
              countryData.find(({ Year }) => Year === year)?.Value || null
          ),
        })
      );

      setLabels(preparedLabels);
      setDatasets(preparedDatasets);
      console.log(datasets);
    }
  }, [datos]);
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
