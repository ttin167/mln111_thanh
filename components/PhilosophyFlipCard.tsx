'use client';

import { useEffect, useRef, useState } from 'react';

export default function PhilosophyFlipCard() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [ropeVisible, setRopeVisible] = useState(false);
  const [ropePulled, setRopePulled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  const startYRef = useRef(0);

  useEffect(() => {
    if (!isFlipped) {
      // Epicureanism showing - show rope after flip animation
      const timer = setTimeout(() => {
        setRopeVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      // Hedonism showing - hide rope
      setRopeVisible(false);
      setRopePulled(false);
      setPullProgress(0);
    }
  }, [isFlipped]);

  const handleCardClick = () => {
    if (ropeVisible && !ropePulled) {
      // Hide rope first, then flip
      setRopeVisible(false);
      setTimeout(() => {
        setIsFlipped(!isFlipped);
      }, 300);
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  const handleRopePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    startYRef.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  const handleRopePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const delta = e.clientY - startYRef.current;
    const progress = Math.min(Math.max(delta / 100, 0), 1);
    setPullProgress(progress);
    if (progress >= 1) {
      setRopePulled(true);
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }
  };

  const handleRopePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="relative w-full mb-12 isolate">
      {/* Rope */}
      {ropeVisible && (
        <div
          className={`absolute z-50 transition-all duration-500 select-none ${
            ropeVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '-30px',
            right: '20px',
            width: '20px',
            height: `${60 + pullProgress * 40}px`,
            background: 'linear-gradient(to bottom, #8B4513, #654321)',
            borderRadius: '10px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            cursor: isDragging ? 'grabbing' : 'grab',
            transform: 'none',
            transformOrigin: 'top center',
          }}
          onPointerDown={handleRopePointerDown}
          onPointerMove={handleRopePointerMove}
          onPointerUp={handleRopePointerUp}
          onPointerCancel={handleRopePointerUp}
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-700 rounded-full border-2 border-amber-900"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
            }}
          />
        </div>
      )}

      {/* Flip Card Container */}
      <div 
        className={`perspective-1000 w-full relative z-20 transition-all duration-700`}
        style={{ minHeight: isFlipped ? '675px' : '545px' }}
      >
        <div
          onClick={handleCardClick}
          className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: isFlipped ? '675px' : '545px',
          }}
        >
          {/* Front - Epicureanism */}
          <div
            className="absolute w-full backface-hidden rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30 bg-gradient-blue-pink hover:shadow-xl transition-shadow duration-300"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">📜 Epicureanism - Chủ Nghĩa Khoái Lạc Epicurus</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Nguồn Gốc</h3>
                <p className="text-gray-700 leading-relaxed">
                  Được sáng lập bởi Epicurus (341-270 TCN) tại Athens. Ông thành lập trường phái The Garden 
                  (Vườn), nơi dạy rằng hạnh phúc đích thực đến từ sự giản dị, tình bạn và trí tuệ.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Nguyên Lý Cốt Lõi</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Ataraxia</strong> (ἀταραξία) - Bình an của tâm hồn, không bị xáo động</li>
                  <li><strong>Aponia</strong> (ἀπονία) - Không có đau khổ về thể chất</li>
                  <li><strong>Phronesis</strong> (φρόνησις) - Trí tuệ thực tiễn, suy xét khôn ngoan</li>
                  <li><strong>Autarkeia</strong> (αὐτάρκεια) - Tự túc, không phụ thuộc vào vật chất</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Vật Lý Học Nguyên Tử</h3>
                <p className="text-gray-700 leading-relaxed">
                  Epicurus chấp nhận học thuyết nguyên tử của Democritus, tin rằng vũ trụ được tạo thành từ 
                  các nguyên tử và khoảng trống. Điều này giải phóng con người khỏi nỗi sợ hãi về thần linh 
                  và cái chết.
                </p>
              </div>
            </div>
          </div>

          {/* Back - Hedonism */}
          <div
            className="absolute w-full backface-hidden rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30 bg-gradient-pink-blue hover:shadow-xl transition-shadow duration-300"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">🎭 Hedonism - Chủ Nghĩa Khoái Lạc Cyrenaic</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Nguồn Gốc</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trường phái Cyrenaic do Aristippus thành Cyrene sáng lập đại diện cho hình thức cực đoan nhất 
                  của chủ nghĩa khoái lạc. Đối với Aristippus, giá trị duy nhất nằm ở khoảnh khắc hiện tại. 
                  Ông lập luận rằng quá khứ đã trôi qua và tương lai thì bất định, do đó, người khôn ngoan là 
                  người biết tối đa hóa những khoái cảm thể xác ngay lúc này.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Đặc Điểm Chính</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Tập trung vào hiện tại</strong> - Quá khứ đã mất, tương lai bất định, chỉ có hiện tại là thực</li>
                  <li><strong>Khoái lạc thể xác</strong> - Coi trọng cảm giác vật lý hơn niềm vui tinh thần</li>
                  <li><strong>Chuyển động êm đềm</strong> - Niềm vui là "chuyển động êm đềm", đau khổ là "chuyển động thô bạo"</li>
                  <li><strong>Thích nghi vô hạn</strong> - Sẵn sàng phá vỡ quy tắc đạo đức nếu mang lại khoái lạc</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Điểm Yếu Cốt Lõi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Điểm yếu cốt yếu của chủ nghĩa Cyrenaic chính là sự lệ thuộc vào các kích thích ngoại cảnh. 
                  Khi niềm vui được định nghĩa là một "chuyển động êm đềm", con người buộc phải liên tục tìm kiếm 
                  những chuyển động mới để duy trì cảm giác sống, dẫn đến một trạng thái bất ổn kinh niên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Card - Sự Ly Khai của Epicurus */}
      <div
        className={`overflow-hidden transition-all duration-700 ${
          ropePulled
            ? 'max-h-[1000px] opacity-100 translate-y-0 mt-6'
            : 'max-h-0 opacity-0 -translate-y-4 mt-0 pointer-events-none'
        }`}
      >
        <div className="rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30 bg-gradient-blue-pink hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-primary mb-6">⚡ Sự Ly Khai của Epicurus</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Chuyển Đổi Quan Trọng</h3>
              <p className="text-gray-700 leading-relaxed">
                Epicurus, dù cũng bắt đầu từ tiền đề rằng niềm vui là mục tiêu của cuộc sống, đã thực hiện 
                một cuộc ly khai tri thức quan trọng. Ông không nhìn nhận niềm vui như một chuỗi các kích thích 
                liên tục mà coi đó là trạng thái cân bằng của một cơ thể không đau đớn và một tâm hồn không xáo trộn.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-2">Khoái Lạc Động vs Tĩnh</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-blue-600">Khoái Lạc Động (Kinetic Pleasure)</h4>
                  <p className="text-gray-700 text-sm">
                    Xảy ra trong quá trình thỏa mãn một nhu cầu hoặc loại bỏ một nỗi đau. Ví dụ: cảm giác khi 
                    một người đang khát được uống nước. Loại niềm vui này luôn gắn liền với một trạng thái thiếu 
                    hụt hoặc xáo trộn trước đó.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600">Khoái Lạc Tĩnh (Katastematic Pleasure)</h4>
                  <p className="text-gray-700 text-sm">
                    Trạng thái sau khi nhu cầu đã được đáp ứng hoàn toàn: cảm giác thoải mái khi không còn khát, 
                    không còn đói và tâm trí bình yên. Đỉnh cao của niềm vui không phải là sự gia tăng kích thích 
                    mà là sự vắng bóng hoàn toàn của nỗi đau (Aponia) và sự xáo trộn (Ataraxia).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
