import { Eye, EyeOff, UserPlus, Mail, Lock, User, ArrowLeft, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { signup } from '@/app/auth/actions'

export default function RegisterPage({ searchParams }: { searchParams: { error?: string; message?: string } }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-earth-50 to-moss-50 py-12 px-4 sm:px-6 lg:px-8 leaf-pattern relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-forest-200 opacity-15 organic-blob gentle-float"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-moss-200 opacity-25 leaf-shape leaf-sway"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-earth-200 opacity-30 organic-border gentle-float"></div>

      <div className="max-w-lg mx-auto relative z-10">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/login"
          className="inline-flex items-center text-earth-600 hover:text-forest-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          로그인으로 돌아가기
        </Link>

        {/* 회원가입 카드 */}
        <div className="bg-card organic-border nature-shadow-lg border border-forest-200 p-8 wood-texture">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-moss-600 to-forest-600 organic-border flex items-center justify-center nature-shadow">
                <span className="text-2xl">🌱</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-earth-700 mb-2">회원가입</h2>
            <p className="text-earth-600">자연과 함께하는 노마드 커뮤니티의 일원이 되어보세요</p>
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

          {/* 회원가입 폼 */}
          <form action={signup} className="space-y-6">
            {/* 이름 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                이름 <span className="text-forest-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-forest-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full pl-10 pr-3 py-3 border border-forest-300 organic-border-alt bg-earth-50 text-earth-700 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  placeholder="실명을 입력하세요"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                이메일 <span className="text-forest-600">*</span>
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

            {/* 전화번호 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-earth-700 mb-2">
                전화번호
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-forest-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full pl-10 pr-3 py-3 border border-forest-300 organic-border-alt bg-earth-50 text-earth-700 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            {/* 현재 거주 도시 */}
            <div>
              <label htmlFor="currentCity" className="block text-sm font-medium text-earth-700 mb-2">
                현재 거주 도시
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-forest-400" />
                </div>
                <input
                  id="currentCity"
                  name="currentCity"
                  type="text"
                  className="w-full pl-10 pr-3 py-3 border border-forest-300 organic-border-alt bg-earth-50 text-earth-700 placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  placeholder="예: 서울시 강남구"
                />
              </div>
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-earth-700 mb-2">
                비밀번호 <span className="text-forest-600">*</span>
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
                  placeholder="8자 이상의 비밀번호"
                />
              </div>
            </div>



            {/* 회원가입 버튼 */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent organic-border text-sm font-medium text-earth-50 bg-gradient-to-r from-moss-600 to-forest-600 hover:from-moss-700 hover:to-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500 transition-colors nature-shadow"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              회원가입
            </button>
          </form>


          {/* 로그인 링크 */}
          <div className="text-center mt-6">
            <p className="text-sm text-earth-600">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="font-medium text-forest-600 hover:text-forest-700 transition-colors">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}