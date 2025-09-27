import { Eye, EyeOff, User, Mail, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { login } from '@/app/auth/actions'

export default function LoginPage({ searchParams }: { searchParams: { error?: string; message?: string } }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-earth-50 to-moss-50 py-12 px-4 sm:px-6 lg:px-8 leaf-pattern relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-forest-200 opacity-20 organic-blob gentle-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-moss-200 opacity-30 leaf-shape leaf-sway"></div>

      <div className="max-w-md mx-auto relative z-10">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/"
          className="inline-flex items-center text-earth-600 hover:text-forest-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          홈으로 돌아가기
        </Link>

        {/* 로그인 카드 */}
        <div className="bg-card organic-border nature-shadow-lg border border-forest-200 p-8 wood-texture">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-forest-600 organic-border flex items-center justify-center nature-shadow">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-earth-700 mb-2">로그인</h2>
            <p className="text-earth-600">자연과 함께하는 노마드 라이프에 참여하세요</p>
          </div>

          {/* 에러/성공 메시지 */}
          {searchParams.error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 organic-border text-sm">
              {searchParams.error}
            </div>
          )}
          {searchParams.message && (
            <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-700 organic-border text-sm">
              {searchParams.message}
            </div>
          )}

          {/* 로그인 폼 */}
          <form action={login} className="space-y-6">
            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                이메일
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-forest-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-3 py-3 border border-forest-300 organic-border-alt bg-earth-50 text-earth-700 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-earth-700 mb-2">
                비밀번호
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-forest-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-3 py-3 border border-forest-300 organic-border-alt bg-earth-50 text-earth-700 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>

            {/* 로그인 유지 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-forest-300 organic-border"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-earth-600">
                  로그인 상태 유지
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-forest-600 hover:text-forest-700 transition-colors">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent organic-border text-sm font-medium text-earth-50 bg-forest-600 hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500 transition-colors nature-shadow"
            >
              <User className="w-5 h-5 mr-2" />
              로그인
            </button>
          </form>


          {/* 회원가입 링크 */}
          <div className="text-center mt-6">
            <p className="text-sm text-earth-600">
              아직 계정이 없으신가요?{' '}
              <Link href="/register" className="font-medium text-forest-600 hover:text-forest-700 transition-colors">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}