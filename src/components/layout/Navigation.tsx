import { cn } from '@/lib/utils';

interface NavigationProps {
  isMobile?: boolean;
}

export function Navigation({ isMobile = false }: NavigationProps) {
  return (
    <nav
      className={cn(
        'flex items-center',
        isMobile ? 'flex-wrap gap-2' : 'space-x-6'
      )}
    >
      {/* 네비게이션 항목들이 제거됨 - 홈페이지와 인증 기능만 유지 */}
    </nav>
  );
}