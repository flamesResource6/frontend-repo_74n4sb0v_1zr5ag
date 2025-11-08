import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Influencers from './components/Influencers';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <span className="text-sm font-semibold tracking-wide text-white/90">CalCam AI</span>
        </div>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#influencers" className="hover:text-white">Creators</a>
        </nav>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="how"><HowItWorks /></div>
        <div id="influencers"><Influencers /></div>
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2">© {new Date().getFullYear()} CalCam AI</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
