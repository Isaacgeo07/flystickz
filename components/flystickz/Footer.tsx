'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: 'Company', href: '#about' },
      { name: 'Brand Journey', href: '#about' },
      { name: 'Dealer Locations', href: '#contact' },
    ],
    links: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Return Policy', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms and Conditions', href: '#' },
    ],
    social: [
      { name: 'Facebook', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'TikTok', href: '#' },
    ],
  }

  return (
    <footer className="relative py-10 md:py-16 border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-3 md:mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image
                src="https://flystickz.com/wp-content/uploads/2025/12/cropped-Flystickz_Logo-removebg-preview.png"
                alt="Flystickz Logo"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
              <h2 className="text-2xl md:text-3xl font-display tracking-wider text-gradient-gold">
                FlyStickz
              </h2>
            </motion.div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Premium drumsticks crafted for every drummer. 
              Feel the stick. Own the groove.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 md:gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-[10px] md:text-xs font-semibold">{social.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 md:mb-4">About</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 md:mb-4">Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 md:mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
              Subscribe for exclusive updates and offers.
            </p>
            <div className="space-y-2 md:space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-xs md:text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 md:py-2.5 bg-primary text-primary-foreground font-semibold text-xs md:text-sm uppercase tracking-wider rounded-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 md:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[10px] md:text-sm text-muted-foreground text-center md:text-left">
            Copyright {currentYear} - FlyStickz Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
