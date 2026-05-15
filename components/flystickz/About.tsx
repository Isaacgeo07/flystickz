'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Balance',
      description: 'Precision-weighted for perfect control and response',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: 'Durability',
      description: 'Built to withstand the most intense sessions',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Feel',
      description: 'Crafted to respond to your every touch',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4a853 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-4 md:mb-6">
              Our Story
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider mb-4 md:mb-6">
              <span className="text-foreground">BUILT FOR</span>
              <br />
              <span className="text-gradient-gold">EVERY DRUMMER</span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                You know the feeling - drumsticks in hand, pulse locked in, groove flowing. 
                At Flystickz, we live for that moment.
              </p>
              <p>
                Whether you are laying down gospel chops in the shed or holding down a groove 
                on stage, Flystickz drumsticks are made to respond to your touch on the drums, 
                match your energy, and move with your rhythm.
              </p>
              <p className="text-foreground font-medium">
                We do not just make drumsticks. We make tools for expression. 
                We make drumsticks that feel and sound right.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-wider group text-sm md:text-base"
            >
              <span>Learn More About Us</span>
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Content - Image and Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            {/* About Image */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="https://flystickz.com/wp-content/uploads/2024/08/Flystickz-Drumsticks03-1024x961.jpg"
                alt="Flystickz Drumsticks"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group glass p-4 md:p-6 rounded-lg cursor-pointer transition-all hover:border-primary/50"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
              {[
                { value: '6', label: 'Stick Sizes' },
                { value: '15+', label: 'Artists' },
                { value: '5K+', label: 'Drummers' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-3 md:p-4 glass rounded-lg"
                >
                  <div className="text-2xl md:text-3xl font-display text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
