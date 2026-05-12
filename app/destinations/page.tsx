'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MapPin, Star, Users2, DollarSign, ArrowRight, Thermometer, Utensils, Hotel } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

const allDestinations = [
  {
    id: 1,
    name: 'Maldives',
    region: 'Asia-Pacific',
    image: '/maldives.jpg',
    rating: 4.9,
    price: 'From $8,500',
    duration: '5-7 days',
    description: 'Tropical paradise with overwater bungalows, world-class diving, and pristine white-sand beaches. Crystal-clear lagoons, vibrant coral reefs, and exclusive island resorts define this ultimate luxury destination.',
    highlights: ['Overwater Bungalows', 'Snorkeling & Diving', 'Private Island Access', 'Sunset Cruises', 'Water Sports', 'Spa & Wellness'],
    bestFor: ['Honeymoons', 'Couples', 'Beach lovers', 'Divers'],
    climate: 'Tropical, 28-32°C year-round',
    cuisine: 'Indian, Asian, International fusion',
    accommodation: '5-star luxury resorts with private villas',
  },
  {
    id: 2,
    name: 'Swiss Alps',
    region: 'Europe',
    image: '/swiss-alps-luxury.jpg',
    rating: 4.95,
    price: 'From $10,500',
    duration: '6-8 days',
    description: 'Snow-capped peaks, luxury alpine chalets, and world-class skiing. Experience breathtaking mountain vistas, charming Swiss villages, and Michelin-starred dining in a pristine alpine setting.',
    highlights: ['Luxury Chalets', 'Skiing & Snowboarding', 'Mountain Hiking', 'Spa Treatments', 'Fine Dining', 'Wine Tasting'],
    bestFor: ['Skiers', 'Mountain lovers', 'Adventure seekers', 'Foodies'],
    climate: 'Alpine, -5 to 15°C depending on season',
    cuisine: 'Swiss, French, Italian regional specialties',
    accommodation: '5-star mountain resorts and private chalets',
  },
  {
    id: 3,
    name: 'Kenya',
    region: 'Africa',
    image: '/kenya-safari-luxury.jpg',
    rating: 4.92,
    price: 'From $7,500',
    duration: '5-8 days',
    description: 'World-renowned safari destination featuring the Masai Mara, the Big Five, and the annual great migration. Experience authentic African wildlife, Maasai culture, and luxury conservation lodges.',
    highlights: ['Game Drives', 'Big Five Encounters', 'Maasai Villages', 'Bush Dinners', 'Wildlife Photography', 'Conservation Projects'],
    bestFor: ['Wildlife enthusiasts', 'Photographers', 'Families', 'Adventure travelers'],
    climate: 'Tropical savanna, 15-28°C',
    cuisine: 'East African, Maasai specialties, International',
    accommodation: 'Luxury safari lodges and tented camps',
  },
  {
    id: 4,
    name: 'French Riviera',
    region: 'Europe',
    image: '/french-riviera-luxury.jpg',
    rating: 4.96,
    price: 'From $11,500',
    duration: '6-9 days',
    description: 'Côte d\'Azur glamour with exclusive yacht charters, Michelin-starred restaurants, and private beach clubs. Experience Mediterranean elegance from Cannes to Monaco.',
    highlights: ['Yacht Charter', 'Michelin-Starred Dining', 'Exclusive Beach Clubs', 'Monaco Visit', 'Wine Tasting', 'Fashion District'],
    bestFor: ['Luxury seekers', 'Foodies', 'Yacht enthusiasts', 'Romantic getaways'],
    climate: 'Mediterranean, 10-28°C',
    cuisine: 'Provençal French, Mediterranean, seafood',
    accommodation: '5-star beachfront hotels and luxury villas',
  },
  {
    id: 5,
    name: 'Iceland',
    region: 'Europe',
    image: '/iceland-luxury.jpg',
    rating: 4.88,
    price: 'From $9,200',
    duration: '7-10 days',
    description: 'Land of fire and ice with otherworldly landscapes. Experience stunning waterfalls, geothermal hot springs, black sand beaches, and the magical Northern Lights in luxury Icelandic retreats.',
    highlights: ['Golden Circle', 'Northern Lights', 'Blue Lagoon', 'Glacier Hiking', 'Waterfall Tours', 'Luxury Lodges'],
    bestFor: ['Adventure seekers', 'Nature lovers', 'Photographers', 'Couples'],
    climate: 'Cool, 0-5°C in winter, 10-15°C in summer',
    cuisine: 'Arctic seafood, Icelandic lamb, Nordic cuisine',
    accommodation: 'Luxury eco-lodges and unique stays',
  },
  {
    id: 6,
    name: 'Japan',
    region: 'Asia-Pacific',
    image: '/japan-luxury.jpg',
    rating: 4.93,
    price: 'From $8,900',
    duration: '10-14 days',
    description: 'Ancient temples, cutting-edge cities, and breathtaking natural beauty. From Kyoto\'s geisha districts to Tokyo\'s innovation, experience the perfect blend of tradition and modernity in Japan\'s luxury experiences.',
    highlights: ['Temple Stays', 'Geisha Districts', 'Mount Fuji Views', 'Tea Ceremonies', 'Zen Gardens', 'Michelin Dining'],
    bestFor: ['Culture enthusiasts', 'Adventure travelers', 'Foodies', 'Art lovers'],
    climate: 'Temperate, varies by region',
    cuisine: 'Japanese haute cuisine, regional specialties, kaiseki',
    accommodation: 'Traditional ryokans and modern luxury hotels',
  },
  {
    id: 7,
    name: 'Patagonia',
    region: 'South America',
    image: '/patagonia-luxury.jpg',
    rating: 4.91,
    price: 'From $10,200',
    duration: '8-12 days',
    description: 'Southern Hemisphere\'s most dramatic landscapes featuring towering granite peaks, pristine glaciers, and untamed wilderness. Hike ancient ice fields and kayak fjords in secluded mountain lodges.',
    highlights: ['Glacier Trekking', 'Monte Fitz Roy', 'Fjord Kayaking', 'Wildlife Viewing', 'Mountain Hiking', 'Estancia Stays'],
    bestFor: ['Adventure seekers', 'Hikers', 'Photographers', 'Nature lovers'],
    climate: 'Cool, 8-15°C, windy conditions',
    cuisine: 'Argentine beef, Patagonian lamb, local fish',
    accommodation: 'Luxury lodges and estancias',
  },
  {
    id: 8,
    name: 'Greece',
    region: 'Europe',
    image: '/greece-luxury.jpg',
    rating: 4.94,
    price: 'From $7,800',
    duration: '7-10 days',
    description: 'Mediterranean islands with ancient history and pristine beaches. Explore Santorini\'s sunset views, Mykonos\' vibrant nightlife, and the Aegean\'s hidden islands with exclusive yacht charters and private villas.',
    highlights: ['Island Hopping', 'Yacht Charters', 'Ancient Ruins', 'Wine Tasting', 'Beach Clubs', 'Sunset Views'],
    bestFor: ['Couples', 'Yacht enthusiasts', 'History buffs', 'Romantics'],
    climate: 'Mediterranean, 20-28°C in summer',
    cuisine: 'Greek Mediterranean, fresh seafood, local wines',
    accommodation: 'Luxury island villas and boutique hotels',
  },
  {
    id: 9,
    name: 'Australia',
    region: 'Asia-Pacific',
    image: '/australia-luxury.jpg',
    rating: 4.87,
    price: 'From $12,500',
    duration: '12-15 days',
    description: 'From the Great Barrier Reef to the Outback. Experience world-class diving, Aboriginal culture, luxury Australian wine regions, and urban sophistication in Sydney and Melbourne.',
    highlights: ['Great Barrier Reef', 'Outback Safari', 'Aboriginal Culture', 'Wine Country', 'Sydney Opera House', 'Beach Clubs'],
    bestFor: ['Adventure lovers', 'Divers', 'Culture seekers', 'Families'],
    climate: 'Varies, 15-25°C in most regions',
    cuisine: 'Modern Australian, Asian fusion, local wines',
    accommodation: 'Luxury resorts and boutique hotels',
  },
  {
    id: 10,
    name: 'Morocco',
    region: 'Africa',
    image: '/morocco-luxury.jpg',
    rating: 4.89,
    price: 'From $6,500',
    duration: '6-9 days',
    description: 'Ancient medinas, Sahara desert camps, and Atlas Mountains. Immerse yourself in Berber culture, indulge in hammams, and experience authentic Moroccan hospitality in luxury riads and desert camps.',
    highlights: ['Sahara Camps', 'Atlas Mountains', 'Medina Markets', 'Hammams', 'Berber Culture', 'Camel Trekking'],
    bestFor: ['Cultural explorers', 'Adventurers', 'Desert enthusiasts', 'Romantics'],
    climate: 'Desert, 15-30°C depending on season',
    cuisine: 'Moroccan tagines, couscous, mint tea culture',
    accommodation: 'Luxury riads and Sahara desert camps',
  },
  {
    id: 11,
    name: 'Egypt',
    region: 'Africa',
    image: '/kenya-safari.jpg',
    rating: 4.90,
    price: 'From $8,200',
    duration: '7-10 days',
    description: 'Land of pharaohs and timeless wonders. Explore the Pyramids, cruise the Nile River, visit temples of Luxor, and experience ancient Egyptian culture from luxury cruise ships and exclusive resort stays.',
    highlights: ['Pyramids & Sphinx', 'Nile Cruise', 'Luxor Temples', 'Cairo Museum', 'Aswan Beauty', 'Hot Air Balloons'],
    bestFor: ['History enthusiasts', 'Luxury travelers', 'Adventurers', 'Culture lovers'],
    climate: 'Desert, 20-35°C, minimal rainfall',
    cuisine: 'Egyptian specialties, Mediterranean influence, Nile dining',
    accommodation: 'Luxury Nile cruises and resort hotels',
  },
  {
    id: 12,
    name: 'Bali',
    region: 'Asia-Pacific',
    image: '/french-riviera.jpg',
    rating: 4.86,
    price: 'From $5,800',
    duration: '6-9 days',
    description: 'Tropical island blending spirituality, culture, and beach luxury. Experience Balinese temples, terraced rice paddies, world-class spas, and world-class beaches with boutique villas and exclusive resorts.',
    highlights: ['Temple Stays', 'Rice Terraces', 'Spa Retreats', 'Beach Clubs', 'Yoga & Wellness', 'Local Markets'],
    bestFor: ['Wellness seekers', 'Spiritual explorers', 'Couples', 'Families'],
    climate: 'Tropical, 26-30°C year-round',
    cuisine: 'Balinese, Indonesian, International fusion',
    accommodation: 'Luxury villas and boutique wellness resorts',
  },
]

export default function DestinationsPage() {
  const [displayCount, setDisplayCount] = useState(4)
  const visibleDestinations = allDestinations.slice(0, displayCount)
  const hasMore = displayCount < allDestinations.length

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 4, allDestinations.length))
  }

  const handleBooking = (name: string, price: string) => {
    window.location.href = `/contact?package=${encodeURIComponent(name)}&price=${price}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">
            GARYPARROTBEACH
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/destinations" className="text-sm font-medium text-amber-600">
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
            <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium hover:shadow-lg">
              Inquire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <AnimatedHero
        badge="EXPLORE WORLD-CLASS DESTINATIONS"
        title="Luxury Destinations"
        subtitle="around the globe"
        description={`Discover ${allDestinations.length}+ of the world's most exclusive and coveted travel destinations. Each carefully curated for its unique offerings, cultural richness, and unparalleled luxury experiences.`}
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Start Planning',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View Experiences',
          href: '/experiences',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: '50+', label: 'Global Destinations' },
          { value: '10K+', label: 'Happy Travelers' },
          { value: '98%', label: 'Satisfaction Rate' },
        ]}
      />

      {/* Destinations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {visibleDestinations.map((dest, idx) => (
              <div 
                key={dest.id} 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-b border-gray-200 pb-12 animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1 shadow flex items-center gap-1 group-hover:scale-110 transition-transform">
                      <Star size={16} className="fill-amber-500 text-amber-500" />
                      <span className="font-semibold text-gray-900">{dest.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <p className="text-amber-600 text-sm font-bold uppercase tracking-wider mb-2">{dest.region}</p>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors">{dest.name}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{dest.description}</p>
                  </div>

                  {/* Practical Info */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">Duration</p>
                      <p className="text-lg font-bold text-gray-900">{dest.duration}</p>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">Price Range</p>
                      <p className="text-lg font-bold text-amber-600">{dest.price}</p>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">Climate</p>
                      <div className="flex items-center gap-1">
                        <Thermometer size={16} className="text-amber-600" />
                        <p className="text-sm text-gray-900">{dest.climate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={18} className="text-amber-600" />
                        <p className="font-bold text-gray-900">Highlights</p>
                      </div>
                      <ul className="space-y-2">
                        {dest.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 hover:text-amber-600 transition-colors">✓ {highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Utensils size={18} className="text-amber-600" />
                        <p className="font-bold text-gray-900">Cuisine</p>
                      </div>
                      <p className="text-sm text-gray-600">{dest.cuisine}</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 font-bold mb-2 uppercase">Best For</p>
                        <div className="flex flex-wrap gap-1">
                          {dest.bestFor.map((item, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Hotel size={18} className="text-amber-600" />
                        <p className="font-bold text-gray-900">Accommodation</p>
                      </div>
                      <p className="text-sm text-gray-600">{dest.accommodation}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBooking(dest.name, dest.price)}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:scale-105 group"
                  >
                    Inquire About {dest.name} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-16 animate-fade-in-up">
              <button
                onClick={handleLoadMore}
                className="bg-amber-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Load More Destinations ({allDestinations.length - displayCount} remaining)
              </button>
            </div>
          )}

          {displayCount === allDestinations.length && displayCount > 4 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 font-semibold">All {allDestinations.length} destinations displayed</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg mb-8 opacity-90">Connect with our luxury travel consultants to plan your perfect destination getaway.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Plan Your Getaway
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fade-in-up">
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">GARYPARROTBEACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for discerning travelers.</p>
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
