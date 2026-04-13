'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Compliance', href: '/#compliance' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-display font-bold text-primary-green">
              SBONGILE<span className="text-primary-yellow">VICTOR</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-green",
                  pathname === link.href ? "text-primary-green" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/quote" className="bg-primary-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-green-dark transition-all shadow-lg shadow-primary-green/20">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-900"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/quote" 
            onClick={() => setIsMenuOpen(false)} 
            className="block text-lg font-medium text-primary-green"
          >
            Get a Quote
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
