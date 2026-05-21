'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

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
  const [errorMsg, setErrorMsg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const packageOptions = [
    { name: 'Maldives Luxury Escape' },
    { name: 'Swiss Alps Luxury Retreat' },
    { name: 'Kenya Safari Adventure' },
    { name: 'French Riviera Elegance' },
    { name: 'Superyacht Mediterranean Charter' },
    { name: 'Global Private Jet Experience' },
    { name: 'Luxury Spa & Wellness Retreat' },
    { name: 'Michelin Star Culinary Journey' },
    { name: 'Custom Bespoke Journey' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // 👇 REPLACE THIS WITH YOUR UPDATED GOOGLE APPS SCRIPT URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw1BBMoshVz8JItHzG4fPV8qUWW2gFOx6bB4You6T2qNhZ7uMaeFho_Y7ciOZIvtWWm/exec'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    // Prepare data for the script (application/x-www-form-urlencoded)
    const payload = new URLSearchParams()
    payload.append('formType', 'contact')
    payload.append('fullName', formData.name)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone || 'Not provided')   // 👈 Always send a string, never empty
    payload.append('inquiryType', formData.package)
    payload.append('message', `Travelers: ${formData.travelers || 'Not specified'} | Dates: ${formData.dates || 'Flexible'} | Details: ${formData.message}`)

    try {
      // Using no-cors to avoid CORS issues; the request will still be sent
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      })
      setSubmitted(true)
      setFormData({
        name: '', email: '', phone: '', package: '', travelers: '', dates: '', message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Submission error:', err)
      setErrorMsg('Network error – please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">PARROTBEACH</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">Destinations</Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">Experiences</Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">Services</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">About</Link>
            <Link href="/contact" className="text-sm bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">Inquire</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-6">Plan Your Journey</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">Connect with our luxury travel consultants. Available 24/7 to craft your perfect bespoke experience.</p>
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
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Call us anytime</p>
                <a href="tel:+19736870899" className="text-amber-600 hover:text-amber-700 transition font-semibold text-lg">973-687-0899</a>
                <p className="text-gray-500 text-sm mt-3">Mobile (24/7)</p>
                <a href="tel:+19737299335" className="text-amber-600 hover:text-amber-700 transition font-semibold text-lg block mt-1">973-729-9335</a>
                <p className="text-gray-500 text-sm mt-1">Landline</p>
                  <a href="tel:+19737299335" className="text-amber-600 hover:text-amber-700 transition font-semibold text-lg block mt-1">407-821-8177</a>
                <p className="text-gray-500 text-sm mt-1">Mobile</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Send us a message</p>
                <a href="mailto:info@garyparrotbeach.com" className="text-amber-600 hover:text-amber-700 transition font-semibold text-lg">info@garyparrotbeach.com</a>
                <p className="text-gray-500 text-sm mt-3">We reply within 2 hours</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">Visit us</p>
                <p className="text-gray-700 font-semibold">Gary Seitz</p>
                <p className="text-gray-700">13 Green Apple Ct</p>
                <p className="text-gray-700">Sparta, NJ 07871</p>
                <p className="text-gray-500 text-sm mt-3">T. Lee Productions</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"><Send className="w-8 h-8 text-amber-600" /></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">Your inquiry has been received. Our luxury travel consultants will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{errorMsg}</div>}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                      placeholder="+1 (555) 000-0000"
                    />
                    <p className="text-xs text-gray-400 mt-1">We'll never share your phone number.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Package or Experience</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 bg-white"
                    >
                      <option value="">Select a package...</option>
                      {packageOptions.map(pkg => <option key={pkg.name} value={pkg.name}>{pkg.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 bg-white"
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
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Dates</label>
                    <input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                      placeholder="e.g., flexible"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 resize-none"
                      placeholder="Tell us about your travel preferences..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                  >
                    <Send size={20} /> {isSubmitting ? 'Sending...' : 'Send My Inquiry'}
                  </button>
                  <p className="text-xs text-gray-500 text-center">By submitting this form, you agree to be contacted by our luxury travel consultants.</p>
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
              <h3 className="font-serif font-bold text-amber-500 text-lg mb-4">PARROTBEACH</h3>
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
            <p>&copy; 2024 PARROTBEACH. All rights reserved.</p>
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