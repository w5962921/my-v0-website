'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Award, Users, Globe, Heart, Star, Briefcase } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

// Only CEO remains
const team = [
  {
    name: 'Gary Seitz',
    role: 'Founder & CEO',
    bio: 'Gary Seitz is the visionary behind PARROTBEACH. With deep roots in hospitality and a lifelong passion for discovering America’s hidden treasures, he built this company to offer travelers authentic, transformative journeys. Gary personally oversees every itinerary, ensuring each guest receives the highest level of care and expertise.',
    expertise: 'Luxury travel, destination curation, client relationships',
    // No image – we will not render any picture
  }
]

const stats = [
  { number: '2+', label: 'Years of Excellence', icon: Globe },
  { number: '50+', label: 'USA Destinations', icon: Globe },
  { number: '200+', label: 'Happy Travelers', icon: Users },
  { number: '98%', label: 'Satisfaction', icon: Heart }
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
    description: 'Our small team of specialists has deep knowledge of America’s hidden gems, luxury lodges, and one‑of‑a‑kind experiences – all gained through first‑hand exploration.'
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
            PARROTBEACH
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
        badge="FRESH. AUTHENTIC. LUXURY."
        title="About PARROTBEACH"
        subtitle="redefining luxury travel for a new era"
        description="We are a young, passionate team dedicated to crafting bespoke journeys across the United States. With fresh eyes and a commitment to authenticity, we create experiences that feel deeply personal."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Our Values',
          href: '#values',
        }}
        secondaryCTA={{
          text: 'Meet the CEO',
          href: '#team',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: 'Boutique', label: 'Service' },
          { value: '50+', label: 'Destinations' },
          { value: '98%', label: 'Satisfaction' },
        ]}
      />

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              PARROTBEACH was born from a simple belief: travel is not transactional – it is transformational. Two years ago, our founder set out to build a different kind of luxury travel company: one that prioritizes genuine connection over volume, and intentional moments over generic itineraries.
            </p>
            <p>
              We saw that even discerning travelers were being offered cookie‑cutter experiences. They wanted more than luxury hotels and first‑class flights; they wanted stories, soul, and a sense of place. PARROTBEACH was created to deliver exactly that – a fresh, authentic approach to exploring America’s most remarkable destinations.
            </p>
            <p>
              In just two years, we have designed journeys to over 50 US destinations, partnered with 200+ carefully vetted local vendors, and earned a 98% client satisfaction rate. Our travelers are executives, artists, adventurers, and families – people who understand that the finest journey is one that feels personally crafted for them.
            </p>
            <p>
              Today, PARROTBEACH remains independent, intimate, and deeply committed to the philosophy that drove our founding: your journey should be as extraordinary as your aspirations.
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
      <section id="values" className="py-20 px-6">
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

      {/* Team – only CEO, no picture */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Meet the CEO</h2>
            <p className="text-xl text-gray-600">Personal leadership, exceptional service</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden">
                {/* No image placeholder */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">Expertise:</p>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                    <div className="mt-4 text-sm text-gray-600">
                      <p className="font-medium text-gray-700">Contact & Address:</p>
                      <p>Gary Seitz</p>
                      <p>13 Green Apple Ct</p>
                      <p>Sparta, NJ 07871</p>
                      <p>Mobile: 973-687-0899</p>
                      <p>Landline: 973-729-9335</p>
                      <p>Mobile: 407-821-8177</p>
                    </div>
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
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Recognition</h2>
            <p className="text-lg text-gray-600">Already earning praise in the luxury travel industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { award: 'Rising Star', year: 'Luxury Travel Advisor', logo: '★★★★½' },
              { award: 'Best Newcomer', year: 'Travel + Leisure', logo: '★★★★½' },
              { award: 'Innovative Design', year: 'The Robb Report', logo: '★★★★½' }
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
          <p className="text-lg mb-8 opacity-90">Let our fresh‑thinking team craft your next extraordinary journey across America</p>
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
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">PARROTBEACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for discerning travelers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Discover</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/destinations" className="hover:text-amber-500 transition">Destinations</Link></li>
                <li><Link href="/services" className="hover:text-amber-500 transition">Services</Link></li>
                <li><Link href="/reviews" className="hover:text-amber-500 transition">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-amber-500 transition">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <p className="text-gray-400 text-sm">Gary Seitz</p>
              <p className="text-gray-400 text-sm">13 Green Apple Ct</p>
              <p className="text-gray-400 text-sm">Sparta, NJ 07871</p>
              <p className="text-amber-500 font-semibold mt-2">Mobile: 973-687-0899</p>
              <p className="text-amber-500 font-semibold">Landline: 973-729-9335</p>
              <p className="text-amber-500 font-semibold">Mobile: 407-821-8177</p>
              <p className="text-gray-400 text-sm mt-2">T. Lee Productions</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PARROTBEACH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}