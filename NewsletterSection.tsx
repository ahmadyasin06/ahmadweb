import React from 'react';
import { blogPostsData } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { BlockRevealHeading } from './BlockRevealHeading';

export const NewsletterSection: React.FC = () => {
  return (
    <section
      id="WORK&LEARNING"
      data-nav-theme="dark"
      className="section-pad-y"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid rgba(242, 237, 232, 0.08)'
      }}
    >
      <div className="section-inner">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-label text-[11px] tracking-widest text-[#C8965A] font-semibold">
                WORK & LEARNING
              </span>
              <span className="text-[12px] text-white/30">•</span>
              <span className="font-mono text-[12px] text-white/50">
                Updated Weekly
              </span>
            </div>
            <BlockRevealHeading
              as="h2"
              id="newsletter-headline"
              className="font-heading text-section font-bold"
              bgTheme="dark"
              lines={[
                {
                  text: 'Building, Learning and Growing',
                  segments: [
                    { text: 'Building, Learning and ' },
                    { text: 'Growing', isAccent: true }
                  ]
                }
              ]}
            />
          </div>

          <a
            href="https://www.linkedin.com/in/ahmadyasin06/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playTick()}
            onClick={() => sound.playClick()}
            className="magnetic-link inline-flex items-center gap-2 text-nav font-medium text-[#F2EDE8]/80 hover:text-[#F2EDE8] py-2 px-3 border border-white/20 hover:border-white/50 rounded-[5px] transition-all self-start md:self-auto"
          >
            <span>View all work</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => sound.playTick()}
              onClick={() => sound.playClick()}
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white/80 border border-white/10">
                  {post.readTime}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="font-mono text-[11px] text-white/40 mb-3">
                  {post.date}
                </p>
                <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-[#F2EDE8] group-hover:text-[#C8965A] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-body text-[14px] text-white/65 line-clamp-3 leading-relaxed mt-auto">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
