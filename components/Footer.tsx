'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { companyInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="text-3xl font-display font-bold text-white mb-6 block">
              SBONGILE<span className="text-primary-yellow">VICTOR</span>
            </span>
            <p className="text-gray-400 max-w-sm mb-8">
              Building the Future. Delivering Excellence. A multi-industry leader in South Africa providing specialized industrial solutions.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6 text-primary-yellow">Quick Links</h5>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6 text-primary-yellow">Contact Info</h5>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                <span>{companyInfo.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                <span>{companyInfo.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                <span>{companyInfo.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
          <p className="font-bold tracking-widest uppercase text-xs">CREATED BY PARAGONCONSULT</p>
        </div>
      </div>
    </footer>
  );
}
