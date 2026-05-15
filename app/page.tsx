import Header from '@/components/flystickz/Header'
import Hero from '@/components/flystickz/Hero'
import About from '@/components/flystickz/About'
import Products from '@/components/flystickz/Products'
import Artists from '@/components/flystickz/Artists'
import Contact from '@/components/flystickz/Contact'
import Footer from '@/components/flystickz/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Products />
      <Artists />
      <Contact />
      <Footer />
    </main>
  )
}
