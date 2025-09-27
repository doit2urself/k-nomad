import { Mail, Github, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  '플랫폼': [
    { name: '도시 탐색', href: '#' },
    { name: '도시 순위', href: '#' },
    { name: '커뮤니티', href: '#' },
    { name: '노마드 도구', href: '#' }
  ],
  '정보': [
    { name: '가이드', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: '블로그', href: '#' },
    { name: '도시 추가 요청', href: '#' }
  ],
  '회사': [
    { name: '소개', href: '#' },
    { name: '채용', href: '#' },
    { name: '파트너십', href: '#' },
    { name: '언론 보도', href: '#' }
  ],
  '지원': [
    { name: '문의하기', href: '#' },
    { name: '사용법', href: '#' },
    { name: '기능 요청', href: '#' },
    { name: '버그 신고', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  { name: 'Github', icon: Github, href: '#', color: 'hover:text-gray-600' },
  { name: 'Email', icon: Mail, href: '#', color: 'hover:text-green-500' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">🇰🇷 KoreaNomad</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              한국의 디지털 노마드들을 위한 원스톱 정보 플랫폼입니다.
              전국 주요 도시의 생생한 정보와 실제 노마드들의 후기를 통해
              당신의 완벽한 노마드 라이프를 찾아보세요.
            </p>

            {/* 소셜 미디어 링크 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* 링크 섹션들 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* 하단 정보 */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-gray-400">
            <span>© 2024 KoreaNomad. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">쿠키 정책</a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>for Korean Digital Nomads</span>
          </div>
        </div>

        {/* 추가 통계 정보 */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">47+</div>
              <div className="text-sm text-gray-400">도시 정보</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">12K+</div>
              <div className="text-sm text-gray-400">노마드 사용자</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">15K+</div>
              <div className="text-sm text-gray-400">도시 리뷰</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">98%</div>
              <div className="text-sm text-gray-400">만족도</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}