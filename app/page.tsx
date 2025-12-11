import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, Shield, Star, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Tjänster Sektion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Våra Tjänster</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professionell körkortsutbildning och handledarutbildning med erfarna instruktörer</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Car className="w-8 h-8" />}
              title="Körkortsutbildning"
              description="Komplett utbildning för att få ditt körkort med erfarna och certifierade instruktörer."
              features={["Teori och praktik", "Flexibla tider", "Erfarna instruktörer"]}
            />
            
            <ServiceCard 
              icon={<Users className="w-8 h-8" />}
              title="Handledarutbildning"
              description="Introduktionsutbildning varje fredag kl 16:00. Krav för privat övningskörning sedan 2006."
              features={["Fredagar kl 16:00", "Obligatorisk utbildning", "Certifierad kurs"]}
            />
            
            <ServiceCard 
              icon={<Shield className="w-8 h-8" />}
              title="Trygg Utbildning"
              description="Säker och trygg utbildningsmiljö med fokus på trafiksäkerhet och ansvarsfullt körande."
              features={["Säker miljö", "Kvalitetssäkrad", "Professionell standard"]}
            />
          </div>
        </div>
      </section>

      {/* Om Oss Sektion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Välkommen till King Trafikskola</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi är en etablerad trafikskola i Stockholm som erbjuder kvalitativ körkortsutbildning och handledarutbildning. Med våra erfarna instruktörer hjälper vi dig att nå ditt mål - att få körkortet på ett säkert och effektivt sätt.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Erfarna och certifierade instruktörer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Flexibla tider som passar din vardag</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Fokus på säkerhet och trafikvett</span>
                </div>
              </div>
              
              <Link href="/om-oss" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Läs mer om oss
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl p-8 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Handledarutbildning</h3>
                  <p className="text-blue-100 mb-6">
                    På fredagar kl 16:00 håller vi introduktionsutbildning som är ett krav för privat övningskörning sedan 2006.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-amber-300" />
                    <span>Fredagar kl 16:00</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-amber-300" />
                    <span>Obligatorisk sedan 2006</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-300" />
                    <span>Smågrupper för bästa resultat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Redo att börja din körkortsutbildning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Kontakta oss idag för att boka din första lektion eller handledarutbildning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <Mail className="mr-2 w-5 h-5" />
              Kontakta oss
            </Link>
            
            <a href="tel:08-603 85 85" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              <Phone className="mr-2 w-5 h-5" />
              Ring oss nu
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-100">
              <MapPin className="w-5 h-5" />
              <span>Bredängstorget 5, 127 34 Skärholmen</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}