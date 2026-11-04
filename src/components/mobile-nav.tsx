'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Cómo trabajamos' },
  { href: '#cobertura', label: 'Cobertura' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isOpen}
        aria-controls="mobile-primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        <span>{isOpen ? 'Cerrar' : 'Menú'}</span>
      </button>
      <nav
        id="mobile-primary-navigation"
        className="mobile-nav"
        aria-label="Navegación principal móvil"
        data-open={isOpen}
        hidden={!isOpen}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setIsOpen(false);
        }}
      >
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
