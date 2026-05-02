'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import LanguageItem from '@/components/molecules/LanguageItem';
import ProgrammingLanguageItem from '@/components/molecules/ProgrammingLanguageItem';
import {
  personalInfo,
  languages,
  programmingLanguages,
  skills,
} from '@/data/portfolioData';

/**
 * Sección: menú lateral izquierdo fijo.
 * Contiene: información personal, datos de contacto,
 * idiomas, lenguajes de programación y habilidades extra.
 */
export default function LeftSidebar() {
  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto bg-bg-secondary
                      border-r border-bg-border flex-shrink-0
                      scrollbar-thin scrollbar-track-bg-primary scrollbar-thumb-text-muted">
      <div className="p-5 flex flex-col gap-6">

        {/* ─── Información personal ─── */}
        <div className="flex flex-col items-center text-center gap-3 pt-4">
          {/* Foto de perfil */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden
                          ring-2 ring-accent-cyan/40 ring-offset-2 ring-offset-bg-secondary">
            <Image
              src={personalInfo.photo}
              alt={`Foto de ${personalInfo.name}`}
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback: muestra las iniciales si no hay imagen
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback de iniciales */}
            <div className="absolute inset-0 flex items-center justify-center
                            bg-gradient-to-br from-accent-purple/40 to-accent-cyan/20
                            text-text-primary font-display font-bold text-xl">
              AO
            </div>
          </div>

          {/* Nombre */}
          <div>
            <h1 className="font-display font-bold text-text-primary text-sm leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-text-muted text-xs mt-1 leading-snug">
              {personalInfo.title}
            </p>
          </div>

          {/* Indicador disponible */}
          <div className="flex items-center gap-1.5 text-xs text-accent-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Disponible para proyectos
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-bg-border" />

        {/* ─── Datos de contacto ─── */}
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

        {/* Línea divisoria */}
        <div className="h-px bg-bg-border" />

        {/* ─── Idiomas ─── */}
        <div>
          <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Idiomas</p>
          {languages.map((lang) => (
            <LanguageItem key={lang.name} language={lang} />
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-bg-border" />

        {/* ─── Lenguajes de programación ─── */}
        <div>
          <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
            Lenguajes
          </p>
          {programmingLanguages.map((lang) => (
            <ProgrammingLanguageItem key={lang.name} lang={lang} />
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-bg-border" />

        {/* ─── Habilidades extra ─── */}
        <div className="pb-6">
          <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
            Habilidades
          </p>
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
    </aside>
  );
}
