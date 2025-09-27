'use client'

import { Search, Target } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">🌸</span> 한국에서 노마드 라이프를 시작하세요 <span className="text-pink-500">🌸</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12">
            전국 주요 도시의 생생한 정보와 노마드들의 실제 후기를 한눈에
          </p>

          {/* 검색 박스 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="어디서 살고 싶으신가요? 예: 서울, 부산, 제주, 강릉..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  검색
                </button>

                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors font-medium flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  맞춤 추천 받기
                </button>
              </div>
            </div>
          </div>

          {/* 통계 지표 */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💻</span>
              <span className="font-bold text-lg text-gray-900">12,847명</span>
              <span>의 노마드</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">🏙️</span>
              <span className="font-bold text-lg text-gray-900">47개</span>
              <span>도시</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-lg text-gray-900">15,392개</span>
              <span>리뷰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}