'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Phone, Mail, MapPin, Send, Calendar, Users2, DollarSign } from 'lucide-react'

function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: searchParams.get('package') || '',
    travelers: '',
    dates: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const packageOptions = [
    { name: 'Maldives Luxury Escape', price: 12500 },
    { name: 'Swiss Alps Luxury Retreat', price: 14200 },
    { name: 'Kenya Safari Adventure', price: 11200 },
    { name: 'French Riviera Elegance', price: 15800 },
    { name: 'Superyacht Mediterranean Charter', price: 45000 },
    { name: 'Global Private Jet Experience', price: 85000 },
    { name: 'Luxury Spa & Wellness Retreat', price: 28500 },
    { name: 'Michelin Star Culinary Journey', price: 19500 },
    { name: 'Custom Bespoke Journey', price: null }
  ]

  const selectedPackage = packageOptions.find(p => p.name === formData.package)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        travelers: '',
        dates: '',
        message: ''
      })
    }, 3000)
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
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-6">Plan Your Journey</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Connect with our luxury travel consultants. Available 24/7 to craft your perfect bespoke experience with personalized attention to every detail.
          </p>
          <div className="mt-8 inline-block">
            <p className="text-amber-300 font-semibold">Response within 2 hours | Free consultation | No commitments</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Phone */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Call us anytime</p>
                <a href="tel:+1-800-TRAVEL-1" className="text-amber-600 hover:text-amber-700 transition font-semibold text-lg">
                  +1 (800) TRAVEL-1
                </a>
                <p className="text-gray-500 text-sm mt-3">Available 24/7 globally</p>
              </div>

              {/* Email */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Reach our team</p>
                <a href="mailto:info@garyparrotbeach.com" className="text-amber-600 hover:text-amber-700 transition font-semibold">
                  info@garyparrotbeach.com
                </a>
                <p className="text-gray-500 text-sm mt-3">Response within 2 hours</p>
              </div>

              {/* Office */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Visit us</p>
                <p className="text-gray-700 font-semibold">Luxury Travel Bureau</p>
                <p className="text-gray-600 text-sm">New York, London, Dubai</p>
                <p className="text-gray-500 text-sm mt-3">Global Luxury Travel Network</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your inquiry has been received. Our luxury travel consultants will contact you within 2 hours.
                  </p>
                  <p className="text-sm text-gray-500">Expect a personalized response tailored to your travel desires.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Package or Experience</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select a package...</option>
                      {packageOptions.map((pkg) => (
                        <option key={pkg.name} value={pkg.name}>
                          {pkg.name} {pkg.price ? `($${pkg.price.toLocaleString()})` : '(Custom)'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Display */}
                  {selectedPackage && selectedPackage.price && (
                    <div className="bg-white border-l-4 border-amber-600 p-4 rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Selected Package:</span>
                        <span className="text-2xl font-bold text-amber-600">${selectedPackage.price.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {/* Travelers */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5-6">5-6 Travelers</option>
                      <option value="7-8">7-8 Travelers</option>
                      <option value="8+">8+ Travelers</option>
                    </select>
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Dates</label>
                    <input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                      placeholder="e.g., June 2024 or flexible"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your travel preferences, special requests, or any other details..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2 text-lg"
                  >
                    <Send size={20} />
                    Send My Inquiry
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our luxury travel consultants.
                  </p>
                </form>
              )}
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
              <p className="text-gray-400 text-sm leading-relaxed">Luxury travel experiences for discerning travelers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Discover</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/destinations" className="hover:text-amber-500 transition">Destinations</Link></li>
                <li><Link href="/services" className="hover:text-amber-500 transition">Services</Link></li>
                <li><Link href="/reviews" className="hover:text-amber-500 transition">Reviews</Link></li>
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

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
}
