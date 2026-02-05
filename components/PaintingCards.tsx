'use client';

import { useEffect, useRef, useState } from 'react';

export default function PaintingCards() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsExpanded(true);

    const swapTimer = window.setTimeout(() => {
      setIsFlipped((prev) => !prev);
    }, 320);

    const collapseTimer = window.setTimeout(() => {
      setIsExpanded(false);
    }, 620);

    const doneTimer = window.setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    timersRef.current.push(swapTimer, collapseTimer, doneTimer);
  };

  return (
    <div className="relative w-full min-h-[300px] flex items-center justify-center mb-8">
      {/* Card 1 */}
      <div
        onClick={handleClick}
        className={`absolute w-full max-w-2xl min-h-[280px] rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30 bg-gradient-to-br from-blue-200/95 via-purple-200/90 to-pink-200/95 cursor-pointer hover:shadow-xl transition-all duration-500 flex items-center transform-gpu ${
          isFlipped
            ? 'z-20 scale-100 opacity-100'
            : 'z-10 scale-[0.98] opacity-90'
        } ${isExpanded ? '-translate-x-[220px]' : 'translate-x-0'}`}
      >
        <p className="text-gray-700 leading-relaxed">
          <strong>The_Feast_of_Achelous</strong>: Đây là sự giao thoa rực rỡ giữa hai bậc thầy: Peter Paul Rubens và Jan Brueghel Cha trong một tạo tác thần thoại đầy mê hoặc. Trong tấm bảng gỗ này, Rubens là người 'thổi hồn' vào những hình thể nuy cuồn cuộn sức sống dựa trên hình mẫu điêu khắc cổ đại, còn Brueghel lại phô diễn tài năng thiên bẩm khi khắc họa vạn vật xung quanh—từ phong cảnh kỳ vĩ đến những tĩnh vật tinh xảo.
        </p>
      </div>

      {/* Card 2 */}
      <div
        onClick={handleClick}
        className={`absolute w-full max-w-2xl min-h-[280px] rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30 bg-gradient-to-br from-pink-200/95 via-purple-200/90 to-blue-200/95 cursor-pointer hover:shadow-xl transition-all duration-500 flex items-center transform-gpu ${
          isFlipped
            ? 'z-10 scale-[0.98] opacity-90'
            : 'z-20 scale-100 opacity-100'
        } ${isExpanded ? 'translate-x-[220px]' : 'translate-x-0'}`}
      >
        <p className="text-gray-700 leading-relaxed">
          Bức tranh mở ra khoảnh khắc thần sông Acheloüs đang giãi bày cùng người hùng Theseus về số phận nghiệt ngã của nàng Perimele: để nàng mãi mãi nằm trọn trong vòng tay ôm ấp của dòng sông, thần Neptune đã biến nàng thành một hòn đảo xa xăm. Tác phẩm không chỉ là một bức họa, mà là một 'cuốn bách khoa toàn thư' bằng hình ảnh—nơi tri thức cổ điển, vẻ đẹp con người và sự kỳ diệu của thiên nhiên hòa quyện, minh chứng cho trình độ bậc thầy dành riêng cho những nhà sưu tầm tinh tế nhất.
        </p>
      </div>
    </div>
  );
}
