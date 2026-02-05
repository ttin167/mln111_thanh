'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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

export default function HedonicTreadmillChart() {
  const [stimulusCount, setStimulusCount] = useState(0);
  const [labels, setLabels] = useState([
    'Bình thường',
    'Kích thích 1',
    'Thích ứng',
    'Buồn chán',
    'Kích thích 2',
    'Thích ứng',
    'Trống rỗng'
  ]);
  const [hedonismData, setHedonismData] = useState([5, 9, 6, 4, 9.5, 5.5, 3]);
  const [epicureanData, setEpicureanData] = useState([5, 5.5, 5.5, 5.5, 6, 6, 6.5]);

  const addStimulus = () => {
    const newStimulusCount = stimulusCount + 1;
    setStimulusCount(newStimulusCount);

    const currentData = [...hedonismData];
    const currentLabels = [...labels];
    const currentEpicurean = [...epicureanData];

    const lastVal = currentData[currentData.length - 1];
    const newVal = Math.min(10, lastVal + 4); // Spike
    const crashVal = Math.max(1, lastVal - 1.5); // Crash lower

    // Add Spike
    currentLabels.push(`Kích thích Mới ${newStimulusCount}`);
    currentData.push(newVal);
    currentEpicurean.push(6.5);

    // Add Crash
    currentLabels.push('Thích ứng nhanh');
    currentData.push(crashVal);
    currentEpicurean.push(6.5);

    // Limit data points to keep chart readable
    if (currentLabels.length > 12) {
      currentLabels.splice(0, 2);
      currentData.splice(0, 2);
      currentEpicurean.splice(0, 2);
    }

    setLabels(currentLabels);
    setHedonismData(currentData);
    setEpicureanData(currentEpicurean);
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Mức độ Hạnh Phúc (Hedonism)',
        data: hedonismData,
        borderColor: '#c53030',
        backgroundColor: 'rgba(197, 48, 48, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#c53030',
        pointRadius: 5
      },
      {
        label: 'Mức độ An Nhiên (Epicureanism)',
        data: epicureanData,
        borderColor: '#2f855a',
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.2,
        fill: false,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return context.dataset.label + ': ' + context.raw;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        title: { 
          display: true, 
          text: 'Chỉ số Hài lòng',
          font: {
            size: 12
          }
        }
      },
      x: {
        ticks: { 
          font: { 
            size: 10 
          } 
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Biểu Đồ Khoái Lạc Động (Kinetic Pleasure)</h3>
        <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Mô phỏng</div>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Biểu đồ thể hiện sự dao động của cảm xúc khi theo đuổi khoái lạc nhất thời.
      </p>

      <div className="relative w-full h-[350px] md:h-[400px]">
        <Line data={data} options={options} />
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={addStimulus}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded shadow transition"
        >
          + Thêm Kích Thích Mới (Mua sắm, Tiệc tùng...)
        </button>
      </div>
    </div>
  );
}
