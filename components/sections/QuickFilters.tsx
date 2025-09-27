'use client'

import { Settings } from 'lucide-react'
import { useState } from 'react'

const filterCategories = [
  {
    title: '💰 예산',
    options: ['100만원', '100~200만원', '200만원 이상']
  },
  {
    title: '📍 지역',
    options: ['전체', '수도권', '경상도', '전라도', '강원도', '제주도', '충청도']
  },
  {
    title: '🌿 환경',
    options: ['자연친화', '도심선호', '카페작업', '코워킹 필수']
  },
  {
    title: '🌸 최고 계절',
    options: ['봄', '여름', '가을', '겨울']
  }
]

export default function QuickFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🎯 원하는 조건으로 빠르게 찾기
          </h2>
        </div>

        <div className="space-y-8">
          {filterCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => toggleFilter(option)}
                    className={`px-6 py-3 rounded-full border transition-all duration-200 font-medium min-w-0 justify-center text-center ${
                      selectedFilters.includes(option)
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 선택된 필터 표시 */}
        {selectedFilters.length > 0 && (
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">
              선택된 조건 ({selectedFilters.length}개)
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                >
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="hover:bg-blue-700 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                조건에 맞는 도시 보기
              </button>
              <button
                onClick={() => setSelectedFilters([])}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                초기화
              </button>
            </div>
          </div>
        )}

        {/* 고급 필터 버튼 */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium">
            <Settings className="w-5 h-5" />
            고급 필터 설정
          </button>
        </div>
      </div>
    </section>
  )
}