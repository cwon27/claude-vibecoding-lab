import { CityCard } from '@/components/cards/CityCard';
import { Trophy } from 'lucide-react';
import { popularCities } from '@/data/cities';

export function PopularCities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-bold">인기 TOP 6 도시</h2>
          </div>
          <p className="text-muted-foreground">
            실제 노마드들이 가장 만족한 도시들을 만나보세요. 각 도시의 생생한 후기와 상세 정보를 확인할 수 있습니다.
          </p>
        </div>

        {/* 도시 카드 그리드 */}
        <div className="city-grid">
          {popularCities.map((city, index) => (
            <div key={city.id} className="relative">
              {/* 순위 배지 */}
              {index < 3 && (
                <div className="absolute -top-2 -left-2 z-10">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm
                    ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'}
                  `}>
                    {index + 1}
                  </div>
                </div>
              )}
              <CityCard city={city} />
            </div>
          ))}
        </div>

        {/* 더보기 버튼 영역 */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            더 많은 도시 정보가 궁금하신가요?
          </p>
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            전체 도시 보기 →
          </button>
        </div>
      </div>
    </section>
  );
}