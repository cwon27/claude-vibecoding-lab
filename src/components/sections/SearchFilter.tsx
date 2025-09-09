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
    budget: 'all',
    region: 'all',
    purpose: 'all',
  });

  const budgetOptions = [
    { value: 'low', label: '💸₩100만↓' },
    { value: 'medium', label: '💰₩100-200만' },
    { value: 'high', label: '💎₩200만↑' },
    { value: 'all', label: '전체' },
  ];

  const regionOptions = [
    { value: 'seoul', label: '수도권' },
    { value: 'yeongnam', label: '영남권' },
    { value: 'honam', label: '호남권' },
    { value: 'gangwon', label: '강원권' },
    { value: 'jeju', label: '제주권' },
    { value: 'all', label: '전체' },
  ];

  const purposeOptions = [
    { value: 'business', label: '💼비즈니스' },
    { value: 'leisure', label: '🏖️휴양' },
    { value: 'education', label: '🎓학습' },
    { value: 'culture', label: '🎭문화' },
    { value: 'all', label: '전체' },
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
    return Object.values(filters).filter(value => value !== 'all').length;
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
          {filters.budget !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              예산: {budgetOptions.find(opt => opt.value === filters.budget)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('budget', 'all')}
              />
            </Badge>
          )}
          {filters.region !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              지역: {regionOptions.find(opt => opt.value === filters.region)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('region', 'all')}
              />
            </Badge>
          )}
          {filters.purpose !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              목적: {purposeOptions.find(opt => opt.value === filters.purpose)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange('purpose', 'all')}
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

          {/* 목적 필터 */}
          <div>
            <p className="font-medium mb-3">🎯 목적</p>
            <div className="flex flex-wrap gap-2">
              {purposeOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.purpose === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange('purpose', option.value)}
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
                  budget: 'all',
                  region: 'all',
                  purpose: 'all',
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