'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: '2b',
    name: '2B Drumsticks',
    description: 'Heavy and powerful for rock and hard-hitting styles. Extended reach with maximum impact.',
    features: ['Heavy Weight', 'Extended Reach', 'Maximum Power'],
    price: 15,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/flyss-16bb-819x1024.jpg',
    popular: false,
  },
  {
    id: '5a',
    name: '5A Drumsticks',
    description: 'The most versatile size. Perfect balance for all genres from jazz to rock.',
    features: ['Versatile', 'Balanced Feel', 'All Genres'],
    price: 13,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/gfly-4bb-819x1024.jpg',
    popular: true,
  },
  {
    id: '5b',
    name: '5B Drumsticks',
    description: 'Slightly heavier than 5A for more volume and projection.',
    features: ['More Volume', 'Great Projection', 'Balanced Weight'],
    price: 13,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/fly-33bb-819x1024.jpg',
    popular: false,
  },
  {
    id: '7a',
    name: '7A Drumsticks',
    description: 'Lighter and thinner for jazz, acoustic, and low-volume settings.',
    features: ['Lightweight', 'Quick Response', 'Jazz Favorite'],
    price: 13,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/fly-6bb-819x1024.jpg',
    popular: true,
  },
  {
    id: 'x5a',
    name: 'X5A Drumsticks',
    description: 'Extended length 5A for greater reach and leverage.',
    features: ['Extended Length', '5A Diameter', 'Extra Reach'],
    price: 15,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/fly-37bb-819x1024.jpg',
    popular: false,
  },
  {
    id: 'x5b',
    name: 'X5B Drumsticks',
    description: 'Extended length 5B for power players who need more stick.',
    features: ['Extended Length', '5B Diameter', 'Power Playing'],
    price: 15,
    image: 'https://flystickz.com/wp-content/uploads/2025/04/fly-5bb-819x1024.jpg',
    popular: false,
  },
]

const packages = [
  {
    name: 'Premium Package',
    description: 'A pair of our meticulously designed drumsticks',
    price: 13,
    includes: ['One Pair of Drumsticks', 'Premium Quality', 'Balanced Design'],
    highlight: false,
  },
  {
    name: 'Deluxe Box',
    description: 'The ultimate drumming package with premium accessories',
    price: 5,
    originalPrice: 9,
    includes: ['One Pair of Drumsticks', 'Branded Face Towel', 'Gift-Ready Packaging', 'Exclusive Branding'],
    highlight: true,
  },
]

export default function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section id="products" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div ref={ref} className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-4 md:mb-6">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider mb-3 md:mb-4">
            <span className="text-foreground">PREMIUM</span>{' '}
            <span className="text-gradient-gold">DRUMSTICKS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm md:text-base px-4">
            Crafted from durable materials and designed for comfort and control. 
            Find the perfect pair for your drumming style.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative glass p-4 md:p-6 rounded-xl h-full transition-all duration-300 ${
                  hoveredProduct === product.id ? 'border-primary/50' : ''
                }`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 px-2 md:px-3 py-0.5 md:py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-full z-10">
                    Popular
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-40 sm:h-48 md:h-56 mb-4 md:mb-6 rounded-lg overflow-hidden bg-secondary/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>

                {/* Product Info */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-border">
                  <div>
                    <span className="text-xl md:text-2xl font-bold text-gradient-gold">${product.price}</span>
                    <span className="text-xs md:text-sm text-muted-foreground ml-1">USD</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-primary text-primary-foreground text-xs md:text-sm font-semibold uppercase tracking-wider rounded-sm"
                  >
                    Order
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-display tracking-wider text-center mb-8 md:mb-12">
            <span className="text-foreground">CHOOSE YOUR</span>{' '}
            <span className="text-gradient-gold">PACKAGE</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative glass p-5 md:p-8 rounded-xl ${
                  pkg.highlight ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-full whitespace-nowrap">
                    Best Value
                  </div>
                )}

                <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-1 md:mb-2">{pkg.name}</h4>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{pkg.description}</p>

                <div className="flex items-baseline gap-2 mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-gradient-gold">${pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-base md:text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                  )}
                  <span className="text-xs md:text-sm text-muted-foreground">USD</span>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground/80">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: pkg.highlight ? '0 0 40px rgba(212, 168, 83, 0.5)' : 'none' }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 md:py-3 font-semibold uppercase tracking-wider rounded-sm transition-all text-sm md:text-base ${
                    pkg.highlight
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-primary/50 text-foreground hover:bg-primary/10'
                  }`}
                >
                  Select Package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
