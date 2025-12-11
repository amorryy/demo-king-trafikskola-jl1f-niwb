"use client";
import { useState } from 'react'
import { Menu, X, Phone, Car } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logga */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1" 
              alt="King Trafikskola" 
              width={200} 
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Hem
            </Link>
            <Link href="/tjanster" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tjänster
            </Link>
            <Link href="/om-oss" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Om oss
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:08-60385885" 
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              08-603 85 85
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hem
            </Link>
            <Link 
              href="/tjanster" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link 
              href="/om-oss" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link 
              href="/kontakt" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            
            <div className="pt-4 border-t">
              <a 
                href="tel:08-60385885" 
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ring 08-603 85 85
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}