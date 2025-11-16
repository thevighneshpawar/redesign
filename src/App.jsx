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
  const MicrotextStrip = ({ text = "RIMIGO • VACATION TICKET • BOARDING PASS •" }) => (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="text-[16px] text-slate-500 tracking-widest font-mono inline-block"
        animate={{ x: [0, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {Array(10).fill(text).join(' • ')}
      </motion.div>
    </div>
  )

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
              const Icon = feature.icon
              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-cyan-400"
                >
                  {/* Top image band (use gradient as placeholder or swap for real image) */}
                  <div className="h-36 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-200 to-indigo-200" style={{ backgroundImage: 'linear-gradient(120deg,#c7e6ff,#e9d5ff)' }} />

                  {/* Badge / stamp (overlapping top-left) */}
                  <div className="absolute top-2 left-4">
                    <div className="bg-white/95 border border-slate-200 px-3 py-1 rounded-full text-xs font-mono font-semibold shadow-sm">
                      <span className="text-amber-500 mr-2">●</span>
                      {feature.code || 'SV'}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 pt-8 bg-white z-10">
                    <div className="flex items-start gap-4">
                      {/* Icon in travel emblem circle */}
                      <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-100">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-rose-400 to-indigo-500">
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>

                      {/* Title + desc */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>

                        {/* details row: small chips like savings or quick facts */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">Expert-curated</span>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">24/7 Support</span>
                        </div>
                      </div>
                    </div>

                    {/* footer row with CTA and microtext */}
                    <div className="mt-6 flex items-center justify-between">
                      <button className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-rose-500 text-white shadow-sm hover:opacity-95">
                        Explore <ArrowUpRight size={14} />
                      </button>

                      <div className="text-[11px] font-mono text-slate-400">Avg. savings: ₹8,000</div>
                    </div>
                  </div>

                  {/* subtle map texture watermark */}
                  <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-multiply" style={{ backgroundImage: 'url("/assets/map-texture.svg")', backgroundSize: 'cover' }} />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>



      {/* Journey Steps - Flight Path */}

      <section
        id="journey"
        className="py-20 px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto z-10">
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
            {/* SVG spine: centered vertical line with gradient + dashed look */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 pointer-events-none"
              viewBox="0 0 10 1000"
              preserveAspectRatio="xMidYMid slice"
              style={{ height: '100%' }}
              aria-hidden
            >
              <defs>
                <linearGradient id="spineGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
                  <stop offset="60%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="1" />
                </linearGradient>

                {/* dashed stroke pattern */}
                <pattern id="dots" width="2" height="6" patternUnits="userSpaceOnUse">
                  <rect width="2" height="2" fill="rgba(255,255,255,0.06)" />
                </pattern>
              </defs>

              {/* main gradient path (solid) */}
              <line
                x1="5"
                x2="5"
                y1="0"
                y2="1000"
                stroke="url(#spineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />
              {/* subtle dotted overlay for texture */}
              <line
                x1="5"
                x2="5"
                y1="0"
                y2="1000"
                stroke="url(#dots)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.12"
              />
            </svg>

            {/* Steps list */}
            <div className="space-y-12 relative z-10">
              {journeySteps.map((step, idx) => {
                const Icon = step.icon
                const isLeft = idx % 2 === 0

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, type: 'spring', stiffness: 90, damping: 14 }}
                    className={`flex items-center gap-6 md:gap-10 ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:items-center`}
                  >
                    {/* Card (left or right) */}
                    <div className="flex-1">
                      <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 shadow-md">
                        {/* Inner glass card */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/40">

                          {/* Map watermark */}
                          <div
                            className="absolute inset-0 opacity-[0.05] pointer-events-none rounded-2xl"
                            style={{ backgroundImage: 'url("/assets/map-texture.svg")', backgroundSize: 'cover' }}
                          />

                          <div className="relative flex items-start gap-5">

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-200">
                              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-400 to-teal-400 flex items-center justify-center">
                                <Icon size={22} className="text-white" />
                              </div>
                            </div>

                            {/* Text Content */}
                            <div className="relative flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-blue-600 text-sm font-mono font-bold tracking-wide">
                                  {step.code || `S${idx + 1}`}
                                </span>

                                <span className="text-xs font-mono text-slate-500 tracking-wider">
                                  {step.gate || 'GATE'} • {step.time || '—'}
                                </span>
                              </div>

                              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-serif">
                                {step.title}
                              </h3>

                              <p className="text-slate-600 leading-relaxed text-sm">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connector SVG (small curved path from spine to card) */}
                    <div
                      className={`hidden md:flex items-center justify-center w-20 relative`}
                      aria-hidden
                    >
                      <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`connGrad-${idx}`} x1="0" x2="1">
                            <stop offset="0" stopColor="#2563eb" stopOpacity="1" />
                            <stop offset="1" stopColor="#06b6d4" stopOpacity="1" />
                          </linearGradient>
                        </defs>

                        {isLeft ? (
                          // curve from right of svg to left (for left-side card)
                          <path d="M78 28 C58 28, 48 14, 40 14" stroke={`url(#connGrad-${idx})`} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.95" />
                        ) : (
                          // mirrored curve for right-side card
                          <path d="M2 28 C22 28, 32 14, 40 14" stroke={`url(#connGrad-${idx})`} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.95" />
                        )}

                        {/* small decorative dot at spine side */}
                        <circle cx="40" cy="14" r="3.2" fill="#06b6d4" opacity="0.95" />
                      </svg>
                    </div>

                    {/* Step Marker aligned on the spine */}
                    <div className="flex-shrink-0 w-20 flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-bold text-lg font-mono shadow-lg border-4 border-white flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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

      {/* Testimonials - Luggage Tags */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-700 border-2 border-slate-600 rounded-lg px-6 py-3 mb-6">
              <div className="text-amber-300 text-xs font-mono uppercase tracking-widest">TRAVELER STORIES</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-serif">PASSENGER REVIEWS</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">What our travelers say about their journeys</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {/* Luggage Tag Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg relative">
                  {/* Tag Hole */}
                  <div className="absolute -top-1 left-6 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-400" />

                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-slate-900 font-bold font-mono text-sm">{testimonial.name}</div>
                        <div className="text-slate-500 text-xs font-mono flex items-center gap-1">
                          <MapPin size={10} />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-900 font-mono text-xs">{testimonial.flight}</div>
                        <div className="text-slate-500 text-xs font-mono">SEAT {testimonial.seat}</div>
                      </div>
                    </div>

                    <p className="text-slate-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Perforated Bottom */}
                  <PerforatedLine className="mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Departure Board */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border-2 border-slate-700 rounded-lg p-8 shadow-2xl">
            {/* Board Header */}
            <div className="text-center mb-8">
              <div className="text-amber-300 text-sm font-mono uppercase tracking-widest mb-2">DEPARTURE BOARD</div>
              <h3 className="text-2xl font-black text-white font-serif">TRAVEL STATISTICS</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="text-4xl md:text-5xl font-black text-amber-400 font-mono mb-2"
                  >
                    {stat.label}
                  </motion.div>
                  <div className="text-amber-200 text-sm font-mono uppercase tracking-widest">{stat.desc}</div>
                  <div className="text-slate-500 text-xs font-mono mt-1">{stat.code}</div>
                </motion.div>
              ))}
            </div>

            {/* Board Footer */}
            <div className="mt-8 pt-4 border-t border-slate-700">
              <MicrotextStrip text="RIMIGO AIR • VACATION STATISTICS • BOARDING PASS •" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Perforated Accordion */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-50 border-2 border-slate-300 rounded-lg px-6 py-3 mb-6">
              <div className="text-slate-500 text-xs font-mono uppercase tracking-widest">HELP DESK</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-serif">FAQ</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Frequently asked questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-2 border-slate-300 rounded-lg overflow-hidden hover:border-amber-400 transition-colors"
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-amber-50 transition text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-amber-600 text-sm font-mono font-bold">{faq.code}</div>
                    <h3 className="text-lg font-bold text-slate-900 font-mono">{faq.q}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={24} className="text-amber-600" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-4 bg-amber-50 border-t-2 border-dashed border-slate-300"
                    >
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Final Boarding Call */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final Boarding Pass */}
          <div className="bg-white border-2 border-amber-400 rounded-lg p-8 shadow-2xl">
            <div className="mb-6">
              <div className="text-amber-600 text-sm font-mono uppercase tracking-widest mb-2">FINAL BOARDING CALL</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-serif">READY FOR DEPARTURE?</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Your perfect vacation is waiting. Let's start planning your journey today.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245, 158, 11, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-lg flex items-center gap-3 mx-auto uppercase tracking-widest font-mono mb-6"
            >
              <Plane size={20} />
              START YOUR ADVENTURE
              <ArrowUpRight size={20} />
            </motion.button>

            <div className="text-slate-500 text-xs font-mono">
              GATE C12 • BOARDING TIME: 07:30 • SEAT: 14A • FLIGHT: RG-824
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Ticket Fine Print */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t-2 border-dashed border-slate-700">
        <div className="max-w-6xl mx-auto">
          {/* Fine Print Area */}
          <div className="text-center mb-8">
            <div className="text-slate-500 text-[10px] font-mono leading-relaxed tracking-wide uppercase mb-4">
              RIMIGO AIR VACATION TICKET • NOT VALID FOR TRAVEL UNLESS ENDORSED • BAGGAGE ALLOWANCE 15KG •
              SEQUENCE NO: 042 • TICKET NO: 029384-128392 • ISSUED BY: RIMIGO TRAVEL SYSTEMS
            </div>

            <BarcodeStrip height={20} className="mb-4" />
            <MicrotextStrip text="RIMIGO AIR • VACATION PLANNING • TRAVEL TICKET • BOARDING PASS •" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-lg font-mono mb-4">RIMIGO AIR</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your vacation made easy with personalized travel assistance and expert guidance.
              </p>
            </div>

            {[
              { title: 'COMPANY', links: ['ABOUT US', 'CAREERS', 'CONTACT'] },
              { title: 'RESOURCES', links: ['BLOG', 'STORIES', 'GUIDES'] },
              { title: 'SUPPORT', links: ['HELP DESK', 'POLICIES', 'TERMS'] }
            ].map((col, idx) => (
              <div key={idx}>
                <div className="text-white font-bold text-sm font-mono uppercase tracking-widest mb-4">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors text-sm font-mono">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-500 text-xs font-mono mb-4 md:mb-0">
              © 2025 RIMIGO AIR • ALL RIGHTS RESERVED • TICKET NO: 823-493204
            </div>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-slate-500 hover:text-amber-400 transition-colors"
                >
                  <Icon size={16} />
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