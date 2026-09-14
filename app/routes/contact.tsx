import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'Réservation | Belfort Séjours Luxury' },
    {
      name: 'description',
      content: 'Réservez votre séjour à Belfort avec Belfort Séjours : Le Lion, La Citadelle Belfort ou la formule 184m2 Belfort.',
    },
  ];
};

const apartments = [
  {
    name: 'Le Lion',
    href: 'https://www.airbnb.com/h/lelion',
    description: 'Appartement confortable et bien situé pour un séjour agréable en ville.',
  },
  {
    name: 'La Citadelle Belfort',
    href: 'https://www.airbnb.com/h/lacitadellebelfort',
    description: 'Un cadre historique et inspirant, parfait pour un séjour plus mémorable.',
  },
  {
    name: '184m2 Belfort',
    href: 'https://www.airbnb.com/h/184m2belfort',
    description: 'Formule groupée idéale pour plusieurs voyageurs ou un séjour plus spacieux.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-slate-900">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d97706] to-[#f5c987] text-lg font-bold text-white shadow-lg shadow-orange-200/60">
            B
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Belfort Séjours</p>
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">Luxury stays</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="/" className="transition hover:text-slate-950">Accueil</a>
          <a href="/#sejours" className="transition hover:text-slate-950">Appartements</a>
          <a href="/#avis" className="transition hover:text-slate-950">Avis</a>
        </nav>

        <a
          href="https://www.airbnb.com/h/184m2belfort"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Réserver
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-[#2f1f11] p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Reservation</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Réservez votre séjour de luxe à Belfort.</h1>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Choisissez parmi des appartements élégants, bien conçus et parfaitement situés pour un séjour agréable,
              intime ou en famille.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Téléphone</p>
                <p className="mt-1 text-lg font-semibold">+41 76 387 78 51</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Email</p>
                <p className="mt-1 text-lg font-semibold">michelklopfenstein1@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Localisation</p>
                <p className="mt-1 text-lg font-semibold">Belfort, France</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <h2 className="text-2xl font-bold text-slate-950">Formulaire de demande</h2>
            <p className="mt-2 text-slate-600">Renseignez vos informations et nous vous répondrons rapidement.</p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Nom
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    placeholder="vous@email.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Appartement souhaité
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white">
                  <option>Le Lion</option>
                  <option>La Citadelle Belfort</option>
                  <option>184m2 Belfort</option>
                </select>
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Arrivée
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Départ
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea
                  rows={5}
                  placeholder="Décrivez vos besoins, le nombre de voyageurs et la période souhaitée..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
                />
              </label>

              <a
                href="mailto:michelklopfenstein1@gmail.com?subject=Demande%20de%20r%C3%A9servation&body=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20sejour%20%3A%0A%0A-%20Appartement%20souhait%C3%A9%20%3A%0A-%20Dates%20%3A%0A-%20Nombre%20de%20voyageurs%20%3A%0A-%20Message%20%3A"
                className="inline-flex rounded-full bg-[#d97706] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#c76f05]"
              >
                Envoyer la demande
              </a>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5f00]">Nos logements</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">Choisissez votre séjour idéal</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {apartments.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              <div className="mt-6 inline-flex items-center font-semibold text-[#9a5f00]">Voir l’annonce →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
