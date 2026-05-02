'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Modal from '@/components/atoms/Modal';
import Badge from '@/components/atoms/Badge';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

/**
 * Molécula: card de proyecto con logo de empresa, descripción y botón "Saber más".
 * Al hacer clic en el botón abre un modal con información detallada.
 * Reutilizada en la sección Portafolio del contenido central.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Card en el carrusel */}
      <div className="glow-border bg-bg-card rounded-xl overflow-hidden
                      w-64 shrink-0 flex flex-col transition-all duration-300 hover:-translate-y-1">

        {/* Imagen / Logo de la empresa */}
        <div className="h-36 bg-gradient-to-br from-bg-secondary to-bg-border
                        flex items-center justify-center relative overflow-hidden">

          {/* Patrón decorativo de fondo */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,212,255,0.5) 10px, rgba(0,212,255,0.5) 11px)',
               }}
          />

          {/* Logo real si existe, fallback si no */}
          {project.image && !imgError ? (
            <div className="relative w-40 h-20 z-10">
              <Image
                src={project.image}
                alt={`Logo de ${project.title}`}
                fill
                className="object-contain drop-shadow-lg"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            /* Fallback: ícono genérico */
            <Icon
              icon="mdi:office-building"
              width={48}
              height={48}
              className="text-accent-cyan/30 relative z-10"
            />
          )}

          {/* ID del proyecto en esquina */}
          <span className="absolute bottom-2 left-2 text-xs font-mono text-text-muted z-10">
            {project.id}
          </span>
        </div>

        {/* Contenido de la card */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h3 className="font-display font-semibold text-text-primary text-sm leading-snug">
            {project.title}
          </h3>
          <p className="text-text-secondary text-xs leading-relaxed flex-1">
            {project.shortDescription}
          </p>

          {/* Botón "Saber más" */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-auto flex items-center gap-1.5 text-xs font-medium text-accent-cyan
                       hover:text-text-primary transition-colors duration-200 group"
          >
            Saber más
            <Icon
              icon="mdi:arrow-right"
              className="group-hover:translate-x-1 transition-transform duration-200"
              width={14}
            />
          </button>
        </div>
      </div>

      {/* Modal con detalles del proyecto */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={project.title}>
        <div className="flex flex-col gap-4">

          {/* Logo grande en el modal */}
          {project.image && !imgError && (
            <div className="flex justify-center py-4 px-6 rounded-xl bg-bg-secondary border border-bg-border">
              <div className="relative w-48 h-16">
                <Image
                  src={project.image}
                  alt={`Logo de ${project.title}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          <p className="text-text-secondary text-sm leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Tecnologías usadas */}
          <div>
            <p className="text-text-muted text-xs mb-2 uppercase tracking-widest">Tecnologías</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} label={tech} variant="accent" />
              ))}
            </div>
          </div>

          {/* Links adicionales — productos desarrollados */}
          {project.additionalLinks && project.additionalLinks.length > 0 && (
            <div>
              <p className="text-text-muted text-xs mb-2 uppercase tracking-widest">
                Productos desarrollados
              </p>
              <div className="flex flex-col gap-2">
                {project.additionalLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-secondary
                               bg-bg-secondary border border-bg-border rounded-lg px-3 py-2
                               hover:border-accent-cyan/40 hover:text-accent-cyan
                               transition-all duration-200 group"
                  >
                    <Icon icon="mdi:link-variant" width={14} className="text-accent-cyan shrink-0" />
                    <span className="flex-1">{link.label}</span>
                    <Icon icon="mdi:open-in-new" width={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Links principales */}
          <div className="flex gap-3 pt-2 border-t border-bg-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-text-secondary
                           hover:text-accent-cyan transition-colors duration-200"
              >
                <Icon icon="mdi:github" width={16} />
                Ver código
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-text-secondary
                           hover:text-accent-green transition-colors duration-200"
              >
                <Icon icon="mdi:open-in-new" width={16} />
                Visitar sitio
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
