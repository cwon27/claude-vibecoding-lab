import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertCircle } from 'lucide-react';

export default function ErrorPage() {
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

        {/* 에러 카드 */}
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-red-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-red-600">오류가 발생했습니다</CardTitle>
            <CardDescription>
              죄송합니다. 인증 처리 중 문제가 발생했습니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                다음 사항을 확인해주세요:
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• 이메일 주소가 올바른지 확인</li>
                <li>• 비밀번호가 정확한지 확인</li>
                <li>• 이메일 인증을 완료했는지 확인</li>
                <li>• 잠시 후 다시 시도</li>
              </ul>
            </div>

            {/* 액션 버튼들 */}
            <div className="space-y-3">
              <Button asChild className="w-full k-nomad-gradient text-white">
                <Link href="/login">
                  다시 로그인 시도
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/register">
                  새 계정 만들기
                </Link>
              </Button>
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