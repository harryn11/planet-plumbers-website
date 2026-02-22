import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "John & Sarah M.",
    date: "2 weeks ago",
    text: "The team was incredibly polite. They even wore shoe covers every time they entered the house.",
    location: "Oxford"
  },
  {
    name: "Michael P.",
    date: "1 month ago",
    text: "My heating bills dropped by 40%. The installation was seamless and finished on time.",
    location: "Cambridge"
  },
  {
    name: "Emma W.",
    date: "2 months ago",
    text: "Finally, a company that explains things clearly without the sales jargon. Highly recommend.",
    location: "London"
  },
  {
    name: "David L.",
    date: "3 months ago",
    text: "Professional from start to finish. The new boiler is silent and the house is always warm.",
    location: "Bristol"
  },
  {
    name: "Sophie T.",
    date: "4 months ago",
    text: "Clean, tidy, and respectful. They left the place spotless. A breath of fresh air.",
    location: "Manchester"
  }
];

export const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth;
    const clone = track.innerHTML;
    track.innerHTML += clone; // Duplicate for seamless loop

    gsap.to(track, {
      x: -totalWidth / 2,
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-medium text-stone-900">Google Reviews</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
          Trusted by Homeowners
        </h2>
        <div className="flex items-center justify-center gap-2 text-stone-900 font-medium">
          <span className="text-2xl font-bold">4.9</span>
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-stone-500 font-normal ml-2">Based on 142 reviews</span>
        </div>
      </div>

      <div className="relative w-full">
        <div ref={trackRef} className="flex gap-8 w-max px-4">
          {reviews.map((review, index) => (
            <div key={index} className="w-[350px] md:w-[450px] bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-stone-400">{review.date}</span>
              </div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    {review.name}
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div className="text-sm text-stone-500">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
