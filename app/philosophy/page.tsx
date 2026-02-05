import PageTitle from '@/components/PageTitle';
import SectionCard from '@/components/SectionCard';
import PhilosophyFlipCard from '@/components/PhilosophyFlipCard';

export const metadata = {
  title: 'Các Học Thuyết',
  description: 'Tìm hiểu sâu về Epicureanism và Hedonism',
};

export default function PhilosophyPage() {
  return (
    <>
      <PageTitle subtitle="Khám phá nguồn gốc và nguyên lý của từng triết lý">
        Các Học Thuyết Triết Học
      </PageTitle>

      <div className="space-y-8">
        <PhilosophyFlipCard />

        <SectionCard gradient="none" className="border-2 border-primary">
          <h2 className="text-2xl font-bold text-primary mb-4">⚖️ So Sánh Chi Tiết: Cyrenaic vs Epicurus</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Tiêu Chí</th>
                  <th className="p-3 text-left">Chủ nghĩa khoái lạc Cyrenaic</th>
                  <th className="p-3 text-left">Chủ nghĩa hưởng lạc Epicurus</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-semibold">Định nghĩa niềm vui</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Sự hiện diện của cảm giác tích cực</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Sự vắng bóng của nỗi đau và lo âu</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Loại hình ưu tiên</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Khoái lạc động (Kinetic)</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Khoái lạc tĩnh (Katastematic)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Trọng tâm thời gian</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Hiện tại tức thời</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Tính toán cho sự bền vững lâu dài</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Vai trò của tâm trí</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Thấp hơn cảm giác thể xác</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Cao hơn cảm giác thể xác (ký ức, hy vọng)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Lối sống lý tưởng</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Thỏa mãn mọi ham muốn nảy sinh</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Tiết chế và quản lý các ham muốn</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Mối quan hệ với xã hội</td>
                  <td className="p-3 bg-bgPink bg-opacity-20">Thích nghi để tận hưởng</td>
                  <td className="p-3 bg-bgBlue bg-opacity-20">Rút lui để giữ gìn sự bình an</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-gradient-blue-pink p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 School of Athens:</strong> Miêu tả hơn 50 triết gia đại diện cho nhiều trường phái cùng nhau đi tìm sự thật.
            </p>
          </div>
        </SectionCard>
      </div>
    </>
  );
}
