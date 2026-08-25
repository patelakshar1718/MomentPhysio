'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';

type Theme = 'light' | 'dark';

export function ThemeToggle({ className = '' }: { className?: string }) {
  // Starts undefined so the button renders inert markup on the server and
  // adopts the real value once mounted — the <ThemeScript> has already set the
  // attribute by then, so there is no visual change.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('mt-theme', next);
    } catch {
      /* private mode — the toggle still works for this session */
    }
  }

  const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent-text ${className}`}
    >
      {/* Both icons are rendered and cross-faded so the button never reflows. */}
      <span className="relative block h-[18px] w-[18px]">
        <Icon
          name="sun"
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        />
        <Icon
          name="moon"
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light' ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  );
}
