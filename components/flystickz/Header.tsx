'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Artists', href: '#artists' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2 md:py-3' : 'bg-transparent py-3 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center gap-2"
          onClick={() => scrollToSection('#home')}
        >
          <Image
            src="https://flystickz.com/wp-content/uploads/2025/12/cropped-Flystickz_Logo-removebg-preview.png"
            alt="Flystickz Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-wider text-gradient-gold">
            FlyStickz
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`relative text-xs lg:text-sm uppercase tracking-widest transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1.5 left-0 right-0 h-1 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 168, 83, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 bg-primary text-primary-foreground font-semibold text-xs lg:text-sm uppercase tracking-wider rounded-sm transition-all"
          onClick={() => scrollToSection('#products')}
        >
          Shop Now
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 0 : -6,
            }}
            className="absolute w-6 h-0.5 bg-primary"
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            className="absolute w-6 h-0.5 bg-primary"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? 0 : 6,
            }}
            className="absolute w-6 h-0.5 bg-primary"
          />
        </button>
      </div>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-[56px] bg-background/98 backdrop-blur-lg z-40"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center h-full gap-6 p-6"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-display uppercase tracking-widest transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-foreground/70'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => scrollToSection('#products')}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg uppercase tracking-wider rounded-sm"
              >
                Shop Now
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
