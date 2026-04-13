'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Mail, 
  MessageSquare,
  ArrowRight,
  FileText,
  ShieldCheck,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { companyInfo, services } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/industrial/1920/1080?blur=2"
            alt="Industrial Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-green/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Building the Future. <br />
              <span className="text-primary-yellow">Delivering Excellence.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              {companyInfo.name} is a premier South African multi-industry leader specializing in logistics, mining, construction, and engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-primary-yellow text-primary-green px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-yellow-dark transition-all flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/teamwork/800/1000"
                alt="About Us"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary-green p-8 text-white">
                <p className="text-2xl font-display font-bold">10+ Years of Expertise</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">In Infrastructure & Logistics</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">About Us</h2>
              <h3 className="text-4xl font-display font-bold mb-6 leading-tight">
                Your Trusted Partner in <span className="text-primary-green">Industrial Growth</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {companyInfo.name} is a dynamic South African company committed to delivering high-quality services across multiple sectors. We pride ourselves on our reliability, expertise, and unwavering commitment to service excellence.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                From complex civil engineering projects to streamlined logistics and supply chain management, we position ourselves as a strategic partner for businesses looking for excellence in infrastructure and industrial operations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0" />
                  <span className="font-semibold">Reliability</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0" />
                  <span className="font-semibold">Expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0" />
                  <span className="font-semibold">Quality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0" />
                  <span className="font-semibold">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Comprehensive Industrial Solutions</h3>
            <p className="text-gray-600">We offer a diverse range of services tailored to meet the rigorous demands of the South African industrial landscape.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-primary-green/5 rounded-xl inline-block group-hover:bg-primary-green transition-colors">
                  <service.icon className="w-10 h-10 text-primary-green group-hover:text-primary-yellow transition-colors" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.shortDescription}</p>
                
                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-green font-bold hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the CEO Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-green rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 lg:p-20 text-white">
                <h2 className="text-sm font-bold text-primary-yellow uppercase tracking-[0.2em] mb-4">Leadership</h2>
                <h3 className="text-4xl font-display font-bold mb-8">Meet Our CEO</h3>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Guided by the visionary leadership of {companyInfo.ceo.name}, we are committed to excellence and innovation in everything we do.
                </p>
                <Link href="/leadership" className="inline-flex items-center gap-2 bg-white text-primary-green px-8 py-4 rounded-full font-bold hover:bg-primary-yellow hover:text-primary-green transition-all">
                  Read CEO Profile <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-[500px] md:h-full min-h-[500px]">
                <Image 
                  src="https://picsum.photos/seed/ceo-shaun/800/1000"
                  alt={companyInfo.ceo.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-yellow/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary-yellow uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-display font-bold mb-8">Excellence in Every Detail</h3>
              <div className="space-y-6">
                {[
                  { title: "Experienced Team", desc: "Our professionals bring decades of combined industry experience." },
                  { title: "Reliable Service Delivery", desc: "We pride ourselves on meeting deadlines and exceeding expectations." },
                  { title: "Competitive Pricing", desc: "High-quality solutions that fit your budget requirements." },
                  { title: "Quality Assurance", desc: "Rigorous standards applied to every project and supply." },
                  { title: "Multi-industry Expertise", desc: "Versatile solutions across logistics, mining, and engineering." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary-yellow" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] hidden md:block">
              <Image 
                src="https://picsum.photos/seed/machinery/800/1200"
                alt="Heavy Machinery"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Official Documents */}
      <section id="compliance" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-[0.2em] mb-4">Compliance</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Official Documentation & Registration</h3>
            <p className="text-gray-600">We maintain full transparency and compliance with South African regulatory standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary-green" />
              </div>
              <h4 className="text-xl font-bold mb-4">CSD Registration</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Supplier Number:</span>
                  <span className="text-gray-900 font-bold">{companyInfo.compliance.csdNumber}</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-600 font-bold">Active</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Report Date:</span>
                  <span className="text-gray-900">12 Mar 2026</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary-green" />
              </div>
              <h4 className="text-xl font-bold mb-4">Company Details</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Reg Number:</span>
                  <span className="text-gray-900 font-bold">{companyInfo.compliance.regNumber}</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Type:</span>
                  <span className="text-gray-900">Private Company</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Tax Status:</span>
                  <span className="text-green-600 font-bold">{companyInfo.compliance.taxStatus}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-green" />
              </div>
              <h4 className="text-xl font-bold mb-4">B-BBEE Status</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Black Owned:</span>
                  <span className="text-gray-900 font-bold">{companyInfo.compliance.beeStatus}</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-medium">Empowering Supplier:</span>
                  <span className="text-gray-900">Yes</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Verification:</span>
                  <span className="text-gray-900">Manual Required</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary-green/5 rounded-3xl border border-primary-green/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Official Registration Report Available</p>
                <p className="text-sm text-gray-500">Full CSD Registration Report (10 Pages) is available upon request.</p>
              </div>
            </div>
            <Link href="#contact" className="bg-primary-green text-white px-8 py-3 rounded-full font-bold hover:bg-primary-green-dark transition-all">
              Request Documents
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-primary-green text-white">
                <h3 className="text-4xl font-display font-bold mb-8">Get in Touch</h3>
                <p className="text-white/70 mb-12 text-lg">
                  Ready to start your next project or need a reliable supply partner? Contact us today for a professional consultation.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 uppercase font-bold">Call Us</p>
                      <p className="text-xl font-bold">{companyInfo.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 uppercase font-bold">Visit Us</p>
                      <p className="text-xl font-bold">{companyInfo.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 uppercase font-bold">Email Us</p>
                      <p className="text-xl font-bold">{companyInfo.contact.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10">
                  <a 
                    href={`https://wa.me/${companyInfo.contact.whatsapp}`} 
                    target="_blank" 
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    <MessageSquare className="w-6 h-6" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase text-gray-400">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-green outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase text-gray-400">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-green outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-400">Service Required</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-green outline-none appearance-none">
                      {services.map(s => (
                        <option key={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-400">Message</label>
                    <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-green outline-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full bg-primary-green text-white py-5 rounded-xl font-bold text-lg hover:bg-primary-green-dark transition-colors shadow-xl shadow-primary-green/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
