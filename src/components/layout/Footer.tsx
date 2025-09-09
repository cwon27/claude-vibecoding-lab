import Link from 'next/link';
import { Home, Github, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 로고 및 설명 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold k-nomad-text-gradient">K-NOMAD</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              한국 디지털 노마드 생활의 모든 것을 한 곳에서.
              당신의 완벽한 한국 생활을 찾아드립니다.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 서비스 */}
          <div className="space-y-4">
            <h3 className="font-semibold">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cities" className="text-muted-foreground hover:text-foreground">
                  도시 탐색
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-muted-foreground hover:text-foreground">
                  도시 비교
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  커뮤니티
                </Link>
              </li>
            </ul>
          </div>

          {/* 도움말 */}
          <div className="space-y-4">
            <h3 className="font-semibold">도움말</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide" className="text-muted-foreground hover:text-foreground">
                  이용 가이드
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  고객 지원
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-foreground">
                  API 문서
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="font-semibold">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  채용 정보
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  보도자료
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                이용약관
              </Link>
              <Link href="/cookies" className="hover:text-foreground">
                쿠키 정책
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 K-NOMAD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}