'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { companyInfo, services } from '@/lib/data';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const leadData = {
      fullName: formData.get('fullName') as string,
      company: formData.get('company') as string || '',
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || '',
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      type: 'quote',
      status: 'new',
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'leads'), leadData);
      
      // Send email notification
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData),
        });
      } catch (emailErr) {
        console.error('Failed to send email notification:', emailErr);
        // We don't block the success UI if email fails, as it's saved in Firestore
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting quote:', err);
      setError('There was an error submitting your request. Please try again or contact us directly.');
      try {
        handleFirestoreError(err, OperationType.CREATE, 'leads');
      } catch (fErr) {
        // Error already logged by handleFirestoreError
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-2xl border border-gray-100"
        >
          <div className="w-24 h-24 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-primary-green" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Request Received!</h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Thank you for reaching out to {companyInfo.name}. Our team will review your requirements and get back to you with a formal quote within 24 hours.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-primary-green text-white px-8 py-4 rounded-full font-bold hover:bg-primary-green-dark transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-primary-green transition-colors font-bold">
            <ArrowLeft className="w-5 h-5" /> Back
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-gray-900">Request a Quote</h1>
          </div>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-primary-green uppercase tracking-widest mb-4">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  'Fast Turnaround Times',
                  'Professional Consultation',
                  'Competitive Pricing',
                  'Quality Guaranteed'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="w-5 h-5 bg-primary-green/10 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-primary-green" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-primary-green rounded-3xl text-white shadow-xl shadow-primary-green/20">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-white/80 text-sm mb-6">Call us directly for urgent requirements.</p>
              <a href={`tel:${companyInfo.contact.phone}`} className="text-xl font-bold block mb-1">
                {companyInfo.contact.phone}
              </a>
              <p className="text-xs text-white/60">Available Mon - Fri, 8am - 5pm</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 flex items-center gap-2">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none transition-all" 
                      placeholder="e.g. John Smith" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 flex items-center gap-2">
                      <Building2 className="w-3 h-3" /> Company Name
                    </label>
                    <input 
                      name="company"
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none transition-all" 
                      placeholder="e.g. Acme Corp" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Phone Number
                    </label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none transition-all" 
                      placeholder="+27 00 000 0000" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Service Required</label>
                  <div className="relative">
                    <select 
                      required
                      name="service"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none appearance-none transition-all"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Other / General Inquiry</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> Project Details
                  </label>
                  <textarea 
                    required
                    name="message"
                    rows={5} 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-green outline-none transition-all resize-none" 
                    placeholder="Tell us about your requirements, quantities, or specific project needs..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}

                <button 
                  disabled={isLoading}
                  className="w-full bg-primary-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-green-dark transition-all shadow-xl shadow-primary-green/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
