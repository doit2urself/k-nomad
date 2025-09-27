import { BarChart3, MessageCircle, TrendingUp, Clock } from 'lucide-react'

const liveStats = [
  { city: '서울', count: 234, color: 'bg-blue-500', width: 'w-full' },
  { city: '제주', count: 89, color: 'bg-orange-500', width: 'w-3/5' },
  { city: '부산', count: 156, color: 'bg-green-500', width: 'w-4/5' }
]

const trendingCities = [
  { city: '강릉', change: '+45%' },
  { city: '전주', change: '+32%' },
  { city: '춘천', change: '+28%' }
]

const communityPosts = [
  {
    content: '서울 강남 추천 카페 있나요?',
    author: '디지털유목민',
    time: '3분 전',
    location: '서울'
  },
  {
    content: '제주 한 달 살기 후기 올려요!',
    author: '제주러버',
    time: '15분 전',
    location: '제주'
  },
  {
    content: '부산 코워킹 스페이스 정보 공유',
    author: '부산노마드',
    time: '1시간 전',
    location: '부산'
  },
  {
    content: '세종시 어떤가요? 신도시라서...',
    author: '세종거주자',
    time: '2시간 전',
    location: '세종'
  }
]

export default function LiveActivity() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 실시간 노마드 현황 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              📊 실시간 노마드 현황
            </h3>

            <div className="space-y-6">
              {/* 현재 온라인 */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-lg">현재 온라인: </span>
                <span className="font-bold text-xl text-blue-600">1,247명</span>
              </div>

              {/* 지금 가장 많은 노마드가 있는 곳 */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">📍 지금 가장 많은 노마드가 있는 곳:</h4>
                <div className="space-y-3">
                  {liveStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-lg font-bold text-blue-600 w-6">
                        {index + 1}️⃣
                      </span>
                      <span className="font-medium w-12">{stat.city}</span>
                      <span className="text-sm text-gray-600 w-16">({stat.count}명)</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                        <div className={`${stat.color} ${stat.width} h-full rounded-full transition-all duration-1000`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 이번 주 급상승 도시 */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">📈 이번 주 급상승 도시:</h4>
                <div className="space-y-2">
                  {trendingCities.map((city, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-orange-500">🔥</span>
                      <span className="font-medium">{city.city}</span>
                      <span className="text-green-600 font-semibold">({city.change})</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                상세 통계 보기
              </button>
            </div>
          </div>

          {/* 최신 커뮤니티 활동 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-green-600" />
              💬 최신 커뮤니티 활동
            </h3>

            <div className="space-y-4">
              {communityPosts.map((post, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-2">{post.content}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          👤 {post.author}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.time}
                        </span>
                        <span>•</span>
                        <span className="text-blue-600 font-medium">{post.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-green-50 hover:bg-green-100 text-green-600 py-3 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 mt-6">
              <MessageCircle className="w-5 h-5" />
              커뮤니티 참여하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}