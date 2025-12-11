import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  className?: string
}

export default function ServiceCard({ icon, title, description, features, className = '' }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      {/* Icon */}
      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      
      {/* Titel */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      
      {/* Beskrivning */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Funktioner */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      <Link 
        href="/kontakt" 
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
      >
        Läs mer
        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}