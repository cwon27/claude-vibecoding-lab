import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, Home } from 'lucide-react';
import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* 로고 */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-3xl font-bold k-nomad-text-gradient font-english">K-NOMAD</span>
          </Link>
        </div>

        {/* 로그인 카드 */}
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">로그인</CardTitle>
            <CardDescription>
              계정에 로그인하여 K-NOMAD 라이프를 시작하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form>
              {/* 이메일 입력 */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">이메일</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* 비밀번호 입력 */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* 로그인 버튼 */}
              <Button formAction={login} className="w-full k-nomad-gradient text-white mt-6">
                로그인
              </Button>
            </form>

            {/* 회원가입 링크 */}
            <div className="text-center text-sm">
              <span className="text-gray-600">계정이 없으신가요? </span>
              <Link href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                회원가입
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 하단 링크 */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}