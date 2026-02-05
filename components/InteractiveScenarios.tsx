'use client';

import { useState } from 'react';

interface Scenario {
  id: string;
  icon: string;
  title: string;
  description: string;
  result: string;
  resultColor: string;
}

export default function InteractiveScenarios() {
  const [revealedScenarios, setRevealedScenarios] = useState<Set<string>>(new Set());

  const scenarios: Scenario[] = [
    {
      id: 'hedonism',
      icon: '🍖🍷',
      title: 'Thử Hết Mọi Thứ',
      description: 'Bạn cố gắng nếm thử mọi món ăn ngon nhất, uống loại rượu đắt nhất cho đến khi no căng.',
      result: '<strong class="text-red-600">Góc nhìn Hedonism:</strong> <span class="text-gray-800">Tuyệt vời! Bạn đang tối đa hóa trải nghiệm hiện tại. Nhưng ngày mai bạn có thể bị đầy bụng và khao khát một bữa tiệc lớn hơn nữa.</span>',
      resultColor: 'border-red-500 bg-red-50'
    },
    {
      id: 'epicurean',
      icon: '🍞🧀',
      title: 'Vừa Đủ Và Trò Chuyện',
      description: 'Bạn chọn một ít bánh mì, phô mai và dành phần lớn thời gian trò chuyện sâu sắc với người bên cạnh.',
      result: '<strong class="text-green-600">Góc nhìn Epicurean:</strong> <span class="text-gray-800">Hoàn hảo! Bạn thỏa mãn cơn đói (tự nhiên) và nuôi dưỡng tình bạn (cần thiết). Bạn ra về với tâm trí nhẹ nhàng, không hối tiếc.</span>',
      resultColor: 'border-green-500 bg-green-50'
    },
    {
      id: 'ascetic',
      icon: '🚫💧',
      title: 'Từ Chối Tất Cả',
      description: 'Bạn quyết định nhịn ăn để rèn luyện ý chí, chỉ uống nước lọc.',
      result: '<strong class="text-gray-600">Góc nhìn Khắc Kỷ (Stoicism/Asceticism):</strong> <span class="text-gray-800">Đây không phải Epicureanism. Epicurus không cổ vũ khổ hạnh ép buộc. Nếu đói mà không ăn thì đó là tạo ra đau đớn không cần thiết.</span>',
      resultColor: 'border-gray-500 bg-gray-50'
    }
  ];

  const toggleScenario = (id: string) => {
    const newRevealed = new Set(revealedScenarios);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealedScenarios(newRevealed);
  };

  return (
    <div>
      <div className="text-center mb-10">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 block">
          Thực Hành Tư Duy
        </span>
        <h2 className="text-3xl font-bold text-gray-900">
          Tình Huống Giả Định: Bữa Tiệc Của Các Vị Thần
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Hãy tưởng tượng bạn được mời đến một bữa tiệc buffet vô tận. Bạn sẽ chọn hành động như thế nào? 
          Nhấp vào lựa chọn để xem phân tích triết học.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer transition-all hover:transform hover:-translate-y-1 hover:shadow-lg"
            onClick={() => toggleScenario(scenario.id)}
          >
            <div className="text-4xl mb-4">{scenario.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{scenario.description}</p>

            {revealedScenarios.has(scenario.id) && (
              <div 
                className={`mt-4 pt-4 border-t-2 text-sm ${scenario.resultColor} p-3 rounded transition-opacity duration-500`}
                dangerouslySetInnerHTML={{ __html: scenario.result }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
