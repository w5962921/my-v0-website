'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, MapPin, Users2, Clock, DollarSign, Filter, ChevronRight, Mountain, Utensils, Waves, Palette, Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import AnimatedHero from '@/components/animated-hero'

const getIconComponent = (iconType: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    mountain: <Mountain className="w-5 h-5" />,
    utensils: <Utensils className="w-5 h-5" />,
    wave: <Waves className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
  }
  return iconMap[iconType] || null
}

const serviceCategories = [
  {
    id: 'outdoor',
    name: 'Outdoor Adventures',
    icon: 'mountain',
    description: 'Thrilling experiences in nature',
  },
  {
    id: 'culinary',
    name: 'Culinary Experiences',
    icon: 'utensils',
    description: 'Gourmet dining and food tours',
  },
  {
    id: 'water',
    name: 'Water & Marine',
    icon: 'wave',
    description: 'Water-based activities and sailing',
  },
  {
    id: 'culture',
    name: 'Cultural & Heritage',
    icon: 'palette',
    description: 'Arts, history, and cultural immersion',
  },
  {
    id: 'wellness',
    name: 'Wellness & Spa',
    icon: 'heart',
    description: 'Relaxation and holistic wellness',
  },
  {
    id: 'luxury',
    name: 'Luxury Events',
    icon: 'sparkles',
    description: 'Exclusive celebrations and events',
  },
]

const allServices = [
  // Outdoor Adventures
  {
    category: 'outdoor',
    id: 1,
    name: 'Himalayan Mountain Trekking',
    image: '/hiking-expedition.jpg',
    price: 4500,
    duration: '12 days',
    groupSize: '2-8 guests',
    rating: 4.95,
    description: 'Expert-guided expedition through the world\'s most majestic mountains with luxury lodging and gourmet meals.',
    highlights: ['Professional mountain guides', 'High-altitude camping', 'Sunrise summit views', 'Porter support', 'Insurance included'],
    difficulty: 'Moderate-High',
  },
  {
    category: 'outdoor',
    id: 2,
    name: 'Hot Air Balloon Safari',
    image: '/hot-air-balloon.jpg',
    price: 3200,
    duration: '3 days',
    groupSize: '2-4 guests',
    rating: 4.98,
    description: 'Sunrise hot air balloon adventure over exotic landscapes with champagne breakfast and private game drives.',
    highlights: ['Sunrise flight', 'Champagne breakfast', 'Photography opportunities', 'Expert pilot', 'Scenic routes'],
    difficulty: 'Easy',
  },
  {
    category: 'outdoor',
    id: 3,
    name: 'Luxury Island Trekking',
    image: '/island-excursion.jpg',
    price: 2800,
    duration: '4 days',
    groupSize: '2-6 guests',
    rating: 4.92,
    description: 'Private island exploration with pristine beaches, jungle hikes, and beachfront luxury accommodation.',
    highlights: ['Private islands', 'Jungle trails', 'Beach dinners', 'Snorkeling', 'Personal concierge'],
    difficulty: 'Easy-Moderate',
  },
  {
    category: 'outdoor',
    id: 4,
    name: 'Waterfall Expedition & Canyoning',
    image: '/waterfall-adventure.jpg',
    price: 3500,
    duration: '5 days',
    groupSize: '2-8 guests',
    rating: 4.94,
    description: 'Adventure through cascading waterfalls with rappelling, swimming in natural pools, and jungle camping.',
    highlights: ['Rappelling expertise', 'Natural pools', 'Professional guides', 'Safety equipment', 'Luxury camps'],
    difficulty: 'Moderate',
  },
  {
    category: 'outdoor',
    id: 5,
    name: 'Private Yacht Island Hopping',
    image: '/luxury-yacht.jpg',
    price: 8500,
    duration: '7 days',
    groupSize: '2-10 guests',
    rating: 4.96,
    description: 'Exclusive yacht charter exploring secluded islands with gourmet onboard dining and water sports.',
    highlights: ['Luxury yacht', 'Private crew', 'Island stops', 'Water sports', 'Fine dining'],
    difficulty: 'Easy',
  },

  // Culinary Experiences
  {
    category: 'culinary',
    id: 6,
    name: 'Michelin-Star Culinary Tour',
    image: '/michelin-dining.jpg',
    price: 6500,
    duration: '6 days',
    groupSize: '2-6 guests',
    rating: 4.99,
    description: 'Gastronomic journey through Europe\'s finest Michelin-starred restaurants with wine pairings and chef meetings.',
    highlights: ['3 Michelin-star dinners', 'Chef masterclasses', 'Wine pairings', 'Market tours', 'Luxury hotels'],
    difficulty: 'Easy',
  },
  {
    category: 'culinary',
    id: 7,
    name: 'Luxury Cooking Masterclass',
    image: '/cooking-class.jpg',
    price: 2200,
    duration: '3 days',
    groupSize: '2-8 guests',
    rating: 4.91,
    description: 'Learn from world-renowned chefs in an exclusive villa with market visits and intimate dinners.',
    highlights: ['Chef instruction', 'Market selection', 'Ingredient sourcing', 'Wine selection', 'Dining experience'],
    difficulty: 'Easy',
  },
  {
    category: 'culinary',
    id: 8,
    name: 'Wine & Cheese Connoisseur',
    image: '/wine-tasting.jpg',
    price: 3800,
    duration: '4 days',
    groupSize: '2-6 guests',
    rating: 4.97,
    description: 'Premium wine tasting in world-renowned vineyards with cheese pairings and winery tours.',
    highlights: ['Vineyard visits', 'Wine tastings', 'Cheese pairings', 'Sommelier guidance', 'Villa stay'],
    difficulty: 'Easy',
  },
  {
    category: 'culinary',
    id: 9,
    name: 'Farm-to-Table Gourmet Experience',
    image: '/michelin-dining.jpg',
    price: 2500,
    duration: '3 days',
    groupSize: '2-8 guests',
    rating: 4.93,
    description: 'Sustainable luxury dining sourcing ingredients directly from organic farms and local artisans.',
    highlights: ['Farm visits', 'Local sourcing', 'Chef cooking', 'Organic produce', 'Rustic luxury'],
    difficulty: 'Easy',
  },
  {
    category: 'culinary',
    id: 10,
    name: 'Street Food Luxury Tour',
    image: '/carnival-celebration.jpg',
    price: 1800,
    duration: '2 days',
    groupSize: '2-6 guests',
    rating: 4.88,
    description: 'Curated street food experience in exotic markets with expert local guides and exclusive tastings.',
    highlights: ['Local guides', 'Market access', 'Exclusive tastings', 'Cultural immersion', 'Private transportation'],
    difficulty: 'Easy',
  },

  // Water & Marine
  {
    category: 'water',
    id: 11,
    name: 'World-Class Scuba Diving',
    image: '/scuba-diving.jpg',
    price: 4200,
    duration: '5 days',
    groupSize: '2-8 guests',
    rating: 4.96,
    description: 'Deep sea diving in pristine coral reefs with expert instructors and luxury resort accommodation.',
    highlights: ['Professional instructors', 'Coral reefs', 'Marine life', 'Safety certification', 'Equipment provided'],
    difficulty: 'Moderate',
  },
  {
    category: 'water',
    id: 12,
    name: 'Private Yacht Charter Luxury',
    image: '/luxury-yacht.jpg',
    price: 9800,
    duration: '7 days',
    groupSize: '2-12 guests',
    rating: 4.99,
    description: 'Ultra-luxury superyacht with professional crew, gourmet chef, and exclusive Mediterranean access.',
    highlights: ['Superyacht', 'Professional crew', 'Michelin chef', 'Water toys', 'Concierge service'],
    difficulty: 'Easy',
  },
  {
    category: 'water',
    id: 13,
    name: 'Luxury Fishing Expedition',
    image: '/scuba-diving.jpg',
    price: 3600,
    duration: '4 days',
    groupSize: '2-6 guests',
    rating: 4.91,
    description: 'Big game fishing in pristine waters with expert guides, luxury accommodations, and catch preparation.',
    highlights: ['Expert guides', 'Premium boats', 'Big game fishing', 'Conservation focus', 'Gourmet meals'],
    difficulty: 'Moderate',
  },
  {
    category: 'water',
    id: 14,
    name: 'Snorkeling in Paradise',
    image: '/island-excursion.jpg',
    price: 1900,
    duration: '3 days',
    groupSize: '2-8 guests',
    rating: 4.94,
    description: 'Guided snorkeling in crystalline waters with tropical marine life and island beach clubs.',
    highlights: ['Coral gardens', 'Marine life', 'Beach clubs', 'Private islands', 'Equipment included'],
    difficulty: 'Easy',
  },
  {
    category: 'water',
    id: 15,
    name: 'Sunset Catamaran Cruise',
    image: '/luxury-yacht.jpg',
    price: 1500,
    duration: '1 day',
    groupSize: '2-20 guests',
    rating: 4.89,
    description: 'Romantic sunset sail with premium cocktails, gourmet appetizers, and live entertainment.',
    highlights: ['Sunset sailing', 'Premium drinks', 'Gourmet appetizers', 'Live music', 'Photography'],
    difficulty: 'Easy',
  },

  // Cultural & Heritage
  {
    category: 'culture',
    id: 16,
    name: 'Art Museum Masterpiece Tour',
    image: '/art-museum-tour.jpg',
    price: 2800,
    duration: '3 days',
    groupSize: '2-8 guests',
    rating: 4.93,
    description: 'Exclusive guided tours of world\'s finest art museums with private viewings and art historian experts.',
    highlights: ['Expert guides', 'Private viewings', 'Art history lessons', 'Behind-the-scenes access', 'Luxury hotels'],
    difficulty: 'Easy',
  },
  {
    category: 'culture',
    id: 17,
    name: 'Cultural Heritage Walking Tour',
    image: '/group-tour.jpg',
    price: 1600,
    duration: '2 days',
    groupSize: '2-8 guests',
    rating: 4.90,
    description: 'Intimate small-group walking tours of historic cities with expert cultural commentators.',
    highlights: ['Expert guides', 'Small groups', 'Historic sites', 'Local stories', 'Luxury accommodations'],
    difficulty: 'Easy-Moderate',
  },
  {
    category: 'culture',
    id: 18,
    name: 'Archaeological Expedition',
    image: '/hiking-expedition.jpg',
    price: 5200,
    duration: '7 days',
    groupSize: '2-10 guests',
    rating: 4.95,
    description: 'Join archaeologists exploring ancient civilizations with hands-on digs and expert education.',
    highlights: ['Archaeological expertise', 'Excavation access', 'Educational seminars', 'Luxury camps', 'Artifact tours'],
    difficulty: 'Moderate',
  },
  {
    category: 'culture',
    id: 19,
    name: 'Festival & Carnival Experience',
    image: '/carnival-celebration.jpg',
    price: 3400,
    duration: '4 days',
    groupSize: '2-8 guests',
    rating: 4.94,
    description: 'VIP access to world-famous festivals and carnivals with exclusive seating and local immersion.',
    highlights: ['VIP seating', 'Exclusive access', 'Local guides', 'Cultural shows', 'Luxury accommodations'],
    difficulty: 'Easy',
  },
  {
    category: 'culture',
    id: 20,
    name: 'Spiritual & Sacred Journey',
    image: '/wellness-retreat.jpg',
    price: 3100,
    duration: '5 days',
    groupSize: '2-6 guests',
    rating: 4.92,
    description: 'Pilgrimage to sacred sites with meditation, spiritual teachings, and mindfulness retreats.',
    highlights: ['Spiritual guidance', 'Sacred sites', 'Meditation', 'Yoga practices', 'Holistic wellness'],
    difficulty: 'Easy-Moderate',
  },

  // Wellness & Spa
  {
    category: 'wellness',
    id: 21,
    name: 'Luxury Spa & Wellness Retreat',
    image: '/wellness-retreat.jpg',
    price: 4800,
    duration: '6 days',
    groupSize: '2-8 guests',
    rating: 4.97,
    description: 'Comprehensive wellness program with spa treatments, yoga, healthy cuisine, and holistic healing.',
    highlights: ['World-class spa', 'Yoga instruction', 'Healthy cuisine', 'Holistic therapies', 'Wellness consultations'],
    difficulty: 'Easy',
  },
  {
    category: 'wellness',
    id: 22,
    name: 'Yoga & Meditation Retreat',
    image: '/wellness-retreat.jpg',
    price: 2400,
    duration: '4 days',
    groupSize: '2-12 guests',
    rating: 4.94,
    description: 'Transformative yoga and meditation retreat in serene natural settings with expert instructors.',
    highlights: ['Expert teachers', 'Daily yoga sessions', 'Meditation', 'Organic meals', 'Natural settings'],
    difficulty: 'Easy',
  },
  {
    category: 'wellness',
    id: 23,
    name: 'Detox & Rejuvenation Program',
    image: '/luxury-spa.jpg',
    price: 3600,
    duration: '5 days',
    groupSize: '2-8 guests',
    rating: 4.91,
    description: 'Comprehensive detoxification and rejuvenation with medical supervision and holistic treatments.',
    highlights: ['Medical supervision', 'Detox programs', 'Spa treatments', 'Nutritional counseling', 'Monitoring'],
    difficulty: 'Easy',
  },
  {
    category: 'wellness',
    id: 24,
    name: 'Adventure Fitness Retreat',
    image: '/hiking-expedition.jpg',
    price: 3200,
    duration: '5 days',
    groupSize: '2-8 guests',
    rating: 4.88,
    description: 'Active wellness combining adventure activities with fitness training and healthy lifestyle coaching.',
    highlights: ['Fitness training', 'Adventure activities', 'Nutrition coaching', 'Wellness consultants', 'Group motivation'],
    difficulty: 'Moderate',
  },
  {
    category: 'wellness',
    id: 25,
    name: 'Couples Romantic Spa Escape',
    image: '/luxury-spa.jpg',
    price: 2800,
    duration: '3 days',
    groupSize: '2 guests',
    rating: 4.96,
    description: 'Romantic couples spa experience with private treatments, dinners, and intimate wellness activities.',
    highlights: ['Couples treatments', 'Private dinners', 'Romantic ambiance', 'Spa services', 'Luxury suites'],
    difficulty: 'Easy',
  },

  // Luxury Events
  {
    category: 'luxury',
    id: 26,
    name: 'Exclusive Private Gala Dinner',
    image: '/michelin-dining.jpg',
    price: 5500,
    duration: '1 evening',
    groupSize: '2-50 guests',
    rating: 4.98,
    description: 'Custom-designed gala dinner with Michelin-starred chef, entertainment, and venue of choice.',
    highlights: ['Michelin chef', 'Custom menu', 'Premium entertainment', 'Venue selection', 'Full planning'],
    difficulty: 'Easy',
  },
  {
    category: 'luxury',
    id: 27,
    name: 'Luxury Wedding Destination',
    image: '/island-excursion.jpg',
    price: 25000,
    duration: '3-7 days',
    groupSize: '2-200 guests',
    rating: 4.99,
    description: 'Complete wedding planning for exotic destination weddings with luxury accommodations for all guests.',
    highlights: ['Complete planning', 'Exotic venues', 'Guest accommodations', 'Premium services', '24/7 coordination'],
    difficulty: 'Easy',
  },
  {
    category: 'luxury',
    id: 28,
    name: 'Carnival VIP Experience',
    image: '/carnival-celebration.jpg',
    price: 4200,
    duration: '4 days',
    groupSize: '2-8 guests',
    rating: 4.95,
    description: 'Ultra-VIP carnival experience with premium seating, exclusive parties, and celebrity interactions.',
    highlights: ['VIP seating', 'Exclusive parties', 'Meet celebrities', 'Private guides', 'Luxury hotels'],
    difficulty: 'Easy',
  },
  {
    category: 'luxury',
    id: 29,
    name: 'Private Concert Experience',
    image: '/carnival-celebration.jpg',
    price: 3800,
    duration: '2 days',
    groupSize: '2-30 guests',
    rating: 4.92,
    description: 'Private or semi-private concerts with world-class musicians in intimate luxury venues.',
    highlights: ['Premium artists', 'Intimate venue', 'Gourmet catering', 'Premium seating', 'After-parties'],
    difficulty: 'Easy',
  },
  {
    category: 'luxury',
    id: 30,
    name: 'Private Jet Group Tour',
    image: '/private-jet.jpg',
    price: 18500,
    duration: '7 days',
    groupSize: '2-14 guests',
    rating: 4.97,
    description: 'Multi-country private jet tour with luxury accommodations and customized itineraries.',
    highlights: ['Private jet', 'Multiple countries', 'Luxury hotels', 'Custom itinerary', 'Dedicated staff'],
    difficulty: 'Easy',
  },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeServices, setActiveServices] = useState(allServices)

  const handleCategoryFilter = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (categoryId === 'all') {
      setActiveServices(allServices)
    } else {
      setActiveServices(allServices.filter(s => s.category === categoryId))
    }
  }

  const handleBooking = (name: string, price: number) => {
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
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Destinations
            </Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
              Experiences
            </Link>
            <Link href="/services" className="text-sm font-medium text-amber-600">
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
        badge="PREMIUM LUXURY SERVICES"
        title="Curated Services"
        subtitle="for discerning travelers"
        description="Explore our extensive collection of 30+ carefully curated services across six categories. Each experience is designed for luxury, sophistication, and unforgettable memories."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Browse Services',
          href: '#services',
        }}
        secondaryCTA={{
          text: 'Custom Package',
          href: '/contact',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: '30+', label: 'Services Offered' },
          { value: '6', label: 'Categories' },
          { value: '100%', label: 'Customizable' },
        ]}
      />

      {/* Category Filter */}
      <section className="py-12 px-6 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-amber-600" />
            <p className="text-sm font-semibold text-gray-700">Filter by Category:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryFilter('all')}
              className={`px-6 py-2 rounded-full transition font-medium text-sm ${
                activeCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryFilter(cat.id)}
                className={`px-6 py-2 rounded-full transition font-medium text-sm flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {getIconComponent(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow-md flex items-center gap-1">
                    <Star size={16} className="fill-amber-500 text-amber-500" />
                    <span className="font-bold text-gray-900 text-sm">{service.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {serviceCategories.find(c => c.id === service.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                  {/* Info Grid */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock size={16} className="text-amber-600" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users2 size={16} className="text-amber-600" />
                      <span>{service.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Highlights</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx}>✓ {h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-2xl font-bold text-amber-600">${service.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBooking(service.name, service.price)}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2 group/btn"
                  >
                    Book Experience
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
            {activeServices.length} Experiences Matching Your Interests
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {activeCategory === 'all'
              ? 'Explore all 30 premium services designed for ultimate luxury travel.'
              : `Browse our curated collection of ${activeServices.length} ${serviceCategories.find(c => c.id === activeCategory)?.name.toLowerCase()} experiences.`}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition"
          >
            Plan Your Experience
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#outdoor" className="hover:text-amber-500 transition">Outdoor Adventures</a></li>
                <li><a href="#culinary" className="hover:text-amber-500 transition">Culinary</a></li>
                <li><a href="#wellness" className="hover:text-amber-500 transition">Wellness</a></li>
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
