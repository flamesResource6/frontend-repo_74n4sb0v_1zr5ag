import React from 'react';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-8 backdrop-blur sm:p-12">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Start scanning smarter today</h3>
            <p className="mt-2 text-white/70">Download the app and join thousands building healthier habits with effortless logging.</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
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
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <ul className="space-y-3">
              <li>• Accurate calorie and macro estimates</li>
              <li>• Works with photos and live camera</li>
              <li>• Apple Health and Google Fit sync</li>
              <li>• Offline mode and privacy-first</li>
              <li>• Minimal, premium iOS-inspired design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
