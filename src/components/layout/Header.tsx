import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from './Navigation';
import { Home, User } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="text-2xl font-bold k-nomad-text-gradient font-english">K-NOMAD</span>
          </div>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden md:flex">
          <Navigation />
        </div>

        {/* 우측 버튼들 */}
        <div className="flex items-center space-x-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-1" />
              로그인
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="k-nomad-gradient text-white">
              회원가입
            </Button>
          </Link>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      <div className="block md:hidden border-t px-4 py-2">
        <Navigation isMobile />
      </div>
    </header>
  );
}