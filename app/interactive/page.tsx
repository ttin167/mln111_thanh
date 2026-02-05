'use client';

import { useState } from 'react';
import PageTitle from '@/components/PageTitle';
import SectionCard from '@/components/SectionCard';
import HedonicTreadmillChart from '@/components/HedonicTreadmillChart';
import EpicureanDoughnutChart from '@/components/EpicureanDoughnutChart';
import InteractiveScenarios from '@/components/InteractiveScenarios';

export default function InteractivePage() {
  const [selectedDesire, setSelectedDesire] = useState<string>('');
  const [desireCategory, setDesireCategory] = useState<string>('');
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const desires = [
    { text: 'Thức ăn cơ bản hàng ngày', category: 'necessary' },
    { text: 'Biệt thự sang trọng', category: 'unnecessary' },
    { text: 'Nơi ở đơn giản', category: 'necessary' },
    { text: 'Trở thành nổi tiếng', category: 'unnecessary' },
    { text: 'Bữa ăn tại nhà hàng 5 sao', category: 'natural-unnecessary' },
    { text: 'Quần áo ấm', category: 'necessary' },
    { text: 'Túi hiệu xa xỉ', category: 'unnecessary' },
    { text: 'Tình bạn chân thật', category: 'necessary' },
    { text: 'Hàng triệu followers', category: 'unnecessary' },
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'Bạn được mời đến một bữa tiệc xa hoa. Epicurus sẽ khuyên gì?',
      options: [
        { text: 'Đi để networking và tăng danh tiếng', value: 'hedonist' },
        { text: 'Đi nếu có bạn bè thân thiết, tránh nếu chỉ để phô trương', value: 'epicurean' },
        { text: 'Không đi, ở nhà một mình', value: 'ascetic' },
      ],
    },
    {
      id: 'q2',
      question: 'Bạn nghĩ về cái chết như thế nào?',
      options: [
        { text: 'Sợ hãi và cố gắng không nghĩ đến nó', value: 'fearful' },
        { text: 'Cái chết không đáng sợ vì khi ta còn sống, chết chưa đến', value: 'epicurean' },
        { text: 'Sống hết mình bây giờ vì ngày mai có thể chết', value: 'hedonist' },
      ],
    },
    {
      id: 'q3',
      question: 'Bạn có cơ hội thăng tiến nhưng phải hy sinh thời gian với gia đình. Bạn chọn?',
      options: [
        { text: 'Thăng tiến - Danh vọng và tiền bạc quan trọng', value: 'ambitious' },
        { text: 'Từ chối - Thời gian với người thân quý giá hơn', value: 'epicurean' },
        { text: 'Thử thương lượng giảm công việc', value: 'balanced' },
      ],
    },
  ];

  const handleDesireCheck = (desire: string, category: string) => {
    setSelectedDesire(desire);
    setDesireCategory(category);
  };

  const handleQuizAnswer = (questionId: string, value: string) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
  };

  const calculateQuizResult = () => {
    const epicureanCount = Object.values(quizAnswers).filter(
      (answer) => answer === 'epicurean'
    ).length;
    return epicureanCount;
  };

  const handleShowResult = () => {
    setShowQuizResult(true);
    const score = calculateQuizResult();
    
    // If user got all answers correct, change background
    if (score === 3) {
      setTimeout(() => {
        const event = new CustomEvent('changeInteractiveBackground', {
          detail: { background: 'Dead_of_Soc.jpg' }
        });
        window.dispatchEvent(event);
      }, 500);
    }
  };

  const getDesireMessage = (category: string) => {
    switch (category) {
      case 'necessary':
        return '✅ Đây là ham muốn tự nhiên và cần thiết - Hãy thỏa mãn nó!';
      case 'natural-unnecessary':
        return '⚠️ Đây là ham muốn tự nhiên nhưng không cần thiết - Hãy điều độ!';
      case 'unnecessary':
        return '❌ Đây là ham muốn không tự nhiên và không cần thiết - Nên tránh!';
      default:
        return '';
    }
  };

  const quizScore = calculateQuizResult();

  return (
    <>
      <PageTitle subtitle="Thử nghiệm và khám phá triết học Epicureanism">
        Công Cụ Tương Tác
      </PageTitle>

      {/* Hedonic Treadmill Chart Section */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2 block">
            Góc Nhìn 1
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hedonism: Vòng Lặp Vô Tận
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed max-w-3xl">
            Với Hedonism, niềm vui là mục tiêu trực tiếp. Mọi hành động đều được cân đo đong đếm dựa trên lượng "pleasure" (khoái cảm) mà nó mang lại. 
            Tuy nhiên, tâm lý học hiện đại gọi đây là <strong>"Hedonic Treadmill" (Vòng chạy khoái lạc)</strong>.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
            Khi bạn đạt được một điều gì đó (mua xe mới, được thăng chức), mức độ hạnh phúc tăng vọt nhưng nhanh chóng quay về mức bão hòa. 
            Để cảm thấy vui trở lại, bạn cần một liều lượng kích thích lớn hơn.
          </p>
        </div>
        <HedonicTreadmillChart />
      </div>

      {/* Epicurean Desires Doughnut Chart Section */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2 block">
            Góc Nhìn 2
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Epicureanism: Khu Vườn Tĩnh Lặng
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed max-w-3xl">
            Epicurus không khuyên chúng ta từ bỏ niềm vui, mà ông dạy ta cách <strong>quản trị ham muốn</strong>. 
            Ông phân loại ham muốn thành 3 nhóm. Bí quyết của hạnh phúc là tập trung vào nhóm 1 và loại bỏ nhóm 3.
          </p>
        </div>
        <EpicureanDoughnutChart />
      </div>

      {/* Interactive Scenarios Section */}
      <div className="mb-12">
        <InteractiveScenarios />
      </div>

      {/* Desire Classifier */}
      <SectionCard gradient="blue-pink" className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">🎯 Phân Loại Ham Muốn</h2>
        <p className="text-gray-700 mb-4">
          Chọn một ham muốn để xem nó thuộc loại nào theo phân loại của Epicurus:
        </p>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {desires.map((desire, index) => (
            <button
              key={index}
              onClick={() => handleDesireCheck(desire.text, desire.category)}
              className={`p-3 rounded-lg text-left transition-all ${
                selectedDesire === desire.text
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-100 text-gray-800'
              }`}
            >
              {desire.text}
            </button>
          ))}
        </div>

        {desireCategory && (
          <div
            className={`p-4 rounded-lg text-center font-semibold ${
              desireCategory === 'necessary'
                ? 'bg-green-100 text-green-800'
                : desireCategory === 'natural-unnecessary'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {getDesireMessage(desireCategory)}
          </div>
        )}
      </SectionCard>

      {/* Philosophy Quiz */}
      <SectionCard gradient="pink-blue" className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">📝 Quiz: Bạn Epicurean Đến Mức Nào?</h2>
        <p className="text-gray-700 mb-6">
          Trả lời các câu hỏi sau để xem bạn có suy nghĩ giống Epicurus không:
        </p>

        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-3">{question.question}</h3>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 p-2 rounded hover:bg-white hover:bg-opacity-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      onChange={() => handleQuizAnswer(question.id, option.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(quizAnswers).length === quizQuestions.length && (
          <button
            onClick={handleShowResult}
            className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Xem Kết Quả
          </button>
        )}

        {showQuizResult && (
          <div className="mt-6 p-6 bg-gradient-blue-pink rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Kết Quả Của Bạn</h3>
            <p className="text-4xl font-bold text-primary mb-3">{quizScore}/3</p>
            <p className="text-gray-700">
              {quizScore === 3
                ? '🏆 Xuất sắc! Bạn là một Epicurean chân chính!'
                : quizScore === 2
                ? '👍 Tốt! Bạn đang trên con đường đúng.'
                : '📚 Hãy tìm hiểu thêm về triết học Epicureanism!'}
            </p>
          </div>
        )}
      </SectionCard>

      {/* Daily Reflection */}
      <SectionCard gradient="blue-pink">
        {showQuizResult && quizScore === 3 ? (
          <p className="text-gray-700 mb-4">
            <strong>"Death of Socrates"</strong> (năm 399 TCN) là sự kiện nhà triết học vĩ đại Hy Lạp bị chính quyền Athens kết án tử hình bằng cách uống thuốc độc (cây độc cần) vì các cáo buộc làm hư hỏng giới trẻ và không tôn kính thần linh. Thay vì bỏ trốn, ông bình thản đón nhận cái chết để giữ vững nguyên tắc đạo đức, triết lý và sự tôn trọng luật pháp, trở thành biểu tượng của trí tuệ bất khuất.
          </p>
        ) : (
          <p className="text-gray-700 mb-4">
            <strong>"Socrates Address"</strong> (thường được biết đến qua tác phẩm "Apology of Socrates" - Lời bào chữa của Socrates do Plato ghi chép) là bài phát biểu tự bảo vệ mình trước tòa án Athens năm 399 TCN. Thay vì xin tha tội, Socrates lập luận rằng ông là người đi tìm chân lý, thách thức sự thiếu hiểu biết của người đời thông qua phương pháp vấn đáp (Socratic Method), và khẳng định sự ngay thẳng của mình dù đối mặt với án tử hình.
          </p>
        )}
        <div className="space-y-4">
          <div className="bg-gradient-pink-blue p-4 rounded-lg text-center">
            <p className="text-gray-700 italic">
              "Hãy sống ẩn dật" (Lathe biosas - λάθε βιώσας)
              <br />
              <span className="text-sm">
                Không cần nổi tiếng hay quyền lực, hãy sống một cuộc đời đơn giản và hạnh phúc
              </span>
            </p>
          </div>
        </div>
      </SectionCard>
    </>
  );
}
