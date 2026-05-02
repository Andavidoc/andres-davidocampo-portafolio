'use client';
import { Icon } from '@iconify/react';
import ProgressBar from '@/components/atoms/ProgressBar';
import { ProgrammingLanguage } from '@/types';

interface ProgrammingLanguageItemProps {
  lang: ProgrammingLanguage;
}

/**
 * Molécula: muestra un lenguaje de programación con ícono, nombre y barra de progreso.
 * Reutilizada en el menú lateral izquierdo.
 */
export default function ProgrammingLanguageItem({ lang }: ProgrammingLanguageItemProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-text-primary">
          <Icon icon={lang.icon} width={16} height={16} />
          {lang.name}
        </span>
        <span className="text-xs font-mono text-accent-cyan">{lang.level}%</span>
      </div>
      <ProgressBar value={lang.level} color="purple" height={3} />
    </div>
  );
}
