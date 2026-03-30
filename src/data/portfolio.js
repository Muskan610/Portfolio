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
    id: 3,
    title: 'Breda Digital Assistant',
    subtitle: 'Designing a Multilingual AI Assistant for Migrant Workers',
    category: 'UX Research & Product Design',
    description: 'AI-powered conversational assistant helping migrant workers access municipal information through voice interaction, multilingual support, and transparent data explanations.',
    image: '/Portfolio/images/portfolio/breda/title page.png',
    tags: ['UX Research', 'AI/ML', 'Voice Interface', 'Digital Inclusion'],
    url: '/projects/breda-digital-assistant',

    research: {
      timeline: 'January – February 2026',
      role: 'UX Researcher & Designer',
      institution: 'Municipality of Breda × Utrecht University of Applied Sciences',

      introduction: `Migrant workers in the Netherlands often struggle to navigate government systems due to language barriers, unfamiliar digital infrastructure, and complex procedures.

The Municipality of Breda is exploring a conversational AI assistant that helps migrants ask questions about municipal services in their own language and receive clear explanations.

My focus was designing an interaction that is accessible, transparent, and respectful of users with limited digital literacy.`,

      problem: {
        description: 'Many migrant workers can use smartphones but still struggle with Dutch digital bureaucracy.',
        challenges: [
          'Difficulty understanding government forms',
          'Language barriers when accessing municipal information',
          'Confusion around systems like BSN, DigiD, and registration',
          'Lack of clarity about how personal data is used'
        ],
        impact: 'Without clear explanations, digital services risk excluding the people they aim to help.'
      },

      methodology: {
        approach: 'Mixed methods approach combining research and design exploration',
        methods: ['Literature review on digital inclusion', 'Ideation workshops', 'Low-fidelity prototyping', 'UX concept evaluation'],
        focus: 'The research focused on trust, accessibility, and data transparency in AI interfaces'
      },

      keyInsights: [
        {
          insight: 'Digital literacy is contextual',
          implication: 'Users may know how to use phones but not how government systems work',
          feature: 'Step-by-step explanations of procedures'
        },
        {
          insight: 'Trust depends on transparency',
          implication: 'Users hesitate to share personal data if they don\'t understand why it is needed',
          feature: 'Clear privacy explanations before data collection'
        },
        {
          insight: 'Language accessibility is essential',
          implication: 'Interfaces must support multilingual interaction to reduce confusion',
          feature: 'Multilingual support with easy language switching'
        },
        {
          insight: 'Automation must not replace human support',
          implication: 'AI should assist public services, not replace them',
          feature: 'Assistant acts as first point of information, not replacement'
        }
      ],

      designConcept: {
        title: 'Breda Digital Assistant',
        description: 'A conversational interface where migrant workers can ask questions about municipal services through voice or text.',
        coreFeatures: [
          'Voice-first interaction',
          'Multilingual support',
          'Step-by-step explanations of procedures',
          'Minimal personal data collection',
          'Clear privacy explanations'
        ],
        purpose: 'The assistant acts as a first point of information, helping users understand processes before interacting with municipal systems.'
      },

      interactionFlow: {
        steps: [
          'User asks a question',
          'Assistant provides general information first',
          'If personal data is required, the system explains why it is needed',
          'User chooses whether to continue'
        ],
        rationale: 'This ensures users receive help without unnecessary data sharing.'
      },

      privacyByDesign: {
        description: 'Because the system handles sensitive information, transparency was built into the interface.',
        elements: [
          'Data explanation before input',
          'Clear "why we need this" messaging',
          'No hidden data logging',
          'Visible privacy information during the conversation'
        ]
      },

      multilingualAccessibility: {
        description: 'The assistant supports multiple languages commonly spoken by migrant workers.',
        designChoices: [
          'Easy language switching',
          'Translated interface and responses',
          'Voice interaction to support low literacy users'
        ]
      },

      reflection: 'Designing AI for public services requires balancing accessibility, trust, and accountability. AI assistants can make government information easier to access, but they should support — not replace — human assistance, especially for vulnerable users.',

      impact: {
        overview: 'This project explored how conversational AI can improve access to municipal services for migrant workers while maintaining transparency and trust.',
        keyOutcomes: [
          'Developed a multilingual conversational interface concept tailored for migrant workers with different language and literacy levels',
          'Designed privacy-by-design interaction patterns, ensuring users understand why personal data is requested before sharing it',
          'Proposed a purpose-limited data flow, where general information is provided first and personal data is only requested when legally necessary',
          'Demonstrated how voice interaction and simple language can reduce barriers for users unfamiliar with Dutch government systems',
          'Delivered UX insights and design concepts that can support the next iteration of the Breda digital assistant project'
        ]
      },

      figures: [
        {
          id: 1,
          title: 'Breda Digital Assistant',
          description: 'Complete interface design showing the conversational AI assistant for municipal services',
          image: '/Portfolio/images/portfolio/breda/title page.png'
        },
        {
          id: 2,
          title: 'Privacy by Design',
          description: 'Data explanation before input with clear "why we need this" messaging',
          image: '/Portfolio/images/portfolio/breda/privacy by design.png'
        },
        {
          id: 3,
          title: 'Multilingual Accessibility',
          description: 'Language switching and translated interface supporting multiple languages',
          image: '/Portfolio/images/portfolio/breda/multilingual.png'
        },
        {
          id: 4,
          title: 'Minimal Data Collection',
          description: 'Purpose-limited data flow with clear explanations',
          image: '/Portfolio/images/portfolio/breda/minimal data.png'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'CB Order Sync Dashboard',
    subtitle: 'Designing an Operational Dashboard for WooCommerce Order Monitoring',
    category: 'UX/UI Design & Development',
    description: 'A UX design and front-end development project for a WordPress plugin used by online bookstores. The dashboard provides webshop owners with a visual overview of order statuses, sales activity, and delivery confirmations.',
    image: '/Portfolio/images/portfolio/cb-order-sync/Cover.png',
    tags: ['UX/UI Design', 'Front-End Development', 'Dashboard Design', 'WordPress'],
    url: '/projects/cb-order-sync',

    research: {
      timeline: 'February – June 2022',
      role: 'UX Designer & Front-End Developer',
      institution: 'Buro Zero Digital Agency',

      introduction: `Online bookstores using the CB Order Sync plugin send their orders to Centraal Boekhuis (CB), the main book distributor in the Netherlands and Belgium.

The plugin automated order processing, but there was no visual interface to monitor order outcomes.

To check whether an order succeeded or failed, webshop owners had to access server files through an FTP client and manually inspect technical confirmation files. This created several issues: non-technical users could not easily interpret the order data, monitoring order success or failure required server access, and errors in order processing were difficult to detect quickly. The lack of visibility reduced the usability and commercial value of the plugin.

The goal was to design and develop a dashboard interface that allows webshop owners to monitor orders without accessing backend server files. The dashboard needed to provide a clear overview of successful and failed orders, visualize order activity and sales trends, allow filtering and inspection of individual orders, and surface operational issues such as failed orders or email errors.`,

      methodology: {
        approach: 'To understand the needs of webshop owners and plugin stakeholders, several research methods were used. The research revealed three primary needs: operational visibility, trend awareness, and error management.',
        participants: 'Internal stakeholders, webshop owners, and Buro Zero digital agency team',
        period: 'February - June 2022',
        methods: ['Stakeholder interviews', 'Client survey insights', 'Literature research on dashboard design', 'Requirement prioritization using MoSCoW', 'Usability testing with internal users']
      },

      keyInsights: [
        {
          insight: 'Operational visibility is essential',
          implication: 'Users needed a simple way to see whether orders were processed successfully',
          feature: 'Clear overview of successful and failed orders with status indicators'
        },
        {
          insight: 'Trend awareness drives business decisions',
          implication: 'Webshop owners wanted to understand order volume across different time periods',
          feature: 'Interactive charts showing weekly, monthly, and yearly order trends'
        },
        {
          insight: 'Error management must be proactive',
          implication: 'Failed orders and email delivery problems needed to be clearly visible',
          feature: 'Status monitoring with color-coded alerts for failed orders'
        },
        {
          insight: 'Technical barriers limit plugin adoption',
          implication: 'Non-technical users could not easily interpret order data from server files',
          feature: 'Visual dashboard interface eliminating need for FTP access'
        }
      ],

      usabilityTesting: {
        summary: 'Usability testing sessions were conducted with internal stakeholders representing the target user group. Participants performed tasks such as locating failed orders, filtering orders by status, and interpreting order statistics. The final dashboard delivered a functional operational overview that removed the need for users to inspect server files and significantly improved the usability of the plugin.',
        positives: [
          'Users could quickly identify order status at a glance',
          'Chart visualizations made trends easy to understand',
          'Table filtering worked intuitively',
          'Overall layout provided clear operational overview'
        ],
        feedback: [
          'Clearer explanation of order status codes',
          'Better placement of navigation elements',
          'Feedback for empty search results',
          'Consistent chart interaction behaviour'
        ]
      },

      figures: [
        {
          id: 1,
          title: 'CB Order Sync Dashboard Overview',
          description: 'Complete dashboard interface showing operational monitoring for WooCommerce orders',
          image: '/Portfolio/images/portfolio/cb-order-sync/Cover.png'
        },
        {
          id: 2,
          title: 'Dashboard Interface',
          description: 'Main dashboard view with statistics, charts, and order management',
          image: '/Portfolio/images/portfolio/cb-order-sync/dashboard.png'
        },
        {
          id: 3,
          title: 'Color Palette',
          description: 'Visual design system and color palette for the dashboard',
          image: '/Portfolio/images/portfolio/cb-order-sync/color pallete.png'
        },
        {
          id: 4,
          title: 'Orders Management',
          description: 'Detailed order table with filtering and search capabilities',
          image: '/Portfolio/images/portfolio/cb-order-sync/orders management.png'
        },
        {
          id: 5,
          title: 'Email Monitoring',
          description: 'Email delivery monitoring and notification system',
          image: '/Portfolio/images/portfolio/cb-order-sync/email monitoring.png'
        },
        {
          id: 6,
          title: 'Edge Cases',
          description: 'Error handling and edge case scenarios in order processing',
          image: '/Portfolio/images/portfolio/cb-order-sync/edge cases.png'
        }
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
  'Digital Inclusion',
  'Dashboard Design',
  'Front-End Development',
];
