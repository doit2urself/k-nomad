import { Calculator, Map, Smartphone, Home, ArrowRight } from 'lucide-react'

const tools = [
  {
    icon: Calculator,
    title: '💰 생활비 계산기',
    description: '도시별 예상 생활비를 미리 계산해보세요',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: Map,
    title: '🗺️ 여행 루트 플래너',
    description: '여러 도시를 연결한 최적의 여행 루트',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: Smartphone,
    title: '📱 유심/요금제 비교',
    description: '통신사별 요금제와 유심 옵션을 비교',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    icon: Home,
    title: '🏠 숙소 비교 도구',
    description: '에어비앤비, 호텔, 게스트하우스 한번에',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    buttonColor: 'bg-orange-600 hover:bg-orange-700'
  }
]

export default function Tools() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🛠️ 노마드 라이프를 위한 도구들
          </h2>
          <p className="text-xl text-gray-600">
            디지털 노마드 생활을 더 편리하게 만들어주는 실용적인 도구들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${tool.color} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                {/* 아이콘 */}
                <div className="flex justify-center">
                  <div className="p-3 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className={`w-8 h-8 ${tool.iconColor}`} />
                  </div>
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold text-gray-900">
                  {tool.title}
                </h3>

                {/* 설명 */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>

                {/* 버튼 */}
                <button className={`w-full ${tool.buttonColor} text-white py-3 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 group-hover:gap-3`}>
                  <span>
                    {index === 0 && '계산해보기'}
                    {index === 1 && '플래닝 시작'}
                    {index === 2 && '비교하기'}
                    {index === 3 && '검색하기'}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 도구 안내 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-gray-600">
            <span>더 많은 도구가 곧 추가됩니다</span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </section>
  )
}