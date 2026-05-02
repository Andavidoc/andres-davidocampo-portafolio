'use client';

interface ProgressBarProps {
  /** Valor del progreso (0-100) */
  value: number;
  /** Color del relleno: 'cyan' | 'purple' | 'green' */
  color?: 'cyan' | 'purple' | 'green';
  /** Altura en píxeles */
  height?: number;
}

const colorMap = {
  cyan: 'bg-accent-cyan',
  purple: 'bg-accent-purple',
  green: 'bg-accent-green',
};

/**
 * Átomo: barra de progreso reutilizable con animación shimmer.
 * Usada en idiomas y lenguajes de programación.
 */
export default function ProgressBar({
  value,
  color = 'cyan',
  height = 4,
}: ProgressBarProps) {
  return (
    <div
      className="w-full rounded-full overflow-hidden bg-bg-border"
      style={{ height }}
    >
      <div
        className={`h-full rounded-full progress-bar ${colorMap[color]}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
