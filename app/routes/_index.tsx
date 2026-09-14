import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'Belfort Séjours | Appartements de vacances à Belfort' },
    {
      name: 'description',
      content: 'Réservez un appartement de vacances à Belfort : Le Lion, La Citadelle Belfort et 184m2 Belfort. Séjours élégants, confortables et proches de la citadelle.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://belfort-sejour-appartement.pages.dev/' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:title', content: 'Belfort Séjours | Appartements de vacances à Belfort' },
    {
      property: 'og:description',
      content: 'Découvrez nos appartements premium à Belfort pour vos week-ends, vacances et séjours professionnels.',
    },
    { property: 'og:url', content: 'https://belfort-sejour-appartement.pages.dev/' },
    { property: 'og:image', content: 'https://belfort-sejour-appartement.pages.dev/social_preview_index.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
};

const featuredStays = [
  {
    title: 'Le Lion',
    location: 'Belfort',
    price: 'À partir de €110 / nuit',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    href: 'https://www.airbnb.com/h/lelion',
    badge: 'Appartement cosy',
  },
  {
    title: 'La Citadelle Belfort',
    location: 'Belfort',
    price: 'À partir de €130 / nuit',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    href: 'https://www.airbnb.com/h/lacitadellebelfort',
    badge: 'Vue historique',
  },
  {
    title: '184m2 Belfort',
    location: 'Ensemble de 2 appartements',
    price: 'Offre groupée disponible',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    href: 'https://www.airbnb.com/h/184m2belfort',
    badge: 'Location groupée',
  },
];

const amenities = [
  'Wifi rapide',
  'Cuisine équipée',
  'Piscine / spa',
  'Vue panoramique',
  'Accès parking',
  'Proche des transports',
];

const testimonials = [
  {
    quote:
      'Un appartement magnifique, propre et ultra bien situé. Le séjour a été parfait pour notre famille.',
    name: 'Claire M.',
  },
  {
    quote:
      'Le design est incroyable, la communication fluide et le lieu idéal pour un week-end chaleureux.',
    name: 'Lucas D.',
  },
  {
    quote:
      'Nous avons réservé pour 5 nuits et tout était impeccable, du confort à l’accueil. On reviendra.',
    name: 'Sarah K.',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
];

export default function Index() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Belfort Séjours',
    description: 'Appartements de vacances premium à Belfort.',
    url: 'https://belfort-sejour-appartement.pages.dev/',
    image: gallery,
    telephone: '+41763877851',
    email: 'michelklopfenstein1@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belfort',
      addressCountry: 'FR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3',
    },
  };

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d97706] to-[#f5c987] text-lg font-bold text-white shadow-lg shadow-orange-200/60">
            B
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Belfort Séjours</p>
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">Luxury stays</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#sejours" className="transition hover:text-slate-950">Appartements</a>
          <a href="#avantages" className="transition hover:text-slate-950">Avantages</a>
          <a href="#avis" className="transition hover:text-slate-950">Avis</a>
          <a href="/contact" className="transition hover:text-slate-950">Contact</a>
        </nav>

        <a
          href="/contact"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Réserver
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-[#f3d8a8] bg-[#fffaf1] px-4 py-2 text-sm font-medium text-[#9a5f00]">
            2 appartements premium · Belfort · 4.9/5
          </span>

          <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Votre séjour de luxe à Belfort, pensé pour le confort et le style.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Découvrez Le Lion, La Citadelle Belfort et la formule 184m2 Belfort : des appartements élégants, lumineux
            et accueillants conçus pour les courts séjours comme pour les escapades plus longues.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#d97706] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#c76f05]"
            >
              Explorer les appartements
            </a>
            <a
              href="https://www.airbnb.com/h/lelion"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Voir Le Lion
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
            <div>
              <p className="text-2xl font-bold text-slate-950">250+</p>
              <span>voyages réservés</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">98%</p>
              <span>clients satisfaits</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">24/7</p>
              <span>service client</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-48 w-48 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-52 w-52 rounded-full bg-amber-200/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Appartement lumineux"
              className="h-[560px] w-full rounded-[24px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Offre pensée pour vous</p>
                  <p className="mt-1 text-xl font-bold text-slate-950">184m2 Belfort</p>
                </div>
                <div className="rounded-full bg-[#fff3d8] px-3 py-1 text-sm font-semibold text-[#9a5f00]">
                  ★ 5.0
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>Belfort · 2 appartements</span>
                <span className="text-lg font-bold text-slate-950">Offre groupée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sejours" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5f00]">Nos appartements</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">Des logements à Belfort pensés pour votre séjour</h2>
          </div>
          <a
            href="https://www.airbnb.com/h/184m2belfort"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-slate-800 underline-offset-4 hover:underline md:inline-flex"
          >
            Voir la formule groupée
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredStays.map((stay) => (
            <a
              key={stay.title}
              href={stay.href}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={stay.image} alt={stay.title} className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-950">{stay.title}</h3>
                  <span className="rounded-full bg-[#fff3d8] px-2.5 py-1 text-xs font-semibold text-[#9a5f00]">
                    ★ {stay.rating}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{stay.location}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{stay.badge}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm text-slate-500">{stay.price}</span>
                  <span className="text-sm font-semibold text-[#9a5f00]">Voir l’annonce →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="avantages" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Pourquoi choisir</p>
            <h2 className="mt-4 text-3xl font-bold">Un séjour à Belfort pensé pour le confort, la proximité et le calme.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Que vous choisissiez Le Lion, La Citadelle Belfort ou l’offre 184m2 Belfort, vous profitez d’un cadre
              accueillant, bien situé et pensé pour les voyageurs qui aiment la qualité de vie.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {amenities.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] bg-[#fffaf2] p-6 shadow-sm ring-1 ring-orange-100">
              <div className="mb-4 text-3xl">🏡</div>
              <h3 className="text-xl font-bold text-slate-950">Design premium</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Intérieurs chaleureux, lumineux et soigneusement décorés pour offrir une expérience agréable.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f8fafc] p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 text-3xl">📍</div>
              <h3 className="text-xl font-bold text-slate-950">Emplacements recherchés</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                À quelques minutes des meilleurs quartiers, restaurants, transports et attractions locales.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f5f3ff] p-6 shadow-sm ring-1 ring-violet-200">
              <div className="mb-4 text-3xl">🛏️</div>
              <h3 className="text-xl font-bold text-slate-950">Confort maximal</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Literie de qualité, linge de maison, espace de travail et ambiance apaisante.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#eefbf4] p-6 shadow-sm ring-1 ring-emerald-200">
              <div className="mb-4 text-3xl">✨</div>
              <h3 className="text-xl font-bold text-slate-950">Service clé en main</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Check-in simple, conseils locaux et support réactif avant et pendant votre séjour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={image} className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
              <img
                src={image}
                alt="Vue d'appartement"
                className={index === 0 ? 'h-[420px] w-full rounded-[28px] object-cover' : 'h-64 w-full rounded-[28px] object-cover'}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="avis" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5f00]">Avis clients</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Des expériences que les voyageurs recommandent</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-amber-500 text-xl">★★★★★</div>
              <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-950">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#2f1f11] px-8 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Réservation</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Prêt à réserver votre séjour de luxe à Belfort ?</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#d97706] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#c76f05]"
              >
                Réserver maintenant
              </a>
              <a
                href="https://www.airbnb.com/h/184m2belfort"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-slate-100/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-100/10"
              >
                Voir la formule groupée
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
