'use client'

import { Search, Target } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="bg-gradient-to-br from-forest-50 via-earth-50 to-moss-50 py-16 lg:py-24 leaf-pattern relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-forest-200 opacity-30 organic-blob gentle-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-moss-200 opacity-20 leaf-shape leaf-sway"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-earth-700 mb-6">
            <span className="text-forest-600 leaf-sway inline-block">🌿</span> 한국에서 자연과 함께하는 노마드 라이프 <span className="text-moss-600 gentle-float inline-block">🍃</span>
          </h1>

          <p className="text-xl lg:text-2xl text-earth-600 mb-12">
            자연 친화적인 환경에서 전국 주요 도시의 생생한 정보와 노마드들의 실제 후기를 한눈에
          </p>

          {/* 검색 박스 */}
          <div className="bg-card organic-border nature-shadow-lg border border-forest-200 p-6 lg:p-8 mb-12 wood-texture">
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-forest-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="어디서 살고 싶으신가요? 예: 서울, 부산, 제주, 강릉..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-forest-300 organic-border-alt text-lg focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-earth-50"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-forest-600 text-earth-50 px-8 py-4 organic-border hover:bg-forest-700 transition-colors font-medium flex items-center gap-2 nature-shadow">
                  <Search className="w-5 h-5" />
                  검색
                </button>

                <button className="bg-gradient-to-r from-moss-600 to-forest-600 text-earth-50 px-6 py-4 organic-border hover:from-moss-700 hover:to-forest-700 transition-colors font-medium flex items-center gap-2 nature-shadow">
                  <Target className="w-5 h-5" />
                  맞춤 추천 받기
                </button>
              </div>
            </div>
          </div>

          {/* 통계 지표 */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-earth-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl gentle-float">🌱</span>
              <span className="font-bold text-lg text-earth-700">12,847명</span>
              <span>의 노마드</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-forest-400 rounded-full"></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl leaf-sway">🏞️</span>
              <span className="font-bold text-lg text-earth-700">47개</span>
              <span>도시</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-forest-400 rounded-full"></div>

            <div className="flex items-center gap-2">
              <span className="text-2xl gentle-float">🌟</span>
              <span className="font-bold text-lg text-earth-700">15,392개</span>
              <span>리뷰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}