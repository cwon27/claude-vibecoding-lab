'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import { FilterOptions } from '@/types';

interface SearchFilterProps {
  onFilterChange?: (filters: FilterOptions) => void;
  onSearch?: (query: string) => void;
}

export function SearchFilter({ onFilterChange, onSearch }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    budget: '전체',
    region: '전체',
    environment: '전체',
    bestSeason: '전체',
  });

  const budgetOptions = [
    { value: '전체', label: '전체' },
    { value: '100만원', label: '💸 100만원 이하' },
    { value: '100~200만원', label: '💰 100~200만원' },
    { value: '200만원', label: '💎 200만원 이상' },
  ];

  const regionOptions = [
    { value: '전체', label: '전체' },
    { value: '수도권', label: '🏙️ 수도권' },
    { value: '경상도', label: '🌊 경상도' },
    { value: '전라도', label: '🌾 전라도' },
    { value: '강원도', label: '⛰️ 강원도' },
    { value: '제주도', label: '🌴 제주도' },
    { value: '충청도', label: '🏞️ 충청도' },
  ];

  const environmentOptions = [
    { value: '전체', label: '전체' },
    { value: '자연친화', label: '🌿 자연친화' },
    { value: '도심천호', label: '🏢 도심천호' },
    { value: '카페작업', label: '☕ 카페작업' },
    { value: '코워킹 필수', label: '💼 코워킹 필수' },
  ];

  const bestSeasonOptions = [
    { value: '전체', label: '전체' },
    { value: '봄', label: '🌸 봄' },
    { value: '여름', label: '☀️ 여름' },
    { value: '가을', label: '🍂 가을' },
    { value: '겨울', label: '❄️ 겨울' },
  ];

  const handleFilterChange = (
    category: keyof FilterOptions,
    value: string
  ) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== '전체').length;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 검색바와 필터 버튼 */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="도시명을 입력하세요 (ex: 서울, 부산, 제주)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="relative"
        >
          <Filter className="h-4 w-4 mr-2" />
          필터
          {getActiveFiltersCount() > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs"
            >
              {getActiveFiltersCount()}
            </Badge>
          )}
        </Button>
      </div>

      {/* 활성 필터 표시 */}
      {getActiveFiltersCount() > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.budget !== '전체' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              예산: {budgetOptions.find(opt => opt.value === filters.budget)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('budget', '전체')}
              />
            </Badge>
          )}
          {filters.region !== '전체' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              지역: {regionOptions.find(opt => opt.value === filters.region)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('region', '전체')}
              />
            </Badge>
          )}
          {filters.environment !== '전체' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              환경: {environmentOptions.find(opt => opt.value === filters.environment)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('environment', '전체')}
              />
            </Badge>
          )}
          {filters.bestSeason !== '전체' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              계절: {bestSeasonOptions.find(opt => opt.value === filters.bestSeason)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('bestSeason', '전체')}
              />
            </Badge>
          )}
        </div>
      )}

      {/* 필터 패널 */}
      {isFilterOpen && (
        <div className="bg-white rounded-lg border p-6 space-y-6">
          {/* 예산 필터 */}
          <div>
            <p className="font-medium mb-3">💰 예산</p>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.budget === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange('budget', option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 지역 필터 */}
          <div>
            <p className="font-medium mb-3">🏙️ 지역</p>
            <div className="flex flex-wrap gap-2">
              {regionOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.region === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange('region', option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 환경 필터 */}
          <div>
            <p className="font-medium mb-3">🌿 환경</p>
            <div className="flex flex-wrap gap-2">
              {environmentOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.environment === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange('environment', option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 최고 계절 필터 */}
          <div>
            <p className="font-medium mb-3">🌸 최고 계절</p>
            <div className="flex flex-wrap gap-2">
              {bestSeasonOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.bestSeason === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange('bestSeason', option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 필터 초기화 및 적용 */}
          <div className="flex justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => {
                const resetFilters: FilterOptions = {
                  budget: '전체',
                  region: '전체',
                  environment: '전체',
                  bestSeason: '전체',
                };
                setFilters(resetFilters);
                onFilterChange?.(resetFilters);
              }}
            >
              초기화
            </Button>
            <Button onClick={() => setIsFilterOpen(false)}>
              필터 적용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}