import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Rocket } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      <div className="relative container px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* 메인 타이틀 */}
          <div className="space-y-6">
            <h1 className="font-bold tracking-tight" style={{fontSize: '3.3rem', lineHeight: '1.1'}}>
              당신에게 완벽한 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">노마드 도시</span>를 찾아보세요
            </h1>
            <p className="text-lg text-muted-foreground">
              한국의 도시별 생활비, 인터넷 속도, 커뮤니티 정보를 한눈에 비교하고 <br />
              나에게 딱 맞는 디지털 노마드 라이프를 시작하세요.
            </p>
          </div>

          {/* 검색 영역 */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="rounded-xl bg-white p-6" style={{boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.03), 0 -2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}}>
              {/* 검색바 */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="도시명을 입력하세요 (ex: 서울, 부산, 제주)"
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* 필터 셀렉트 박스들 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* 예산 필터 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">💰 예산</label>
                  <Select>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="예산 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">💸₩100만↓</SelectItem>
                      <SelectItem value="medium">💰₩100-200만</SelectItem>
                      <SelectItem value="high">💎₩200만↑</SelectItem>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 지역 필터 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">🏙️ 지역</label>
                  <Select>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="지역 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="capital">수도권</SelectItem>
                      <SelectItem value="yeongnam">영남권</SelectItem>
                      <SelectItem value="honam">호남권</SelectItem>
                      <SelectItem value="gangwon">강원권</SelectItem>
                      <SelectItem value="jeju">제주권</SelectItem>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 목적 필터 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">🎯 목적</label>
                  <Select>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="목적 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">💼 비즈니스</SelectItem>
                      <SelectItem value="leisure">🏖️ 휴양</SelectItem>
                      <SelectItem value="study">🎓 학습</SelectItem>
                      <SelectItem value="culture">🎭 문화</SelectItem>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* 검색 버튼 */}
              <Button className="w-full h-12 text-lg k-nomad-gradient text-white">
                <Rocket className="mr-2 h-5 w-5" />
                도시 찾기
              </Button>
            </div>
          </div>

          {/* 통계 */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1,247</div>
              <div className="text-sm text-muted-foreground">등록된 노마드</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3,891</div>
              <div className="text-sm text-muted-foreground">작성된 리뷰</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">23</div>
              <div className="text-sm text-muted-foreground">등록된 도시</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">4.1</div>
              <div className="text-sm text-muted-foreground">평균 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}