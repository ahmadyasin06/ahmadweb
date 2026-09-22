import { TabService, Testimonial, FaqItem, BlogPost } from '../types';

export const servicesData: TabService[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Start with the idea.',
    description: 'Understand what needs to be made, why it matters, and what the final result should feel like.',
    image: '/images/img1.png',
    imageAlt: 'Gain advantage over competitors'
  },
  {
    id: 'design',
    number: '02',
    title: 'Design the experience.',
    description: 'Explore layouts, visuals, interactions, and the details that turn an idea into something people want to use.',
    image: '/images/imgg2.png',
    imageAlt: 'Award winning animations'
  },
  {
    id: 'analytics',
    number: '03',
    title: 'Build and refine.',
    description: 'Turn the design into working code, test what I’ve built, fix what breaks, and keep refining until it feels right.',
    image: '/images/img3.png',
    imageAlt: 'Connecting performance to revenue'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'nevo',
    quote: '“Fast, professional, and super smart. Ahmad took my site to the next level. Highly recommended!”',
    name: 'Nevo',
    role: 'Entrepreneur, Kesef Pashut',
    avatar: '/images/testimonials/nevo.avif'
  },
  {
    id: 'gali',
    quote: '“In a noisy world of tech shortcuts and AI, finding someone real, smart, and committed is rare. Working with Ahmad was refreshing.”',
    name: 'Gali',
    role: 'Entrepreneur, Breath Therapy Institute',
    avatar: '/images/testimonials/gali.avif'
  },
  {
    id: 'amit',
    quote: '“I never imagined a website could excite me, but Ahmad made it happen. His knowledge in every aspect of web design assured me I was in capable hands.”',
    name: 'Amit',
    role: 'Real Estate Appraiser',
    avatar: '/images/testimonials/amit.avif'
  },
  {
    id: 'ron',
    quote: '“Such an easy process with zero stress. Ahmad was there every step of the way, guiding us through, until we reached a site we felt proud of.”',
    name: 'Ron',
    role: 'Developer, Intel',
    avatar: '/images/testimonials/ron.avif'
  },
  {
    id: 'noam',
    quote: '“The redesign had an immediate impact! The design was cleaner and we got feedback from our customers that the messaging was clearer as well.”',
    name: 'Noam',
    role: 'Creative Professional',
    avatar: '/images/testimonials/noam.avif'
  }
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a project take?',
    answer: 'Most projects run 6 to 8 weeks from strategy through launch. I don’t rush, every detail matters. But your most important page goes live first and fast, working and converting while the rest of the system is still being built, so you’re not waiting two months to see anything real. Timelines are confirmed up front.'
  },
  {
    id: 'faq-2',
    question: 'What does a project typically cost?',
    answer: 'Full builds start from ₪15,000 for standard startup websites. The exact investment depends on scope, custom interactions, CMS requirements, and localization needs. Every quote is flat-rate and transparent.'
  },
  {
    id: 'faq-3',
    question: 'How much of my time will this take?',
    answer: 'About 2 hours total for the initial strategy sprint and positioning download. From there, I work autonomously with asynchronous weekly milestone reviews, keeping you focused on shipping your product.'
  },
  {
    id: 'faq-4',
    question: 'Why a solo operator over an agency?',
    answer: 'At an agency, you pitch to the founder, then get handed off to a junior designer. With me, you get a senior partner with product instincts who writes the code, designs the motion, and understands your business goals directly.'
  },
  {
    id: 'faq-5',
    question: 'I already have a website. Can you redesign it?',
    answer: 'Yes. Most of my work involves taking an existing site that no longer reflects the maturity or calibre of the company and elevating it to compete with industry category leaders.'
  },
  {
    id: 'faq-6',
    question: 'What if I genuinely don’t like it?',
    answer: 'The process involves iterative milestones and wireframe alignments before visual Polish. You never see a surprise reveal at the end. We refine until you are truly proud to show it to the world.'
  },
  {
    id: 'faq-7',
    question: 'Can I update the site myself after launch?',
    answer: 'Absolutely. Sites are structured with clean CMS collections or straightforward markdown/data files so your marketing team can publish blogs, changelogs, or update copy without touching code.'
  },
  {
    id: 'faq-8',
    question: 'Do you handle AEO?',
    answer: 'Yes. Answer Engine Optimization is baked in from day one: structured schema markup, semantic HTML hierarchy, and clean semantic architecture so modern AI search engines cite and parse your company correctly.'
  },
  {
    id: 'faq-9',
    question: 'Do you also handle branding and logo design?',
    answer: 'While my primary focus is web architecture and interactive systems, I frequently refine visual identities, typography palettes, and design systems as part of full redesign projects.'
  },
  {
    id: 'faq-10',
    question: 'Do you offer support after the site goes live?',
    answer: 'Yes. I offer a retainer plan for clients who want ongoing support, updates, and performance monitoring. For those who prefer to manage independently, every project ends with a handoff session and full documentation.'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'You can’t secure what you don’t understand.',
    description: 'Tools help find the problem. Understanding what happens underneath helps you see why it’s there.',
    readTime: '4 min read',
    date: 'Sep 2026',
    image: 'https://i.pinimg.com/736x/f1/da/43/f1da43c045d9dbf2e60d857eaa77c19d.jpg',
    url: '#blog-1'
  },
  {
    id: 'blog-2',
    title: 'Every system has something worth exploring.',
    description: 'Code shows you how a system works. Security makes you question what happens when it doesn’t.',
    readTime: '4 min read',
    date: 'May 2026',
    image: 'https://i.pinimg.com/1200x/07/9b/23/079b2309477035668cee2f12e74a7a56.jpg',
    url: '#blog-2'
  },
  {
    id: 'blog-3',
    title: 'Every design has something worth noticing.',
    description: 'Good design feels natural, clear, and memorable. It’s the small decisions that make everything come together.',
    readTime: '6 min read',
    date: 'May 2026',
    image: 'https://i.pinimg.com/736x/75/25/7d/75257dc08e8320898e216f84914d6fbe.jpg',
    url: '#blog-3'
  }
];
