'use client';

import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface FloatingWord {
  text: string;
  angle: number;
  distance: number;
  delay: number;
  fontSize: number;
}

export default function EpicureanDoughnutChart() {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);

  const segmentWords = [
    ['Nước uống', 'Bánh mì', 'Tình bạn', 'Nơi trú ẩn', 'An toàn', 'Tri thức', 'Sức khỏe', 'Bình yên', 'Tự do', 'Giản dị'],
    ['Món ngon', 'Giường êm', 'Trang phục đẹp', 'Âm nhạc', 'Nghệ thuật', 'Giải trí', 'Du lịch', 'Thú vui', 'Sở thích', 'Tiện nghi'],
    ['Danh vọng', 'Quyền lực', 'Giàu có', 'Bất tử', 'Địa vị', 'Nổi tiếng', 'Sang trọng', 'Khen ngợi', 'Tôn vinh', 'Uy tín']
  ];

  // Generate random floating words when hovering
  useEffect(() => {
    if (hoveredSegment !== null) {
      const words = segmentWords[hoveredSegment];
      
      // Calculate center angle for each segment based on data distribution
      const dataValues = [40, 30, 30]; // percentages
      let startAngle = 0;
      for (let i = 0; i < hoveredSegment; i++) {
        startAngle += (dataValues[i] / 100) * 360;
      }
      const segmentAngle = (dataValues[hoveredSegment] / 100) * 360;
      const centerAngle = startAngle + segmentAngle / 2;
      
      // Convert to radians for math, adjust for canvas coordinate (starts at right, goes counter-clockwise)
      const baseAngle = centerAngle - 90; // Adjust so 0° is at top
      const angleRange = 90; // Even wider angle range
      
      const tempWords: FloatingWord[] = words.map((word, idx) => {
        // Distribute words more evenly with progressive distance
        const angleOffset = (idx / (words.length - 1) - 0.5) * angleRange;
        const progressiveDistance = 230 + (idx * 20) + Math.random() * 30;
        
        return {
          text: word,
          angle: baseAngle + angleOffset,
          distance: progressiveDistance,
          delay: idx * 0.06,
          fontSize: 14 + Math.random() * 8
        };
      });
      
      // Apply collision detection and adjustment
      const newFloatingWords: FloatingWord[] = tempWords.map((word, idx) => {
        let finalAngle = word.angle;
        let finalDistance = word.distance;
        
        // Check against previous words for collision
        for (let i = 0; i < idx; i++) {
          const other = tempWords[i];
          const rad1 = (finalAngle * Math.PI) / 180;
          const rad2 = (other.angle * Math.PI) / 180;
          const x1 = Math.cos(rad1) * finalDistance;
          const y1 = Math.sin(rad1) * finalDistance;
          const x2 = Math.cos(rad2) * other.distance;
          const y2 = Math.sin(rad2) * other.distance;
          
          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          const minDistance = 60; // Minimum distance between words
          
          if (distance < minDistance) {
            // Push word away by adjusting angle and distance
            finalAngle += (Math.random() - 0.5) * 20;
            finalDistance += 25;
          }
        }
        
        return {
          ...word,
          angle: finalAngle,
          distance: finalDistance
        };
      });
      
      setFloatingWords(newFloatingWords);
    } else {
      setFloatingWords([]);
    }
  }, [hoveredSegment]);

  const adviceContent = [
    "<strong>🌿 Nhóm Cốt Lõi:</strong> Đây là những điều kiện tối thiểu để sinh tồn và hạnh phúc (nước uống, bạn bè, tri thức). Epicurus khuyên: <em>'Hãy thỏa mãn chúng để đạt trạng thái không đau đớn (aponia).'</em>",
    "<strong>🍰 Nhóm Chừng Mực:</strong> Những thứ mang lại sự đa dạng cho niềm vui (món ăn ngon, giường êm). Epicurus khuyên: <em>'Tận hưởng nếu có, nhưng đừng đau khổ nếu thiếu chúng.'</em>",
    "<strong>🚫 Nhóm Cần Tránh:</strong> Danh vọng, quyền lực, sự bất tử. Chúng không có giới hạn tự nhiên. Epicurus khuyên: <em>'Loại bỏ hoàn toàn, vì chúng chỉ mang lại lo âu và sự lệ thuộc.'</em>"
  ];

  const colors = ['border-green-500', 'border-yellow-500', 'border-red-500'];
  const wordColors = ['text-green-600', 'text-yellow-600', 'text-red-600'];

  const data = {
    labels: ['Tự nhiên & Cần thiết', 'Tự nhiên & Không cần thiết', 'Vô ích & Phù phiếm'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: [
          '#48bb78', // Green
          '#ecc94b', // Yellow
          '#f56565'  // Red
        ],
        borderWidth: 0,
        hoverOffset: 10
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { 
        position: 'bottom' as const,
        labels: {
          font: {
            size: 11
          }
        }
      },
      tooltip: { 
        enabled: false 
      }
    },
    onClick: (_event: any, activeElements: any[]) => {
      if (activeElements.length > 0) {
        const index = activeElements[0].index;
        setSelectedSegment(index);
      }
    },
    onHover: (_event: any, activeElements: any[]) => {
      if (activeElements.length > 0) {
        const index = activeElements[0].index;
        setHoveredSegment(index);
      } else {
        setHoveredSegment(null);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Cơ Cấu Ham Muốn Epicurean</h3>
        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Tương tác</div>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Nhấp vào các phần của biểu đồ để xem lời khuyên của Epicurus.
      </p>

      <div className="relative w-full h-[350px] md:h-[400px]">
        <Doughnut data={data} options={options} />
        
        {/* Floating words */}
        {floatingWords.map((word, idx) => {
          const radians = (word.angle * Math.PI) / 180;
          const x = Math.cos(radians) * word.distance;
          const y = Math.sin(radians) * word.distance;
          
          return (
            <div
              key={idx}
              className={`absolute top-1/2 left-1/2 pointer-events-none transition-all duration-500 ease-out ${
                hoveredSegment !== null ? wordColors[hoveredSegment] : ''
              }`}
              style={{
                transform: hoveredSegment !== null 
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : 'translate(-50%, -50%) scale(0)',
                opacity: hoveredSegment !== null ? 1 : 0,
                transitionDelay: hoveredSegment !== null ? `${word.delay}s` : '0s',
                fontSize: `${word.fontSize}px`,
                fontWeight: '600',
                textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap'
              }}
            >
              {word.text}
            </div>
          );
        })}
      </div>

      <div 
        className={`mt-4 p-3 bg-gray-50 rounded text-sm text-gray-700 border-l-4 min-h-[80px] ${
          selectedSegment !== null ? colors[selectedSegment] : 'border-gray-300'
        }`}
        dangerouslySetInnerHTML={{
          __html: selectedSegment !== null 
            ? adviceContent[selectedSegment]
            : 'Hãy chọn một loại ham muốn trên biểu đồ để xem triết lý tương ứng.'
        }}
      />
    </div>
  );
}
