'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, MapPin, DollarSign, Leaf, Sun } from 'lucide-react';
import { CityCardProps } from '@/types';

export function CityCard({ city, className }: CityCardProps) {
  const [currentLikes, setCurrentLikes] = useState(city.likes);
  const [currentDislikes, setCurrentDislikes] = useState(city.dislikes);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);

  const formatBudget = (budget: number) => {
    if (budget <= 1000000) return '100만원';
    if (budget <= 2000000) return '100~200만원';
    return '200만원';
  };

  const formatCityName = (name: string) => {
    // "서울 강남구" -> "강남구", "부산 해운대" -> "해운대" 등
    const parts = name.split(' ');
    return parts.length > 1 ? parts.slice(1).join(' ') : name;
  };

  const handleLike = () => {
    if (userVote === 'like') {
      // 좋아요 취소
      setCurrentLikes(prev => prev - 1);
      setUserVote(null);
    } else if (userVote === 'dislike') {
      // 싫어요에서 좋아요로 변경
      setCurrentDislikes(prev => prev - 1);
      setCurrentLikes(prev => prev + 1);
      setUserVote('like');
    } else {
      // 새로운 좋아요
      setCurrentLikes(prev => prev + 1);
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      // 싫어요 취소
      setCurrentDislikes(prev => prev - 1);
      setUserVote(null);
    } else if (userVote === 'like') {
      // 좋아요에서 싫어요로 변경
      setCurrentLikes(prev => prev - 1);
      setCurrentDislikes(prev => prev + 1);
      setUserVote('dislike');
    } else {
      // 새로운 싫어요
      setCurrentDislikes(prev => prev + 1);
      setUserVote('dislike');
    }
  };

  return (
    <Card className={`k-nomad-card-hover overflow-hidden ${className}`}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center">
            <h3 className="font-semibold text-3xl text-center text-gray-800">{formatCityName(city.name)}</h3>
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90">
              <MapPin className="h-3 w-3 mr-1" />
              {city.region}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pr-4 pl-4">
        <div className="space-y-2">
          {/* 좋아요/싫어요 버튼 */}
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm transition-colors ${
                userVote === 'like' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <ThumbsUp className={`h-4 w-4 ${userVote === 'like' ? 'fill-current' : ''}`} />
              <span className="font-medium">{currentLikes}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm transition-colors ${
                userVote === 'dislike' 
                  ? 'bg-red-100 text-red-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <ThumbsDown className={`h-4 w-4 ${userVote === 'dislike' ? 'fill-current' : ''}`} />
              <span className="font-medium">{currentDislikes}</span>
            </button>
          </div>

          {/* Key-Value 형태의 필터 정보 */}
          <div className="space-y-2 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-600">예산:</span>
              </div>
              <span className="text-sm font-semibold">{formatBudget(city.monthlyBudget)}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">지역:</span>
              </div>
              <span className="text-sm font-semibold">{city.region}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-600">환경:</span>
              </div>
              <span className="text-sm font-semibold">{city.environment}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-600">최고계절:</span>
              </div>
              <span className="text-sm font-semibold">{city.bestSeason}</span>
            </div>
          </div>
        </div>
      </CardContent>

    </Card>
  );
}