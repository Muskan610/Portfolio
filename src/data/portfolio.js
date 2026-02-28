export const portfolioItems = [
  {
    id: 1,
    title: 'Dr. Check-in',
    subtitle: 'Designing for PhD Work-Life Harmony',
    category: 'UX Research & Product Design',
    description: 'AI-powered check-in app supporting PhD work-life balance through voice interaction, emotional tracking, and burnout detection.',
    image: '/MuskanWebsite/images/portfolio/main_banner.png',
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
          image: '/MuskanWebsite/images/portfolio/main_banner.png'
        },
        {
          id: 2,
          title: 'Design System',
          description: 'Color palette and visual design language',
          image: '/MuskanWebsite/images/portfolio/colour_pallette.png'
        },
        {
          id: 3,
          title: 'User Flow',
          description: 'Interaction flow and user journey',
          image: '/MuskanWebsite/images/portfolio/user_flow.png'
        },
        {
          id: 4,
          title: 'Design Intent',
          description: 'Core design principles and user-centered approach',
          image: '/MuskanWebsite/images/portfolio/intent.png'
        },
        {
          id: 5,
          title: 'LLM Logic',
          description: 'AI processing and data extraction system',
          image: '/MuskanWebsite/images/portfolio/llm_logic.png'
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
];

export const categories = [
  'All',
  'UX Research',
  'Product Design',
  'Human-AI Interaction',
];
