'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { personalInfo, socialLinks, languages, programmingLanguages, skills } from '@/data/portfolioData';
import LanguageItem from '@/components/molecules/LanguageItem';
import ProgrammingLanguageItem from '@/components/molecules/ProgrammingLanguageItem';

/**
 * Sección: header móvil con menú hamburguesa.
 * Al tocar el ícono de hamburguesa se abre un panel lateral
 * con toda la información del sidebar izquierdo.
 */
export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header fijo en móvil */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
        >
          <Icon icon="mdi:menu" width={24} />
        </button>

        {/* Nombre centrado */}
        <p className="font-display font-bold text-text-primary text-sm">
          {personalInfo.name}
        </p>

        {/* Redes sociales */}
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
              <Icon icon={link.icon} width={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel lateral deslizable */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-bg-secondary border-r border-bg-border
                    overflow-y-auto transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between p-4 border-b border-bg-border">
          <span className="font-display font-bold text-text-primary text-sm">Perfil</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <Icon icon="mdi:close" width={20} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-6">

          {/* Información personal */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden
                            ring-2 ring-accent-cyan/40 ring-offset-2 ring-offset-bg-secondary">
              {/* Fallback iniciales detrás de la foto */}
              <div className="absolute inset-0 flex items-center justify-center
                              bg-gradient-to-br from-accent-purple/40 to-accent-cyan/20
                              font-display font-bold text-text-primary text-lg z-0">
                AO
              </div>
              {/* Foto real encima */}
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className="object-cover z-10"
              />
            </div>
            <div>
              <p className="font-display font-bold text-text-primary text-sm">
                {personalInfo.name}
              </p>
              <p className="text-text-muted text-xs mt-1 leading-snug">
                {personalInfo.title}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-accent-green">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              Disponible para proyectos
            </div>
          </div>

          <div className="h-px bg-bg-border" />

          {/* Contacto */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Contacto</p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-xs text-text-secondary">
                <Icon icon="mdi:map-marker" width={14} className="text-accent-cyan shrink-0" />
                {personalInfo.location}
              </li>
              <li className="flex items-center gap-2 text-xs text-text-secondary">
                <Icon icon="mdi:phone" width={14} className="text-accent-cyan shrink-0" />
                {personalInfo.phone}
              </li>
              <li className="flex items-center gap-2 text-xs text-text-secondary break-all">
                <Icon icon="mdi:email" width={14} className="text-accent-cyan shrink-0" />
                {personalInfo.email}
              </li>
            </ul>
          </div>

          <div className="h-px bg-bg-border" />

          {/* Idiomas */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Idiomas</p>
            {languages.map((lang) => (
              <LanguageItem key={lang.name} language={lang} />
            ))}
          </div>

          <div className="h-px bg-bg-border" />

          {/* Lenguajes de programación */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Lenguajes</p>
            {programmingLanguages.map((lang) => (
              <ProgrammingLanguageItem key={lang.name} lang={lang} />
            ))}
          </div>

          <div className="h-px bg-bg-border" />

          {/* Habilidades */}
          <div className="pb-6">
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Habilidades</p>
            <div className="flex flex-col gap-2">
              {skills.map((skill) => (
                <div key={skill.name}
                     className="flex items-center gap-2 text-xs text-text-secondary
                                bg-bg-card rounded-lg px-3 py-2 border border-bg-border">
                  <Icon icon={skill.icon} width={14} className="text-accent-purple shrink-0" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}