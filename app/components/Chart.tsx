'use client'
import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';

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

const beneficios: number[] = [0, 10, 23, -1, 50, 24, 65, 23, 64];
const meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const data = {
    labels: meses,
    datasets: [ //Cada objeto dentro del datasets representa una linea del grafico
        {
            label: "Beneficios",
            data: beneficios,
            tension: 0.2,
            fill: true,
            borderColor: "#3730a3",
            backgroundColor: "#2563eb",
            pointRadius: 5,
            pointBorderColor: "#3730a3",
            pointBackgroundColor: "#2563eb",
        }
    ]
};

const options = {};

const Chart = () => {
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    );
};

export default Chart;
