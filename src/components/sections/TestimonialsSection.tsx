import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/cities';
import { TestimonialCardProps } from '@/types';

function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={`k-nomad-feature-card ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* 인용 아이콘 */}
          <div className="flex justify-between items-start">
            <Quote className="h-8 w-8 text-blue-200" />
            <div className="flex items-center space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
          </div>

          {/* 후기 내용 */}
          <blockquote className="text-gray-700 leading-relaxed">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          {/* 사용자 정보 */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <div className="font-semibold text-gray-900">
                {testimonial.userName}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonial.userFlag} {testimonial.userCountry}에서 온 {testimonial.occupation}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-blue-600">
                {testimonial.city}
              </div>
              <div className="text-xs text-muted-foreground">
                거주 경험
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">실제 노마드들의 생생한 후기</h2>
          <p className="text-muted-foreground">
            K-NOMAD를 통해 완벽한 한국 생활을 찾은 노마드들의 솔직한 경험담을 들어보세요.
          </p>
        </div>

        {/* 후기 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* 추가 후기 섹션 */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                더 많은 후기가 궁금하신가요?
              </h3>
              <p className="text-muted-foreground">
                1,000+ 명의 노마드들이 공유한 생생한 경험담과 각 도시별 상세한 리뷰를 확인해보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* 통계 카드들 */}
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.3</div>
                <div className="text-sm text-muted-foreground">평균 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <div className="text-sm text-muted-foreground">재방문 의향</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-sm text-muted-foreground">추천 의향</div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                모든 후기 보기 →
              </button>
            </div>
          </div>
        </div>

        {/* 후기 작성 독려 */}
        <div className="mt-16 text-center">
          <div className="mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              당신도 한국 노마드 생활 경험을 공유해주세요
            </h3>
            <p className="text-muted-foreground mb-6">
              여러분의 소중한 경험이 다른 노마드들에게 큰 도움이 됩니다. 정직한 후기를 남겨주시면 커뮤니티 포인트도 드려요! 🎁
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                후기 둘러보기
              </button>
              <button className="w-full sm:w-auto px-6 py-3 k-nomad-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                내 후기 작성하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}