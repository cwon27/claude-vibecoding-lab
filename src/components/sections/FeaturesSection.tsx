import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Sparkles, Check } from 'lucide-react';
import { coreFeatures } from '@/data/cities';
import { FeatureCardProps } from '@/types';

function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <Card className={`k-nomad-feature-card h-full ${className}`}>
      <CardHeader className="pb-4">
        <div className="text-center">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-center leading-relaxed">
          {feature.description}
        </p>
        <ul className="space-y-2">
          {feature.features.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-500" />
            <h2 className="text-3xl font-bold">K-NOMAD만의 특별한 기능</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            단순한 정보 제공을 넘어서, 여러분의 한국 노마드 생활을 완전히 새로운 차원으로 
            끌어올릴 혁신적인 기능들을 만나보세요.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="features-grid">
          {coreFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* 추가 설명 */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              왜 K-NOMAD를 선택해야 할까요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold">한국 특화</h4>
                <p className="text-sm text-muted-foreground">
                  K-문화, 외국인 친화도 등 한국만의 특별한 평가 기준으로 
                  정확한 정보를 제공합니다.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-semibold">실제 경험</h4>
                <p className="text-sm text-muted-foreground">
                  실제로 그 도시에서 생활한 노마드들의 솔직한 후기와 
                  생생한 조언을 얻을 수 있습니다.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold">AI 추천</h4>
                <p className="text-sm text-muted-foreground">
                  당신의 선호도와 라이프스타일을 분석하여 
                  가장 적합한 도시를 추천해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 영역 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              지금 시작해보세요
            </h3>
            <p className="text-muted-foreground mb-6">
              지금 바로 K-NOMAD와 함께 당신의 완벽한 한국 생활을 시작해보세요.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-3 k-nomad-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                지금 시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}