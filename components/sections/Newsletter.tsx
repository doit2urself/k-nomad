'use client'

import { Mail, Check, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const benefits = [
  '주간 도시 추천',
  '노마드 꿀팁',
  '할인 혜택',
  '이벤트 소식'
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📮 한국 노마드 라이프 뉴스레터 구독하기
            </h2>
            <p className="text-xl text-blue-100">
              매주 새로운 도시 정보, 노마드 팁, 특별 혜택을 받아보세요
            </p>
          </div>

          {!isSubscribed ? (
            <>
              {/* 구독 폼 */}
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-opacity-70 w-5 h-5" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-white"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-bold flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Mail className="w-5 h-5" />
                      구독하기
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>

              {/* 혜택 리스트 */}
              <div className="flex flex-wrap justify-center gap-6 text-blue-100">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* 구독 완료 메시지 */
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">구독이 완료되었습니다! 🎉</h3>
              <p className="text-blue-100">
                첫 번째 뉴스레터가 곧 발송됩니다. 스팸 메일함도 확인해주세요!
              </p>
            </div>
          )}

          {/* 추가 정보 */}
          <div className="mt-8 text-sm text-blue-200">
            <p>언제든지 구독 해지가 가능합니다. 개인정보는 안전하게 보호됩니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}