'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://flystickz.com/wp-content/uploads/2024/08/Flystickz-Drumsticks07-1-1024x683.jpg"
          alt="Flystickz Drumsticks"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Gradient Orbs - smaller on mobile */}
        <motion.div
          animate={{
            x: isMobile ? 0 : mousePosition.x * 2,
            y: isMobile ? 0 : mousePosition.y * 2,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: isMobile ? 0 : -mousePosition.x * 1.5,
            y: isMobile ? 0 : -mousePosition.y * 1.5,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-primary/15 rounded-full blur-[60px] md:blur-[100px]"
        />
        
        {/* Animated Lines - hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full opacity-20 hidden md:block">
          <motion.line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="70%"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="0%"
            y1="70%"
            x2="100%"
            y2="30%"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#d4a853" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        style={isMobile ? {} : { y, opacity, scale }}
        className="relative z-20 container mx-auto px-4 md:px-6 text-center pt-20 md:pt-0"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary border border-primary/30 rounded-full">
            Premium Drumsticks
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display tracking-wider mb-4 md:mb-6 leading-tight"
        >
          <span className="block text-foreground">FEEL THE STICK.</span>
          <span className="block text-gradient-gold">OWN THE GROOVE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10 px-4"
        >
          Drumstick sizes 2B, 5A, 5B, 7A, X5A and X5B crafted for every drummer.
          Your voice behind the kit starts here.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 168, 83, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm animate-glow text-sm md:text-base"
          >
            Explore Collection
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 168, 83, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-primary/50 text-foreground font-semibold uppercase tracking-wider rounded-sm transition-colors text-sm md:text-base"
          >
            Our Story
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground hidden md:block">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
