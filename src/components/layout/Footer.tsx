import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">CRIG</span>
              <span className="text-white">SAFE</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Providing data-driven insights on how proper training improves safety, efficiency, 
              and quality while reducing costs in crane operations.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
              <SocialIcon icon={<Youtube size={18} />} href="https://youtube.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/data">Data Analysis</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Crane Types */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Crane Types</h4>
            <ul className="space-y-2">
              <FooterLink href="#tower-crane">Tower Crane</FooterLink>
              <FooterLink href="#mobile-crane">Mobile Crane</FooterLink>
              <FooterLink href="#stiffboom-crane">Stiffboom Crane</FooterLink>
              <FooterLink href="#folding-boom-crane">Folding Boom Crane</FooterLink>
              <FooterLink href="#rigging">Rigging Equipment</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Crane Way, Vancouver, BC V6G 1Z9, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (604) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@crigsafe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CRIGSAFE. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 text-sm hover:text-primary">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-primary transition-colors">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors"
  >
    {icon}
  </a>
);

export default Footer; 