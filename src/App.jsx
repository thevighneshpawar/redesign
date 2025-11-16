'use client'
import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plane, ArrowUpRight } from 'lucide-react'

// Components
import { BoardingPassNav } from './components/Navbar/BoardingPassNav'
import { Hero } from './components/Hero/Hero'
import { MicrotextStrip } from './components/Shared/MicrotextStrip'
import { FeaturesGrid } from './components/Features/FeaturesGrid'
import { JourneyGrid } from './components/Journey/JourneyGrid'
import { DestinationsGrid } from './components/Destinations/DestinationsGrid'
import { TestimonialsGrid } from './components/Testimonials/TestimonialsGrid'
import { KpiBoard } from './components/Stats/KpiBoard'
import { FaqList } from './components/FAQ/FaqList'
import { Footer } from './components/Footer/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollDirection, setScrollDirection] = useState('down')
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [savedDestinations, setSavedDestinations] = useState(new Set())

  // Scroll tracking
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section observer
  useEffect(() => {
    const sections = ['hero', 'features', 'journey', 'destinations', 'testimonials', 'stats', 'faq', 'cta']
    const observers = sections.map(section => {
      const element = document.getElementById(section)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(element)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [scrollDirection])

  const toggleDestination = (index) => {
    const newSet = new Set(savedDestinations)
    if (newSet.has(index)) newSet.delete(index)
    else newSet.add(index)
    setSavedDestinations(newSet)
  }

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // CTA Section Component
  const CtaSection = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-xl">
          <div className="bg-white rounded-2xl p-10">
            <div className="mb-6 relative z-10">
              <div className="text-cyan-600 text-sm font-mono uppercase tracking-widest mb-2">
                Final Boarding Call
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-serif">
                Ready for Departure?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Your perfect vacation is waiting. Let's start planning your journey today.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(56, 189, 248, 0.45)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-lg mx-auto flex items-center gap-3 font-mono font-bold text-lg text-white uppercase tracking-widest bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-md relative z-10"
            >
              <Plane size={20} />
              Start Your Adventure
              <ArrowUpRight size={20} />
            </motion.button>

            <div className="mt-6 text-slate-400 text-xs font-mono">
              Gate C12 • Boarding Time: 07:30 • Seat: 14A • Flight: RG-824
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none z-1" style={{
        backgroundImage: `
          repeating-linear-gradient(90deg, #cbd5e1 0 1px, transparent 1px 30px),
          repeating-linear-gradient(0deg, #cbd5e1 0 1px, transparent 1px 30px)
        `
      }}></div>

      <BoardingPassNav
        activeSection={activeSection}
        scrollDirection={scrollDirection}
        onNavClick={handleNavClick}
      />

      <Hero />
      <MicrotextStrip />
      <FeaturesGrid />
      <JourneyGrid />
      <DestinationsGrid
        savedDestinations={savedDestinations}
        toggleDestination={toggleDestination}
      />
      <TestimonialsGrid />
      <KpiBoard />
      <FaqList
        expandedFAQ={expandedFAQ}
        setExpandedFAQ={setExpandedFAQ}
      />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App