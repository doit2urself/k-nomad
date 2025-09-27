import { Star, Users, Wifi, ArrowRight, BarChart3 } from 'lucide-react'

const cities = [
  {
    id: 1,
    name: '서울 강남구',
    emoji: '🌸',
    rating: 4.2,
    cost: '185만',
    nomads: 234,
    internet: 125,
    image: '/placeholder-city.jpg'
  },
  {
    id: 2,
    name: '제주 제주시',
    emoji: '🍊',
    rating: 4.6,
    cost: '118만',
    nomads: 89,
    internet: 89,
    image: '/placeholder-city.jpg'
  },
  {
    id: 3,
    name: '부산 해운대구',
    emoji: '🌊',
    rating: 4.1,
    cost: '132만',
    nomads: 156,
    internet: 98,
    image: '/placeholder-city.jpg'
  },
  {
    id: 4,
    name: '강릉시',
    emoji: '🏔️',
    rating: 4.3,
    cost: '95만',
    nomads: 67,
    internet: 76,
    image: '/placeholder-city.jpg'
  },
  {
    id: 5,
    name: '대전 유성구',
    emoji: '🌉',
    rating: 4.0,
    cost: '98만',
    nomads: 45,
    internet: 112,
    image: '/placeholder-city.jpg'
  }
]

export default function PopularCities() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-0">
            🔥 지금 인기 있는 노마드 도시 TOP 6
          </h2>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <BarChart3 className="w-5 h-5" />
            전체 순위 보기
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cities.map((city) => (
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
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{city.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-600 font-semibold">💰</span>
                    <span className="font-semibold">{city.cost}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{city.nomads}명</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{city.internet}M</span>
                  </div>
                </div>

                <button className="w-full bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors font-medium text-sm group-hover:bg-blue-50 group-hover:text-blue-600">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 더 많은 도시 보기 CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <Star className="w-5 h-5" />
            더 많은 도시 둘러보기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}