import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Map, BarChart3, MessageSquare, Edit } from 'lucide-react';

interface NavigationProps {
  isMobile?: boolean;
}

const navigationItems = [
  {
    href: '/cities',
    label: '도시탐색',
    icon: Map,
  },
  {
    href: '/compare',
    label: '비교하기',
    icon: BarChart3,
  },
  {
    href: '/community',
    label: '커뮤니티',
    icon: MessageSquare,
  },
  {
    href: '/review',
    label: '리뷰작성',
    icon: Edit,
  },
];

export function Navigation({ isMobile = false }: NavigationProps) {
  return (
    <nav
      className={cn(
        'flex items-center',
        isMobile ? 'flex-wrap gap-2' : 'space-x-6'
      )}
    >
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center transition-colors hover:text-foreground/80',
            isMobile
              ? 'flex-col space-y-1 text-xs'
              : 'space-x-2 text-sm font-medium'
          )}
        >
          <item.icon className={cn('h-4 w-4', isMobile && 'h-5 w-5')} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}