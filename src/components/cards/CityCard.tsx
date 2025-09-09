'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Wifi, Users, MapPin } from 'lucide-react';
import { CityCardProps } from '@/types';

export function CityCard({ city, className }: CityCardProps) {
  const formatCurrency = (amount: number) => {
    return `₩${amount.toLocaleString()}`;
  };

  const formatInternetSpeed = (speed: number) => {
    return `${speed}Mbps`;
  };

  return (
    <Card className={`k-nomad-card-hover overflow-hidden ${className}`}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <span className="text-2xl">🏙️</span>
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90">
              <MapPin className="h-3 w-3 mr-1" />
              {city.region}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* 도시 이름과 평점 */}
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg leading-tight">{city.name}</h3>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{city.rating}</span>
            </div>
          </div>

          {/* 리뷰 수 */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{city.reviewCount}리뷰</span>
          </div>

          {/* 가격과 인터넷 속도 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">월 생활비</span>
              <span className="font-semibold text-green-600">
                {formatCurrency(city.monthlyBudget)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center">
                <Wifi className="h-4 w-4 mr-1" />
                인터넷 속도
              </span>
              <span className="font-medium">{formatInternetSpeed(city.internetSpeed)}</span>
            </div>
          </div>

          {/* 태그들 */}
          <div className="flex flex-wrap gap-1">
            {city.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
            {city.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{city.tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline">
          자세히 보기
        </Button>
      </CardFooter>
    </Card>
  );
}