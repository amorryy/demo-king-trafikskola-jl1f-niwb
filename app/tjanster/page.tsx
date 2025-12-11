import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, Shield, Star, CheckCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TjansterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Våra Tjänster</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Professionell körkortsutbildning och handledarutbildning i Stockholm
            </p>
          </div>
        </div>
      </section>

      {/* Tjänster Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ServiceCard 
              icon={<Car className="w-10 h-10" />}
              title="Körkortsutbildning"
              description="Komplett utbildning för B-körkort med teori och praktiska lektioner. Vi guidar dig genom hela processen från ansökan till godkänt prov."
              features={[
                "Teorilektioner och provträning",
                "Praktisk körning med instruktör",
                "Flexibla tider som passar dig",
                "Erfarna och certifierade instruktörer",
                "Hjälp med ansökan och provbokning"
              ]}
            />
            
            <ServiceCard 
              icon={<Users className="w-10 h-10" />}
              title="Handledarutbildning"
              description="Obligatorisk introduktionsutbildning för privat övningskörning. Genomförs varje fredag kl 16:00 och har varit ett krav sedan 2006."
              features={[
                "Varje fredag kl 16:00",
                "Obligatorisk sedan 2006",
                "Certifierad utbildning",
                "Smågrupper för bästa resultat",
                "Teoretisk och praktisk genomgång"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Detaljerad Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Körkortsutbildning Detaljer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Körkortsutbildning - B-körkort</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-blue-600" />
                    Teoriutbildning
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Trafikregler och vägmärken</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Riskutbildning och miljöpåverkan</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Provträning med riktiga frågor</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    <Car className="w-6 h-6 mr-3 text-amber-600" />
                    Praktisk Körning
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Grundläggande bilkontroll</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Körning i olika trafikmiljöer</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500" />Provförberedelser</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Handledarutbildning Detaljer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Handledarutbildning</h2>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Viktigt att veta</h3>
                <p className="text-blue-100 mb-6">
                  På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-amber-300" />
                    <div>
                      <div className="font-semibold">Tid: Fredagar kl 16:00</div>
                      <div className="text-blue-200 text-sm">Regelbunden utbildning</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-amber-300" />
                    <div>
                      <div className="font-semibold">Obligatorisk sedan 2006</div>
                      <div className="text-blue-200 text-sm">Krav för privat övningskörning</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-amber-300" />
                    <div>
                      <div className="font-semibold">Smågrupper</div>
                      <div className="text-blue-200 text-sm">Personlig uppmärksamhet</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vad ingår i utbildningen?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <strong>Teoretisk del:</strong> Trafikregler, ansvar som handledare
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <strong>Praktisk del:</strong> Hur man handleder på ett säkert sätt
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <strong>Certifikat:</strong> Intyg som krävs för privat övningskörning
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avbokningsinfo */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Viktigt om avbokningar</h3>
            <p className="text-amber-800 text-lg">
              "Avbokningar skall ske senast en arbetsdag innan kl 12."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Redo att komma igång?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Kontakta oss för att boka din utbildning eller få mer information
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <Mail className="mr-2 w-5 h-5" />
              Kontakta oss
            </Link>
            
            <a href="tel:08-60385885" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              <Phone className="mr-2 w-5 h-5" />
              08-603 85 85
            </a>
          </div>
        </div>
      </section>
    </>
  )
}