import React from 'react';

const steps = [
  {
    step: '1',
    title: 'Snap',
    desc: 'Open the camera and take a photo of your meal. The app detects foods automatically.',
  },
  {
    step: '2',
    title: 'Review',
    desc: 'Confirm the detected items and adjust portion sizes with a simple slider.',
  },
  {
    step: '3',
    title: 'Track',
    desc: 'Instant calorie and macro breakdown gets added to your day. No manual entry needed.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From photo to nutrition in three simple steps.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-black font-semibold">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
