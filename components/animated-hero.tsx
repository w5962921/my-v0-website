'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

interface AnimatedHeroProps {
  title: string
  subtitle: string
  description: string
  backgroundGradient: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  badge?: string
  showTrustIndicators?: boolean
  trustStats?: Array<{
    value: string
    label: string
  }>
}

export default function AnimatedHero({
  title,
  subtitle,
  description,
  backgroundGradient,
  primaryCTA,
  secondaryCTA,
  badge,
  showTrustIndicators = false,
  trustStats = [],
}: AnimatedHeroProps) {
  return (
    <section className={`relative pt-28 pb-20 px-6 min-h-screen ${backgroundGradient} text-white overflow-hidden flex items-center`}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="animate-fade-in-up">
          {/* Badge */}
          {badge && (
            <div className="inline-block mb-8 animate-slide-up">
              <span className="text-amber-300 text-sm font-bold uppercase tracking-widest px-4 py-2 border border-amber-400/30 rounded-full bg-amber-900/30 backdrop-blur">
                {badge}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {title.split(' ').map((word, idx) => (
                <span key={idx} className="inline-block mr-3 animate-fade-in-up" style={{ animationDelay: `${100 + idx * 100}ms` }}>
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle with gradient */}
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-100 max-w-3xl mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-amber-500/50"
              >
                <span>{primaryCTA.text}</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-3 border-2 border-amber-300 text-amber-200 px-10 py-5 rounded-xl hover:bg-amber-900/30 transition-all duration-300 font-bold text-lg hover:border-amber-200 backdrop-blur-sm"
              >
                <span>{secondaryCTA.text}</span>
                {secondaryCTA.icon || <MapPin size={22} />}
              </Link>
            )}
          </div>

          {/* Trust Indicators */}
          {showTrustIndicators && trustStats.length > 0 && (
            <div className="flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              {trustStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40"></div>
                  <div>
                    <p className="font-bold text-amber-300">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
