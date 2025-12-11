import { Car, Users, Clock, Shield, Star, Award, Heart, Target } from 'lucide-react'
import Link from 'next/link'

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Om King Trafikskola</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Din pålitliga partner för körkortsutbildning i Stockholm
            </p>
          </div>
        </div>
      </section>

      {/* Vår Historia */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Vår Historia och Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                King Trafikskola har varit en pålitlig partner för körkortsutbildning i Stockholm under många år. Vi är stolta över att ha hjälpt hundratals elever att uppnå sitt mål att få körkort på ett säkert och effektivt sätt.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Sedan 2006 har vi även erbjudit handledarutbildning, en obligatorisk utbildning för dem som vill övningsköra privat. Vår erfarenhet och engagemang för trafiksäkerhet gör oss till det rätta valet för din körkortsresa.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Nöjda elever</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">18+</div>
                  <div className="text-gray-600">År av erfarenhet</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Våra Värderingar</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Säkerhet Först</h4>
                    <p className="text-blue-100">Trafiksäkerhet är vår högsta prioritet i all utbildning</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personlig Service</h4>
                    <p className="text-blue-100">Vi bryr oss om varje elevs individuella behov och utveckling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Målmedvetenhet</h4>
                    <p className="text-blue-100">Vi hjälper dig att nå ditt mål på kortast möjliga tid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vårt Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Våra Styrkor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Det som gör King Trafikskola till rätt val för din körkortsutbildning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Erfarna Instruktörer</h3>
              <p className="text-gray-600">
                Våra certifierade instruktörer har mångårig erfarenhet och är passionerade för att lära ut säker körning.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexibla Tider</h3>
              <p className="text-gray-600">
                Vi anpassar utbildningen efter dina behov med flexibla tider som passar din vardag och ditt schema.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hög Kvalitet</h3>
              <p className="text-gray-600">
                Kvalitetssäkrad utbildning med moderna metoder och fokus på både teori och praktisk färdighet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placering */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Vårt Läge i Stockholm</h2>
              <p className="text-lg text-gray-600 mb-6">
                King Trafikskola är strategiskt belägen på Bredängstorget 5 i Skärholmen, vilket gör oss lättillgängliga för elever från hela Stockholm och omkringliggande områden.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vår centrala placering ger oss möjlighet att erbjuda körning i olika trafikmiljöer, från lugna bostadsområden till mer intensiva stadsmiljöer, vilket ger våra elever en bred erfarenhet.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Kontaktinformation</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">King Trafikskola</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Tel: 08-603 85 85</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Bredängstorget 5, 127 34 Skärholmen</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Varför Välja Oss?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span>Erfarna och tålmodiga instruktörer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span>Individuellt anpassad utbildning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span>Konkurrensmässiga priser</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span>Fokus på trafiksäkerhet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span>Regelbunden handledarutbildning</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Kontakta oss idag
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}