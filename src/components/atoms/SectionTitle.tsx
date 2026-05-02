interface SectionTitleProps {
  /** Título principal de la sección */
  title: string;
  /** Subtítulo opcional */
  subtitle?: string;
}

/**
 * Átomo: encabezado reutilizable de sección con línea decorativa de acento.
 * Usado en Conocimientos, Educación y Portafolio.
 */
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {/* Línea decorativa izquierda */}
        <span className="w-8 h-px bg-accent-cyan opacity-60" />
        <h2 className="font-display text-2xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary text-sm pl-11">{subtitle}</p>
      )}
    </div>
  );
}
