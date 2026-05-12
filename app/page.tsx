'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Star, MapPin, Calendar, Menu, X, Ship, Binoculars, Landmark, Mountain, Wine, Heart } from 'lucide-react'

const journeyStories = [
  {
    id: 1,
    title: 'The Art of Wandering',
    excerpt: 'Discover how intentional travel shapes the soul. From the galleries of Florence to the temples of Kyoto, we craft journeys where every moment becomes a memory.',
    image: '/hero-maldives.jpg',
    destination: 'Europe & Asia',
    duration: '14 days',
    price: '$16,500',
  },
  {
    id: 2,
    title: 'Wilderness Awakening',
    excerpt: 'True adventure demands more than courage—it demands presence. Immerse yourself in Africa\'s most pristine ecosystems and emerge transformed.',
    image: '/kenya-safari.jpg',
    destination: 'Kenya & Tanzania',
    duration: '10 days',
    price: '$14,200',
  },
  {
    id: 3,
    title: 'Alpine Tranquility',
    excerpt: 'Where mountains touch the sky, the soul finds peace. Experience luxury intertwined with nature\'s grandeur in the heart of the Alps.',
    image: '/swiss-alps.jpg',
    destination: 'Switzerland',
    duration: '8 days',
    price: '$13,800',
  },
]

const experiences = [
  { category: 'Yacht Charters', count: '45+', icon: 'ship', desc: 'Private Mediterranean voyages' },
  { category: 'Safari Expeditions', count: '32+', icon: 'binoculars', desc: 'Guided wildlife encounters' },
  { category: 'Cultural Immersion', count: '67+', icon: 'landmark', desc: 'Heritage & traditions' },
  { category: 'Mountain Retreats', count: '28+', icon: 'mountain', desc: 'Alpine luxury escapes' },
  { category: 'Culinary Tours', count: '41+', icon: 'wine', desc: 'Gastronomic journeys' },
  { category: 'Wellness Sanctuaries', count: '36+', icon: 'heart', desc: 'Spa & rejuvenation' },
]

const getExperienceIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    ship: <Ship className="w-8 h-8" />,
    binoculars: <Binoculars className="w-8 h-8" />,
    landmark: <Landmark className="w-8 h-8" />,
    mountain: <Mountain className="w-8 h-8" />,
    wine: <Wine className="w-8 h-8" />,
    heart: <Heart className="w-8 h-8" />,
  }
  return iconMap[iconName] || null
}

const testimonials = [
  {
    name: 'Victoria Richardson',
    title: 'CEO, Goldman Sachs',
    location: 'London',
    text: 'Not just a travel agency—they are dream architects. Every detail was perfected with intention.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Venture Capitalist',
    location: 'Singapore',
    text: 'In twenty years of travel, nothing compares. This wasn\'t a trip; it was a transformative experience.',
    rating: 5,
  },
  {
    name: 'Elena Vasquez',
    title: 'Art Director',
    location: 'Buenos Aires',
    text: 'They understand that luxury is about feeling, not spending. Truly remarkable.',
    rating: 5,
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleBooking = (title: string, price: string) => {
    window.location.href = `/contact?package=${encodeURIComponent(title)}&price=${price}`
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600 animate-fade-in-down">
            GARYPARROTBEACH
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
              Destinations
            </Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
              Experiences
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium hover:shadow-lg">
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-fade-in-down">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600">Destinations</Link>
              <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600">Experiences</Link>
              <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-amber-600">Services</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600">About</Link>
              <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-amber-600">Reviews</Link>
              <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg text-center">Inquire</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Interactive & Animated */}
      <section className="relative pt-28 pb-20 px-6 min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block mb-8 animate-slide-up">
              <span className="text-amber-300 text-sm font-bold uppercase tracking-widest px-4 py-2 border border-amber-400/30 rounded-full bg-amber-900/30 backdrop-blur">
                Established 2005 | 19+ Years of Excellence
              </span>
            </div>

            {/* Main Heading with gradient and animation */}
            <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Travel
              </span>
              <span className="inline-block mx-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                isn&apos;t about the
              </span>
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                destination.
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-12 text-amber-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              It&apos;s about how you <span className="text-amber-400">feel.</span>
            </h2>

            {/* Description with smooth fade */}
            <p className="text-lg lg:text-xl text-gray-100 max-w-3xl mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              For nearly two decades, we&apos;ve crafted transformative journeys for those who understand that luxury transcends material comforts. It&apos;s about intentional moments, profound connections, and the soul-stirring transformation that comes from stepping into the extraordinary.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-amber-500/50"
              >
                <span>Start Your Journey</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-3 border-2 border-amber-300 text-amber-200 px-10 py-5 rounded-xl hover:bg-amber-900/30 transition-all duration-300 font-bold text-lg hover:border-amber-200 backdrop-blur-sm"
              >
                Explore Destinations
                <MapPin size={22} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/40">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-amber-300">5000+</p>
                  <p className="text-sm text-gray-300">Journeys Curated</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/40">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6-4h.01M3 5a2 2 0 012-2h3.28a1 1 0 00.992.693l1.458 3.86a1 1 0 001.506.692l1.458-3.86a1 1 0 00.992-.693H17a2 2 0 012 2v2H3V5z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-amber-300">100+</p>
                  <p className="text-sm text-gray-300">Destinations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/40">
                  <svg className="w-6 h-6 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-amber-300">4.9/5</p>
                  <p className="text-sm text-gray-300">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Journey Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">Remarkable Experiences</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Journeys That Transform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each story below represents years of curation, expert relationships, and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {journeyStories.map((story, idx) => (
              <div 
                key={story.id}
                className="group animate-fade-in-up transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{story.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-amber-600" />
                      {story.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} className="text-amber-600" />
                      {story.duration}
                    </span>
                  </div>
                  <p className="text-amber-600 font-bold text-lg">{story.price}</p>
                  <button
                    onClick={() => handleBooking(story.title, story.price)}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-amber-600 transition-all duration-300 font-semibold hover:shadow-lg hover:translate-y-[-2px]"
                  >
                    Inquire About This Journey
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">Curated Services</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">The Art of Luxury Travel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <Link 
                key={idx}
                href="/experiences"
                className="group p-8 rounded-xl border-2 border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition-all duration-300 animate-fade-in-up hover:shadow-lg cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="mb-4 group-hover:scale-125 transition-transform duration-300 text-amber-600">{getExperienceIcon(exp.icon)}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{exp.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{exp.desc}</p>
                <div className="flex items-center gap-2 text-amber-600 font-bold group-hover:gap-3 transition-all">
                  <span>{exp.count} Experiences</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-6">Our Approach</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
              We Don&apos;t Sell Vacations.
              <span className="text-amber-600"> We Craft Transformations.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Travel, for us, has always been about more than logistics. It&apos;s about understanding who you are, what moves you, and where your curiosity leads. We believe that the best journeys aren&apos;t pre-packaged—they&apos;re deeply personal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each journey begins with a conversation. Through careful listening and decades of insider knowledge, we connect you with destinations and experiences that resonate with your soul. The result? Travel that doesn&apos;t just show you the world—it changes how you see it.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">World-Class Feedback</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">Voices of Distinction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up hover:border-amber-200"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                    ))}
                </div>
                <p className="mb-8 text-gray-700 leading-relaxed italic text-lg">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-serif font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-amber-600 text-sm font-semibold">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Destinations Worldwide' },
              { number: '19+', label: 'Years of Excellence' },
              { number: '5000+', label: 'Journeys Curated' },
              { number: '24/7', label: 'Concierge Support' },
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-4xl lg:text-5xl font-serif font-bold text-amber-500 mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-lg mb-10 opacity-90">
            Let&apos;s start a conversation about the journey that calls to your heart.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Begin Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fade-in-up">
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">GARYPARROTBEACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for those who understand that travel transforms the soul.</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
              <h4 className="font-semibold mb-4 text-white">Discover</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/destinations" className="hover:text-amber-500 transition-colors duration-300">Destinations</Link></li>
                <li><Link href="/experiences" className="hover:text-amber-500 transition-colors duration-300">Experiences</Link></li>
                <li><Link href="/about" className="hover:text-amber-500 transition-colors duration-300">About Us</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors duration-300">Luxury Tours</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors duration-300">Private Jets</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors duration-300">Yacht Charters</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <p className="text-amber-500 font-semibold mb-2">+1 (800) TRAVEL-1</p>
              <p className="text-gray-400 text-sm mb-1">24/7 Luxury Concierge</p>
              <p className="text-gray-400 text-sm">info@garyparrotbeach.com</p>
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
