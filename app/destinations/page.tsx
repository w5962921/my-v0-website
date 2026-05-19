'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Star, ArrowRight, Thermometer, Utensils, Hotel } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

const allDestinations = [
  {
    id: 1,
    name: 'Florida Keys',
    region: 'USA - Southeast',
    image: '/maldives.jpg',
    rating: 4.9,
    duration: '5-7 days',
    description: 'Tropical paradise with overwater bungalows, world‑class diving, and pristine white‑sand beaches. Crystal‑clear waters, vibrant coral reefs, and exclusive island resorts define this ultimate luxury destination in the Florida Keys.',
    highlights: ['Overwater Bungalows', 'Snorkeling & Diving', 'Private Island Access', 'Sunset Cruises', 'Water Sports', 'Spa & Wellness'],
    bestFor: ['Honeymoons', 'Couples', 'Beach lovers', 'Divers'],
    climate: 'Tropical, 25-32°C year-round',
    cuisine: 'Seafood, Floribbean, International fusion',
    accommodation: '5‑star luxury resorts with private villas',
  },
  {
    id: 2,
    name: 'Colorado Rockies',
    region: 'USA - West',
    image: '/swiss-alps-luxury.jpg',
    rating: 4.95,
    duration: '6-8 days',
    description: 'Snow‑capped peaks, luxury alpine lodges, and world‑class skiing in the heart of the Rocky Mountains. Experience breathtaking mountain vistas, charming towns like Aspen and Vail, and Michelin‑starred dining in a pristine alpine setting.',
    highlights: ['Luxury Lodges', 'Skiing & Snowboarding', 'Mountain Hiking', 'Hot Springs', 'Fine Dining', 'Wine Tasting'],
    bestFor: ['Skiers', 'Mountain lovers', 'Adventure seekers', 'Foodies'],
    climate: 'Alpine, -5 to 25°C depending on season',
    cuisine: 'American, Southwestern, European‑inspired',
    accommodation: '5‑star mountain resorts and private lodges',
  },
  {
    id: 3,
    name: 'Yellowstone & Grand Teton',
    region: 'USA - West',
    image: '/kenya-safari-luxury.jpg',
    rating: 4.92,
    duration: '5-8 days',
    description: 'World‑renowned wildlife and geothermal wonders in Wyoming and Montana. Experience the American bison, elk, bears, and wolves, plus Old Faithful and the Grand Prismatic Spring. Stay in luxury conservation lodges.',
    highlights: ['Wildlife Safaris', 'Geothermal Features', 'Scenic Drives', 'Luxury Lodges', 'Photography Tours', 'Hiking'],
    bestFor: ['Wildlife enthusiasts', 'Photographers', 'Families', 'Adventure travelers'],
    climate: 'Mountainous, 0-25°C, cool nights',
    cuisine: 'Western, game meats, local produce',
    accommodation: 'Luxury eco‑lodges and ranch stays',
  },
  {
    id: 4,
    name: 'California Coast',
    region: 'USA - West',
    image: '/french-riviera-luxury.jpg',
    rating: 4.96,
    duration: '6-9 days',
    description: 'From Big Sur to Malibu, experience California glamour with exclusive yacht charters, Michelin‑starred restaurants, and private beach clubs. Enjoy the iconic Pacific Coast Highway and Mediterranean elegance of Santa Barbara and Monterey.',
    highlights: ['Pacific Coast Highway', 'Michelin‑Starred Dining', 'Private Beach Clubs', 'Wine Tasting', 'Surfing Lessons', 'Luxury Spas'],
    bestFor: ['Luxury seekers', 'Foodies', 'Road trip enthusiasts', 'Romantic getaways'],
    climate: 'Mediterranean, 10-28°C',
    cuisine: 'Californian, farm‑to‑table, seafood',
    accommodation: '5‑star beachfront hotels and luxury villas',
  },
  {
    id: 5,
    name: 'Alaska: Kenai Fjords',
    region: 'USA - West',
    image: '/iceland-luxury.jpg',
    rating: 4.88,
    duration: '7-10 days',
    description: 'Land of glaciers and wildlife. Experience stunning fjords, humpback whales, sea otters, and the magical Northern Lights in luxury Alaskan retreats. Heli‑hiking, glacier cruises, and exclusive lodges.',
    highlights: ['Glacier Cruises', 'Wildlife Viewing', 'Heli‑Hiking', 'Luxury Lodges', 'Whale Watching', 'Northern Lights (winter)'],
    bestFor: ['Adventure seekers', 'Nature lovers', 'Photographers', 'Couples'],
    climate: 'Cool, 0-15°C in summer, colder in winter',
    cuisine: 'Seafood, Alaskan salmon, game meats',
    accommodation: 'Luxury wilderness lodges',
  },
  {
    id: 6,
    name: 'Hawaii (Big Island)',
    region: 'USA - Pacific',
    image: '/japan-luxury.jpg',
    rating: 4.93,
    duration: '10-14 days',
    description: 'Volcanic landscapes, black‑sand beaches, and ancient Hawaiian culture. From the active Kīlauea volcano to luxury resorts on the Kohala Coast, experience the aloha spirit with exclusive helicopter tours and sacred sites.',
    highlights: ['Volcano Tours', 'Black‑Sand Beaches', 'Luaus', 'Helicopter Flights', 'Hiking to Waterfalls', 'Snorkeling with Manta Rays'],
    bestFor: ['Adventure travelers', 'Culture enthusiasts', 'Couples', 'Families'],
    climate: 'Tropical, 20-30°C',
    cuisine: 'Hawaiian, Pacific Rim, fresh poke',
    accommodation: 'Luxury resorts and private estates',
  },
  {
    id: 7,
    name: 'Montana: Glacier National Park',
    region: 'USA - West',
    image: '/patagonia-luxury.jpg',
    rating: 4.91,
    duration: '8-12 days',
    description: 'Dramatic mountain landscapes, pristine glacial lakes, and untamed wilderness. Hike the Going‑to‑the‑Sun Road, kayak on Lake McDonald, and stay in secluded mountain lodges with luxury amenities.',
    highlights: ['Glacier Hiking', 'Wildlife Viewing', 'Lake Kayaking', 'Luxury Lodges', 'Scenic Drives', 'Fly Fishing'],
    bestFor: ['Adventure seekers', 'Hikers', 'Photographers', 'Nature lovers'],
    climate: 'Cool, 8-20°C, snow possible',
    cuisine: 'Montana beef, wild game, artisan cheeses',
    accommodation: 'Luxury lodges and private cabins',
  },
  {
    id: 8,
    name: 'South Carolina Lowcountry',
    region: 'USA - Southeast',
    image: '/greece-luxury.jpg',
    rating: 4.94,
    duration: '7-10 days',
    description: 'Antebellum charm, coastal marshes, and Southern hospitality. Explore Charleston’s historic streets, take private yacht charters in the sea islands, and indulge in Gullah cuisine at exclusive plantations turned resorts.',
    highlights: ['Historical Plantations', 'Yacht Charters', 'Lowcountry Cuisine', 'Beach Clubs', 'Gullah Culture', 'Sunset Cruises'],
    bestFor: ['History buffs', 'Romantics', 'Foodies', 'Couples'],
    climate: 'Subtropical, 15-30°C',
    cuisine: 'Gullah, seafood, Southern comfort food',
    accommodation: 'Luxury inns, historic hotels, private estates',
  },
  {
    id: 9,
    name: 'Arizona: Grand Canyon & Sedona',
    region: 'USA - West',
    image: '/australia-luxury.jpg',
    rating: 4.87,
    duration: '12-15 days',
    description: 'From the majestic Grand Canyon to the red rocks of Sedona. Experience helicopter tours over the canyon, jeep adventures, vortex spiritual sites, and luxury desert resorts with world‑class spas.',
    highlights: ['Grand Canyon Helicopter', 'Sedona Red Rocks', 'Vortex Tours', 'Jeep Safaris', 'Wine Tasting', 'Luxury Spas'],
    bestFor: ['Adventure lovers', 'Spiritual seekers', 'Photographers', 'Families'],
    climate: 'Desert, 10-35°C',
    cuisine: 'Southwestern, Native American, Mexican',
    accommodation: 'Luxury resorts and canyon‑view lodges',
  },
  {
    id: 10,
    name: 'New Mexico: Santa Fe & Taos',
    region: 'USA - West',
    image: '/morocco-luxury.jpg',
    rating: 4.89,
    duration: '6-9 days',
    description: 'Ancient Puebloan culture, adobe architecture, and high desert beauty. Explore Santa Fe’s art galleries, Taos Pueblo, and take hot air balloon rides over the Rio Grande. Stay in luxury inns with Southwestern flair.',
    highlights: ['Art Galleries', 'Pueblo Tours', 'Hot Air Balloons', 'Adobe Architecture', 'Native American Culture', 'Spa Retreats'],
    bestFor: ['Cultural explorers', 'Art lovers', 'Adventurers', 'Romantics'],
    climate: 'High desert, 5-30°C',
    cuisine: 'New Mexican, Native American, fusion',
    accommodation: 'Luxury adobe resorts and boutique inns',
  },
  {
    id: 11,
    name: 'Utah: Moab & Arches',
    region: 'USA - West',
    image: '/kenya-safari.jpg',
    rating: 4.90,
    duration: '7-10 days',
    description: 'Red rock landscapes, arches, and canyons. Hike to Delicate Arch, off‑road in a Hummer, and float the Colorado River. Stay in luxury glamping tents or high‑end lodges near Canyonlands National Park.',
    highlights: ['Arches National Park', 'Off‑Roading', 'River Rafting', 'Luxury Glamping', 'Stargazing', 'Mountain Biking'],
    bestFor: ['Adventure enthusiasts', 'Nature lovers', 'Families', 'Solo travelers'],
    climate: 'Desert, 15-35°C',
    cuisine: 'Western, barbecue, farm‑to‑table',
    accommodation: 'Luxury glamping and high‑end lodges',
  },
  {
    id: 12,
    name: 'California: Big Sur & Monterey',
    region: 'USA - West',
    image: '/french-riviera.jpg',
    rating: 4.86,
    duration: '6-9 days',
    description: 'Dramatic coastline, redwood forests, and artistic communities. Drive Highway 1, visit the Monterey Bay Aquarium, hike in Pfeiffer Big Sur State Park, and stay in cliffside inns with ocean views.',
    highlights: ['Pacific Coast Highway', 'Monterey Aquarium', 'Redwood Hikes', 'Cliffside Inns', 'Art Galleries', 'Whale Watching'],
    bestFor: ['Romantic getaways', 'Art lovers', 'Nature seekers', 'Couples'],
    climate: 'Mediterranean, 10-25°C',
    cuisine: 'Seafood, farm‑to‑table, wine country',
    accommodation: 'Luxury inns and ocean‑view resorts',
  },
]

export default function DestinationsPage() {
  const [displayCount, setDisplayCount] = useState(4)
  const visibleDestinations = allDestinations.slice(0, displayCount)
  const hasMore = displayCount < allDestinations.length

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 4, allDestinations.length))
  }

  const handleBooking = (name: string) => {
    window.location.href = `/contact?package=${encodeURIComponent(name)}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">
            Parrotbeach
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
        badge="EXPLORE AMERICA'S FINEST DESTINATIONS"
        title="Luxury Destinations"
        subtitle="across the USA"
        description={`Discover ${allDestinations.length}+ of the most exclusive and coveted travel destinations in the United States. Each carefully curated for its unique offerings, cultural richness, and unparalleled luxury experiences.`}
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
          { value: '50+', label: 'USA Destinations' },
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
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">Duration</p>
                      <p className="text-lg font-bold text-gray-900">{dest.duration}</p>
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
                    onClick={() => handleBooking(dest.name)}
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
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Explore America?</h2>
          <p className="text-lg mb-8 opacity-90">Connect with our luxury travel consultants to plan your perfect USA getaway.</p>
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
            <div>
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">Parrotbeach</h3>
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
            <p>&copy; 2024 Parrotbeach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}