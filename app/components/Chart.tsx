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
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Wraper";

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
  const { selectedOption, selectedRegionOption } = useContext(AppContext);

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
      5: "#0891b2",
      6: "#6d28d9",
      7: "#fbbf24",
    };
    return colors[index] || "#000000"; // Color por defecto en caso de que el país no esté en el objeto colors
  }

  useEffect(() => {
    console.log("Entrando a la consulta");

    async function fetchData() {
      if (selectedOption !== null && selectedRegionOption !== null) {
        const regionOptionStrings = selectedRegionOption.query.map(
          (option: any) => encodeURIComponent(option)
        );
        console.log(selectedOption.query);
        console.log(`consulta chart: ${typeof selectedRegionOption}`);
        console.log(
          `/api/stats?value={"Country":{"$in":[${regionOptionStrings}]},"Var":"${selectedOption.query}"}`
        );
        console.log(
          `/api/stats?value={"Country":{"$in":["Colombia"]},"Var":"${selectedOption.query}"}`
        );
        const response = await fetch(
          `/api/stats?value=${JSON.stringify({
            Country: { $in: regionOptionStrings },
            Var: selectedOption.query,
          })}`
        );

        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          return;
        }

        const dataText = await response.text();

        try {
          const data: { datos: DatoAPI[] } = JSON.parse(dataText);
          setDatos(data.datos);
        } catch (error) {
          console.error("Invalid JSON:", dataText);
        }
      }
    }

    fetchData();
  }, [selectedOption, selectedRegionOption]);

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
    <div className="w-11/12 h-full flex flex-col">
      <span className="text-2xl font-bold tracking-tighter text-slate-600 py-5">
        {selectedOption !== null
          ? selectedOption.label
          : "Seleccione una de las estadisticas a visualizar"}
      </span>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
