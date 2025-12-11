import { Phone, Mail, MapPin, Car, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Företagsinfo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1" 
                alt="King Trafikskola" 
                width={160} 
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              King Trafikskola - din pålitliga partner för körkortsutbildning och handledarutbildning i Stockholm.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Professionell utbildning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Flexibla tider</span>
              </div>
            </div>
          </div>
          
          {/* Kontaktinfo */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4">
              <a href="tel:08-60385885" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>08-603 85 85</span>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div>Bredängstorget 5</div>
                  <div>127 34 Skärholmen</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Snabblänkar */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Snabblänkar</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Hem
              </Link>
              <Link href="/tjanster" className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Tjänster
              </Link>
              <Link href="/om-oss" className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Om oss
              </Link>
              <Link href="/kontakt" className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Kontakt
              </Link>
            </div>
          </div>
          
          {/* Våra Tjänster */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Våra Tjänster</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <div className="font-medium text-white mb-1">Körkortsutbildning</div>
                <div className="text-sm">Teori och praktik</div>
              </div>
              <div className="text-gray-300">
                <div className="font-medium text-white mb-1">Handledarutbildning</div>
                <div className="text-sm">Fredagar kl 16:00</div>
              </div>
              <div className="mt-4 p-4 bg-blue-900 bg-opacity-50 rounded-lg">
                <div className="text-sm text-blue-200 mb-2">Viktigt</div>
                <div className="text-xs text-gray-300">
                  Avbokningar skall ske senast en arbetsdag innan kl 12.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Handledarutbildning info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Handledarutbildning</h4>
                <p className="text-blue-200 mb-4 md:mb-0">
                  På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning.
                </p>
              </div>
              <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Boka nu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} King Trafikskola. Alla rättigheter förbehållna.
            </div>
            <div className="text-gray-400 text-sm">
              Skapad av{' '}
              <a 
                href="https://noorysolution.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Noory Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}