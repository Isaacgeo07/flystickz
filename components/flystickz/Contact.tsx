'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const whatsappNumbers = [
    { label: 'Sales', number: '+2348012345678', displayNumber: '+234 801 234 5678' },
    { label: 'Support', number: '+2348098765432', displayNumber: '+234 809 876 5432' },
  ]

  const getWhatsAppLink = (number: string) => {
    const cleanNumber = number.replace(/[^0-9]/g, '')
    return `https://wa.me/${cleanNumber}?text=Hello%20Flystickz,%20I%20would%20like%20to%20inquire%20about%20your%20drumsticks.`
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
    { name: 'YouTube', href: '#', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
    { name: 'TikTok', href: '#', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z' },
  ]

  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-4 md:mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider mb-3 md:mb-4">
            <span className="text-foreground">CONTACT</span>{' '}
            <span className="text-gradient-gold">US</span>
          </h2>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm md:text-base px-4">
            Have questions about our drumsticks or want to become a distributor? 
            We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Subject
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="distributor">Become a Distributor</option>
                  <option value="artist">Artist Endorsement</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm md:text-base"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 168, 83, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 md:py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-3 md:space-y-4">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass rounded-lg cursor-pointer group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-muted-foreground">Email Us</h4>
                  <p className="text-foreground font-medium text-sm md:text-base">info@flystickz.com</p>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-3 md:p-4 glass rounded-lg"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm text-muted-foreground">Send us a WhatsApp Message</h4>
                  </div>
                </div>
                <div className="space-y-2 pl-0 md:pl-16">
                  {whatsappNumbers.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={getWhatsAppLink(item.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, backgroundColor: 'rgba(37, 211, 102, 0.1)' }}
                      className="flex items-center gap-3 p-2 rounded-lg transition-colors group"
                    >
                      <span className="text-xs md:text-sm text-muted-foreground min-w-[60px]">{item.label}:</span>
                      <span className="text-foreground font-medium text-sm md:text-base group-hover:text-[#25D366] transition-colors">
                        {item.displayNumber}
                      </span>
                      <svg className="w-4 h-4 text-muted-foreground group-hover:text-[#25D366] transition-colors ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass rounded-lg cursor-pointer group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-muted-foreground">Location</h4>
                  <p className="text-foreground font-medium text-sm md:text-base">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Follow Us</h4>
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">Join the Family</h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                Get the latest on Flystickz with exclusive content, news, and resources.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 md:px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-xs md:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 md:px-4 py-2 bg-primary text-primary-foreground font-semibold text-xs md:text-sm uppercase tracking-wider rounded-lg whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
