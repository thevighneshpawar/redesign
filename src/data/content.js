export const features = [
  {
    code: 'EXP-001',
    title: 'Expert Knowledge',
    description:
      'Access curated recommendations from real travelers and destination experts.',
    icon: 'Globe',
    class: 'ECONOMY PLUS'
  },
  {
    code: 'SAV-002',
    title: 'Maximise Your Savings',
    description:
      "We hunt for the best prices and hidden deals so you don't overpay.",
    icon: 'TrendingUp',
    class: 'BUSINESS'
  },
  {
    code: 'SUP-003',
    title: 'Always Available',
    description:
      'Get immediate help with any travel issue, anytime and anywhere.',
    icon: 'Zap',
    class: 'FIRST CLASS'
  }
]

export const journeySteps = [
  {
    number: '01',
    code: 'STP-001',
    title: 'Share your preferences',
    description:
      'From flights to activities, capture your preferences real-time.',
    icon: 'CheckCircle',
    gate: 'GATE A1',
    time: '08:00'
  },
  {
    number: '02',
    code: 'STP-002',
    title: 'Get handpicked options',
    description:
      'Receive personalized destination and activity recommendations.',
    icon: 'Star',
    gate: 'GATE B2',
    time: '09:15'
  },
  {
    number: '03',
    code: 'STP-003',
    title: 'Personalised Itinerary',
    description:
      "Your itinerary arranged into a flow of experiences you'll love.",
    icon: 'MapPin',
    gate: 'GATE C3',
    time: '10:30'
  },
  {
    number: '04',
    code: 'STP-004',
    title: 'Book from anywhere',
    description:
      'Get price comparison across booking platforms to find the best deals.',
    icon: 'DollarSign',
    gate: 'GATE D4',
    time: '11:45'
  },
  {
    number: '05',
    code: 'STP-005',
    title: 'Travel confidently',
    description: 'Get instant support whenever and wherever you need it.',
    icon: 'Shield',
    gate: 'GATE E5',
    time: '13:00'
  }
]

export const destinations = [
  {
    code: 'DPS',
    name: 'Denpasar',
    savings: '₹35,000',
    reviews: '4.9★',
    class: 'ECONOMY',
    gate: 'GATE A12'
  },
  {
    code: 'FCO',
    name: 'Rome',
    savings: '₹28,000',
    reviews: '4.8★',
    class: 'BUSINESS',
    gate: 'GATE B8'
  },
  {
    code: 'NRT',
    name: 'Tokyo',
    savings: '₹42,000',
    reviews: '4.9★',
    class: 'FIRST',
    gate: 'GATE C15'
  },
  {
    code: 'BKK',
    name: 'Bangkok',
    savings: '₹22,000',
    reviews: '4.7★',
    class: 'ECONOMY',
    gate: 'GATE D3'
  },
  {
    code: 'ZRH',
    name: 'Zurich',
    savings: '₹55,000',
    reviews: '4.9★',
    class: 'BUSINESS',
    gate: 'GATE E22'
  },
  {
    code: 'CDG',
    name: 'Paris',
    savings: '₹32,000',
    reviews: '4.8★',
    class: 'PREMIUM',
    gate: 'GATE F7'
  }
]

export const testimonials = [
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

export const stats = [
  { label: '242', desc: 'VACATIONS PLANNED', code: 'STAT-001' },
  { label: '4.9', desc: 'TRAVELLER RATING', code: 'STAT-002' },
  { label: '78', desc: 'COUNTRIES', code: 'STAT-003' },
  { label: '₹8,354', desc: 'AVG SAVINGS', code: 'STAT-004' }
]

export const faqs = [
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

export const navItems = [
  { id: 'features', label: 'FEATURES', gate: 'GATE A' },
  { id: 'journey', label: 'JOURNEY', gate: 'GATE B' },
  { id: 'destinations', label: 'DESTINATIONS', gate: 'GATE C' },
  { id: 'testimonials', label: 'STORIES', gate: 'GATE D' },
  { id: 'faq', label: 'FAQ', gate: 'GATE E' }
]
