import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react'

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakta Oss</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Vi hjälper dig gärna med frågor om körkortsutbildning och handledarutbildning
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Info & Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Kontaktinformation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktinformation</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                    <a href="tel:08-60385885" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                      08-603 85 85
                    </a>
                    <p className="text-gray-600 mt-1">Ring oss för direkta frågor och bokningar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adress</h3>
                    <p className="text-gray-700 font-medium text-lg">Bredängstorget 5</p>
                    <p className="text-gray-700 text-lg">127 34 Skärholmen</p>
                    <p className="text-gray-600 mt-1">Stockholm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Handledarutbildning</h3>
                    <p className="text-gray-700 font-medium text-lg">Fredagar kl 16:00</p>
                    <p className="text-gray-600 mt-1">Regelbunden introduktionsutbildning</p>
                  </div>
                </div>
              </div>
              
              {/* Viktig Information */}
              <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  Viktigt om avbokningar
                </h3>
                <p className="text-amber-800">
                  "Avbokningar skall ske senast en arbetsdag innan kl 12."
                </p>
              </div>
            </div>
            
            {/* Kontaktformulär */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Skicka ett meddelande</h2>
                <p className="text-gray-600 mb-8">Fyll i formuläret så återkommer vi till dig så snart som möjligt.</p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vanliga Frågor */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Vanliga Frågor</h2>
            <p className="text-xl text-gray-600">
              Här hittar du svar på de mest vanliga frågorna om vår utbildning
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                När genomförs handledarutbildningen?
              </h3>
              <p className="text-gray-700">
                På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hur lång tid innan ska jag avboka?
              </h3>
              <p className="text-gray-700">
                Avbokningar skall ske senast en arbetsdag innan kl 12. Detta är viktigt för att vi ska kunna erbjuda tiden till andra elever.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vad ingår i körkortsutbildningen?
              </h3>
              <p className="text-gray-700">
                Vår körkortsutbildning inkluderar både teoretisk och praktisk utbildning. Vi hjälper dig genom hela processen från ansökan till godkänt körprov.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hur bokar jag en tid?
              </h3>
              <p className="text-gray-700">
                Du kan ringa oss på 08-603 85 85 eller använda kontaktformuläret ovan. Vi återkommer till dig så snart som möjligt för att boka en passande tid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Redo att börja?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Ring oss idag för att diskutera din körkortsutbildning
          </p>
          <a href="tel:08-60385885" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <Phone className="mr-2 w-5 h-5" />
            08-603 85 85
          </a>
        </div>
      </section>
    </>
  )
}