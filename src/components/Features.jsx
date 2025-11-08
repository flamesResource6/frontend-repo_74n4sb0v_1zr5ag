import React from 'react';
import { Camera, Sparkles, Shield, Activity } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'AI Photo Scanning',
    desc: 'Point, shoot, and get instant calorie and macro estimates using computer vision.',
  },
  {
    icon: Sparkles,
    title: 'Smart Suggestions',
    desc: 'Auto-detect meals and portion sizes with helpful corrections and tips.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    desc: 'On-device processing for supported devices and encrypted sync across platforms.',
  },
  {
    icon: Activity,
    title: 'Actionable Insights',
    desc: 'Trends, targets, and daily streaks to keep you motivated without the clutter.',
  },
];

const Features = () => {
  return (
    <section className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Features</h2>
          <p className="mt-3 text-white/70">
            Everything you need to track smarter, designed with a premium iOS look and feel.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
