'use client';
import { Icon } from '@iconify/react';
import { personalInfo, socialLinks } from '@/data/portfolioData';

/**
 * Sección: Footer del portafolio.
 * Diseño minimalista con nombre, redes sociales y año.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-border py-8 mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Izquierda: nombre y tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display font-bold text-text-primary text-sm">
            {personalInfo.name}
          </span>
          <span className="text-text-muted text-xs font-mono">
            &lt;/ portafolio&gt; · {year}
          </span>
        </div>

        {/* Centro: mensaje */}
        <div className="flex items-center gap-2 text-text-muted text-xs">
          <span>Hecho con</span>
          <Icon icon="mdi:heart" width={14} className="text-accent-purple" />
          <span>usando NextJS & TailwindCSS</span>
        </div>

        {/* Derecha: redes sociales */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
            >
              <Icon icon={link.icon} width={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
