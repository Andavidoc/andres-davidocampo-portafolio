'use client';
import ProgressBar from '@/components/atoms/ProgressBar';
import { Language } from '@/types';

interface LanguageItemProps {
  language: Language;
}

/**
 * Molécula: muestra un idioma con su bandera, nivel textual y barra de progreso.
 * Reutilizada en el menú lateral izquierdo.
 */
export default function LanguageItem({ language }: LanguageItemProps) {
  const getLabel = (level: number) => {
    if (level >= 95) return 'Nativo';
    if (level >= 80) return 'Avanzado';
    if (level >= 60) return 'Intermedio';
    if (level >= 40) return 'Básico';
    return 'Principiante';
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-text-primary">
          <span>{language.flag}</span>
          {language.name}
        </span>
        <span className="text-xs text-text-muted font-mono">
          {getLabel(language.level)}
        </span>
      </div>
      <ProgressBar value={language.level} color="cyan" height={3} />
    </div>
  );
}
