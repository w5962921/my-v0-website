'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Users2, DollarSign, Star, ArrowRight, Briefcase, Heart } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

const experiences = [
  {
    id: 1,
    category: 'Maritime',
    name: 'Superyacht Mediterranean Charter',
    location: 'Greek Islands, Italy, France',
    price: 45000,
    duration: '7-14 days',
    capacity: '2-12 guests',
    image: '/luxury-yacht.jpg',
    rating: 4.98,
    description: 'Experience unparalleled luxury aboard a private superyacht. Navigate crystal-clear waters between exclusive Mediterranean destinations. Enjoy gourmet dining prepared by private chefs, water sports activities, and sunset aperitifs on the open deck.',
    inclusions: ['Crewed Superyacht', 'Gourmet Dining', 'Water Sports', 'Tender Boat Excursions', 'Michelin-Starred Shore Dinners', 'Premium Wines & Spirits'],
    bestFor: ['Couples seeking romance', 'Family celebrations', 'Friend groups', 'Corporate retreats'],
  },
  {
    id: 2,
    category: 'Aviation',
    name: 'Global Private Jet Experience',
    location: 'Worldwide',
    price: 85000,
    duration: 'Custom',
    capacity: '2-8 passengers',
    image: '/private-jet.jpg',
    rating: 4.96,
    description: 'Skip commercial aviation entirely. Our curated private jet service offers unmatched flexibility, privacy, and comfort. Customize your itinerary with seamless point-to-point travel. Direct access to over 5,000 airfields globally, including remote destinations.',
    inclusions: ['Ultra-Long Range Aircraft', 'Premium Catering', 'Flexible Scheduling', 'Concierge Planning', 'Ground Transportation', 'VIP Terminal Access'],
    bestFor: ['Time-conscious executives', 'Multi-destination tours', 'Remote expeditions', 'Private events'],
  },
  {
    id: 3,
    category: 'Wellness',
    name: 'Luxury Spa & Wellness Retreat',
    location: 'Switzerland, Costa Rica, Bali',
    price: 28500,
    duration: '5-10 days',
    capacity: '2-20 guests',
    image: '/luxury-spa.jpg',
    rating: 4.94,
    description: 'Rejuvenate at world-class wellness sanctuaries. Combine holistic spa treatments with fitness, yoga, meditation, and personalized nutrition programs. Access to renowned wellness experts and transformative experiences.',
    inclusions: ['Luxury Accommodation', 'Daily Spa Services', 'Yoga & Meditation Classes', 'Wellness Consultations', 'Gourmet Healthy Cuisine', 'Fitness Programs'],
    bestFor: ['Wellness enthusiasts', 'Stress relief seekers', 'Health-conscious travelers', 'Group rejuvenation'],
  },
  {
    id: 4,
    category: 'Culinary',
    name: 'Michelin Star Culinary Journey',
    location: 'France, Italy, Spain, Japan',
    price: 19500,
    duration: '5-8 days',
    capacity: '2-8 guests',
    image: '/wine-tasting.jpg',
    rating: 4.97,
    description: 'Embark on an exclusive culinary adventure through the world\'s most celebrated food destinations. Dine at Michelin-starred restaurants, visit renowned chefs, tour vineyards, and participate in exclusive cooking classes.',
    inclusions: ['5-8 Michelin-Starred Dinners', 'Wine Pairings', 'Chef Meetings', 'Vineyard Tours', 'Cooking Classes', 'Food Market Explorations'],
    bestFor: ['Food & wine connoisseurs', 'Culinary enthusiasts', 'Celebration dinners', 'Cultural foodies'],
  },
  {
    id: 5,
    category: 'Adventure',
    name: 'Extreme Expedition Adventure',
    location: 'Himalayas, Patagonia, Kilimanjaro',
    price: 35600,
    duration: '7-14 days',
    capacity: '4-12 guests',
    image: '/adventure-hiking.jpg',
    rating: 4.95,
    description: 'Push your limits with professionally guided expeditions to Earth\'s most challenging and breathtaking destinations. Summit peaks, trek through pristine wilderness, and camp under star-filled skies with expert mountaineers.',
    inclusions: ['Expert Mountain Guides', 'Premium Camping Equipment', 'Luxury Base Camps', 'Altitude Support Team', 'Photography Services', 'Emergency Medical Support'],
    bestFor: ['Adventure seekers', 'Mountain climbers', 'Photography enthusiasts', 'Experienced trekkers'],
  },
  {
    id: 6,
    category: 'Cultural',
    name: 'Cultural Heritage & Art Discovery',
    location: 'Egypt, Greece, Peru, Italy',
    price: 18500,
    duration: '8-12 days',
    capacity: '2-12 guests',
    image: '/cultural-tour.jpg',
    rating: 4.93,
    description: 'Dive deep into world history and art. Private museum access, exclusive archaeological site tours, meetings with historians and artists, and immersive cultural experiences designed for discerning travelers.',
    inclusions: ['Private Museum Tours', 'Exclusive Site Access', 'Expert Historians', 'Artist Meetings', 'Luxury Accommodation', 'Gourmet Dining'],
    bestFor: ['History buffs', 'Art collectors', 'Cultural enthusiasts', 'Educational travelers'],
  },
  {
    id: 7,
    category: 'Safari',
    name: 'African Wildlife Safari Expedition',
    location: 'Kenya, Tanzania, South Africa',
    price: 22400,
    duration: '6-10 days',
    capacity: '2-8 guests',
    image: '/kenya-safari.jpg',
    rating: 4.94,
    description: 'Experience Africa\'s greatest wildlife from intimate luxury safari lodges. Expert trackers guide private game drives at dawn and dusk. Witness the great migration, encounter the Big Five, and connect with Maasai communities.',
    inclusions: ['Luxury Safari Lodge', 'Expert Guides', 'Private Game Drives', 'Maasai Village Visits', 'Photography Support', 'Bush Dinners'],
    bestFor: ['Wildlife photographers', 'Nature lovers', 'Adventure families', 'Conservation enthusiasts'],
  },
  {
    id: 8,
    category: 'Luxury',
    name: 'Private Island Resort Escape',
    location: 'Maldives, Caribbean, Polynesia',
    price: 31200,
    duration: '5-7 days',
    capacity: '2-4 guests',
    image: '/maldives.jpg',
    rating: 4.99,
    description: 'Exclusive access to private island resorts with overwater bungalows, pristine beaches, and turquoise lagoons. Personalized service, water activities, and romantic settings perfect for honeymoons and anniversaries.',
    inclusions: ['Private Overwater Villa', 'All-Inclusive Dining', 'Water Sports', 'Private Spa', 'Beach Picnics', 'Sunset Cruises'],
    bestFor: ['Honeymooners', 'Romantic getaways', 'Anniversaries', 'Exclusive couples'],
  },
]

export default function ExperiencesPage() {
  const handleBooking = (name: string, price: number) => {
    window.location.href = `/contact?package=${encodeURIComponent(name)}&price=${price}`
  }

  const categories = ['All', ...Array.from(new Set(experiences.map(e => e.category)))]

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
            <Link href="/experiences" className="text-sm font-medium text-amber-600">
              Experiences
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
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
        badge="CURATED WORLD-CLASS EXPERIENCES"
        title="Unforgettable"
        subtitle="moments await"
        description="From maritime adventures and private aviation to wellness retreats and cultural immersion, our curated experiences are meticulously planned and expertly executed for discerning travelers."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Explore Experiences',
          href: '#experiences',
        }}
        secondaryCTA={{
          text: 'Custom Experience',
          href: '/contact',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: '40+', label: 'Unique Experiences' },
          { value: '5K+', label: 'Travelers Served' },
          { value: '99%', label: 'Satisfaction' },
        ]}
      />

      {/* Experiences Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                <div className="relative h-64 w-full">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow text-sm font-semibold text-amber-600">
                    {exp.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow flex items-center gap-1">
                    <Star size={16} className="fill-amber-500 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-900">{exp.rating}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{exp.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <MapPin size={18} className="text-amber-600" />
                    <span className="font-medium">{exp.location}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Duration</p>
                      <p className="text-lg font-bold text-gray-900">{exp.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Capacity</p>
                      <p className="text-lg font-bold text-gray-900">{exp.capacity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Price</p>
                      <p className="text-lg font-bold text-amber-600">${exp.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-900 mb-3 uppercase">Inclusions</p>
                    <ul className="space-y-2">
                      {exp.inclusions.slice(0, 4).map((inclusion, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-amber-600 mt-1">✓</span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm font-bold text-gray-900 mb-3 uppercase">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.bestFor.map((item, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBooking(exp.name, exp.price)}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2"
                  >
                    Inquire Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Customize Your Perfect Experience</h2>
          <p className="text-lg mb-8 opacity-90">Can&apos;t find exactly what you&apos;re looking for? Our experts can create a bespoke experience tailored to your vision.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Create Custom Experience
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
                <li><Link href="/experiences" className="hover:text-amber-500 transition">Experiences</Link></li>
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
