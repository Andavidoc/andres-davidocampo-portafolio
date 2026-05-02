'use client';
import { Icon } from '@iconify/react';

interface IconButtonProps {
  /** Nombre del ícono de Iconify */
  icon: string;
  /** URL de destino */
  href: string;
  /** Texto alternativo para accesibilidad */
  label: string;
}

/**
 * Átomo: botón de ícono con enlace externo.
 * Reutilizado en la barra lateral derecha de redes sociales.
 */
export default function IconButton({ icon, href, label }: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-10 h-10 rounded-lg
                 border border-bg-border bg-bg-card text-text-secondary
                 hover:border-accent-cyan/50 hover:text-accent-cyan
                 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]
                 transition-all duration-300"
    >
      <Icon icon={icon} width={20} height={20} />
    </a>
  );
}
