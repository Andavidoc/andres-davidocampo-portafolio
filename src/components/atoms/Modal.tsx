'use client';

import { useEffect } from 'react';
import { Icon } from '@iconify/react';

interface ModalProps {
  /** Controla si el diálogo está abierto */
  isOpen: boolean;
  /** Función para cerrar el diálogo */
  onClose: () => void;
  /** Título del diálogo */
  title: string;
  /** Contenido interior del diálogo */
  children: React.ReactNode;
}

/**
 * Átomo: componente de diálogo modal reutilizable.
 * Usado en la sección Perfil y en las cards de Portafolio.
 */
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Cierra el modal con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Bloquea scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Contenido del modal */}
      <div
        className="relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto
                   bg-bg-card border border-bg-border rounded-xl
                   shadow-[0_0_60px_rgba(0,212,255,0.1)]
                   animate-fadeSlideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="flex items-center justify-between p-6 border-b border-bg-border">
          <h3 className="font-display text-lg font-bold text-text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
            aria-label="Cerrar diálogo"
          >
            <Icon icon="mdi:close" width={20} height={20} />
          </button>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
