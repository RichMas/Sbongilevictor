'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { services } from '@/lib/data';
import Image from 'next/image';

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find(s => s.id === params.id);

  if (!service) {
    return notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src={`https://picsum.photos/seed/${service.id}/1920/1080?blur=4`}
            alt={service.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-primary-yellow font-bold mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Our Process</h2>
                <div className="space-y-8">
                  {service.process.map((step, index) => {
                    const [title, desc] = step.split(': ');
                    return (
                      <div key={index} className="flex gap-6">
                        <div className="w-12 h-12 bg-primary-green text-white rounded-2xl flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{title}</h4>
                          <p className="text-gray-600 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-display font-bold mb-8">Industries Served</h2>
                <div className="flex flex-wrap gap-4">
                  {service.industries.map((industry, index) => (
                    <div key={index} className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 font-semibold text-primary-green">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-8 bg-primary-green text-white rounded-3xl shadow-xl">
                <h3 className="text-2xl font-display font-bold mb-6 text-primary-yellow">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-yellow flex-shrink-0 mt-1" />
                      <span className="text-white/90 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Need Assistance?</h3>
                <p className="text-gray-600 mb-8">
                  Our specialists are ready to discuss your specific requirements and provide a detailed quote.
                </p>
                <Link 
                  href="/quote" 
                  className="w-full bg-primary-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-green-dark transition-colors"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Other Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 px-2">Other Services</h3>
                {services.filter(s => s.id !== service.id).slice(0, 3).map((other) => (
                  <Link 
                    key={other.id} 
                    href={`/services/${other.id}`}
                    className="block p-4 bg-white border border-gray-100 rounded-2xl hover:border-primary-green hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold group-hover:text-primary-green transition-colors">{other.title}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-green transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">Ready to get started with {service.title}?</h3>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-primary-yellow text-primary-green px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-yellow-dark transition-all">
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
