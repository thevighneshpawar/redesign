'use client'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Search, Menu, X, ArrowUpRight, Check, Minus, Plus, Heart, Plane, MapPinIcon, Calendar, Users, DollarSign, Globe, Zap, Shield, Star, TrendingUp, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [savedDestinations, setSavedDestinations] = useState(new Set())
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollDirection, setScrollDirection] = useState('down')

  // Scroll tracking for airplane behavior
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

  // Section observer for airplane positioning
  useEffect(() => {
    const sections = ['hero', 'features', 'journey', 'destinations', 'testimonials', 'stats', 'faq', 'cta']
    const observers = sections.map(section => {
      const element = document.getElementById(section)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
            // Calculate plane position for this section
            const rect = entry.target.getBoundingClientRect()
            setPlanePosition({
              x: rect.left + rect.width / 2 - 16,
              y: rect.top + window.scrollY,
              rotation: scrollDirection === 'down' ? 8 : -8
            })
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(element)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [scrollDirection])

  const features = [
    {
      code: 'EXP-001',
      title: 'Expert Knowledge',
      description: 'Access curated recommendations from real travelers and destination experts.',
      icon: Globe,
      class: 'ECONOMY PLUS'
    },
    {
      code: 'SAV-002',
      title: 'Maximise Your Savings',
      description: 'We hunt for the best prices and hidden deals so you don\'t overpay.',
      icon: TrendingUp,
      class: 'BUSINESS'
    },
    {
      code: 'SUP-003',
      title: 'Always Available',
      description: 'Get immediate help with any travel issue, anytime and anywhere.',
      icon: Zap,
      class: 'FIRST CLASS'
    }
  ]

  const journeySteps = [
    {
      number: '01',
      code: 'STP-001',
      title: 'Share your preferences',
      description: 'From flights to activities, capture your preferences real-time.',
      icon: CheckCircle,
      gate: 'GATE A1',
      time: '08:00'
    },
    {
      number: '02',
      code: 'STP-002',
      title: 'Get handpicked options',
      description: 'Receive personalized destination and activity recommendations.',
      icon: Star,
      gate: 'GATE B2',
      time: '09:15'
    },
    {
      number: '03',
      code: 'STP-003',
      title: 'Personalised Itinerary',
      description: 'Your itinerary arranged into a flow of experiences you\'ll love.',
      icon: MapPin,
      gate: 'GATE C3',
      time: '10:30'
    },
    {
      number: '04',
      code: 'STP-004',
      title: 'Book from anywhere',
      description: 'Get price comparison across booking platforms to find the best deals.',
      icon: DollarSign,
      gate: 'GATE D4',
      time: '11:45'
    },
    {
      number: '05',
      code: 'STP-005',
      title: 'Travel confidently',
      description: 'Get instant support whenever and wherever you need it.',
      icon: Shield,
      gate: 'GATE E5',
      time: '13:00'
    }
  ]

  const destinations = [
    { code: 'DPS', name: 'Denpasar', savings: '₹35,000', reviews: '4.9★', class: 'ECONOMY', gate: 'GATE A12' },
    { code: 'FCO', name: 'Rome', savings: '₹28,000', reviews: '4.8★', class: 'BUSINESS', gate: 'GATE B8' },
    { code: 'NRT', name: 'Tokyo', savings: '₹42,000', reviews: '4.9★', class: 'FIRST', gate: 'GATE C15' },
    { code: 'BKK', name: 'Bangkok', savings: '₹22,000', reviews: '4.7★', class: 'ECONOMY', gate: 'GATE D3' },
    { code: 'ZRH', name: 'Zurich', savings: '₹55,000', reviews: '4.9★', class: 'BUSINESS', gate: 'GATE E22' },
    { code: 'CDG', name: 'Paris', savings: '₹32,000', reviews: '4.8★', class: 'PREMIUM', gate: 'GATE F7' }
  ]

  const testimonials = [
    {
      name: 'VANDANA S.',
      location: 'PAR/CDG',
      quote: 'Found hidden gems we would have missed otherwise',
      rating: 5,
      flight: 'RG-742',
      seat: '14A'
    },
    {
      name: 'NANDINI P.',
      location: 'SIN/WSS',
      quote: 'Expert advice for traveling with young children',
      rating: 5,
      flight: 'RG-815',
      seat: '22C'
    },
    {
      name: 'HARSHIT M.',
      location: 'ZRH/GVA',
      quote: 'Saved ₹35,000 on our family trip to Europe',
      rating: 5,
      flight: 'RG-926',
      seat: '08B'
    },
    {
      name: 'NEHA K.',
      location: 'DPS/LOP',
      quote: 'The personalized itinerary was exactly what we wanted',
      rating: 5,
      flight: 'RG-337',
      seat: '16F'
    }
  ]

  const stats = [
    { label: '242', desc: 'VACATIONS PLANNED', code: 'STAT-001' },
    { label: '4.9', desc: 'TRAVELLER RATING', code: 'STAT-002' },
    { label: '78', desc: 'COUNTRIES', code: 'STAT-003' },
    { label: '₹8,354', desc: 'AVG SAVINGS', code: 'STAT-004' }
  ]

  const faqs = [
    {
      q: 'HOW DO I GET STARTED WITH RIMIGO?',
      a: 'Getting started is simple! Share your travel preferences, budget, and interests. Our experts will curate personalized options for you from top destinations and accommodations worldwide.',
      code: 'FAQ-001'
    },
    {
      q: 'HOW DOES RIMIGO FIND THE BEST PRICE?',
      a: 'We partner with multiple booking platforms and travel providers to compare prices in real-time, ensuring you get the absolute best deals available for your trip.',
      code: 'FAQ-002'
    },
    {
      q: 'HOW ARE BOOKINGS WITH RIMIGO BETTER THAN PRE-PLANNED PACKAGES?',
      a: 'Unlike fixed packages, every itinerary is customized to YOUR preferences. We provide personalized recommendations, real-time flexibility, and 24/7 support throughout your journey.',
      code: 'FAQ-003'
    }
  ]

  const toggleDestination = (index) => {
    const newSet = new Set(savedDestinations)
    if (newSet.has(index)) newSet.delete(index)
    else newSet.add(index)
    setSavedDestinations(newSet)
  }

  // Barcode component
  const BarcodeStrip = ({ height = 20, className = '' }) => (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex space-x-[2px]">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="w-[1px] bg-slate-900"
            style={{ height: Math.random() > 0.3 ? height : height * 0.6 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )

  // Microtext strip component
  const MicrotextStrip = ({ text = "RIMIGO • VACATION TICKET • BOARDING PASS •" }) => {
    const content = Array(10).fill(text).join(' • ');

    const highlightedContent = content.split(/(RIMIGO)/).map((part, index) =>
      part === "RIMIGO"
        ? <span key={index} className="bg-cyan-400 text-white px-1 mx-1">RIMIGO</span>
        : part
    );

    return (
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="text-[16px] text-slate-500 tracking-widest font-mono inline-block"
          animate={{ x: [0, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {highlightedContent}
        </motion.div>
      </div>
    );
  };

  // Perforated line component
  const PerforatedLine = ({ vertical = false, className = '' }) => (
    <div className={`flex items-center justify-center ${vertical ? 'flex-col h-full w-4' : 'flex-row w-full h-4'} ${className}`}>
      {Array.from({ length: vertical ? 12 : 24 }).map((_, i) => (
        <div
          key={i}
          className={`bg-slate-300 ${vertical ? 'w-1 h-2 mx-0.5' : 'h-1 w-2 my-0.5'}`}
        />
      ))}
    </div>
  )

  // Airplane navigation component
  const BoardingPassNav = () => {
    const navItems = [
      { id: 'features', label: 'FEATURES', gate: 'GATE A' },
      { id: 'journey', label: 'JOURNEY', gate: 'GATE B' },
      { id: 'destinations', label: 'DESTINATIONS', gate: 'GATE C' },
      { id: 'testimonials', label: 'STORIES', gate: 'GATE D' },
      { id: 'faq', label: 'FAQ', gate: 'GATE E' }
    ]

    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl  px-4">
        <div className="
          bg-white/95 backdrop-blur-md
          border-2 border-slate-300
          rounded-xl shadow-xl 
          overflow-hidden
          relative
        ">

          {/* Top airline strip */}
          <div className="
            w-full h-2
            bg-gradient-to-r from-indigo-500 via-sky-400 to-rose-400
          " />

          {/* Navigation items */}
          <div className="relative px-6 py-6">
            <div className="flex justify-between items-center">

              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="
                    text-[16px] font-mono font-bold 
                    text-slate-800 tracking-wider
                    hover:text-rose-500 transition-colors
                    relative px-3 py-1 rounded-md
                  "
                  whileHover={{ scale: 1.06 }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {/* Label */}
                  {item.label}

                  {/* Gate small label */}
                  <div className="text-[9px] text-slate-500 font-normal mt-0.5 tracking-tight">
                    {item.gate}
                  </div>

                  {/* Mini perforation-ish dot under each nav item */}
                  {/* <div className="
                    absolute left-1/2 -translate-x-1/2 -bottom-1
                    w-1 h-1 bg-slate-300 rounded-full opacity-70
                  "></div> */}
                </motion.a>
              ))}

            </div>

            {/* Active indicator plane */}
            {/* <motion.div
              className="absolute -bottom-3 left-0"
              animate={{
                x: navItems.findIndex(item => item.id === activeSection)
                  * (100 / (navItems.length - 1)) + '%',
              }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <motion.div
                animate={{
                  rotate: scrollDirection === 'down' ? 15 : -15,
                  y: [0, -4, 0],
                }}
                transition={{
                  rotate: { duration: 0.3 },
                  y: { duration: 1.8, repeat: Infinity }
                }}
                className="text-rose-500 drop-shadow-md"
              >
                <Plane size={18} fill="currentColor" />
              </motion.div>
            </motion.div> */}
          </div>

        </div>
      </nav>
    )
  }


  return (
    <div className=" min-h-screen relative bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Global Scrolling Airplane */}
      {/* <motion.div
        className="fixed z-40 pointer-events-none"
        animate={{
          x: planePosition.x,
          y: planePosition.y,
          rotate: planePosition.rotation
        }}
        transition={{
          type: 'spring',
          damping: 20,
          mass: 0.5,
          x: { duration: 0.8 },
          y: { duration: 0.8 }
        }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [planePosition.rotation, planePosition.rotation + 5, planePosition.rotation]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <Plane size={16} className="text-white" />
          </div>

          <motion.div
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400/30"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </motion.div> */}


      <div
        className="absolute inset-0 opacity-50 pointer-events-none z-1"
        style={{
          backgroundImage: `
      repeating-linear-gradient(
        90deg,
        #cbd5e1 0 1px,
        transparent 1px 30px
      ),
      repeating-linear-gradient(
        0deg,
        #cbd5e1 0 1px,
        transparent 1px 30px
      )
    `
        }}
      ></div>

      {/* Boarding Pass Navigation */}
      <BoardingPassNav />

      {/* Hero Section - Main Boarding Pass */}
      <section id="hero" className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-40 px-4 flex items-center justify-center">


        {/* Main Boarding Pass Card */}
        <div className="overflow-hidden z-10">


          {/* CTA Section */}
          <div className="p-8 text-center ">
            <motion.h1
              className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-serif tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              YOUR JOURNEY<br />STARTS HERE
            </motion.h1>

            <motion.p
              className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              End-to-end travel assistance with personalized itineraries and expert guidance
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(56, 189, 248, 0.45)"
              }}

              whileTap={{ scale: 0.95 }}
              className=" px-12 py-4
  bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400
  text-white font-bold text-lg rounded-lg 
  flex items-center gap-3 mx-auto uppercase tracking-widest font-mono"
            >
              <Plane size={20} />
              START YOUR TRIP
              <ArrowUpRight size={20} />
            </motion.button>
          </div>


        </div>





      </section>
      <MicrotextStrip />



      {/* Features Section - Ticket Stubs */}
      {/* ---------- Travel-themed Features Section (drop-in replacement) ---------- */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto ">
          {/* Header */}
          <div className="text-center mb-12 z-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Service Classes</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">Travel Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose your level of service and comfort</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="
          relative rounded-2xl shadow-lg overflow-hidden
          bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 p-[2px]
        "
                >
                  {/* Inner white card */}
                  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">


                    {/* Top Gradient Banner */}
                    <div
                      className="h-36 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #b9e7ff 0%, #d4c5ff 60%, #f6e8ff 100%)",
                      }}
                    />

                    {/* Badge / Ribbon */}
                    <div className="absolute top-2 left-4">
                      <div className="
              bg-white/95 border border-slate-200 px-3 py-1 rounded-full
              text-xs font-mono font-semibold shadow-sm
            ">
                        <span className="text-amber-500 mr-2">●</span>
                        {feature.code || "SV"}
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-6 pt-8">
                      <div className="flex items-start gap-4">

                        {/* Icon emblem */}
                        <div className="
                w-14 h-14 rounded-xl bg-white shadow-md border border-slate-100 
                flex items-center justify-center
              ">
                          <div className="
                  w-11 h-11 rounded-lg
                  bg-gradient-to-br from-rose-400 to-indigo-500 
                  flex items-center justify-center
                ">
                            <Icon size={20} className="text-white" />
                          </div>
                        </div>

                        {/* Title + Description */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>

                          {/* Chips */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                              Expert-curated
                            </span>
                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                              24/7 Support
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Footer */}
                      <div className="mt-6 flex items-center justify-between">
                        <button className="
                inline-flex items-center gap-2 text-sm font-semibold
                px-3 py-2 rounded-md
                bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400
                text-white shadow-sm hover:opacity-95 transition
              ">
                          Explore <ArrowUpRight size={14} />
                        </button>

                        <div className="text-[11px] font-mono text-slate-400">
                          Avg. savings: ₹8,000
                        </div>
                      </div>
                    </div>

                    {/* Subtle map texture */}
                    <div
                      className="
              pointer-events-none absolute inset-0 opacity-5 mix-blend-multiply
            "
                      style={{
                        backgroundImage: 'url("/assets/map-texture.svg")',
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>



      {/* Journey Steps - Flight Path */}

      <section
        id="journey"
        className="py-20 px-4  bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">FLIGHT PATH</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">YOUR JOURNEY</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Follow the path to your perfect vacation</p>
          </div>

          <div className="relative">
            <div className="mx-auto" style={{ maxWidth: '980px' }}>
              <style>{`
      /* tunables */
      :root {
        --card-w: 360px;     /* width of each card on md+ */
        --gap-y: 12px;        /* vertical gap between rows */
        --gap-x: 18px;       /* horizontal gap between columns */
        --overlap: 30px;     /* how much right card drops relative to left */
      }

      /* grid that uses fixed columns so the grid centers naturally */
      .journey-grid {
        display: grid;
        grid-template-columns: repeat(2, var(--card-w));
        justify-content: center; /* center the two columns in the container */
        column-gap: var(--gap-x);
        row-gap: var(--gap-y);
        align-items: start;
      }

      /* smaller screens: single column fluid */
      @media (max-width: 767px) {
        .journey-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .row-right { transform: none !important; } /* disable overlap on mobile */
      }

      /* apply downward shift to right column cards (md+ only) */
      @media (min-width: 768px) {
        .row-right {
          transform: translateY(var(--overlap));
        }
      }

      /* smooth transform */
      .row-left, .row-right { transition: transform 220ms cubic-bezier(.2,.9,.2,1); }
    `}</style>

              {/* Grid */}
              <div className="journey-grid">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon
                  const isRight = idx % 2 === 1

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, type: 'spring', stiffness: 110, damping: 16 }}
                      className={isRight ? 'row-right' : 'row-left'}
                      style={{ justifySelf: 'center' }} /* ensure card sits centered in its column */
                    >
                      {/* card wrapper (gradient border) */}
                      <div className="rounded-xl p-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-sm" style={{ width: 'var(--card-w)' }}>
                        <div className="bg-white/95 rounded-xl px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                              <Icon size={18} className="text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-mono text-cyan-600 font-semibold">{step.code || `S${idx + 1}`}</div>
                                <div className="text-xs font-mono text-slate-500 whitespace-nowrap">{(step.gate || 'GATE')} • {step.time || ''}</div>
                              </div>

                              <h4 className="mt-2 text-lg font-semibold text-slate-900 truncate">{step.title}</h4>
                              <p className="mt-1 text-sm text-slate-600 line-clamp-3">{step.description}</p>

                              <div className="mt-3 flex items-center justify-between">
                                <button className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Details</button>
                                <div className="text-[11px] font-mono text-slate-400">Avg. time: 2m</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>



        </div>

      </section>



      {/* Destinations - Passport Stamps */}
      <section id="destinations" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">DESTINATIONS</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">POPULAR ROUTES</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Top destinations with exclusive deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative group cursor-pointer"
                onClick={() => toggleDestination(idx)}
              >
                {/* Passport Stamp Card */}
                <div className="bg-white border-2 border-indigo-500 rounded-lg p-6 shadow-lg relative overflow-hidden">
                  {/* Stamp Border Effect */}
                  <div className="absolute inset-2 border-2 border-dashed border-rose-400 rounded opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-black text-slate-900 font-mono mb-1">{dest.code}</div>
                      <div className="text-slate-600 font-serif">{dest.name}</div>
                    </div>
                    <motion.button
                      animate={{ scale: savedDestinations.has(idx) ? 1.2 : 1 }}
                      className="text-rose-500 hover:text-amber-600 transition-colors"
                    >
                      <Heart size={20} fill={savedDestinations.has(idx) ? 'currentColor' : 'none'} />
                    </motion.button>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Class:</span>
                      <span className="font-mono font-bold text-slate-900">{dest.class}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Gate:</span>
                      <span className="font-mono font-bold text-slate-900">{dest.gate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Save:</span>
                      <span className="font-mono font-bold text-rose-600">{dest.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Rating:</span>
                      <span className="font-mono font-bold text-rose-600">{dest.reviews}</span>
                    </div>
                  </div>

                  {/* Micro Barcode */}
                  <div className="mt-4">
                    <BarcodeStrip height={12} />
                  </div>
                </div>

                {/* Corner Stamp */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500  to-rose-400 rounded-full flex items-center justify-center text-white text-xs font-bold font-mono shadow-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {dest.code}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Recommended: Masonry Ticket-style Testimonials ---------- */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">TRAVELER STORIES</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">PASSENGER REVIEWS</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">What our travelers say about their journeys</p>
          </div>

          {/* Masonry container (CSS columns) */}
          <style>{`
      .masonry {
        column-gap: 20px;
      }
      @media (min-width: 640px) { .masonry { column-count: 1; } }
      @media (min-width: 768px) { .masonry { column-count: 2; } }
      @media (min-width: 1200px) { .masonry { column-count: 3; } }

      /* prevent breaking inside columns */
      .masonry-item { break-inside: avoid; -webkit-column-break-inside: avoid; margin-bottom: 20px; }
    `}</style>

          <div className="masonry mx-auto flex justify-center">
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="masonry-item mx-auto"
                style={{ maxWidth: 380 }}
                role="article"
                aria-label={`Testimonial from ${t.name}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{ translateY: -6, boxShadow: '0 18px 40px rgba(2,6,23,0.12)' }}
                  className="rounded-xl p-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-4 relative overflow-hidden">
                    {/* luggage-tag hole */}
                    <span className="absolute -top-2 left-6 w-3 h-3 bg-slate-200 rounded-full border-2 border-white" />

                    {/* header */}
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 font-mono">
                          {/* avatar or initial */}
                          {t.avatar ? <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-md object-cover" /> : (t.image ?? t.name?.charAt(0) ?? '👤')}
                        </div>
                        <div>
                          <div className="text-slate-900 font-bold text-sm font-mono">{t.name}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin size={12} /> <span>{t.country ?? t.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right text-xs">
                        <div className="text-slate-900 font-mono">{t.flight ?? '—'}</div>
                        <div className="text-slate-500">SEAT {t.seat ?? '—'}</div>
                      </div>
                    </div>

                    {/* quote */}
                    <p className="text-slate-700 italic mb-3 leading-relaxed">“{t.quote}”</p>

                    {/* footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {Array.from({ length: (t.rating || 5) }).map((_, iStar) => (
                          <Star key={iStar} size={14} className="text-amber-400" />
                        ))}
                      </div>
                      <div className="text-xs font-mono text-slate-400">Verified traveler</div>
                    </div>

                    {/* perforation bar */}
                    <div className="mt-4">
                      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#e6eef8,#e6eef8 6px, transparent 6px, transparent 12px)] rounded" />
                    </div>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>




      {/* Stats - Departure Board */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-6xl mx-auto relative z-10">

          {/* header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">DEPARTURE BOARD</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">TRAVEL STATISTICS</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Essential metrics from Rimigo — simple and clear.</p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tile A */}
            <div className="rounded-xl p-[1.5px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
              <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden">
                <div className="px-5 py-5 flex-1 flex flex-col">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">Vacations Planned</div>
                  <div className="text-3xl md:text-4xl font-black font-mono text-slate-900 mt-3">242</div>

                  <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 mt-3">
                    <polyline fill="none" stroke="#06b6d4" strokeWidth="2" points="0,14 20,10 40,6 60,8 80,3 100,6" />
                  </svg>

                  <div className="mt-auto flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4">
                    <span>Trips planned</span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile B */}
            <div className="rounded-xl p-[1.5px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
              <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden">
                <div className="px-5 py-5 flex-1 flex flex-col">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">Traveller Rating</div>
                  <div className="text-3xl md:text-4xl font-black font-mono text-slate-900 mt-3">4.9<span className="text-amber-400">★</span></div>

                  <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 mt-3">
                    <polyline fill="none" stroke="#06b6d4" strokeWidth="2" points="0,12 20,10 40,9 60,9 80,7 100,8" />
                  </svg>

                  <div className="mt-auto flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4">
                    <span>Avg rating</span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile C */}
            <div className="rounded-xl p-[1.5px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
              <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden">
                <div className="px-5 py-5 flex-1 flex flex-col">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">Countries</div>
                  <div className="text-3xl md:text-4xl font-black font-mono text-slate-900 mt-3">78</div>

                  <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 mt-3">
                    <polyline fill="none" stroke="#06b6d4" strokeWidth="2" points="0,16 20,12 40,9 60,8 80,9 100,6" />
                  </svg>

                  <div className="mt-auto flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4">
                    <span>Countries covered</span>
                    <span>Geo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile D */}
            <div className="rounded-xl p-[1.5px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
              <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden">
                <div className="px-5 py-5 flex-1 flex flex-col">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">Avg Savings</div>
                  <div className="text-3xl md:text-4xl font-black font-mono text-slate-900 mt-3">₹8,354</div>

                  <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 mt-3">
                    <polyline fill="none" stroke="#06b6d4" strokeWidth="2" points="0,14 18,11 36,12 54,10 72,8 90,11 100,9" />
                  </svg>

                  <div className="mt-auto flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4">
                    <span>Avg per booking</span>
                    <span>INR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* microstrip footer */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <MicrotextStrip />
          </div>
        </div>
      </section>



      {/* FAQ - Perforated Accordion */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">HELP DESK</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">FAQ</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Frequently asked questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="
        border-2 border-slate-200 rounded-lg overflow-hidden 
        hover:border-cyan-400 transition-colors 
        bg-white shadow-sm
      "
              >
                {/* Question Row */}
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="
          w-full p-6 flex items-center justify-between 
          hover:bg-sky-50 transition text-left
        "
                >
                  <div className="flex items-center gap-4">
                    <div className="text-cyan-600 text-sm font-mono font-bold">
                      {faq.code || `Q${idx + 1}`}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-mono">
                      {faq.q}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={24} className="text-cyan-600" />
                  </motion.div>
                </motion.button>

                {/* Answer Section */}
                <AnimatePresence>
                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="
              px-6 py-4 bg-sky-50 
              border-t-2 border-dashed border-slate-200
            "
                    >
                      <p className="text-slate-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA - Final Boarding Call */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">

          {/* Rimigo Themed CTA Card */}
          <div className="
      relative p-[2px] rounded-2xl 
      bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 
      shadow-xl
    ">
            <div className="bg-white rounded-2xl p-10">

              {/* Header */}
              <div className="mb-6 relative z-10 ">
                <div className="text-cyan-600 text-sm font-mono uppercase tracking-widest mb-2">
                  Final Boarding Call
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-serif">
                  Ready for Departure?
                </h2>

                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Your perfect vacation is waiting. Let’s start planning your journey today.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.45)" // cyan glow
                }}
                whileTap={{ scale: 0.95 }}
                className="
            px-12 py-4 rounded-lg mx-auto flex items-center gap-3
            font-mono font-bold text-lg text-white uppercase tracking-widest
            bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400
            shadow-md relative z-10 
          "
              >
                <Plane size={20} />
                Start Your Adventure
                <ArrowUpRight size={20} />
              </motion.button>

              {/* Flight Micro Info */}
              <div className="mt-6 text-slate-400 text-xs font-mono">
                Gate C12 • Boarding Time: 07:30 • Seat: 14A • Flight: RG-824
              </div>

            </div>
          </div>

        </div>
      </section>


      <footer className="relative z-10 bg-slate-800/95 text-slate-400 py-16 px-4 border-t border-slate-800 overflow-hidden">


        <div
          className="
      absolute inset-0 opacity-80 
      bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)]
      bg-[size:40px_40px]
    "
        />
        {/* Very subtle world map texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/assets/map-texture.svg')] bg-cover bg-center" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Top Microtext + Barcode */}
          <div className="text-center mb-10">
            <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest leading-relaxed mb-4">
              RIMIGO AIR • DIGITAL TRAVEL PLATFORM • VACATION ENGINE • PASSENGER SYSTEMS ONLINE • TICKET NO: 029384-128392
            </div>

            <BarcodeStrip height={20} className="opacity-70 mb-4" />

            <MicrotextStrip
              text="RIMIGO AIR • TRAVEL TECHNOLOGY • VACATION PLANNING • BOARDING PASS •"
              className="text-cyan-400"
            />
          </div>

          {/* Main Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="text-white font-extrabold text-xl mb-4 tracking-wide">RIMIGO</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your vacation made simple with modern travel technology and personalized planning.
              </p>
            </div>

            {/* Links */}
            {[
              { title: "Company", links: ["About Us", "Careers", "Contact"] },
              { title: "Resources", links: ["Blog", "Stories", "Guides"] },
              { title: "Support", links: ["Help Desk", "Policies", "Terms"] }
            ].map((col, idx) => (
              <div key={idx}>
                <div className="text-white font-bold text-sm uppercase tracking-widest mb-3">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-cyan-400 transition-all text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Row */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-slate-500 text-xs font-mono tracking-wide">
              © 2025 RIMIGO AIR • ALL RIGHTS RESERVED • SYSTEM SEQ: 823-493204
            </div>

            <div className="flex gap-5">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

          </div>

        </div>
      </footer>

    </div>
  )
}

export default App