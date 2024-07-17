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
import html2canvas from "html2canvas";
import { TbDownload } from "react-icons/tb";
import React from "react";

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
      pointRadius: 1,
      pointHoverRadius: 8,
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
      8: "#34d399", // verde
      9: "#60a5fa", // azul claro
      10: "#f9a8d4", // rosa
      11: "#fde68a", // amarillo
      12: "#a78bfa", // morado
      13: "#fca5a5", // rojo claro
      14: "#6ee7b7", // verde claro
      15: "#93c5fd", // azul cielo
      16: "#794044", // marrón
      17: "#6a0573", // púrpura oscuro
      18: "#b6ba18", // verde oliva
      19: "#4b5d16", // verde bosque
      20: "#4b5dce", // azul real
      21: "#7e1a1a", // granate
      22: "#2f4f4f", // gris oscuro pizarra
      23: "#ff4500", // naranja rojo
      24: "#2e8b57", // verde mar
      25: "#adff2f", // verde amarillo
    };
    return colors[index] || "#000000"; // Color por defecto en caso de que el país no esté en el objeto colors
  }

  const downloadImage = () => {
    const input = document.getElementById("chartToDownload");
    html2canvas(input!).then((canvas) => {
      // Use optional chaining to ensure input is not null
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${
        selectedOption !== null ? selectedOption.label : "Grafica sin datos"
      }`;
      link.click();
    });
  };

  useEffect(() => {
    console.log("Entrando a la consulta");
    console.log(selectedRegionOption);
    async function fetchData() {
      if (selectedOption !== null && selectedRegionOption !== null) {
        const regionOptionStrings = selectedRegionOption.query.map(
          (option: any) => encodeURIComponent(option)
        );
        console.log(selectedOption.query);
        console.log(
          `/api/stats?value={"Country":{"$in":[${regionOptionStrings}]},"Var":"${selectedOption.query}"}`
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
      console.log(`datasets:${datasets}`);
    }
  }, [datos]);
  return (
    <div className="w-11/12 px-5 h-full flex flex-col" id="chartToDownload">
      <div className="flex justify-between">
        <span className="text-2xl font-bold tracking-tighter text-slate-600 py-5">
          {selectedOption !== null
            ? selectedOption.label
            : "Seleccione una de las estadisticas a visualizar"}
        </span>
        <button
          onClick={downloadImage}
          className={
            selectedRegionOption === null || selectedOption === null
              ? "hidden"
              : "block"
          }
        >
          <TbDownload size={"24px"} className="text-slate-700" />
        </button>
      </div>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
