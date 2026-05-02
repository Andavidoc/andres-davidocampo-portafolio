interface BadgeProps {
  /** Texto del badge */
  label: string;
  /** Variante visual */
  variant?: 'default' | 'accent';
}

/**
 * Átomo: etiqueta pequeña reutilizable.
 * Usada para tecnologías en las cards de proyectos.
 */
export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const base = 'text-xs font-mono px-2 py-0.5 rounded border';
  const variants = {
    default: 'border-bg-border text-text-secondary bg-bg-secondary',
    accent: 'border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5',
  };

  return <span className={`${base} ${variants[variant]}`}>{label}</span>;
}
