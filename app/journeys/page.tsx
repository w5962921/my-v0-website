'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, ChevronRight, MapPin, Users, DollarSign, Clock } from 'lucide-react'
import AnimatedHero from '@/components/animated-hero'

export default function Journeys() {
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [selectedDuration, setSelectedDuration] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const journeys = [
    {
      id: 1,
      title: 'The Art of Living: Renaissance Italy',
      subtitle: 'Discovering Masterpieces, Culture, and Timeless Elegance',
      description: 'Immerse yourself in the world of Renaissance masters across Florence, Venice, and the Amalfi Coast. This curated journey takes you beyond the guidebook—exclusive access to private art collections, intimate meals with Italian historians, and evenings in centuries-old villas overlooking the Mediterranean.',
      region: 'Europe',
      duration: 12,
      price: 24500,
      guests: '2-6',
      image: '/api/placeholder/800/500',
      highlights: ['Private museum access', 'Michelin-starred dining', 'Villa stays', 'Art historian guides'],
      bestFor: 'Art enthusiasts, cultural travelers'
    },
    {
      id: 2,
      title: 'Untouched Wilderness: Arctic Expedition',
      subtitle: 'Northern Lights, Indigenous Culture, and Pristine Landscapes',
      description: 'Journey to the edge of the world. Experience the raw beauty of Norwegian Lapland, where the Northern Lights dance above untouched Arctic tundra. Stay in luxury lodges, meet Sámi herders, and witness Earth\'s most profound natural phenomena.',
      region: 'Arctic',
      duration: 10,
      price: 18900,
      guests: '4-8',
      image: '/api/placeholder/800/500',
      highlights: ['Northern Lights viewing', 'Sámi cultural immersion', 'Luxury Arctic lodges', 'Expert naturalists'],
      bestFor: 'Adventure seekers, nature lovers'
    },
    {
      id: 3,
      title: 'Sacred Journeys: Ancient Asia Unveiled',
      subtitle: 'Spirituality, Temples, and Transformative Experiences',
      description: 'From the misty mountains of Tibet to the sacred temples of Kyoto, this transformative journey connects you with Asia\'s spiritual heart. Private meditation sessions with monks, sunrise ceremonies at ancient temples, and encounters with master craftspeople.',
      region: 'Asia',
      duration: 16,
      price: 28750,
      guests: '2-4',
      image: '/api/placeholder/800/500',
      highlights: ['Temple stays', 'Meditation training', 'Craftspeople meetings', 'Private ceremonies'],
      bestFor: 'Spiritual travelers, seekers'
    },
    {
      id: 4,
      title: 'Serengeti Serene: African Safari Luxury',
      subtitle: 'Wildlife, Conservation, and the Rhythm of the Savanna',
      description: 'Experience Africa\'s greatest wilderness from intimate, all-inclusive safari camps. Expert trackers, private vehicle expeditions, encounters with indigenous Maasai communities, and conservation-focused experiences. Witness the great migration.',
      region: 'Africa',
      duration: 8,
      price: 16200,
      guests: '2-8',
      image: '/api/placeholder/800/500',
      highlights: ['Game drives', 'Big Five encounters', 'Maasai villages', 'Conservation projects'],
      bestFor: 'Wildlife enthusiasts, families'
    },
    {
      id: 5,
      title: 'Patagonia Unveiled: Southern Hemisphere Adventure',
      subtitle: 'Glaciers, Mountains, and Wild Landscapes',
      description: 'Explore the dramatic landscapes of Chilean and Argentine Patagonia. Hike ancient glaciers, kayak pristine fjords, stay in secluded lodges with panoramic views, and experience authentic Patagonian hospitality. Unforgettable mountain vistas at every turn.',
      region: 'South America',
      duration: 11,
      price: 19900,
      guests: '2-6',
      image: '/api/placeholder/800/500',
      highlights: ['Glacier trekking', 'Fjord kayaking', 'Mountain lodges', 'Wildlife viewing'],
      bestFor: 'Adventurers, photography enthusiasts'
    },
    {
      id: 6,
      title: 'Maldives Escape: Tropical Paradise Perfection',
      subtitle: 'Crystal Waters, Coral Reefs, and Overwater Luxury',
      description: 'Retreat to exclusive overwater villas surrounded by turquoise waters and vibrant coral gardens. Experience world-class diving, spa treatments on private decks, sunset cruises, and culinary dining under the stars. Ultimate tropical indulgence.',
      region: 'Indian Ocean',
      duration: 7,
      price: 22000,
      guests: '2-4',
      image: '/api/placeholder/800/500',
      highlights: ['Overwater villas', 'Diving expeditions', 'Spa experiences', 'Private cruises'],
      bestFor: 'Couples, honeymooners, relaxation seekers'
    },
    {
      id: 7,
      title: 'Morocco Mystique: Ancient Cultures & Desert Magic',
      subtitle: 'Medinas, Mountains, and Sahara Sunsets',
      description: 'Discover Morocco\'s enchanting blend of ancient tradition and natural beauty. Explore labyrinthine medinas, trek the Atlas Mountains, experience Sahara Desert camps under star-filled skies, and dine with local families. A sensory awakening.',
      region: 'Africa',
      duration: 9,
      price: 15800,
      guests: '2-8',
      image: '/api/placeholder/800/500',
      highlights: ['Medina tours', 'Mountain trekking', 'Desert camps', 'Local dining'],
      bestFor: 'Cultural explorers, food enthusiasts'
    },
    {
      id: 8,
      title: 'Swiss Alps Luxury: Alpine Excellence',
      subtitle: 'Mountains, Wellness, and European Sophistication',
      description: 'Stay in the most exclusive alpine resorts while exploring Switzerland\'s world-renowned landscapes. Private ski lessons, mountain biking expeditions, spa treatments with Alpine views, and Michelin-starred dining in mountain chalets.',
      region: 'Europe',
      duration: 10,
      price: 21500,
      guests: '2-8',
      image: '/api/placeholder/800/500',
      highlights: ['Ski access', 'Mountain biking', 'Spa facilities', 'Fine dining'],
      bestFor: 'Sports enthusiasts, luxury seekers'
    }
  ]

  const regions = ['All', 'Europe', 'Asia', 'Africa', 'South America', 'Arctic', 'Indian Ocean']
  const durations = ['All', '7-10 nights', '11-14 nights', '15+ nights']

  const filteredJourneys = journeys.filter(journey => {
    const regionMatch = selectedRegion === 'All' || journey.region === selectedRegion
    const durationMatch = selectedDuration === 'All' || 
      (selectedDuration === '7-10 nights' && journey.duration >= 7 && journey.duration <= 10) ||
      (selectedDuration === '11-14 nights' && journey.duration >= 11 && journey.duration <= 14) ||
      (selectedDuration === '15+ nights' && journey.duration >= 15)
    const searchMatch = journey.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journey.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    
    return regionMatch && durationMatch && searchMatch
  })

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <AnimatedHero
        badge="CURATED JOURNEYS WORLDWIDE"
        title="Our Journeys"
        subtitle="handpicked experiences"
        description="Explore our collection of meticulously curated journeys across the world's most remarkable destinations. From Arctic expeditions to tropical escapes, each journey is crafted for transformative travel experiences."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Explore Journeys',
          href: '#journeys',
        }}
        secondaryCTA={{
          text: 'Customize Journey',
          href: '/contact',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: '10+', label: 'Featured Journeys' },
          { value: '50+', label: 'Destinations' },
          { value: '7-16', label: 'Days per Journey' },
        ]}
      />

      {/* Search & Filter */}
      <section className="sticky top-20 bg-black/95 backdrop-blur border-b border-amber-700/30 py-6 px-6 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search size={20} className="absolute left-4 top-3.5 text-amber-600" />
            <input
              type="text"
              placeholder="Search journeys..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-amber-700/30 rounded-sm pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm uppercase text-gray-500 font-semibold tracking-widest block mb-3">Region</label>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-sm text-sm font-medium transition ${
                      selectedRegion === region
                        ? 'bg-amber-600 text-black'
                        : 'bg-gray-900 text-gray-300 hover:border-amber-600/60 border border-amber-700/30'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 font-semibold tracking-widest block mb-3">Duration</label>
              <div className="flex flex-wrap gap-2">
                {durations.map(duration => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`px-4 py-2 rounded-sm text-sm font-medium transition ${
                      selectedDuration === duration
                        ? 'bg-amber-600 text-black'
                        : 'bg-gray-900 text-gray-300 hover:border-amber-600/60 border border-amber-700/30'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journeys Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredJourneys.length > 0 ? (
            <>
              <p className="text-gray-400 font-light mb-8">{filteredJourneys.length} journey{filteredJourneys.length !== 1 ? 's' : ''} found</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJourneys.map(journey => (
                  <div key={journey.id} className="group border border-amber-700/30 rounded-sm overflow-hidden hover:border-amber-600/60 transition">
                    <div className="bg-gray-900 h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-700">
                        [Featured Image: {journey.title}]
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="mb-4">
                        <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">{journey.region}</span>
                        <h3 className="text-2xl font-serif font-bold mt-2 mb-1">{journey.title}</h3>
                        <p className="text-gray-400 text-sm font-light italic">{journey.subtitle}</p>
                      </div>

                      <p className="text-gray-300 font-light leading-relaxed mb-6 line-clamp-2">{journey.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-t border-b border-amber-700/20">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-amber-600" />
                          <span className="text-gray-300">{journey.duration} nights</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users size={16} className="text-amber-600" />
                          <span className="text-gray-300">{journey.guests} guests</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-sm">
                          <DollarSign size={16} className="text-amber-600" />
                          <span className="text-gray-300 font-semibold">${journey.price.toLocaleString()} per person</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-3">Highlights</p>
                        <div className="flex flex-wrap gap-2">
                          {journey.highlights.map((highlight, i) => (
                            <span key={i} className="text-xs bg-amber-600/10 text-amber-300 px-3 py-1 rounded-full border border-amber-700/30">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6 pt-4 border-t border-amber-700/20">
                        <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-2">Best For</p>
                        <p className="text-sm text-gray-300">{journey.bestFor}</p>
                      </div>

                      <Link href={`/journeys/${journey.id}`} className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 transition font-semibold text-sm group/btn">
                        View Full Itinerary
                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-light">No journeys match your criteria. Please adjust your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-amber-700/30 bg-gradient-to-b from-black to-amber-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-300 font-light mb-6">Our specialists can design a custom journey tailored to your specific interests and preferences.</p>
          <Link href="/contact" className="inline-block bg-amber-600 text-black px-8 py-3 rounded-sm hover:bg-amber-500 transition font-semibold">
            Design Custom Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
