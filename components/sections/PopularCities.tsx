'use client'

import { Heart, ThumbsDown } from 'lucide-react'
import { useState } from 'react'

const cities = [
  {
    id: 1,
    name: '서울 강남구',
    emoji: '🌸',
    likes: 142,
    dislikes: 23,
    budget: '200만원 이상',
    region: '수도권',
    environment: '도심선호',
    bestSeason: '봄',
    image: '/placeholder-city.jpg'
  },
  {
    id: 2,
    name: '제주 제주시',
    emoji: '🍊',
    likes: 189,
    dislikes: 12,
    budget: '100~200만원',
    region: '제주도',
    environment: '자연친화',
    bestSeason: '봄',
    image: '/placeholder-city.jpg'
  },
  {
    id: 3,
    name: '부산 해운대구',
    emoji: '🌊',
    likes: 156,
    dislikes: 34,
    budget: '100~200만원',
    region: '경상도',
    environment: '자연친화',
    bestSeason: '여름',
    image: '/placeholder-city.jpg'
  },
  {
    id: 4,
    name: '강릉시',
    emoji: '🏔️',
    likes: 98,
    dislikes: 15,
    budget: '100만원',
    region: '강원도',
    environment: '자연친화',
    bestSeason: '여름',
    image: '/placeholder-city.jpg'
  },
  {
    id: 5,
    name: '대전 유성구',
    emoji: '🌉',
    likes: 76,
    dislikes: 19,
    budget: '100만원',
    region: '충청도',
    environment: '코워킹 필수',
    bestSeason: '가을',
    image: '/placeholder-city.jpg'
  }
]

export default function PopularCities() {
  // 각 도시별 좋아요/싫어요 상태 관리
  const [cityLikes, setCityLikes] = useState<{[key: number]: number}>(
    cities.reduce((acc, city) => ({ ...acc, [city.id]: city.likes }), {})
  )
  const [cityDislikes, setCityDislikes] = useState<{[key: number]: number}>(
    cities.reduce((acc, city) => ({ ...acc, [city.id]: city.dislikes }), {})
  )
  const [userActions, setUserActions] = useState<{[key: number]: 'like' | 'dislike' | null}>({})

  // 좋아요 수 기준으로 도시 정렬
  const sortedCities = [...cities].sort((a, b) => {
    const likesA = cityLikes[a.id] || a.likes
    const likesB = cityLikes[b.id] || b.likes
    return likesB - likesA
  })

  // 좋아요/싫어요 클릭 핸들러
  const handleLikeClick = (cityId: number) => {
    const currentAction = userActions[cityId]

    if (currentAction === 'like') {
      // 좋아요 취소
      setCityLikes(prev => ({ ...prev, [cityId]: prev[cityId] - 1 }))
      setUserActions(prev => ({ ...prev, [cityId]: null }))
    } else {
      // 좋아요 추가
      setCityLikes(prev => ({ ...prev, [cityId]: prev[cityId] + 1 }))
      if (currentAction === 'dislike') {
        setCityDislikes(prev => ({ ...prev, [cityId]: prev[cityId] - 1 }))
      }
      setUserActions(prev => ({ ...prev, [cityId]: 'like' }))
    }
  }

  const handleDislikeClick = (cityId: number) => {
    const currentAction = userActions[cityId]

    if (currentAction === 'dislike') {
      // 싫어요 취소
      setCityDislikes(prev => ({ ...prev, [cityId]: prev[cityId] - 1 }))
      setUserActions(prev => ({ ...prev, [cityId]: null }))
    } else {
      // 싫어요 추가
      setCityDislikes(prev => ({ ...prev, [cityId]: prev[cityId] + 1 }))
      if (currentAction === 'like') {
        setCityLikes(prev => ({ ...prev, [cityId]: prev[cityId] - 1 }))
      }
      setUserActions(prev => ({ ...prev, [cityId]: 'dislike' }))
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            도시 리스트
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sortedCities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden group cursor-pointer"
            >
              {/* 도시 이미지 영역 */}
              <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{city.emoji}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{city.name}</h3>
                </div>
              </div>

              {/* 도시 정보 */}
              <div className="p-4">
                {/* 좋아요/싫어요 버튼 */}
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => handleLikeClick(city.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-200 ${
                      userActions[city.id] === 'like'
                        ? 'bg-red-50 border border-red-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-200 ${
                        userActions[city.id] === 'like'
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                    <span className="text-sm font-medium">{cityLikes[city.id]}</span>
                  </button>
                  <button
                    onClick={() => handleDislikeClick(city.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-200 ${
                      userActions[city.id] === 'dislike'
                        ? 'bg-gray-100 border border-gray-300'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsDown
                      className={`w-4 h-4 transition-colors duration-200 ${
                        userActions[city.id] === 'dislike'
                          ? 'text-gray-600 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                    <span className="text-sm font-medium">{cityDislikes[city.id]}</span>
                  </button>
                </div>

                {/* Key-Value 형태의 필터 정보 */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">💰 예산:</span>
                    <span className="font-medium text-gray-900">{city.budget}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">📍 지역:</span>
                    <span className="font-medium text-gray-900">{city.region}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">🌿 환경:</span>
                    <span className="font-medium text-gray-900">{city.environment}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">🌸 최고 계절:</span>
                    <span className="font-medium text-gray-900">{city.bestSeason}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}