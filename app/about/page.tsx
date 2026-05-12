'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Award, Users, Globe, Heart, Star, Briefcase } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

const team = [
  {
    name: 'Victoria Ashford',
    role: 'Founder & CEO',
    bio: 'Former luxury hotel director with 25+ years in hospitality. Visionary leader committed to redefining luxury travel through authenticity and personalization.',
    expertise: 'Luxury hospitality, destination curation, client relations'
  },
  {
    name: 'James Montgomery',
    role: 'Chief Experience Officer',
    bio: 'World traveler and expedition leader. Designed journeys across 6 continents with deep expertise in adventure, culture, and wilderness.',
    expertise: 'Adventure design, cultural immersion, logistics'
  },
  {
    name: 'Elena Rossi',
    role: 'Director of Destinations',
    bio: 'Italian-born cultural specialist with doctorate in art history. Passionate about connecting travelers with authentic cultural experiences.',
    expertise: 'Art & culture, European destinations, educational travel'
  },
  {
    name: 'Raj Patel',
    role: 'Director of Operations',
    bio: 'Operations expert ensuring seamless coordination of every journey detail. 20 years managing complex international logistics.',
    expertise: 'Logistics, vendor relations, quality assurance'
  }
]

const stats = [
  { number: '2005', label: 'Year Founded', icon: Globe },
  { number: '100+', label: 'Destinations', icon: Globe },
  { number: '1000+', label: 'Vetted Partners', icon: Users },
  { number: '98%', label: 'Client Satisfaction', icon: Heart }
]

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We believe travel should connect you genuinely with places and people, never performative or superficial. Every experience is crafted for genuine engagement.'
  },
  {
    icon: Users,
    title: 'Personal Attention',
    description: 'You are never a number. Your dedicated advisor knows your preferences, anticipates your needs, and remains your trusted partner from planning through post-journey.'
  },
  {
    icon: Briefcase,
    title: 'Expertise',
    description: 'Our team includes former luxury hotel directors, expedition leaders, and cultural specialists with decades of on-the-ground experience across six continents.'
  },
  {
    icon: Star,
    title: 'Uncompromising Quality',
    description: 'We invest in every detail. Your comfort, safety, and emotional resonance with each destination is our only measure of success.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">
            GARYPARROTBEACH
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Destinations
            </Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Experiences
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-amber-600">
              About
            </Link>
            <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">
              Inquire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <AnimatedHero
        badge="SINCE 2005 | LUXURY EXCELLENCE"
        title="About GARYPARROTBEACH"
        subtitle="redefining luxury travel"
        description="We craft bespoke journeys for discerning travelers who seek authenticity, expertise, and uncompromising quality. With 19 years of excellence, we connect you genuinely with the world's most remarkable destinations."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Our Values',
          href: '#values',
        }}
        secondaryCTA={{
          text: 'Meet the Team',
          href: '#team',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: '19', label: 'Years Leading' },
          { value: '100+', label: 'Destinations' },
          { value: '98%', label: 'Satisfaction' },
        ]}
      />

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              Founded in 2005, GARYPARROTBEACH emerged from a simple belief: travel is not transactional. It&apos;s transformational. What started as a boutique luxury travel planning service has evolved into a globally recognized pioneer of bespoke, intentional journeys.
            </p>
            <p>
              Our founders recognized that affluent travelers were tired of templated itineraries and cookie-cutter experiences. They wanted authentic connections with destinations, expert guidance tailored to their interests, and the assurance that every detail would exceed expectations. GARYPARROTBEACH was built to deliver exactly that.
            </p>
            <p>
              Over nearly two decades, we&apos;ve designed journeys across 100+ destinations, partnered with 1,000+ carefully vetted vendors, and earned a 98% client satisfaction rate. We&apos;re trusted by executives, entrepreneurs, collectors, and adventurers from around the world—people who understand that the finest travel experiences are those that feel personally crafted just for them.
            </p>
            <p>
              Today, GARYPARROTBEACH remains independent, intimate, and deeply committed to the philosophy that drove our founding: your journey should be as extraordinary as your aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <p className="text-4xl font-serif font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-amber-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-xl text-gray-600">Industry experts with decades of experience shaping the future of luxury travel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={`/team-member-${idx + 1}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">Expertise:</p>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Recognition & Awards</h2>
            <p className="text-lg text-gray-600">Recognized globally for excellence in luxury travel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { award: 'Luxury Travel Advisor', year: 'Condé Nast Traveler', logo: '★★★★★' },
              { award: 'Best Bespoke Travel', year: 'Travel + Leisure', logo: '★★★★★' },
              { award: 'Top Travel Planners', year: 'The Robb Report', logo: '★★★★★' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200">
                <p className="text-4xl font-serif text-amber-600 mb-3">{item.logo}</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">{item.award}</p>
                <p className="text-gray-600">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 opacity-90">Let our experts craft your next extraordinary journey</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Plan Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">GARYPARROTBEACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for discerning travelers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Discover</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/destinations" className="hover:text-amber-500 transition">Destinations</Link></li>
                <li><Link href="/services" className="hover:text-amber-500 transition">Services</Link></li>
                <li><Link href="/reviews" className="hover:text-amber-500 transition">Reviews</Link></li>
                <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition">Luxury Tours</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Private Jets</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Yacht Charters</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <p className="text-amber-500 font-semibold mb-2">+1 (800) TRAVEL-1</p>
              <p className="text-gray-400 text-sm">24/7 Luxury Concierge</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 GARYPARROTBEACH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
