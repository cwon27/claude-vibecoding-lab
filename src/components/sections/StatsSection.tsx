import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  MessageSquare, 
  Building, 
  MessageCircle, 
  TrendingUp, 
  DollarSign, 
  Wifi, 
  Star, 
  Flame, 
  MapPin 
} from 'lucide-react';
import { realTimeStats } from '@/data/cities';
import { StatsCardProps } from '@/types';

function StatsCard({ title, value, subtitle, icon: IconComponent }: StatsCardProps & { icon: any }) {
  return (
    <Card className="k-nomad-feature-card">
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 rounded-full bg-blue-50">
            <IconComponent className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-gray-700">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  const statsData = [
    {
      title: '등록된 노마드',
      value: `${realTimeStats.totalNomads.toLocaleString()}명`,
      subtitle: '전 세계에서 모인 노마드들',
      icon: Users,
    },
    {
      title: '작성된 리뷰',
      value: `${realTimeStats.totalReviews.toLocaleString()}개`,
      subtitle: '실제 경험담과 조언들',
      icon: MessageSquare,
    },
    {
      title: '등록된 도시',
      value: `${realTimeStats.totalCities}개`,
      subtitle: '한국의 주요 도시들',
      icon: Building,
    },
    {
      title: '활성 채팅방',
      value: `${realTimeStats.activeChatRooms}개`,
      subtitle: '실시간 소통 중',
      icon: MessageCircle,
    },
    {
      title: '이번 달 신규 가입',
      value: `+${realTimeStats.newSignupsThisMonth}명`,
      subtitle: '지속적인 성장',
      icon: TrendingUp,
    },
  ];

  const detailStats = [
    {
      title: '평균 생활비',
      value: `₩${realTimeStats.averageBudget.toLocaleString()}`,
      subtitle: '월간 기준',
      icon: DollarSign,
    },
    {
      title: '평균 인터넷',
      value: `${realTimeStats.averageInternetSpeed} Mbps`,
      subtitle: '작업에 충분한 속도',
      icon: Wifi,
    },
    {
      title: '평균 만족도',
      value: `${realTimeStats.averageRating}/5`,
      subtitle: '전체 리뷰 기준',
      icon: Star,
    },
    {
      title: '가장 핫한 도시',
      value: realTimeStats.hottestCity,
      subtitle: '이번 달 인기',
      icon: Flame,
    },
    {
      title: '최신 리뷰 도시',
      value: realTimeStats.latestReviewCity,
      subtitle: '방금 전 업데이트',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 k-nomad-stats">
      <div className="container px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">📊 실시간 노마드 현황</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            K-NOMAD 커뮤니티의 생생한 데이터를 실시간으로 확인하세요. 
            매일 업데이트되는 최신 정보입니다.
          </p>
        </div>

        {/* 주요 통계 */}
        <div className="stats-grid mb-12">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* 상세 통계 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-6 text-center">상세 현황</h3>
          <div className="stats-grid">
            {detailStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
                <div className="text-xs text-gray-500">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 업데이트 정보 */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            📈 데이터는 매시간 업데이트됩니다 • 마지막 업데이트: 방금 전
          </p>
        </div>
      </div>
    </section>
  );
}