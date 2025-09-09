// K-NOMAD 프로젝트 타입 정의

export interface City {
  id: string;
  name: string;
  region: string;
  image: string;
  rating: number;
  reviewCount: number;
  monthlyBudget: number;
  internetSpeed: number;
  tags: string[];
  description: string;
  kCultureScore: number;
  foreignerFriendly: number;
  cafeCount: number;
  coworkingSpaces: number;
  livingCost: {
    accommodation: number;
    food: number;
    transportation: number;
    entertainment: number;
  };
}

export interface Review {
  id: string;
  cityId: string;
  userId: string;
  userName: string;
  userCountry: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  stayDuration: string;
  purpose: 'business' | 'leisure' | 'education' | 'culture';
  createdAt: string;
  images?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  occupation: string;
  profileImage?: string;
  joinedAt: string;
}

export interface Stats {
  totalNomads: number;
  totalReviews: number;
  totalCities: number;
  activeChatRooms: number;
  newSignupsThisMonth: number;
  averageBudget: number;
  averageInternetSpeed: number;
  averageRating: number;
  hottestCity: string;
  latestReviewCity: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  userName: string;
  userCountry: string;
  userFlag: string;
  content: string;
  rating: number;
  city: string;
  occupation: string;
}


// 필터 타입
export interface FilterOptions {
  budget: 'all' | 'low' | 'medium' | 'high';
  region: 'all' | 'seoul' | 'yeongnam' | 'honam' | 'gangwon' | 'jeju';
  purpose: 'all' | 'business' | 'leisure' | 'education' | 'culture';
}

// 검색 타입
export interface SearchParams {
  query: string;
  filters: FilterOptions;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// 컴포넌트 Props 타입
export interface CityCardProps {
  city: City;
  className?: string;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon?: string;
}

export interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}