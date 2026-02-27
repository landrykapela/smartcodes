import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 text-white p-4 flex flex-col md:flex-row items-center justify-between z-[9999] shadow-lg">
      <span className="mb-2 md:mb-0 text-sm">
        This website uses cookies to enhance the user experience. By continuing to browse, you accept our cookie policy.
      </span>
      <button
        onClick={acceptCookies}
        className="ml-0 md:ml-4 px-4 py-2 bg-accent text-black rounded font-semibold hover:bg-accent/80 transition-colors"
      >
        Accept
      </button>
    </div>
  );
}
