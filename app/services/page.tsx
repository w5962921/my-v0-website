'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Users2, Clock, Filter, ChevronRight, Mountain, Utensils, Waves, Palette, Heart, Sparkles } from 'lucide-react'
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
  { id: 'outdoor', name: 'Outdoor Adventures', icon: 'mountain', description: 'Thrilling experiences in nature' },
  { id: 'culinary', name: 'Culinary Experiences', icon: 'utensils', description: 'Gourmet dining and food tours' },
  { id: 'water', name: 'Water & Marine', icon: 'wave', description: 'Water-based activities and sailing' },
  { id: 'culture', name: 'Cultural & Heritage', icon: 'palette', description: 'Arts, history, and cultural immersion' },
  { id: 'wellness', name: 'Wellness & Spa', icon: 'heart', description: 'Relaxation and holistic wellness' },
  { id: 'luxury', name: 'Luxury Events', icon: 'sparkles', description: 'Exclusive celebrations and events' },
]

// Each service now focuses on USA locations
const allServices = [
  // Outdoor Adventures (USA)
  { category: 'outdoor', id: 1, name: 'Rocky Mountain Trekking', image: '/hiking-expedition.jpg', duration: '12 days', groupSize: '2-8 guests', rating: 4.95, description: 'Expert-guided expedition through Colorado’s majestic mountains with luxury lodging and gourmet meals.', highlights: ['Professional guides', 'High-altitude camping', 'Summit views', 'Porter support', 'Insurance included'], difficulty: 'Moderate-High' },
  { category: 'outdoor', id: 2, name: 'Hot Air Balloon Safari – New Mexico', image: '/hot-air-balloon.jpg', duration: '3 days', groupSize: '2-4 guests', rating: 4.98, description: 'Sunrise balloon adventure over the Rio Grande with champagne breakfast and private desert excursions.', highlights: ['Sunrise flight', 'Champagne breakfast', 'Photography', 'Expert pilot', 'Scenic routes'], difficulty: 'Easy' },
  { category: 'outdoor', id: 3, name: 'Luxury Island Trekking – Florida Keys', image: '/island-excursion.jpg', duration: '4 days', groupSize: '2-6 guests', rating: 4.92, description: 'Private island exploration with pristine beaches, jungle trails, and beachfront luxury accommodation.', highlights: ['Private islands', 'Jungle trails', 'Beach dinners', 'Snorkeling', 'Personal concierge'], difficulty: 'Easy-Moderate' },
  { category: 'outdoor', id: 4, name: 'Waterfall Expedition – Great Smoky Mountains', image: '/waterfall-adventure.jpg', duration: '5 days', groupSize: '2-8 guests', rating: 4.94, description: 'Adventure through cascading waterfalls in the Smokies with rappelling, swimming, and luxury camping.', highlights: ['Rappelling', 'Natural pools', 'Professional guides', 'Safety equipment', 'Luxury camps'], difficulty: 'Moderate' },
  { category: 'outdoor', id: 5, name: 'Private Yacht – Florida Keys & Bahamas', image: '/luxury-yacht.jpg', duration: '7 days', groupSize: '2-10 guests', rating: 4.96, description: 'Exclusive yacht charter exploring secluded islands with gourmet dining and water sports.', highlights: ['Luxury yacht', 'Private crew', 'Island stops', 'Water sports', 'Fine dining'], difficulty: 'Easy' },
  // Culinary (USA)
  { category: 'culinary', id: 6, name: 'Michelin-Star Culinary Tour – USA', image: '/michelin-dining.jpg', duration: '6 days', groupSize: '2-6 guests', rating: 4.99, description: 'Gastronomic journey through America’s best Michelin-starred restaurants with wine pairings and chef meetings.', highlights: ['3 Michelin-star dinners', 'Chef masterclasses', 'Wine pairings', 'Market tours', 'Luxury hotels'], difficulty: 'Easy' },
  { category: 'culinary', id: 7, name: 'Luxury Cooking Masterclass – Napa Valley', image: '/cooking-class.jpg', duration: '3 days', groupSize: '2-8 guests', rating: 4.91, description: 'Learn from world-renowned chefs in a private villa with market visits and intimate dinners.', highlights: ['Chef instruction', 'Market selection', 'Ingredient sourcing', 'Wine selection', 'Dining experience'], difficulty: 'Easy' },
  { category: 'culinary', id: 8, name: 'Wine & Cheese Connoisseur – Oregon', image: '/wine-tasting.jpg', duration: '4 days', groupSize: '2-6 guests', rating: 4.97, description: 'Premium wine tasting in Oregon’s Willamette Valley with cheese pairings and winery tours.', highlights: ['Vineyard visits', 'Wine tastings', 'Cheese pairings', 'Sommelier guidance', 'Villa stay'], difficulty: 'Easy' },
  { category: 'culinary', id: 9, name: 'Farm-to-Table Gourmet – Hudson Valley', image: '/michelin-dining.jpg', duration: '3 days', groupSize: '2-8 guests', rating: 4.93, description: 'Sustainable luxury dining sourcing from organic farms and local artisans in New York’s Hudson Valley.', highlights: ['Farm visits', 'Local sourcing', 'Chef cooking', 'Organic produce', 'Rustic luxury'], difficulty: 'Easy' },
  { category: 'culinary', id: 10, name: 'Street Food Luxury Tour – NYC', image: '/carnival-celebration.jpg', duration: '2 days', groupSize: '2-6 guests', rating: 4.88, description: 'Curated street food experience in New York with expert local guides and exclusive tastings.', highlights: ['Local guides', 'Market access', 'Exclusive tastings', 'Cultural immersion', 'Private transportation'], difficulty: 'Easy' },
  // Water & Marine (USA)
  { category: 'water', id: 11, name: 'World-Class Scuba – Florida Keys', image: '/scuba-diving.jpg', duration: '5 days', groupSize: '2-8 guests', rating: 4.96, description: 'Deep sea diving in coral reefs with expert instructors and luxury resort accommodation.', highlights: ['Professional instructors', 'Coral reefs', 'Marine life', 'Safety certification', 'Equipment provided'], difficulty: 'Moderate' },
  { category: 'water', id: 12, name: 'Private Yacht Charter – New England', image: '/luxury-yacht.jpg', duration: '7 days', groupSize: '2-12 guests', rating: 4.99, description: 'Ultra-luxury superyacht with professional crew, gourmet chef, and exclusive New England coastal access.', highlights: ['Superyacht', 'Professional crew', 'Michelin chef', 'Water toys', 'Concierge service'], difficulty: 'Easy' },
  { category: 'water', id: 13, name: 'Luxury Fishing – Florida Keys', image: '/scuba-diving.jpg', duration: '4 days', groupSize: '2-6 guests', rating: 4.91, description: 'Big game fishing in pristine waters with expert guides, luxury accommodations, and catch preparation.', highlights: ['Expert guides', 'Premium boats', 'Big game fishing', 'Conservation focus', 'Gourmet meals'], difficulty: 'Moderate' },
  { category: 'water', id: 14, name: 'Snorkeling in Paradise – Hawaii', image: '/island-excursion.jpg', duration: '3 days', groupSize: '2-8 guests', rating: 4.94, description: 'Guided snorkeling in crystalline waters with tropical marine life and island beach clubs.', highlights: ['Coral gardens', 'Marine life', 'Beach clubs', 'Private islands', 'Equipment included'], difficulty: 'Easy' },
  { category: 'water', id: 15, name: 'Sunset Catamaran – California Coast', image: '/luxury-yacht.jpg', duration: '1 day', groupSize: '2-20 guests', rating: 4.89, description: 'Romantic sunset sail off the California coast with premium cocktails, gourmet appetizers, and live entertainment.', highlights: ['Sunset sailing', 'Premium drinks', 'Gourmet appetizers', 'Live music', 'Photography'], difficulty: 'Easy' },
  // Cultural (USA)
  { category: 'culture', id: 16, name: 'Art Museum Masterpiece Tour – NYC', image: '/art-museum-tour.jpg', duration: '3 days', groupSize: '2-8 guests', rating: 4.93, description: 'Exclusive guided tours of New York’s finest art museums with private viewings and art historian experts.', highlights: ['Expert guides', 'Private viewings', 'Art history lessons', 'Behind-the-scenes access', 'Luxury hotels'], difficulty: 'Easy' },
  { category: 'culture', id: 17, name: 'Cultural Heritage Walking Tour – Boston', image: '/group-tour.jpg', duration: '2 days', groupSize: '2-8 guests', rating: 4.90, description: 'Intimate small-group walking tours of Boston’s historic sites with expert cultural commentators.', highlights: ['Expert guides', 'Small groups', 'Historic sites', 'Local stories', 'Luxury accommodations'], difficulty: 'Easy-Moderate' },
  { category: 'culture', id: 18, name: 'Archaeological Expedition – Southwest', image: '/hiking-expedition.jpg', duration: '7 days', groupSize: '2-10 guests', rating: 4.95, description: 'Join archaeologists exploring Ancestral Puebloan sites in the Southwest with hands-on digs and expert education.', highlights: ['Archaeological expertise', 'Excavation access', 'Educational seminars', 'Luxury camps', 'Artifact tours'], difficulty: 'Moderate' },
  { category: 'culture', id: 19, name: 'Festival & Carnival Experience – New Orleans', image: '/carnival-celebration.jpg', duration: '4 days', groupSize: '2-8 guests', rating: 4.94, description: 'VIP access to Mardi Gras with exclusive seating, private parties, and local immersion.', highlights: ['VIP seating', 'Exclusive access', 'Local guides', 'Cultural shows', 'Luxury accommodations'], difficulty: 'Easy' },
  { category: 'culture', id: 20, name: 'Spiritual & Sacred Journey – Sedona', image: '/wellness-retreat.jpg', duration: '5 days', groupSize: '2-6 guests', rating: 4.92, description: 'Pilgrimage to sacred vortex sites with meditation, spiritual teachings, and mindfulness retreats.', highlights: ['Spiritual guidance', 'Vortex sites', 'Meditation', 'Yoga practices', 'Holistic wellness'], difficulty: 'Easy-Moderate' },
  // Wellness & Spa (USA)
  { category: 'wellness', id: 21, name: 'Luxury Spa & Wellness – California', image: '/wellness-retreat.jpg', duration: '6 days', groupSize: '2-8 guests', rating: 4.97, description: 'Comprehensive wellness program with spa treatments, yoga, healthy cuisine, and holistic healing on the West Coast.', highlights: ['World-class spa', 'Yoga instruction', 'Healthy cuisine', 'Holistic therapies', 'Wellness consultations'], difficulty: 'Easy' },
  { category: 'wellness', id: 22, name: 'Yoga & Meditation – Sedona', image: '/wellness-retreat.jpg', duration: '4 days', groupSize: '2-12 guests', rating: 4.94, description: 'Transformative yoga and meditation retreat in Sedona’s red rock country with expert instructors.', highlights: ['Expert teachers', 'Daily yoga', 'Meditation', 'Organic meals', 'Natural settings'], difficulty: 'Easy' },
  { category: 'wellness', id: 23, name: 'Detox & Rejuvenation – Florida', image: '/luxury-spa.jpg', duration: '5 days', groupSize: '2-8 guests', rating: 4.91, description: 'Comprehensive detoxification and rejuvenation with medical supervision and holistic treatments in South Florida.', highlights: ['Medical supervision', 'Detox programs', 'Spa treatments', 'Nutritional counseling', 'Monitoring'], difficulty: 'Easy' },
  { category: 'wellness', id: 24, name: 'Adventure Fitness – Colorado', image: '/hiking-expedition.jpg', duration: '5 days', groupSize: '2-8 guests', rating: 4.88, description: 'Active wellness combining mountain adventures with fitness training and healthy lifestyle coaching.', highlights: ['Fitness training', 'Adventure activities', 'Nutrition coaching', 'Wellness consultants', 'Group motivation'], difficulty: 'Moderate' },
  { category: 'wellness', id: 25, name: 'Couples Romantic Spa – Napa Valley', image: '/luxury-spa.jpg', duration: '3 days', groupSize: '2 guests', rating: 4.96, description: 'Romantic couples spa experience with private treatments, vineyard dinners, and intimate wellness activities.', highlights: ['Couples treatments', 'Private dinners', 'Romantic ambiance', 'Spa services', 'Luxury suites'], difficulty: 'Easy' },
  // Luxury Events (USA)
  { category: 'luxury', id: 26, name: 'Exclusive Private Gala – NYC', image: '/michelin-dining.jpg', duration: '1 evening', groupSize: '2-50 guests', rating: 4.98, description: 'Custom-designed gala dinner in New York with Michelin-starred chef, entertainment, and venue of choice.', highlights: ['Michelin chef', 'Custom menu', 'Premium entertainment', 'Venue selection', 'Full planning'], difficulty: 'Easy' },
  { category: 'luxury', id: 27, name: 'Luxury Wedding Destination – Hawaii', image: '/island-excursion.jpg', duration: '3-7 days', groupSize: '2-200 guests', rating: 4.99, description: 'Complete wedding planning for exotic Hawaiian destination weddings with luxury accommodations for all guests.', highlights: ['Complete planning', 'Exotic venues', 'Guest accommodations', 'Premium services', '24/7 coordination'], difficulty: 'Easy' },
  { category: 'luxury', id: 28, name: 'Carnival VIP – New Orleans', image: '/carnival-celebration.jpg', duration: '4 days', groupSize: '2-8 guests', rating: 4.95, description: 'Ultra-VIP Mardi Gras experience with premium seating, exclusive parties, and celebrity interactions.', highlights: ['VIP seating', 'Exclusive parties', 'Meet celebrities', 'Private guides', 'Luxury hotels'], difficulty: 'Easy' },
  { category: 'luxury', id: 29, name: 'Private Concert – Nashville', image: '/carnival-celebration.jpg', duration: '2 days', groupSize: '2-30 guests', rating: 4.92, description: 'Private or semi-private concerts with world-class musicians in intimate Nashville venues.', highlights: ['Premium artists', 'Intimate venue', 'Gourmet catering', 'Premium seating', 'After-parties'], difficulty: 'Easy' },
  { category: 'luxury', id: 30, name: 'Private Jet Group Tour – USA', image: '/private-jet.jpg', duration: '7 days', groupSize: '2-14 guests', rating: 4.97, description: 'Multi-city private jet tour (e.g., NYC, Nashville, Napa, Aspen) with luxury accommodations and customized itineraries.', highlights: ['Private jet', 'Multiple cities', 'Luxury hotels', 'Custom itinerary', 'Dedicated staff'], difficulty: 'Easy' },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeServices, setActiveServices] = useState(allServices)

  const handleCategoryFilter = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (categoryId === 'all') setActiveServices(allServices)
    else setActiveServices(allServices.filter(s => s.category === categoryId))
  }

  const handleBooking = (name: string) => {
    window.location.href = `/contact?package=${encodeURIComponent(name)}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (same as before, omitted for brevity but must be included) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">Parrotbeach</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">Destinations</Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">Experiences</Link>
            <Link href="/services" className="text-sm font-medium text-amber-600">Services</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">About</Link>
            <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">Inquire</Link>
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
        primaryCTA={{ text: 'Browse Services', href: '#services' }}
        secondaryCTA={{ text: 'Custom Package', href: '/contact' }}
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
            <button onClick={() => handleCategoryFilter('all')} className={`px-6 py-2 rounded-full font-medium text-sm ${activeCategory === 'all' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>All Services</button>
            {serviceCategories.map(cat => (
              <button key={cat.id} onClick={() => handleCategoryFilter(cat.id)} className={`px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${activeCategory === cat.id ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                {getIconComponent(cat.icon)} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map(service => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-700"><Clock size={16} className="text-amber-600" />{service.duration}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-700"><Users2 size={16} className="text-amber-600" />{service.groupSize}</div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Highlights</p>
                    <ul className="text-xs text-gray-600 space-y-1">{service.highlights.slice(0,2).map((h, idx) => <li key={idx}>✓ {h}</li>)}</ul>
                  </div>
                  <button onClick={() => handleBooking(service.name)} className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2 group/btn">
                    Inquire Now <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition" />
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
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">{activeServices.length} Experiences Matching Your Interests</h2>
          <p className="text-lg text-gray-600 mb-8">Explore all 30 premium services designed for ultimate luxury travel across the USA.</p>
          <Link href="/contact" className="inline-block bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition">Plan Your Experience</Link>
        </div>
      </section>

      {/* Footer (same as destinations page) */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div><h3 className="font-serif font-bold text-amber-500 text-lg mb-4">Parrotbeach</h3><p className="text-gray-400 text-sm">Luxury travel experiences for discerning travelers.</p></div>
          <div><h4 className="font-semibold mb-4 text-white">Discover</h4><ul className="space-y-2 text-gray-400 text-sm"><li><Link href="/destinations">Destinations</Link></li><li><Link href="/experiences">Experiences</Link></li><li><Link href="/services">Services</Link></li></ul></div>
          <div><h4 className="font-semibold mb-4 text-white">Company</h4><ul className="space-y-2 text-gray-400 text-sm"><li><Link href="/about">About Us</Link></li><li><Link href="/faq">FAQ</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
          <div><h4 className="font-semibold mb-4 text-white">Contact</h4><p className="text-gray-400 text-sm">Gary Seitz</p><p className="text-gray-400 text-sm">13 Green Apple Ct</p><p className="text-gray-400 text-sm">Sparta, NJ 07871</p><p className="text-amber-500 font-semibold mt-2">Mobile: 973-687-0899</p><p className="text-amber-500 font-semibold">Landline: 973-729-9335</p><p className="text-gray-400 text-sm mt-2">T. Lee Productions</p></div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">&copy; 2026 Parrotbeach. All rights reserved.</div>
      </footer>
    </div>
  )
}