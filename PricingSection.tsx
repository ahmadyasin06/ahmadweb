import React from 'react';
import { sound } from '../utils/sound';
import { BlockRevealHeading } from './BlockRevealHeading';

interface PricingSectionProps {
  onOpenContact: (prefill?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  const projects = [
    {
      id: 'cv-scanner',
      number: '01',
      title: 'CV Scanner',
      description: 'An intelligent Python-powered CV screening system that extracts candidate information, compares qualifications against job requirements, and generates detailed match scores with hire, consider, or reject recommendations.',
      url: 'https://cvscanner-byahmad.streamlit.app/',
      image: '/images/cvimg.jpg',
    },
    {
      id: 'expense-tracker',
      number: '02',
      title: 'Smart Expense Tracker',
      description: 'A modern Python-powered expense tracking dashboard that visualizes spending patterns, categorizes expenses, tracks monthly trends, and provides actionable insights to help you manage finances intelligently.',
      url: 'https://ahmadsexpensetracker.netlify.app/',
      image: '/images/et.jpg',
    }
  ];

  return (
    <section
      id="pricing"
      data-nav-theme="dark"
      className="section-pad-y"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="section-inner flex flex-col gap-10 md:gap-14">
        {/* Title */}
        <div className="shrink-0">
          <BlockRevealHeading
            as="h2"
            id="pricing-headline"
            className="font-heading text-section font-bold"
            bgTheme="dark"
            lines={[
              {
                text: 'Python Projects',
                segments: [
                  { text: 'Python ' },
                  { text: 'Projects', isAccent: true }
                ]
              }
            ]}
          />
        </div>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`card-${project.id}`}
              className="flex flex-col flex-1 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(242,237,232,0.1)'
              }}
            >
              {/* Project Image */}
              <div
                className="w-full h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950"
                style={{ aspectRatio: '1 / 0.8' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-7 sm:p-8 md:p-10">
                {/* Project Number */}
                <div
                  className="flex items-center gap-2 mb-4 font-mono text-[11px] tracking-widest font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <span>&#9632;</span>
                  <span>PROJECT {project.number}</span>
                </div>

                {/* Project Title */}
                <h3
                  className="mb-3 font-heading font-bold text-[28px] sm:text-[32px] leading-tight"
                  style={{ color: 'var(--color-text)' }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  className="flex-1 mb-8 text-body leading-relaxed"
                  style={{ color: 'rgba(242,237,232,0.8)' }}
                >
                  {project.description}
                </p>

                {/* Learn More Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playTick()}
                  className="magnetic-link relative overflow-hidden cursor-pointer text-nav font-medium px-4 py-2.5 rounded-[5px] text-[#F2EDE8] border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all self-start inline-flex items-center gap-2"
                  aria-label={`Learn more about ${project.title}`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 32"
                      fill="none"
                      aria-hidden="true"
                      className="w-1.5 h-3.5"
                    >
                      <path
                        d="M3 24L11 16L3 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};