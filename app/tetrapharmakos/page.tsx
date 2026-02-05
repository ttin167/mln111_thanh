import PageTitle from '@/components/PageTitle';
import SectionCard from '@/components/SectionCard';

export const metadata = {
  title: 'Tetrapharmakos',
  description: '4 liệu pháp chữa lành của Epicurus',
};

export default function TetrapharmakosPage() {
  return (
    <>
      <PageTitle subtitle="Bốn phương thuốc chữa lành của Epicurus">
        Tetrapharmakos - 4 Liệu Pháp
      </PageTitle>

      <SectionCard gradient="blue-pink" className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">💊 Tetrapharmakos là gì?</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Tetrapharmakos</strong> (τετραφάρμακον) nghĩa đen là "bốn loại thuốc", là bản tóm tắt 
          ngắn gọn nhất của triết học Epicurus. Đây là bốn nguyên lý cơ bản giúp con người đạt được 
          hạnh phúc và bình an tâm hồn (ataraxia).
        </p>
      </SectionCard>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <SectionCard gradient="blue-pink">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
            <span className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-2xl font-bold">1</span>
            Đừng Sợ Thần Linh
          </h3>
          <p className="text-gray-700 italic mb-3">
            "Thần linh không đáng sợ"
          </p>
          <p className="text-gray-700 mb-3">
            Epicurus tin rằng các vị thần tồn tại nhưng không quan tâm đến con người. Họ sống trong 
            trạng thái ataraxia hoàn hảo và không can thiệp vào thế giới.
          </p>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Ý nghĩa:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Giải phóng khỏi nỗi sợ hãi về hình phạt thần thánh</li>
              <li>Không cần lo lắng về việc chiều lòng thần linh</li>
              <li>Tập trung vào cuộc sống hiện tại thay vì lo sợ thế giới bên kia</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard gradient="pink-blue">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
            <span className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-2xl font-bold">2</span>
            Đừng Sợ Cái Chết
          </h3>
          <p className="text-gray-700 italic mb-3">
            "Cái chết không đáng sợ"
          </p>
          <p className="text-gray-700 mb-3">
            "Khi chúng ta còn tồn tại, cái chết chưa đến. Khi cái chết đến, chúng ta không còn tồn tại nữa."
          </p>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Ý nghĩa:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Cái chết là sự chấm dứt hoàn toàn của ý thức</li>
              <li>Không có cảm giác = không có đau khổ</li>
              <li>Tận hưởng cuộc sống hiện tại thay vì lo sợ cái chết</li>
              <li>Chết không phải là trải nghiệm mà là kết thúc của mọi trải nghiệm</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard gradient="pink-blue">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
            <span className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-2xl font-bold">3</span>
            Điều Tốt Dễ Đạt Được
          </h3>
          <p className="text-gray-700 italic mb-3">
            "Hạnh phúc dễ dàng đạt được"
          </p>
          <p className="text-gray-700 mb-3">
            Hạnh phúc thật sự đến từ những điều đơn giản: thức ăn cơ bản, nơi trú ẩn, tình bạn. 
            Không cần của cải hay địa vị.
          </p>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Ý nghĩa:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ham muốn tự nhiên và cần thiết dễ thỏa mãn</li>
              <li>Không cần giàu có hoặc quyền lực để hạnh phúc</li>
              <li>Sự giản dị mang lại tự do khỏi lo lắng</li>
              <li>Khoái lạc tĩnh (vắng mặt đau khổ) quan trọng hơn khoái lạc động</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard gradient="blue-pink">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
            <span className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-2xl font-bold">4</span>
            Điều Xấu Dễ Chịu Đựng
          </h3>
          <p className="text-gray-700 italic mb-3">
            "Đau khổ có thể chịu đựng được"
          </p>
          <p className="text-gray-700 mb-3">
            Đau khổ dữ dội thường ngắn ngủi. Đau khổ kéo dài thường ở mức độ có thể chịu được. 
            Tâm trí có thể học cách đối phó.
          </p>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Ý nghĩa:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Đau khổ cực độ thường rất ngắn (kết thúc bằng chết hoặc hồi phục)</li>
              <li>Đau khổ kéo dài thường ở mức độ có thể sống được</li>
              <li>Tâm trí có thể tập trung vào ký ức tốt đẹp để giảm đau</li>
              <li>Sự can đảm và trí tuệ giúp chúng ta vượt qua thử thách</li>
            </ul>
          </div>
        </SectionCard>
      </div>

      <SectionCard gradient="none" className="border-2 border-primary">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          📜 Văn Bản Gốc (Tiếng Hy Lạp)
        </h2>
        <div className="bg-gradient-blue-pink p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-center">
              <p className="text-lg font-serif text-gray-800">
                Ἄφοβον ὁ θεός,<br/>
                ἀνύποπτον ὁ θάνατος,<br/>
                καὶ τἀγαθὸν μὲν εὔκτητον,<br/>
                τὸ δὲ δεινὸν εὐεκκαρτέρητον
              </p>
              <div className="border-t-2 border-primary pt-4">
                <p className="text-gray-700 italic">
                  "Thần linh không đáng sợ,<br/>
                  Cái chết không đáng lo,<br/>
                  Điều tốt dễ đạt được,<br/>
                  Điều xấu dễ chịu đựng"
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/tetrapharmakos.jpg" 
                alt="Tetrapharmakos ancient manuscript" 
                className="rounded-lg shadow-lg max-h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <div className="mt-8">
        <SectionCard gradient="blue-pink">
          <h2 className="text-2xl font-bold text-primary mb-4">🎯 Ứng Dụng Thực Tế Trong Cuộc Sống</h2>
          <div className="space-y-6">
            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">1️⃣ Giải phóng khỏi nỗi sợ siêu hình</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bối cảnh hiện đại:</strong> Giải phóng bản thân khỏi những nỗi sợ hãi vô hình từ các 
                hệ thống quyền lực hay những định kiến không dựa trên lý trí.
              </p>
              <p className="text-sm text-gray-700 italic">
                Ví dụ: Đừng để "ý kiến người khác" hay "kỳ vọng xã hội" trở thành những "vị thần" vô hình 
                chi phối cuộc sống của bạn.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">2️⃣ Tập trung vào cuộc sống hiện tại</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Ý nghĩa sâu xa:</strong> Việc thấu hiểu điều này giúp chúng ta loại bỏ sự lo âu về sự 
                hữu hạn của cuộc đời và tập trung vào việc sống tốt đẹp trong thời gian mình đang tồn tại.
              </p>
              <p className="text-sm text-gray-700 italic">
                Thực hành: Thay vì lo lắng về "di sản" hay "được nhớ đến", hãy tận hưởng những khoảnh khắc 
                hiện tại với người thân yêu.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">3️⃣ Nền tảng cho chủ nghĩa tối giản</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Quan điểm Epicurus:</strong> Thiên nhiên đã thiết kế để chúng ta dễ dàng hài lòng nếu 
                chúng ta biết kiểm soát những ham muốn không thực tế.
              </p>
              <p className="text-sm text-gray-700 italic">
                Cho sinh viên: Giảm bớt gánh nặng về việc phải sở hữu quá nhiều vật chất. Hạnh phúc đến từ 
                bánh mì, nước uống, tình bạn, sự an toàn - những thứ dễ kiếm.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">4️⃣ Rèn luyện sức mạnh tinh thần</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Chiến lược:</strong> Bằng cách rèn luyện tâm trí tập trung vào những ký ức đẹp và sự 
                hiện diện của bạn bè, chúng ta có thể làm giảm bớt sự tác động của những nghịch cảnh.
              </p>
              <p className="text-sm text-gray-700 italic">
                Thực hành: Khi gặp khó khăn, hãy nhớ lại những khoảnh khắc tốt đẹp. Đau khổ dữ dội thường ngắn ngủi, 
                đau khổ kéo dài thường ở mức có thể chịu được.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard gradient="pink-blue" className="mt-8">
          <p className="text-sm text-gray-700">
            <strong>"Sự khải hoàn của Bacchus"</strong> là biểu tượng rực rỡ cho chủ nghĩa khoái lạc (Hedonism) thuần túy, nơi vị thần rượu vang ban phát niềm vui tức thời để giúp con người tạm quên đi gánh nặng của thực tại khắc nghiệt. Bức tranh tập trung vào "khoái lạc động" (Kinetic Pleasure) thông qua sự hưng phấn của vị giác và tiếng cười, minh chứng cho lối sống ưu tiên trải nghiệm hiện tại bất chấp những hệ lụy dài hạn. Tuy nhiên, dưới lăng kính Epicurean, đây là ví dụ điển hình của ham muốn "tự nhiên nhưng không cần thiết"
          </p>
        </SectionCard>
      </div>
    </>
  );
}
