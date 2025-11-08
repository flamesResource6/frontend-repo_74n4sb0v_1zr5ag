import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Premium iOS-style • AI photo calorie scanner
        </span>
        <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Track calories instantly with your camera
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-white/70 sm:text-lg">
          Snap a photo of your meal and get accurate calorie estimates in seconds. Smart, private, and designed with a modern iOS aesthetic.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Download on the App Store"
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 w-auto"
              loading="lazy"
            />
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-12 w-auto"
              loading="lazy"
            />
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'AI Scanning', value: 'Instant' },
            { label: 'Food Database', value: '1M+' },
            { label: 'Privacy', value: 'On-device' },
            { label: 'Rating', value: '4.9/5' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur"
            >
              <div className="text-xs uppercase tracking-wide text-white/50">{item.label}</div>
              <div className="mt-1 text-lg font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
