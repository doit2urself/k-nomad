'use client'

import { Search, Globe, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">
                🇰🇷 KoreaNomad.co.kr
              </span>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              🏙️ 도시탐색
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              📊 순위
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              💬 커뮤니티
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              🛠️ 도구
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              📚 가이드
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              📞 문의
            </a>
          </nav>

          {/* 검색, 언어, 로그인 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Search className="w-5 h-5" />
            </button>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span className="text-sm">KR</span>
            </button>

            <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm">로그인</span>
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                🏙️ 도시탐색
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                📊 순위
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                💬 커뮤니티
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                🛠️ 도구
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                📚 가이드
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                📞 문의
              </a>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 w-full">
                  <Search className="w-4 h-4" />
                  <span>검색</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 w-full">
                  <Globe className="w-4 h-4" />
                  <span>언어 (KR)</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full mt-2">
                  <User className="w-4 h-4" />
                  <span>로그인</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}