'use client'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Search, Menu, X, ArrowUpRight, Check, Minus, Plus, Heart, Plane, MapPinIcon, Calendar, Users, DollarSign, Globe, Zap, Shield, Star, TrendingUp } from 'lucide-react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [savedDestinations, setSavedDestinations] = useState(new Set())
  const [activeStep, setActiveStep] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      title: 'Expert Knowledge',
      description: 'Access curated recommendations from real travelers and destination experts.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Maximise Your Savings',
      description: 'We hunt for the best prices and hidden deals so you don\'t overpay.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Always Available',
      description: 'Get immediate help with any travel issue, anytime and anywhere.',
      icon: Zap,
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const journeySteps = [
    {
      number: '01',
      title: 'Share your preferences',
      description: 'From flights to activities, capture your preferences real-time.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Get handpicked options',
      description: 'Receive personalized destination and activity recommendations.',
      icon: '✨'
    },
    {
      number: '03',
      title: 'Personalised Itinerary',
      description: 'Your itinerary arranged into a flow of experiences you\'ll love.',
      icon: '📋'
    },
    {
      number: '04',
      title: 'Book from anywhere',
      description: 'Get price comparison across booking platforms to find the best deals.',
      icon: '🌍'
    },
    {
      number: '05',
      title: 'Travel confidently',
      description: 'Get instant support whenever and wherever you need it.',
      icon: '🛡️'
    }
  ]

  const destinations = [
    { name: 'Indonesia', emoji: '🇮🇩', savings: '₹35,000', reviews: '4.9★' },
    { name: 'Italy', emoji: '🇮🇹', savings: '₹28,000', reviews: '4.8★' },
    { name: 'Japan', emoji: '🇯🇵', savings: '₹42,000', reviews: '4.9★' },
    { name: 'Thailand', emoji: '🇹🇭', savings: '₹22,000', reviews: '4.7★' },
    { name: 'Switzerland', emoji: '🇨🇭', savings: '₹55,000', reviews: '4.9★' },
    { name: 'France', emoji: '🇫🇷', savings: '₹32,000', reviews: '4.8★' }
  ]

  const testimonials = [
    {
      name: 'Vandana',
      country: '🇫🇷',
      quote: 'Found hidden gems we would have missed otherwise',
      image: '👩'
    },
    {
      name: 'Nandini',
      country: '🇸🇬',
      quote: 'Expert advice for traveling with young children',
      image: '👩'
    },
    {
      name: 'Harshit',
      country: '🇨🇭',
      quote: 'Saved ₹35,000 on our family trip to Europe',
      image: '👨'
    },
    {
      name: 'Neha',
      country: '🇮🇩',
      quote: 'The personalized itinerary was exactly what we wanted',
      image: '👩'
    },
    {
      name: 'Atul',
      country: '🇮🇹',
      quote: 'Felt like having a local friend in every city',
      image: '👨'
    },
    {
      name: 'Mehul',
      country: '🇯🇵',
      quote: 'The money-saving tips really added up',
      image: '👨'
    },
    {
      name: 'Akshay',
      country: '🇹🇭',
      quote: 'We found deals on Rimigo that our own research missed',
      image: '👨'
    }
  ]

  const stats = [
    { label: '242', desc: 'Vacations Planned' },
    { label: '4.9', desc: 'Traveller Rating' },
    { label: '78', desc: 'Countries' },
    { label: '₹8,354', desc: 'Avg Savings' }
  ]

  const faqs = [
    {
      q: 'How do I get started with Rimigo?',
      a: 'Getting started is simple! Share your travel preferences, budget, and interests. Our experts will curate personalized options for you from top destinations and accommodations worldwide.'
    },
    {
      q: 'How does Rimigo find the best price?',
      a: 'We partner with multiple booking platforms and travel providers to compare prices in real-time, ensuring you get the absolute best deals available for your trip.'
    },
    {
      q: 'How are bookings with Rimigo better than pre-planned packages?',
      a: 'Unlike fixed packages, every itinerary is customized to YOUR preferences. We provide personalized recommendations, real-time flexibility, and 24/7 support throughout your journey.'
    },
    {
      q: 'What happens if something goes wrong during my vacation?',
      a: 'Our 24/7 concierge team is always available to handle any issues. From flight changes to emergency assistance, we\'ve got you covered wherever you are.'
    },
    {
      q: 'How is Rimigo different from traditional travel agents and OTAs?',
      a: 'Rimigo combines human expertise with smart technology to provide truly personalized travel experiences. We focus on YOUR preferences, not just selling packages.'
    }
  ]

  const toggleDestination = (index) => {
    const newSet = new Set(savedDestinations)
    if (newSet.has(index)) newSet.delete(index)
    else newSet.add(index)
    setSavedDestinations(newSet)
  }

  /* Place this inside App (above return) */
  function NavWithRoute() {
    const navItems = [
      { title: 'Destinations', href: '#destinations' },
      { title: 'How it works', href: '#howitworks' },
      { title: 'Stories', href: '#stories' },
      { title: 'FAQ', href: '#faq' }
    ]

    const containerRef = useRef(null)
    const linkRefs = useRef([])
    const [dotStyle, setDotStyle] = useState({ left: 0, width: 0 })
    const [activeIdx, setActiveIdx] = useState(0)

    // on mount, position dot under first item
    useEffect(() => {
      const first = linkRefs.current[0]
      if (first) {
        const rect = first.getBoundingClientRect()
        const parentRect = containerRef.current.getBoundingClientRect()
        setDotStyle({ left: rect.left - parentRect.left, width: rect.width })
      }
      // reposition on resize
      const onResize = () => {
        const cur = linkRefs.current[activeIdx]
        if (cur && containerRef.current) {
          const rect = cur.getBoundingClientRect()
          const parentRect = containerRef.current.getBoundingClientRect()
          setDotStyle({ left: rect.left - parentRect.left, width: rect.width })
        }
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])

    const handleHover = (i) => {
      const el = linkRefs.current[i]
      if (!el || !containerRef.current) return
      const rect = el.getBoundingClientRect()
      const parentRect = containerRef.current.getBoundingClientRect()
      // animate to hovered link
      setDotStyle({ left: rect.left - parentRect.left, width: rect.width })
    }

    const handleMouseLeave = () => {
      // revert to active
      const el = linkRefs.current[activeIdx]
      if (!el || !containerRef.current) return
      const rect = el.getBoundingClientRect()
      const parentRect = containerRef.current.getBoundingClientRect()
      setDotStyle({ left: rect.left - parentRect.left, width: rect.width })
    }

    const handleClick = (i) => {
      setActiveIdx(i)
      // scroll if anchor present
      const href = navItems[i].href
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    return (
      <div className="relative w-full max-w-xl">
        <div ref={containerRef} className="relative flex items-center justify-center gap-8 px-4 py-1">
          {navItems.map((item, i) => (
            <a
              key={item.title}
              ref={(el) => (linkRefs.current[i] = el)}
              onMouseEnter={() => handleHover(i)}
              onClick={() => handleClick(i)}
              onMouseLeave={handleMouseLeave}
              href={item.href}
              className={`text-sm font-medium transition-colors ${i === activeIdx ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {item.title}
            </a>
          ))}

          {/* animated route line + moving dot */}
          <motion.div
            layout
            initial={false}
            animate={{ left: dotStyle.left }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{ height: 28 }}
          >
            {/* subtle dashed route line */}
            <div className="absolute inset-x-6 bottom-3 h-0.5 bg-gradient-to-r from-slate-200 to-slate-200/70 rounded" />

            {/* moving dot with glow */}
            <motion.div
              animate={{ x: dotStyle.left, width: dotStyle.width }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute -bottom-1 h-6 flex items-center justify-center"
              style={{ left: 0 }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-lg" />
                <div className="absolute -inset-2 rounded-full opacity-30 blur-sm" style={{ background: 'radial-gradient(circle,#a78bfa,#fda4af)' }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }


  return (
    <div className="bg-white text-slate-950 overflow-hidden">
      {/* Navigation */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Ticket-like thin bar */}
        <div
          className={`mx-auto max-w-7xl px-4 md:px-8 py-2 flex items-center gap-4 justify-between
                backdrop-blur-md bg-white/70 border border-slate-200/50 rounded-b-2xl shadow-sm`}
          style={{ height: 64 }}
        >
          {/* LEFT: Boarding-pass style brand */}
          <a
            href="/"
            className="flex items-center gap-3 no-underline select-none"
            aria-label="Rimigo home"
          >
            <div
              className="relative w-44 h-10 rounded-[12px] flex items-center overflow-hidden"
              style={{ background: 'linear-gradient(90deg,#eef2ff, #fffaf0)' }}
            >
              {/* left tag (circle punch) */}
              <div className="absolute left-0 -ml-3 w-6 h-6 rounded-full bg-slate-50 border border-slate-200 shadow-sm" />
              <div className="flex items-center gap-3 pl-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center shadow">
                  {/* simple emblem */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9-4.0294-9-9-9S3 7.0294 3 12z" fill="white" opacity="0.06" />
                    <path d="M7 12c0-2.7614 2.2386-5 5-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="hidden sm:flex flex-col -mt-0.5">
                  <span className="text-sm font-semibold text-slate-900 tracking-tight">RIMIGO</span>
                  <span className="text-xs text-slate-500 leading-3">Vacations made easy</span>
                </div>
              </div>

              {/* boarding pass perforation - dotted line */}
              <div className="absolute inset-y-0 right-0 w-14 flex items-center justify-center">
                <div className="w-[1px] h-8 bg-slate-200/60" />
              </div>
            </div>
          </a>

          {/* CENTER: Nav with moving route/dot (desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <NavWithRoute />
          </div>

          {/* RIGHT: CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => {/* optional search open */ }}
                className="p-2 rounded-lg hover:bg-slate-100 transition"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <a href="#destinations" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-rose-500 text-white text-sm font-semibold shadow">
                Start Your Trip
              </a>

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:shadow-sm transition">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path d="M12 2l3 6 6 .5-4.5 4 1 6-5.5-3-5.5 3 1-6L3 8.5 9 8z" fill="#64748b" /></svg>
                <span className="hidden lg:inline text-sm">Sign in</span>
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg hover:bg-slate-100 transition" aria-label="Open menu">
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu: keep same style as before */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'tween', duration: 0.18 }}
              className="md:hidden border-t border-slate-200 bg-white/98"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                {['Destinations', 'How it works', 'Stories', 'FAQ'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="block text-sm font-medium px-2 py-3 rounded-lg hover:bg-slate-50 transition">
                    {item}
                  </a>
                ))}
                <div className="pt-2 border-t border-slate-100">
                  <a href="#" className="block px-2 py-3 rounded-lg text-sm font-medium">Sign in</a>
                  <a href="#" className="block px-2 py-3 rounded-lg text-sm font-medium">Contact us</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* spacer so content below doesn't hide behind fixed header */}
      <div aria-hidden style={{ height: 76 }} />

      {/* Hero Section */}
      <section className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-30 -z-10"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-medium tracking-widest text-blue-600 mb-6 uppercase"
          >
            Your vacation made easy with end-to-end assistance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-slate-950"
          >
            Your Vacation <br /> Made Easy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Get end-to-end assistance for your perfect vacation from expert travel consultants
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition rounded-lg flex items-center gap-2 mx-auto"
          >
            Start Your Trip <ArrowUpRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20 md:mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-slate-950">
              The travel friend with all the answers
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl font-light">
              Just like that one friend who knows all the best spots, finds amazing deals, and is always there when you need them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white`}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-950">{feature.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section id="howitworks" className="py-32 md:py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20 md:mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-slate-950">
              By your side - at every step of the journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Stitching together a seamless vacation where your preferences guide everything
            </p>
          </motion.div>

          <div className="space-y-8">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-8 md:gap-16"
              >
                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl"
                  >
                    {step.icon}
                  </motion.div>
                  {idx < journeySteps.length - 1 && (
                    <motion.div
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                      className="w-1 h-24 bg-gradient-to-b from-blue-500 to-cyan-500"
                    />
                  )}
                </div>

                <div className="flex-1 bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition">
                  <p className="text-blue-600 font-bold text-sm tracking-widest mb-3 uppercase">{step.number}</p>
                  <h3 className="text-2xl font-bold mb-3 text-slate-950">{step.title}</h3>
                  <p className="text-slate-600 font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20 md:mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-slate-950">
              Experiences that speak for themselves
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl font-light">
              Join 1000+ travelers who experienced unique trips with Rimigo
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => toggleDestination(idx)}
                className="p-6 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition cursor-pointer bg-white hover:bg-blue-50 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{dest.emoji}</div>
                  <motion.button
                    animate={{ scale: savedDestinations.has(idx) ? 1.2 : 1 }}
                    className="text-red-500"
                  >
                    <Heart size={20} fill={savedDestinations.has(idx) ? 'currentColor' : 'none'} />
                  </motion.button>
                </div>
                <h3 className="font-bold text-slate-950 mb-2">{dest.name}</h3>
                <p className="text-sm text-slate-600 mb-3">Avg: {dest.savings}</p>
                <p className="text-sm font-semibold text-yellow-500">{dest.reviews}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center"
          >
            What Travelers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/40 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/70">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-light italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4 text-yellow-300">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 md:py-48 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-3 text-blue-400"
                >
                  {stat.label}
                </motion.div>
                <p className="text-slate-400 font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20 md:mb-32"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
              Still have questions?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition text-left"
                >
                  <h3 className="text-lg font-bold text-slate-950">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={24} className="text-blue-600" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200"
                    >
                      <p className="text-slate-700 font-light leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-700 opacity-50 -z-10"
        />

        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Ready for your best vacation yet?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Submit your travel details below and get personalized vacation options designed just for you.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="px-12 py-4 bg-white text-blue-600 font-bold text-lg hover:bg-slate-100 transition rounded-lg"
          >
            Start Your Trip Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">RIMIGO</h4>
              <p className="font-light text-sm leading-relaxed">Your vacation made easy with end-to-end assistance from travel experts.</p>
            </div>

            {[
              { title: 'Company', links: ['About Us', 'Careers', 'Contact Us'] },
              { title: 'Resources', links: ['Blog', 'Testimonials', 'FAQs'] },
              { title: 'Legal', links: ['Terms & Conditions', 'Privacy Policy', 'Refund Policy'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-6 text-sm tracking-wide uppercase">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 hover:text-white transition font-light text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs font-light mb-6 md:mb-0">&copy; 2025 Rimigo. All rights reserved.</p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="text-slate-600 hover:text-white transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
