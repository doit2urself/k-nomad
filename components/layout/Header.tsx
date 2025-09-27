'use client'

import { Search, Globe, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-forest-200 sticky top-0 z-50 wood-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-earth-700">
                🌿 KoreaNomad.co.kr
              </Link>
            </div>
          </div>


          {/* 검색, 언어, 로그인 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-earth-500 hover:text-forest-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button className="flex items-center space-x-1 text-earth-600 hover:text-forest-700 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">KR</span>
            </button>

            <Link href="/login" className="flex items-center space-x-1 bg-forest-600 text-earth-50 px-4 py-2 organic-border hover:bg-forest-700 transition-colors nature-shadow">
              <User className="w-4 h-4" />
              <span className="text-sm">로그인</span>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earth-600 hover:text-forest-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-forest-50 organic-border mt-2 nature-shadow">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-earth-600 hover:text-forest-700 w-full transition-colors">
                <Search className="w-4 h-4" />
                <span>검색</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-earth-600 hover:text-forest-700 w-full transition-colors">
                <Globe className="w-4 h-4" />
                <span>언어 (KR)</span>
              </button>
              <Link href="/login" className="flex items-center justify-center space-x-2 bg-forest-600 text-earth-50 px-3 py-2 organic-border hover:bg-forest-700 transition-colors w-full mt-2 nature-shadow">
                <User className="w-4 h-4" />
                <span>로그인</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}