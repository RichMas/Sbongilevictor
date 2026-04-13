'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Target, TrendingUp, Briefcase, Users, ArrowRight, Clock, Handshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { companyInfo } from '@/lib/data';

export default function LeadershipPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-primary-yellow">Leadership</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guided by vision, driven by excellence. Meet the leadership behind Sbongilevictor Trading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src={companyInfo.ceo.image}
                alt={companyInfo.ceo.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-3xl font-display font-bold mb-2">{companyInfo.ceo.name}</p>
                <p className="text-primary-yellow font-bold uppercase tracking-widest text-sm">{companyInfo.ceo.title}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">The Visionary</h2>
              <h3 className="text-4xl font-display font-bold mb-8 leading-tight">
                A Message from our <span className="text-primary-green">CEO</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  &ldquo;At Sbongilevictor Trading, our mission has always been clear: to be a catalyst for industrial growth in South Africa. We don&apos;t just provide services; we build partnerships that drive progress.&rdquo;
                </p>
                <p>
                  {companyInfo.ceo.bio}
                </p>
                <p>
                  Our commitment to safety, quality, and reliability is non-negotiable. We understand the critical role we play in our clients&apos; supply chains and infrastructure projects, and we take that responsibility seriously.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <TrendingUp className="w-8 h-8 text-primary-green mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Growth Mindset</h4>
                  <p className="text-sm text-gray-500">Constantly evolving to meet the needs of a changing industrial landscape.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <ShieldCheck className="w-8 h-8 text-primary-green mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Ethical Leadership</h4>
                  <p className="text-sm text-gray-500">Unwavering commitment to transparency and business ethics.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">Our Foundation</h2>
            <h3 className="text-4xl font-display font-bold">The Values That Drive Us</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We believe in doing things right the first time, every time." },
              { icon: Users, title: "Collaboration", desc: "Working as one with our clients to achieve shared goals." },
              { icon: Briefcase, title: "Professionalism", desc: "Maintaining the highest standards in all our interactions." },
              { icon: Award, title: "Quality", desc: "Never compromising on the excellence of our output." },
              { icon: Clock, title: "Reliability", desc: "Being there when you need us, exactly as promised." },
              { icon: Handshake, title: "Trust", desc: "Building long-term relationships through integrity." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-green/5 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary-green" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">Ready to partner with a leader?</h3>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary-yellow text-primary-green px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-yellow-dark transition-all">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
