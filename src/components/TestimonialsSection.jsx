import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIdx] || testimonials[0];

  return (
    <section id="testimonials" className="py-20 bg-cream-100/70 border-t border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Student & Parent Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Testimonials
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Heartfelt feedback from students, parents & music lovers
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-xl relative overflow-hidden">
            <Quote className="w-24 h-24 text-gold-400/10 absolute -top-4 -left-4 pointer-events-none" />

            <div className="flex justify-center gap-1 text-gold-500 mb-6">
              {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <blockquote className="text-stone-700 font-serif italic text-lg sm:text-2xl text-center leading-relaxed mb-8">
              “{activeTestimonial.text}”
            </blockquote>

            <div className="text-center border-t border-stone-100 pt-6">
              <h4 className="font-serif text-xl font-bold text-maroon-900">
                {activeTestimonial.name}
              </h4>
              <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mt-1">
                {activeTestimonial.role} • <span className="text-stone-500">{activeTestimonial.course}</span>
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white border border-stone-300 hover:border-gold-500 text-stone-700 hover:text-maroon-900 shadow-sm transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIdx === idx ? 'bg-maroon-800 w-8' : 'bg-stone-300 hover:bg-gold-400'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white border border-stone-300 hover:border-gold-500 text-stone-700 hover:text-maroon-900 shadow-sm transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
