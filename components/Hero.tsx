import { ArrowRight, Phone, Car, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Huvudinnehåll */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Ta ditt körkort med
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 block">
                King Trafikskola
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Professionell körkortsutbildning och handledarutbildning i Stockholm. Vi guidar dig hela vägen till ditt körkort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/kontakt" className="inline-flex items-center bg-amber-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors transform hover:scale-105">
                Boka utbildning
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              
              <a href="tel:08-60385885" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                <Phone className="mr-2 w-6 h-6" />
                08-603 85 85
              </a>
            </div>
            
            {/* Fördelar */}
            <div className="grid sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 space-y-2 sm:space-y-0">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="font-semibold">B-körkort</div>
                  <div className="text-blue-200 text-sm">Teori & Praktik</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 space-y-2 sm:space-y-0">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="font-semibold">Handledarutbildning</div>
                  <div className="text-blue-200 text-sm">Fredagar kl 16:00</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 space-y-2 sm:space-y-0">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="font-semibold">Erfarna instruktörer</div>
                  <div className="text-blue-200 text-sm">Kvalitetssäkrat</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bild/Info kort */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Handledarutbildning</h3>
                <p className="text-blue-100">Varje fredag kl 16:00</p>
              </div>
              
              <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 mb-6">
                <p className="text-blue-100 text-center leading-relaxed">
                  "På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning."
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-amber-300 font-semibold">
                  <Star className="w-5 h-5" />
                  <span>Obligatorisk sedan 2006</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 bg-opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 bg-opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}