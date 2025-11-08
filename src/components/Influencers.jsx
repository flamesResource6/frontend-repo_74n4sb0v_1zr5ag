import React from 'react';

const influencers = [
  {
    name: 'Alex Chen',
    handle: '@alexfit',
    quote: 'I just point my camera and it logs everything for me — game changer.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Maya Lopez',
    handle: '@mayalifts',
    quote: 'The most elegant way to track meals. It actually makes me want to log.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Jordan Park',
    handle: '@jpwellness',
    quote: 'Accurate scans and beautiful visuals — feels truly next‑gen.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
];

const Influencers = () => {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Loved by creators</h2>
          <p className="mt-3 text-white/70">Fitness coaches and wellness influencers are already scanning smarter.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {influencers.map((p) => (
            <div key={p.handle} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <img src={p.avatar} alt={p.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-white/60">{p.handle}</div>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{p.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Influencers;
