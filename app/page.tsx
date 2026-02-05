import PageTitle from '@/components/PageTitle';
import SectionCard from '@/components/SectionCard';
import PaintingCards from '@/components/PaintingCards';

export default function HomePage() {
  return (
    <>
      <PageTitle subtitle="Khám phá con đường đến hạnh phúc thật sự">
        Epicureanism vs Hedonism
      </PageTitle>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Aristippus */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            <img
              src="/images/Aristippus.png"
              alt="Aristippus"
              className="rounded-xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 font-semibold">
            Aristippus (~ 435 TCN ~356 TCN.)
          </p>
        </div>

        {/* Epicurus */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            <img
              src="/images/Epicurus.png"
              alt="Epicurus"
              className="rounded-xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 font-semibold">
            Epicurus (~341 TCN ~270 TCN.)
          </p>
        </div>
      </div>

      <PaintingCards />

      <div className="mt-8 text-center">
        <p className="text-gray-600 italic">
          "Không thể sống vui vẻ mà không sống khôn ngoan, đẹp đẽ và công bằng" - Epicurus
        </p>
      </div>
    </>
  );
}
