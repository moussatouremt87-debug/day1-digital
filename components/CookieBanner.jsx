'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const GA_MEASUREMENT_ID = 'G-H0EKE47FEQ';

const translations = {
  fr: {
    title: 'Nous respectons votre vie priv\u00e9e',
    text: "Ce site utilise des cookies analytiques (Google Analytics) pour am\u00e9liorer votre exp\u00e9rience. Aucun cookie n'est d\u00e9pos\u00e9 sans votre consentement.",
    accept: 'Accepter',
    refuse: 'Refuser',
    manage: 'G\u00e9rer mes choix',
    analyticsLabel: 'Cookies analytiques',
    analyticsDesc: "Google Analytics \u2014 mesure d'audience anonyme",
    save: 'Enregistrer mes choix',
    backLabel: 'Retour',
  },
  en: {
    title: 'We respect your privacy',
    text: 'This site uses analytical cookies (Google Analytics) to improve your experience. No cookies are set without your consent.',
    accept: 'Accept',
    refuse: 'Decline',
    manage: 'Manage preferences',
    analyticsLabel: 'Analytics cookies',
    analyticsDesc: 'Google Analytics \u2014 anonymous audience measurement',
    save: 'Save preferences',
    backLabel: 'Back',
  },
};

function loadGA() {
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

function removeGA() {
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  const cookies = document.cookie.split(';');
  for (let c of cookies) {
    const name = c.split('=')[0].trim();
    if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }
}

export default function CookieBanner() {
  const { language } = useLanguage();
  const t = translations[language];
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setVisible(true);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    loadGA();
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    removeGA();
    setVisible(false);
  };

  const handleSave = () => {
    if (analyticsEnabled) {
      handleAccept();
    } else {
      handleRefuse();
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-charcoal-800 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/50 p-6">
        {!showDetails ? (
          <>
            <h3 className="text-slate-50 font-semibold text-base mb-2">{t.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{t.text}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-charcoal-900 font-semibold rounded-lg transition-colors text-sm"
              >
                {t.accept}
              </button>
              <button
                onClick={handleRefuse}
                className="flex-1 px-5 py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-slate-50 rounded-lg transition-colors text-sm"
              >
                {t.refuse}
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="px-5 py-2.5 text-slate-400 hover:text-lime-400 transition-colors text-sm underline underline-offset-2"
              >
                {t.manage}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-slate-50 font-semibold text-base mb-4">{t.manage}</h3>
            <div className="flex items-center justify-between bg-charcoal-900/50 rounded-lg p-4 mb-4">
              <div>
                <p className="text-slate-50 text-sm font-medium">{t.analyticsLabel}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.analyticsDesc}</p>
              </div>
              <button
                onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  analyticsEnabled ? 'bg-lime-500' : 'bg-slate-600'
                }`}
                role="switch"
                aria-checked={analyticsEnabled}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                    analyticsEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDetails(false)}
                className="px-5 py-2.5 text-slate-400 hover:text-slate-50 transition-colors text-sm"
              >
                {t.backLabel}
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-charcoal-900 font-semibold rounded-lg transition-colors text-sm"
              >
                {t.save}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
