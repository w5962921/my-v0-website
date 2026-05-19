'use client'

import Link from 'next/link'
import AnimatedHero from '@/components/animated-hero'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (same as all pages) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-600">
            Parrotbeach
          </Link>
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
      <AnimatedHero
        badge="LEGAL & PRIVACY"
        title="Privacy Policy"
        subtitle="Your trust matters"
        description="We are committed to protecting your personal information and being transparent about how we use it."
        backgroundGradient="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900"
        primaryCTA={{ text: 'Back to Home', href: '/' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-gray-700 space-y-8 leading-relaxed">
            <p className="text-sm text-gray-500">Effective date: January 1, 2024</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>When you use our website or contact us, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal identification information:</strong> Name, email address, phone number, and any details you provide in inquiry forms.</li>
              <li><strong>Travel preferences:</strong> Destinations, travel dates, number of travelers, and special requests.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and pages visited (via Vercel Analytics).</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide travel planning services.</li>
              <li>Send you updates about your journey (only if you have requested a quote or booked a trip).</li>
              <li>Improve our website and customer service.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">3. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted partners only when necessary to fulfill your travel requests (e.g., hotels, tour operators, airlines). These partners are contractually obligated to keep your information confidential and use it only for the services we request.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
            <p>Our website uses cookies and similar technologies (via Vercel Analytics) to understand how visitors interact with our site. You can disable cookies in your browser settings at any time.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:info@garyparrotbeach.com" className="text-amber-600 hover:underline">info@garyparrotbeach.com</a> or call <a href="tel:+19736870899" className="text-amber-600 hover:underline">973-687-0899</a>.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">7. Children’s Privacy</h2>
            <p>Our services are not directed to children under 18. We do not knowingly collect personal information from minors.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@garyparrotbeach.com" className="text-amber-600 hover:underline">info@garyparrotbeach.com</a></li>
              <li>Phone: <a href="tel:+19736870899" className="text-amber-600 hover:underline">973-687-0899</a> (Mobile)</li>
              <li>Mail: Gary Seitz, 13 Green Apple Ct, Sparta, NJ 07871, USA</li>
            </ul>
          </div>
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