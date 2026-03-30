export const portfolioItems = [
  {
    id: 1,
    title: 'Dr. Check-in',
    subtitle: 'Designing for PhD Work-Life Harmony',
    category: 'UX Research & Product Design',
    description: 'AI-powered check-in app supporting PhD work-life balance through voice interaction, emotional tracking, and burnout detection.',
    image: '/Portfolio/images/portfolio/phd-work-life-balance/main_banner.png',
    tags: ['UX Research', 'AI/ML', 'Voice Interface', 'Mental Health'],
    url: '/projects/phd-work-life-balance',

    research: {
      timeline: 'September - October 2025',
      role: 'UX Researcher & Product Designer',
      institution: 'Master\'s Data Driven Design, Hogeschool Utrecht',

      introduction: `PhD candidates face imposter syndrome, irregular schedules, and constant pressure. Unlike traditional jobs with fixed routines, PhD work demands individual adaptation and self-defined rhythms. This research explores how data-driven design can support their unique work-life balance needs.`,

      methodology: {
        approach: 'Mixed-methods: literature review, interviews, surveys, and thematic analysis',
        participants: '14 participants (6 interviews + 8 surveys)',
        period: 'September 2025',
        methods: ['Literature Review', 'Interviews', 'Surveys', 'Thematic Analysis', 'Empathy Mapping']
      },

      researchQuestions: [
        {
          question: 'How do PhD candidates define work-life balance success?',
          findings: 'Success means emotional balance, not productivity. Candidates prioritize feeling refreshed, maintaining hobbies, and not dreading the day.'
        },
        {
          question: 'What work patterns characterize PhD productivity cycles?',
          findings: 'Nonlinear cycles: 3-4 days intense focus followed by 1-2 days recovery. Deadlines and life events create unpredictable patterns.'
        },
        {
          question: 'Why do PhD candidates abandon productivity tools?',
          findings: 'Setup fatigue is the main cause. Text-heavy interfaces and complex setup drive abandonment, especially for neurodivergent users.'
        },
        {
          question: 'What predicts burnout risk in PhD candidates?',
          findings: 'Early signs: persistent headaches, hobby abandonment, irritability, mental blocks. Protective factors: supervision, self-awareness, early intervention.'
        }
      ],

      keyInsights: [
        {
          insight: 'Emotional balance over productivity',
          implication: 'Track well-being, not output',
          feature: 'Mood check-in & weekly chart'
        },
        {
          insight: 'Nonlinear work cycles',
          implication: 'Support flexible progress',
          feature: 'No fixed deadlines'
        },
        {
          insight: 'Setup fatigue = abandonment',
          implication: 'Zero-setup interaction',
          feature: 'Voice-first interface'
        },
        {
          insight: 'Burnout emerges gradually',
          implication: 'Passive reflection & warnings',
          feature: 'Mood visualization'
        },
        {
          insight: 'Users reject automation',
          implication: 'Maintain user control',
          feature: 'Full CRUD on AI outputs'
        }
      ],

      solution: {
        coreValue: 'Simplicity',
        description: 'Tools must fit irregular rhythms: easy to use, minimal setup, no complex configuration.',

        features: [
          {
            name: 'Voice Check-In',
            description: 'Speak naturally. LLM extracts mood, tasks, notes automatically.',
            principles: ['Affordance', 'Feedback']
          },
          {
            name: 'Auto Task Extraction',
            description: 'Tasks extracted from voice. Silent notifications, no urgency.',
            principles: ['Affordance', 'Discoverability']
          },
          {
            name: 'Mood-Based Greeting',
            description: 'Personalized greeting based on previous mood.',
            principles: ['Conceptual Model']
          },
          {
            name: 'Weekly Mood Chart',
            description: 'Visual emotional patterns identify burnout early.',
            principles: ['Feedback', 'Mapping']
          },
          {
            name: 'Full User Control',
            description: 'Edit, delete, refresh all AI outputs.',
            principles: ['User Control']
          }
        ],

        antiFeatures: [
          'No rigid schedules',
          'No gamification',
          'No complex setup',
          'Silent by default'
        ]
      },

      impact: {
        individual: 'Burnout detection, well-being, self-insight',
        organizational: 'Supervisor awareness & support',
        societal: 'Healthier academic culture, diversity retention'
      },

      risks: [
        'Tech over-reliance',
        'Privacy concerns',
        'LLM costs',
        'Hallucination risks'
      ],

      usabilityTesting: {
        summary: 'Voice-first minimalist check-in feels fast, calm, human.',
        positives: [
          'Clean visuals reduced friction',
          'Natural, warm interactions',
          'Easy feature discovery',
          'Empathetic tone'
        ],
        feedback: [
          'Add mic labels, chimes, timer',
          'Quick dismissible tooltips',
          'Label charts clearly',
          'Calendar sync, wearables'
        ]
      },

      figures: [
        {
          id: 1,
          title: 'Dr. Check-in Overview',
          description: 'Complete interface design and user experience overview',
          image: '/Portfolio/images/portfolio/phd-work-life-balance/main_banner.png'
        },
        {
          id: 2,
          title: 'Design System',
          description: 'Color palette and visual design language',
          image: '/Portfolio/images/portfolio/phd-work-life-balance/colour_pallette.png'
        },
        {
          id: 3,
          title: 'User Flow',
          description: 'Interaction flow and user journey',
          image: '/Portfolio/images/portfolio/phd-work-life-balance/user_flow.png'
        },
        {
          id: 4,
          title: 'Design Intent',
          description: 'Core design principles and user-centered approach',
          image: '/Portfolio/images/portfolio/phd-work-life-balance/intent.png'
        },
        {
          id: 5,
          title: 'LLM Logic',
          description: 'AI processing and data extraction system',
          image: '/Portfolio/images/portfolio/phd-work-life-balance/llm_logic.png'
        }
      ],

      quotes: [
        '"Not dreading the day, apartment not a mess, can paint once a week." – MC',
        '"PhD not linear but iterative." – EH',
        '"Work 3-4 days straight then crash 1-2 days." – GM',
        '"If setup too long, just watch TV." – AL',
        '"Researchers read all day, no more text." – AL'
      ]
    }
  },
  {
    id: 2,
    title: 'West-Kruiskade Tour Guide App',
    subtitle: 'Designing a Mobile Experience for Cultural Discovery',
    category: 'UX/UI Design',
    description: 'Mobile tour guide app helping visitors explore the street art, history, and local businesses of West-Kruiskade through location-based storytelling.',
    image: '/Portfolio/images/portfolio/west-kruiskade/cover.png',
    tags: ['UX/UI Design', 'Mobile App', 'Location-Based', 'Cultural Heritage'],
    url: '/projects/west-kruiskade',

    research: {
      timeline: 'May – December 2021',
      role: 'UX/UI Designer',
      institution: 'West-Kruiskade Rotterdam × Inholland University of Applied Sciences',

      introduction: `West-Kruiskade is one of Rotterdam's most multicultural streets, known for its vibrant street art, independent shops, and diverse restaurants. Despite its cultural richness, much of its history and artistic significance is not easily accessible to visitors.

This project explores how a mobile tour guide application can help tourists and locals discover West-Kruiskade through an interactive digital experience. The app combines location-based navigation, historical context, and artist information to transform the street into a self-guided cultural tour.

The goal was to design an intuitive mobile experience that encourages exploration while preserving the unique identity of the neighborhood.`,

      methodology: {
        approach: 'Client collaboration and on-site research to understand the cultural context and user needs',
        participants: 'Client stakeholders, local business owners, and potential tourists',
        period: 'May - December 2021',
        methods: ['Site Visits', 'Client Workshops', 'User Journey Mapping', 'Interface Design', 'Prototype Development']
      },

      keyInsights: [
        {
          insight: 'Information needs to be accessible outdoors',
          implication: 'Design for sunlight readability',
          feature: 'High contrast UI with strong visual hierarchy'
        },
        {
          insight: 'Cultural stories are hidden from visitors',
          implication: 'Connect physical and digital experiences',
          feature: 'QR codes and location-based content'
        },
        {
          insight: 'Users want quick information access',
          implication: 'Minimize interaction steps',
          feature: 'One-tap access to artwork details'
        },
        {
          insight: 'The street itself is the main attraction',
          implication: 'UI should not dominate',
          feature: 'Minimal interface with visual focus on content'
        },
        {
          insight: 'Support both planned and spontaneous exploration',
          implication: 'Flexible navigation patterns',
          feature: 'Interactive map with location-aware recommendations'
        }
      ],

      figures: [
        {
          id: 1,
          title: 'West-Kruiskade App Overview',
          description: 'Complete interface design and mobile experience',
          image: '/Portfolio/images/portfolio/west-kruiskade/cover.png'
        },
        {
          id: 2,
          title: 'Artwork Story',
          description: 'Detailed view of street art with artist information and cultural context',
          image: '/Portfolio/images/portfolio/west-kruiskade/artwork story.png'
        },
        {
          id: 3,
          title: 'Audio Tour',
          description: 'Audio-guided tour feature for immersive storytelling',
          image: '/Portfolio/images/portfolio/west-kruiskade/audio tour.png'
        },
        {
          id: 4,
          title: 'Explore Streets',
          description: 'Interactive map showing points of interest throughout West-Kruiskade',
          image: '/Portfolio/images/portfolio/west-kruiskade/explore streets.png'
        },
        {
          id: 5,
          title: 'Food, Local & Business',
          description: 'Discover local restaurants, shops, and independent businesses',
          image: '/Portfolio/images/portfolio/west-kruiskade/food local and business.png'
        },
        {
          id: 6,
          title: 'Navigation',
          description: 'Location-based navigation system for the cultural tour',
          image: '/Portfolio/images/portfolio/west-kruiskade/navigation.png'
        },
        {
          id: 7,
          title: 'QR Discovery',
          description: 'QR code scanning for instant access to artwork information',
          image: '/Portfolio/images/portfolio/west-kruiskade/QR discovery.png'
        },
        {
          id: 8,
          title: 'Street Art Museum',
          description: 'Browse the complete collection of murals and street art',
          image: '/Portfolio/images/portfolio/west-kruiskade/street art museum.png'
        }
      ]
    }
  },
];

export const categories = [
  'All',
  'UX Research',
  'Product Design',
  'Human-AI Interaction',
  'UX/UI Design',
  'Mobile App',
];
