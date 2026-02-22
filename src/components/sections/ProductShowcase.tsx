import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Volume2, Smartphone, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // The image wrapper uses Tailwind's 'sticky top-0' for a native sticky effect,
    // so we don't need GSAP ScrollTrigger to pin it here.

    // Feature text animations
    gsap.utils.toArray('.feature-text').forEach((text: any) => {
      gsap.from(text, {
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-stone-900 text-white py-24 min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 z-10" />
        <img
          ref={imageRef}
          src="/showcase-bg.jpg"
          alt="Expert Plumbing & Heating"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-[80vh] pt-[50vh] pb-[50vh]">
        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400 mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">A-Rated Condensing Boilers</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Upgrade to a modern, highly efficient boiler. Save on your energy bills while keeping your home comfortably warm all year round.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-6">
            <Volume2 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Expert Plumbing Services</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            From leaky taps to complex heating systems, our experienced team handles all aspects of domestic plumbing with care and precision.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto text-orange-400 mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Smart Control</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Control your home's climate from anywhere using your smartphone. Set schedules and monitor your system easily.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400 mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Gas Safety Certified</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            We supply landlord certificates and carry out annual gas safety inspections to ensure your property meets all legal requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
