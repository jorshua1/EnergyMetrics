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
const colors:any=[]

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Función para obtener el color según el país
function getCountryColor(index: any, isBackground = false) {
  if(colors.includes(index)){
    return colors[index];
  }else{
    colors[index]=getRandomColor();
    return colors[index];
  }
   // Color por defecto en caso de que el país no esté en el objeto colors
}

const processDataSet=function (dataset:any, index:number) {
  let color=getCountryColor(index);
  return {
    ...dataset,
    tension: 0.2,
    fill: true,
    borderColor: color, 
    pointRadius: 1,
    pointHoverRadius: 8,
    pointBorderColor: color, 
    pointBackgroundColor: color, 
  };
}

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
    datasets: datasets.map(processDataSet),
  };


  const downloadImage = () => {
    const input = document.getElementById("chartToDownload");
    html2canvas(input!).then((canvas) => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Set watermark text properties
        ctx.font = "50px Arial";
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Position the watermark text
        const text = "Energy Metrics - Guillermo Orozco";
        const x = 870;
        const y = 220;

        // Draw the watermark text
        ctx.fillText(text, x, y);
      }
      // Use optional chaining to ensure input is not null
      const imgData = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${selectedOption !== null ? selectedOption.label : "Grafica sin datos"
        }.jpg`;
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
    <div className="w-11/12 px-5 h-full flex flex-col" >
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
      <div id="chartToDownload">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
