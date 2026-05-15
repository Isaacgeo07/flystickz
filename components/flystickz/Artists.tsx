'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const artists = [
  {
    id: 1,
    name: 'DrummerboyStanley',
    role: 'Drummer & Music Producer',
    location: 'Lagos, Nigeria',
    experience: '15+ years',
    bio: 'A renowned Nigerian drummer and music producer based in Lagos with extensive experience in the entertainment industry.',
    genres: ['Gospel', 'Afrobeats', 'R&B'],
    image: 'https://flystickz.com/wp-content/uploads/2024/08/Flystickz-Drumsticks01-1024x683.jpg',
    signature: true,
  },
  {
    id: 2,
    name: 'Shaba Segun',
    role: 'Musician & Producer',
    location: 'Ondo State, Nigeria',
    experience: '25+ years',
    bio: 'An accomplished musician and producer with over two decades of experience in the music industry.',
    genres: ['Gospel', 'Jazz', 'Fusion'],
    image: 'https://flystickz.com/wp-content/uploads/2024/08/Flystickz-Drumsticks07-1-1024x683.jpg',
    signature: true,
  },
  {
    id: 3,
    name: 'Babykelo',
    role: 'Dynamic Performer',
    location: 'Nigeria',
    experience: '12+ years',
    bio: 'Has honed his craft to perfection, delivering powerful and dynamic performances that resonate with audiences worldwide.',
    genres: ['Gospel', 'Contemporary', 'Worship'],
    image: 'https://flystickz.com/wp-content/uploads/2024/08/BabyKelo02-1024x819.jpg',
    signature: true,
  },
  {
    id: 4,
    name: 'Star Blessing',
    role: 'Flystickz Ambassador',
    location: 'Nigeria',
    experience: '10+ years',
    bio: 'Known for his dexterity across various genres including Jazz, Rock, Latin, Funk, Gospel, Hip-Hop, R&B, Pop, and African rhythms.',
    genres: ['Jazz', 'Rock', 'Latin', 'Funk'],
    image: 'https://flystickz.com/wp-content/uploads/2025/10/Star-Blessing-1-1024x683.jpg',
    signature: false,
  },
]

export default function Artists() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null)
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null)

  return (
    <section id="artists" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
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
            The Family
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-wider mb-3 md:mb-4">
            <span className="text-foreground">PROUDLY DISPLAYING</span>
            <br />
            <span className="text-gradient-gold">THEIR STRIPES</span>
          </h2>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm md:text-base px-4">
            Meet the talented drummers who trust Flystickz to deliver their best performances.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredArtist(artist.id)}
              onHoverEnd={() => setHoveredArtist(null)}
              onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative glass rounded-xl overflow-hidden h-full"
              >
                {/* Signature Badge */}
                {artist.signature && (
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 px-2 py-0.5 md:py-1 bg-primary/90 text-primary-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded">
                    Signature Series
                  </div>
                )}

                {/* Artist Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredArtist === artist.id ? 1 : 0 }}
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-foreground font-semibold text-sm md:text-base">View Profile</span>
                  </motion.div>
                </div>

                {/* Artist Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{artist.role}</p>

                  {/* Location & Experience */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {artist.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {artist.experience}
                    </span>
                  </div>

                  {/* Genres */}
                  <div className="flex flex-wrap gap-1">
                    {artist.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre}
                        className="px-1.5 md:px-2 py-0.5 text-[10px] md:text-xs bg-primary/10 text-primary rounded"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 168, 83, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-2.5 md:py-3 border border-primary/50 text-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/10 transition-colors text-sm md:text-base"
          >
            View All Artists
          </motion.button>
        </motion.div>

        {/* Artist Detail Modal */}
        <AnimatePresence>
          {selectedArtist && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtist(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass max-w-lg w-full p-5 md:p-8 rounded-xl max-h-[90vh] overflow-y-auto"
              >
                {(() => {
                  const artist = artists.find((a) => a.id === selectedArtist)
                  if (!artist) return null
                  return (
                    <>
                      <div className="flex justify-between items-start mb-4 md:mb-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">{artist.name}</h3>
                          <p className="text-muted-foreground text-sm md:text-base">{artist.role}</p>
                        </div>
                        <button
                          onClick={() => setSelectedArtist(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-2"
                        >
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-4 md:mb-6">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base">{artist.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {artist.genres.map((genre) => (
                          <span key={genre} className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                            {genre}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-2.5 md:py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm text-sm md:text-base"
                        >
                          View Signature Sticks
                        </motion.button>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
