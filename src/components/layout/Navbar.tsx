"use client";
import React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-primary">CRIG</span>
            <span className="text-white">SAFE</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">
                  Crane Types
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {craneTypes.map((crane) => (
                      <li key={crane.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={crane.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                          >
                            <div className="text-sm font-medium leading-none text-white">{crane.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {crane.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">
                  <a href="https://bigfootcrane.com/bigfoot-academy/" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    Certifications
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {certifications.map((cert) => (
                      <li key={cert.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={cert.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                          >
                            <div className="text-sm font-medium leading-none text-white">{cert.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {cert.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/data" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-800">
                    Data Analysis
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-800">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact Button */}
        <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black border-b border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2 font-bold text-white">Crane Types</div>
            {craneTypes.map((crane) => (
              <a
                key={crane.title}
                href={crane.href}
                className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
              >
                {crane.title}
              </a>
            ))}
            
            <div className="px-3 py-2 font-bold text-white">Certifications</div>
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
              >
                {cert.title}
              </a>
            ))}
            
            <Link 
              href="/data"
              className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
            >
              Data Analysis
            </Link>
            <Link 
              href="/about"
              className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
            >
              About
            </Link>
            <div className="px-3 py-3">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const craneTypes = [
  {
    title: "Tower Crane",
    description: "Fixed or rail-mounted cranes used in construction of tall buildings",
    href: "#tower-crane",
  },
  {
    title: "Mobile Crane",
    description: "Mounted on wheeled vehicles for mobility and versatility",
    href: "#mobile-crane",
  },
  {
    title: "Stiffboom Crane",
    description: "Features a rigid, non-folding boom for heavy lifting operations",
    href: "#stiffboom-crane",
  },
  {
    title: "Folding Boom Crane",
    description: "Articulated booms that can fold for transportation and confined spaces",
    href: "#folding-boom-crane",
  },
  {
    title: "Rigging Equipment",
    description: "Essential tools and gear used with cranes for safe lifting operations",
    href: "#rigging",
  },
];

const certifications = [
  {
    title: "Fulford Cranes",
    description: "Industry-leading crane operation training and certification programs",
    href: "https://fulford.ca/",
  },
  {
    title: "Bigfoot Crane",
    description: "Comprehensive training solutions for crane operators and technicians",
    href: "https://bigfootcrane.com/bigfoot-academy/",
  },
  {
    title: "Canadian Red Seal",
    description: "Nationally recognized certification for skilled trade workers",
    href: "https://www.red-seal.ca/eng/welcome.shtml",
  },
];

export default Navbar; 