'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Send, Quote } from 'lucide-react'
import { useState } from 'react'
import AnimatedHero from '@/components/animated-hero'

const reviews = [
  {
    id: 1,
    name: 'Victoria Richardson',
    title: 'CEO, Goldman Sachs',
    location: 'London, UK',
    image: '/reviewer-1.jpg',
    rating: 5,
    date: '3 months ago',
    text: 'GARYPARROTBEACH transformed our family safari into an extraordinary adventure. The attention to every detail, from the luxury lodges to the exclusive game drive experiences, was simply remarkable. Our children will remember this forever.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Entrepreneur & Investor',
    location: 'Singapore',
    image: '/reviewer-2.jpg',
    rating: 5,
    date: '2 months ago',
    text: 'Their private jet charter service exceeded all expectations. From the seamless itinerary to the Michelin-starred dining onboard, every element was perfection. The 24/7 concierge support made everything effortless.',
  },
  {
    id: 3,
    name: 'Elena Vasquez',
    title: 'Director, Modern Art Museum',
    location: 'Buenos Aires, Argentina',
    image: '/reviewer-3.jpg',
    rating: 5,
    date: '1 month ago',
    text: 'Our cultural expedition through European museums and galleries was expertly curated. The private viewings and access to world-class art were absolutely phenomenal. These are true masters of luxury travel.',
  },
  {
    id: 4,
    name: 'James Thompson',
    title: 'Managing Director, JP Morgan',
    location: 'New York, USA',
    image: '/reviewer-4.jpg',
    rating: 5,
    date: '6 weeks ago',
    text: 'The honeymoon they designed for us was magical. Private island retreat, sunset yacht cruise, Michelin dining under the stars—every moment was perfect. My wife still gets emotional thinking about it.',
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    title: 'Fashion Designer',
    location: 'Paris, France',
    image: '/reviewer-5.jpg',
    rating: 5,
    date: '5 weeks ago',
    text: 'Their wine and culinary tour through Bordeaux and Provence was an absolute masterpiece. Meeting renowned chefs, visiting exclusive vineyards, and staying in luxury estates—simply world-class.',
  },
  {
    id: 6,
    name: 'Alexander Petrov',
    title: 'Real Estate Magnate',
    location: 'Moscow, Russia',
    image: '/reviewer-6.jpg',
    rating: 5,
    date: '4 weeks ago',
    text: 'Our family wellness retreat in Switzerland combined luxury, rejuvenation, and adventure perfectly. The spa treatments, yoga sessions, and mountain activities were all expertly coordinated. Highly recommended.',
  },
  {
    id: 7,
    name: 'Isabella Rossi',
    title: 'Luxury Fashion Executive',
    location: 'Milan, Italy',
    image: '/reviewer-1.jpg',
    rating: 5,
    date: '3 weeks ago',
    text: 'The yacht charter around the Greek islands was absolutely pristine. The crew, the amenities, the exclusive beach clubs, and the gourmet dining—everything was handled with elegance and precision.',
  },
  {
    id: 8,
    name: 'David Anderson',
    title: 'Tech Entrepreneur',
    location: 'San Francisco, USA',
    image: '/reviewer-2.jpg',
    rating: 5,
    date: '2 weeks ago',
    text: 'Their adventure packages are unmatched. We did hot air balloon safaris, helicopter tours, and extreme sports—all safely coordinated with world-class guides. My adrenaline has never been more satisfied.',
  },
  {
    id: 9,
    name: 'Catherine Dubois',
    title: 'Luxury Hotel Owner',
    location: 'Geneva, Switzerland',
    image: '/reviewer-3.jpg',
    rating: 5,
    date: '2 weeks ago',
    text: 'As someone in the hospitality industry, I can truly appreciate what GARYPARROTBEACH does. Their network is extraordinary, their service is impeccable, and their luxury standards are uncompromising.',
  },
  {
    id: 10,
    name: 'Rajesh Kumar',
    title: 'Pharma Executive',
    location: 'Mumbai, India',
    image: '/reviewer-4.jpg',
    rating: 5,
    date: '10 days ago',
    text: 'Our Maldives luxury escape was perfection incarnate. Overwater villas, private spa treatments, exclusive dining experiences, and world-class diving. This is what luxury travel should be.',
  },
  {
    id: 11,
    name: 'Margot Beaumont',
    title: 'Art Collector',
    location: 'London, UK',
    image: '/reviewer-5.jpg',
    rating: 5,
    date: '1 week ago',
    text: 'Their exclusive access to private art collections and museum viewings was extraordinary. The knowledge and sophistication of their cultural specialists elevates the entire experience.',
  },
  {
    id: 12,
    name: 'Carlos Mendez',
    title: 'Aerospace Engineer',
    location: 'Miami, USA',
    image: '/reviewer-6.jpg',
    rating: 5,
    date: '5 days ago',
    text: 'The private jet experience was phenomenal. From the moment we stepped on the tarmac to our arrival, everything was orchestrated to absolute perfection. Worth every penny and more.',
  },
]

export default function ReviewsPage() {
  const [reviews_list, setReviewsList] = useState(reviews)
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    rating: 5,
    review: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.review) {
      const newReview = {
        id: reviews_list.length + 1,
        name: formData.name,
        title: formData.title || 'Guest',
        location: 'Just submitted',
        image: '/reviewer-1.jpg',
        rating: formData.rating,
        date: 'Just now',
        text: formData.review,
      }
      setReviewsList([newReview, ...reviews_list])
      setFormData({ name: '', title: '', email: '', rating: 5, review: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const avgRating = (reviews_list.reduce((sum, r) => sum + r.rating, 0) / reviews_list.length).toFixed(1)

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
        </div>
      </nav>

      {/* Hero */}
      <AnimatedHero
        badge="CLIENT TESTIMONIALS & SUCCESS STORIES"
        title="Voices of"
        subtitle="distinction"
        description="Hear from our most esteemed clientele about their transformative luxury travel experiences. With an average rating of 4.9/5 stars from global travelers, we consistently deliver excellence."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{
          text: 'Read Reviews',
          href: '#reviews',
        }}
        secondaryCTA={{
          text: 'Plan Your Journey',
          href: '/contact',
        }}
        showTrustIndicators={true}
        trustStats={[
          { value: `${avgRating}`, label: 'Average Rating' },
          { value: `${reviews_list.length}`, label: 'Client Reviews' },
          { value: '100%', label: 'Would Recommend' },
        ]}
      />

      <section className="pt-12 pb-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Rating Summary */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-16 mx-auto max-w-md text-center">
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-5xl font-bold text-amber-600">{avgRating}</p>
                <p className="text-gray-600 text-sm mt-2">out of 5 stars</p>
              </div>
              <div className="w-full">
                <div className="flex gap-1 mb-2 justify-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold">{reviews_list.length}+ Reviews</p>
                <p className="text-gray-500 text-sm">From verified guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Recent Reviews</h2>
            <p className="text-gray-600">Authentic experiences from our distinguished clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews_list.map((review) => (
              <div
                key={review.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient Top */}
                <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>

                <div className="p-8">
                  {/* Quote Icon */}
                  <Quote className="text-amber-200 mb-4" size={24} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">"{review.text}"</p>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-6 mb-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                        <p className="text-xs text-amber-600 font-medium">{review.title}</p>
                        <p className="text-xs text-gray-500">{review.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Review Date */}
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Share Your Experience</h2>
            <p className="text-gray-600 mb-8">Have you traveled with GARYPARROTBEACH? We&apos;d love to hear about your journey.</p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Thank you! Your review has been submitted and will appear above shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Title/Profession</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., CEO, Entrepreneur"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Rating *</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                >
                  <option value={5}>5 Stars - Exceptional</option>
                  <option value={4}>4 Stars - Excellent</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Review *</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  placeholder="Share your experience with GARYPARROTBEACH. What made your journey special?"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold hover:bg-amber-700 transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Your Review
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6 text-center">
              By submitting, you agree to our review policies. All reviews are moderated and verified.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Why Our Clients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">2000+</p>
              <p className="text-amber-50">Journeys Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-amber-50">Destinations Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-amber-50">5-Star Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-amber-50">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">GARYPARROTBEACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for discerning travelers worldwide.</p>
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
                <li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
                <li><a href="#" className="hover:text-amber-500 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <p className="text-amber-500 font-semibold mb-2">+1 (800) TRAVEL-1</p>
              <p className="text-gray-400 text-sm">24/7 Luxury Concierge</p>
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
