import { CityCard } from '@/components/cards/CityCard';
import { popularCities } from '@/data/cities';

export function PopularCities() {
  // 도시들을 좋아요 순으로 정렬하고 상위 4개만 선택 (내림차순)
  const sortedCities = [...popularCities].sort((a, b) => b.likes - a.likes).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">도시리스트</h2>
          <p className="text-muted-foreground mt-4">
            노마드들이 추천하는 한국의 도시들을 좋아요 순으로 만나보세요.
          </p>
        </div>

        {/* 도시 카드 그리드 */}
        <div className="city-grid">
          {sortedCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}