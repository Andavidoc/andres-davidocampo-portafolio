'use client';

import { Icon } from '@iconify/react';
import { Education } from '@/types';

interface EducationCardProps {
  edu: Education;
  /** Indica si es el último elemento (para no mostrar la línea inferior) */
  isLast?: boolean;
}

/**
 * Molécula: card de educación con diseño de línea de tiempo vertical.
 * Si la entrada tiene credentialUrl, muestra un botón "Ver credencial".
 * Reutilizada en la sección Educación del contenido central.
 */
export default function EducationCard({ edu, isLast = false }: EducationCardProps) {
  return (
    <div className="flex gap-4 relative">
      {/* Columna de ícono y línea de tiempo */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/30
                        flex items-center justify-center shrink-0 z-10">
          <Icon icon={edu.icon} width={18} height={18} className="text-accent-cyan" />
        </div>
        {/* Línea vertical entre cards */}
        {!isLast && (
          <div className="w-px flex-1 bg-bg-border mt-2" />
        )}
      </div>

      {/* Contenido de la card */}
      <div className="glow-border bg-bg-card rounded-xl p-4 mb-4 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-text-primary text-sm">
            {edu.institution}
          </h3>
          <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10
                           px-2 py-0.5 rounded border border-accent-cyan/20">
            {edu.startDate} — {edu.endDate}
          </span>
        </div>

        <p className="text-text-secondary text-xs font-medium mb-2 italic">
          {edu.degree}
        </p>

        <p className="text-text-muted text-xs leading-relaxed mb-3">
          {edu.description}
        </p>

        {/* Botón "Ver credencial" — solo aparece si hay URL */}
        {edu.credentialUrl && (
          <a
            href={edu.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium
                       text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/5
                       px-3 py-1.5 rounded-lg hover:bg-accent-cyan hover:text-bg-primary
                       transition-all duration-300"
          >
            <Icon icon="mdi:certificate-outline" width={14} />
            Ver credencial en Trailhead
            <Icon icon="mdi:open-in-new" width={12} />
          </a>
        )}
      </div>
    </div>
  );
}
