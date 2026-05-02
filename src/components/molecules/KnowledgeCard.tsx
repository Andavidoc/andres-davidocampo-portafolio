'use client';
import { Icon } from '@iconify/react';
import { Knowledge } from '@/types';

interface KnowledgeCardProps {
  knowledge: Knowledge;
}

/**
 * Molécula: card de conocimiento con ícono, título y descripción.
 * Reutilizada en la sección Conocimientos del contenido central.
 */
export default function KnowledgeCard({ knowledge }: KnowledgeCardProps) {
  return (
    <div className="glow-border bg-bg-card rounded-xl p-5 flex flex-col gap-3
                    transition-all duration-300 hover:-translate-y-1
                    animate-fadeSlideUp">
      {/* Ícono con fondo acento */}
      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
        <Icon icon={knowledge.icon} width={22} height={22} className="text-accent-cyan" />
      </div>

      {/* Título */}
      <h3 className="font-display font-semibold text-text-primary text-sm leading-snug">
        {knowledge.title}
      </h3>

      {/* Descripción */}
      <p className="text-text-secondary text-xs leading-relaxed">
        {knowledge.description}
      </p>
    </div>
  );
}
