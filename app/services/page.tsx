'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-primary-yellow">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We provide a comprehensive suite of industrial solutions designed to power South Africa&apos;s infrastructure and logistics sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="mb-8 p-5 bg-primary-green/5 rounded-2xl inline-block group-hover:bg-primary-green transition-colors">
                  <service.icon className="w-10 h-10 text-primary-green group-hover:text-primary-yellow transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                
                <div className="space-y-4 mb-8">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-green flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-green font-bold hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">The Sbongilevictor Advantage</h2>
              <h3 className="text-4xl font-display font-bold mb-8">Why Our Solutions Stand Out</h3>
              <div className="space-y-8">
                {[
                  { title: "Integrated Approach", desc: "We combine logistics, mining, and engineering for a holistic solution." },
                  { title: "Local Expertise", desc: "Deep understanding of the South African regulatory and operational landscape." },
                  { title: "Scalable Operations", desc: "From small-scale supply to massive infrastructure projects." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-green font-bold">0{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-green rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <h4 className="text-3xl font-display font-bold mb-6">Need a custom solution?</h4>
              <p className="text-white/80 mb-10 text-lg leading-relaxed">
                Every project is unique. Our team of experts is ready to design a tailored service package that meets your specific industrial requirements.
              </p>
              <Link href="/#contact" className="inline-block bg-primary-yellow text-primary-green px-8 py-4 rounded-full font-bold hover:bg-primary-yellow-dark transition-all">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
