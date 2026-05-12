'use client'

import Link from 'next/link'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'
import AnimatedHero from '@/components/animated-hero'

const faqCategories = [
  {
    name: 'Planning',
    slug: 'planning',
    faqs: [
      {
        q: 'How far in advance should I book my luxury travel experience?',
        a: 'We recommend booking 2-3 months in advance for standard experiences and 3-6 months for bespoke journeys. This allows our consultants ample time to curate the perfect itinerary and secure exclusive access to premium venues and experiences. For last-minute bookings, contact us directly at +1 (800) TRAVEL-1.'
      },
      {
        q: 'Can you customize experiences to match my specific preferences?',
        a: 'Absolutely. All our experiences are fully customizable. We work closely with each client to understand their desires, constraints, and dreams. Whether it\'s dietary preferences, activity modifications, or complete itinerary redesigns, we ensure your journey is uniquely yours.'
      },
      {
        q: 'What happens if I need to make changes to my booking?',
        a: 'Our consultants can make changes up to 14 days before departure with minimal fees. Major changes closer to travel may incur additional costs depending on the vendors involved. We always work to accommodate your needs while respecting partner agreements.'
      },
      {
        q: 'Do you handle all logistics and arrangements?',
        a: 'Yes, we handle everything from flights and accommodations to ground transportation, activities, and dining reservations. Our team coordinates directly with all vendors to ensure seamless execution of your journey.'
      }
    ]
  },
  {
    name: 'Pricing',
    slug: 'pricing',
    faqs: [
      {
        q: 'What is included in your quoted prices?',
        a: 'Our quotes typically include luxury accommodations, meals at fine dining establishments, guided activities, transportation between destinations, and our expert coordination. International flights are usually quoted separately. We provide detailed breakdowns for transparency.'
      },
      {
        q: 'Do you offer payment plans or financing options?',
        a: 'Yes, we offer flexible payment plans for journeys over $20,000. Our team can discuss options including 50/50 splits or monthly payments. Contact our finance coordinator for personalized arrangements.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 60+ days before travel receive a full refund. Between 30-60 days, a 25% cancellation fee applies. Less than 30 days incurs a 50% fee. Some premium experiences may have stricter policies. Travel insurance is recommended.'
      },
      {
        q: 'Are there any hidden fees or additional charges?',
        a: 'No. We provide all-inclusive pricing with no hidden fees. Any additional costs (gratuities, personal shopping, special requests) are discussed and approved in advance. Transparency is fundamental to our service.'
      }
    ]
  },
  {
    name: 'Destinations',
    slug: 'destinations',
    faqs: [
      {
        q: 'When is the best time to visit various destinations?',
        a: 'Each destination has optimal seasons. Maldives is best December-April, Swiss Alps June-September, Kenya July-October, Mediterranean April-May or September-October. Our experts recommend timing based on weather, crowds, and special events for your preferences.'
      },
      {
        q: 'Do you handle visa requirements and travel documentation?',
        a: 'Our team provides guidance on all visa and documentation requirements for your journey. While we don\'t process visas directly, we have established relationships with visa specialists and can facilitate the process.'
      },
      {
        q: 'What if I\'m unsure about which destination to visit?',
        a: 'Schedule a free 30-minute consultation with one of our destination experts. We\'ll discuss your interests, budget, timeline, and travel style to recommend the perfect locations. Most clients find their ideal destination within one conversation.'
      },
      {
        q: 'Can you arrange multi-country journeys?',
        a: 'Yes. Multi-country itineraries are some of our specialties. We expertly coordinate transportation, timing, and experiences across multiple destinations to create seamless, unforgettable journeys.'
      }
    ]
  },
  {
    name: 'Safety',
    slug: 'safety',
    faqs: [
      {
        q: 'How do you ensure the safety of travelers?',
        a: 'Safety is paramount. We work exclusively with vetted, premium accommodations and operators. Our team stays current on global travel advisories, health requirements, and security concerns for every destination.'
      },
      {
        q: 'What health precautions do you recommend?',
        a: 'We provide comprehensive health recommendations based on destination requirements. This includes vaccinations, travel insurance, medical evacuation coverage, and specific precautions. We maintain relationships with international medical providers globally.'
      },
      {
        q: 'Is travel insurance included?',
        a: 'Travel insurance is highly recommended but not included in standard packages. We can arrange comprehensive coverage that includes medical evacuation, trip cancellation, and emergency assistance. Costs vary based on coverage levels.'
      },
      {
        q: 'What happens in case of an emergency during my journey?',
        a: 'We maintain 24/7 emergency support for all travelers. Our global network includes emergency contacts, medical facilities, and security liaisons. A dedicated consultant monitors your journey and is available immediately if needed.'
      }
    ]
  },
  {
    name: 'Services',
    slug: 'services',
    faqs: [
      {
        q: 'What is your private jet charter service?',
        a: 'Our private jet program provides access to over 5,000 aircraft globally with availability to 5,000+ destinations. You enjoy complete privacy, flexible scheduling, and direct access to remote locations. Perfect for multi-destination journeys and time-sensitive travelers.'
      },
      {
        q: 'What yacht charter experiences do you offer?',
        a: 'From superyachts in the Mediterranean to private island charters in Polynesia, our yacht programs feature world-class vessels, expert crews, and curated itineraries. We handle all provisioning, water sports, and exclusive destination access.'
      },
      {
        q: 'Can you arrange exclusive experiences like private museum tours?',
        a: 'Absolutely. Exclusive access is a core service. We arrange private museum viewings, chef tastings, private island permits, exclusive venue access, and meet-with-experts experiences worldwide.'
      },
      {
        q: 'Do you offer group travel services?',
        a: 'Yes. We specialize in luxury group travel for families, corporations, and friend groups. Group journeys include dedicated logistics coordination, group activities, and personalized attention to every member.'
      }
    ]
  },
  {
    name: 'Policies',
    slug: 'policies',
    faqs: [
      {
        q: 'How do I get a refund if I\'m unsatisfied with my experience?',
        a: 'Client satisfaction is our highest priority. If any aspect of your journey doesn\'t meet our standards, we work immediately to resolve it. We offer partial refunds or future travel credits based on the specific circumstances.'
      },
      {
        q: 'What is your group rate policy?',
        a: 'Group journeys (8+ people) receive customized pricing based on accommodation types, activities, and travel dates. Larger groups enjoy better per-person rates and additional complimentary services. Contact our group coordinator for quotes.'
      },
      {
        q: 'Do you offer loyalty programs or repeat traveler benefits?',
        a: 'Returning clients enjoy priority booking, exclusive discounts (5-15%), complimentary upgrades, and first access to new experiences. Our VIP program also includes dedicated consultant service and bespoke event invitations.'
      },
      {
        q: 'Can I book multiple journeys at once?',
        a: 'Yes. Clients booking multiple experiences receive substantial volume discounts and integrated planning across journeys. We often space multi-journey bookings throughout the year for optimal experiences.'
      }
    ]
  }
]

export default function FAQ() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState('planning')
  const [searchTerm, setSearchTerm] = useState('')

  const toggleFAQ = (id: string) => {
    const newSet = new Set(expandedFAQs)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setExpandedFAQs(newSet)
  }

  const currentCategory = faqCategories.find(cat => cat.slug === selectedCategory)
  let filteredFAQs = currentCategory?.faqs || []

  if (searchTerm) {
    filteredFAQs = filteredFAQs.filter(
      faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="/destinations" className="text-sm font-medium text-gray-700">Destinations</Link>
              <Link href="/experiences" className="text-sm font-medium text-gray-700">Experiences</Link>
              <Link href="/services" className="text-sm font-medium text-gray-700">Services</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700">About</Link>
              <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg text-center">Inquire</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <AnimatedHero
        badge="FREQUENTLY ASKED QUESTIONS"
        title="Answers to Your"
        subtitle="Travel Questions"
        description="Find comprehensive answers to common questions about our services, bookings, destinations, and policies. Browse by category or search for specific topics."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Browse FAQs',
          href: '#faqs',
        }}
        secondaryCTA={{
          text: 'Contact Us',
          href: '/contact',
        }}
      />

      {/* FAQ Content */}
      <section id="faqs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="hidden lg:block">
              <div className="space-y-2 sticky top-28">
                {faqCategories.map(category => (
                  <button
                    key={category.slug}
                    onClick={() => {
                      setSelectedCategory(category.slug)
                      setSearchTerm('')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition font-semibold ${
                      selectedCategory === category.slug
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs List */}
            <div className="lg:col-span-3">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, idx) => {
                    const faqId = `${selectedCategory}-${idx}`
                    const isExpanded = expandedFAQs.has(faqId)
                    return (
                      <div
                        key={faqId}
                        className="border-2 border-gray-200 rounded-lg hover:border-amber-300 transition"
                      >
                        <button
                          onClick={() => toggleFAQ(faqId)}
                          className="w-full px-6 py-4 flex items-start gap-4 hover:bg-amber-50 transition"
                        >
                          <ChevronDown
                            size={20}
                            className={`text-amber-600 flex-shrink-0 transition-transform mt-1 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                          <h3 className="text-lg font-semibold text-gray-900 text-left">
                            {faq.q}
                          </h3>
                        </button>

                        {isExpanded && (
                          <div className="px-6 pb-4 border-t-2 border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">
                    No FAQs found matching your search.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-6 bg-amber-50 border-t-2 border-amber-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our luxury travel consultants are available 24/7 to answer any questions and help you plan your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition"
            >
              Contact Our Team
            </Link>
            <a
              href="tel:+1-800-TRAVEL-1"
              className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition"
            >
              Call +1 (800) TRAVEL-1
            </a>
          </div>
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
                <li><Link href="/services" className="hover:text-amber-500 transition">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-amber-500 transition">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
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
