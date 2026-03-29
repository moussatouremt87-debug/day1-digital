import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable \u2014 Day1.digital',
  description: 'La page que vous recherchez n\u2019existe pas ou a \u00e9t\u00e9 d\u00e9plac\u00e9e.',
};

export default function NotFound() {
  return (
    <main className="bg-charcoal-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-lg">
        {/* Big 404 */}
        <h1 className="text-[8rem] sm:text-[10rem] font-bold leading-none text-lime-500 text-glow select-none">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-50">
          Page introuvable
        </p>
        <p className="mt-3 text-slate-400 text-base sm:text-lg leading-relaxed">
          La page que vous cherchez n&apos;existe pas ou a \u00e9t\u00e9 d\u00e9plac\u00e9e.
          Pas de souci, on vous ram\u00e8ne \u00e0 bon port.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-lime-500 text-charcoal-900 font-semibold rounded-xl hover:bg-lime-400 transition-all duration-300 glow-lime hover:glow-lime-strong"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Retour \u00e0 l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
