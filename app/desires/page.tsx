import PageTitle from '@/components/PageTitle';
import SectionCard from '@/components/SectionCard';

export const metadata = {
  title: 'Phân Loại Ham Muốn',
  description: 'Hệ thống phân loại ham muốn theo Epicurus',
};

export default function DesiresPage() {
  return (
    <>
      <PageTitle subtitle="Hệ thống phân loại ham muốn của Epicurus">
        Phân Loại Ham Muốn
      </PageTitle>

      <SectionCard gradient="blue-pink" className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">📊 Ba Loại Ham Muốn</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Epicurus phân chia ham muốn thành ba loại chính, mỗi loại có mức độ cần thiết và ảnh hưởng 
          khác nhau đến hạnh phúc của con người:
        </p>
      </SectionCard>

      <div className="space-y-6">
        {/* Angel statue */}
        <div className="flex justify-center mb-6">
          <div className="relative w-96 h-[550px]">
            <div className="absolute" style={{ top: '-31px', left: '0px', width: '388px', height: '605px' }}>
              <img
                src="/images/angel.png"
                alt="Angel"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute" style={{ top: '-48px', left: '-63px', width: '501px', height: '654px', zIndex: -1 }}>
              <img
                src="/images/heaven.png"
                alt="Heaven Frame"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        <SectionCard gradient="blue-pink">
          <h3 className="text-2xl font-bold text-primary mb-1">1. Ham Muốn Tự Nhiên và Cần Thiết</h3>
          <p className="text-gray-700 mb-4 italic">
            (Natural and Necessary Desires)
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Đặc điểm:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Cần thiết cho sự sống còn và hạnh phúc</li>
                <li>Dễ dàng thỏa mãn</li>
                <li>Không gây ra đau khổ khi thỏa mãn đúng cách</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Ví dụ:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">🍞</span>
                  <span className="text-gray-700"><strong>Thức ăn cơ bản</strong> - Bánh mì, nước, thức ăn đơn giản</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🏠</span>
                  <span className="text-gray-700"><strong>Nơi trú ẩn</strong> - Chỗ ở che mưa che nắng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">👕</span>
                  <span className="text-gray-700"><strong>Quần áo</strong> - Trang phục đơn giản, đủ ấm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🛡️</span>
                  <span className="text-gray-700"><strong>An toàn</strong> - Tránh nguy hiểm, bệnh tật</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Woman statue */}
        <div className="flex justify-center mb-6">
          <div className="relative w-96 h-[550px]">
            <div className="absolute" style={{ top: '0px', left: '0px', width: '384px', height: '550px' }}>
              <img
                src="/images/woman.png"
                alt="Veiled Woman"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute" style={{ top: '-64px', left: '-84px', width: '544px', height: '671px' }}>
              <img
                src="/images/human.png"
                alt="Human Frame"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        <SectionCard gradient="pink-blue">
          <h3 className="text-2xl font-bold text-primary mb-1">2. Ham Muốn Tự Nhiên nhưng Không Cần Thiết</h3>
          <p className="text-gray-700 mb-4 italic">
            (Natural but Unnecessary Desires)
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Đặc điểm:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Tự nhiên nhưng không thiết yếu cho hạnh phúc</li>
                <li>Có thể mang lại khoái lạc nhưng cần điều độ</li>
                <li>Dễ dẫn đến thái quá nếu không kiểm soát</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Ví dụ:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">🍰</span>
                  <span className="text-gray-700"><strong>Thức ăn ngon</strong> - Món ăn xa xỉ, thức ăn đặc biệt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🏰</span>
                  <span className="text-gray-700"><strong>Nhà cửa thoải mái</strong> - Dinh thự, trang trí đẹp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">💑</span>
                  <span className="text-gray-700"><strong>Tình dục</strong> - Khoái lạc thể xác (không cần thiết cho sống còn)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🎭</span>
                  <span className="text-gray-700"><strong>Giải trí</strong> - Âm nhạc, nghệ thuật, trò chơi</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Lucifer statue */}
        <div className="flex justify-center mb-6">
          <div className="relative w-96 h-[550px]">
            <div className="absolute" style={{ top: '0px', left: '0px', width: '384px', height: '574px' }}>
              <img
                src="/images/lucifer.png"
                alt="Lucifer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute" style={{ top: '-57px', left: '-35px', width: '460px', height: '683px', zIndex: -1 }}>
              <img
                src="/images/hell.png"
                alt="Hell Frame"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        <SectionCard gradient="none" className="border-2 border-red-500">
          <h3 className="text-2xl font-bold text-red-600 mb-1">
            3. Ham Muốn Không Tự Nhiên và Không Cần Thiết
          </h3>
          <p className="text-gray-700 mb-4 italic">
            (Vain and Empty Desires / Neither Natural nor Necessary)
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-600 mb-2">Đặc điểm:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Được tạo ra bởi xã hội và văn hóa</li>
                <li>Không bao giờ được thỏa mãn hoàn toàn</li>
                <li>Là nguồn gốc chính của đau khổ và bất an</li>
                <li>Nên tránh hoàn toàn theo Epicurus</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-600 mb-2">Ví dụ:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">👑</span>
                  <span className="text-gray-700"><strong>Danh vọng</strong> - Nổi tiếng, được ngưỡng mộ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">💎</span>
                  <span className="text-gray-700"><strong>Của cải vô hạn</strong> - Sự giàu có không giới hạn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-gray-700"><strong>Quyền lực</strong> - Kiểm soát người khác, địa vị cao</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🏆</span>
                  <span className="text-gray-700"><strong>Bất tử</strong> - Muốn được nhớ mãi, để lại di sản vĩnh cửu</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard gradient="blue-pink">
          <h2 className="text-2xl font-bold text-primary mb-4">💡 Nguyên Tắc Thực Hành</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600 mb-2 text-lg">✓ Thỏa Mãn Đầy Đủ</h3>
              <p className="text-sm text-gray-700">Ham muốn tự nhiên và cần thiết</p>
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-600 mb-2 text-lg">⚠ Điều Độ</h3>
              <p className="text-sm text-gray-700">Ham muốn tự nhiên nhưng không cần thiết</p>
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-bold text-red-600 mb-2 text-lg">✗ Tránh Xa</h3>
              <p className="text-sm text-gray-700">Ham muốn không tự nhiên và không cần thiết</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard gradient="pink-blue">
          <h2 className="text-2xl font-bold text-primary mb-4">📱 Ví Dụ Hiện Đại: Mạng Xã Hội & Ham Muốn Phù Phiếm</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Trong kỷ nguyên của AI và mạng xã hội, ham muốn "trở nên nổi tiếng" hay "có cuộc sống hào nhoáng 
              như người có tầm ảnh hưởng (influencer)" chính là hình thái hiện đại của những ham muốn phù phiếm 
              mà Epicurus đã cảnh báo.
            </p>
            
            <div className="bg-gradient-blue-pink p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-3">🎯 Phân Tích: Sinh Viên & Mạng Xã Hội</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white bg-opacity-70 p-3 rounded">
                  <p className="font-bold text-red-600 mb-1">❌ Vấn đề:</p>
                  <p className="text-gray-700">
                    Khi một sinh viên cảm thấy đau khổ vì không có được mức lương hay lối sống như bạn bè 
                    trên LinkedIn, họ đang vi phạm nguyên tắc về việc chỉ theo đuổi những ham muốn tự nhiên và cần thiết.
                  </p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded">
                  <p className="font-bold text-green-600 mb-1">✅ Giải pháp Epicurean:</p>
                  <p className="text-gray-700">
                    Thực hiện một cuộc "kiểm toán tinh thần", loại bỏ những áp lực không đáng có từ những mục tiêu ảo ảnh. 
                    Hiểu rằng danh tiếng và quyền lực là những ham muốn không có đáy - càng đổ thêm vào, chúng ta càng cảm thấy thiếu hụt.
                  </p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded">
                  <p className="font-bold text-blue-600 mb-1">💭 Suy ngẫm:</p>
                  <p className="text-gray-700">
                    Sự truy cầu danh tiếng hay quyền lực thường đi kèm với sự lo âu, cạnh tranh và sợ hãi bị hạ bệ, 
                    điều này hoàn toàn trái ngược với trạng thái Ataraxia (bình an tâm hồn).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>"The Garden of Earthly Delights"</strong> của Bosch là một kiệt tác bộ ba mô tả hành trình từ sự thuần khiết đến cạm bẫy của ham muốn và sự hủy diệt cuối cùng. Bảng trung tâm tái hiện đỉnh cao của chủ nghĩa khoái lạc (Hedonism) với những hình ảnh siêu thực về sự hưng phấn giác quan, nơi con người đắm chìm trong những quả mọng khổng lồ ngọt ngào nhưng mau chóng thối rữa. Qua đó, họa sĩ đưa ra lời cảnh báo về sự phù phiếm của những khoái lạc động (Kinetic Pleasure) nếu con người thiếu đi sự tỉnh táo và tiết chế trong hành động. Cuối cùng, sự sa đọa ấy dẫn đến "cơn ác mộng" ở bảng Địa ngục, minh chứng rằng nếu không có trí tuệ thực tiễn (Phronesis), chính những thứ ta khao khát sẽ trở thành nguồn cơn của nỗi đau vĩnh viễn.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </>
  );
}
