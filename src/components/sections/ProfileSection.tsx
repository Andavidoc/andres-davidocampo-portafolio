'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Modal from '@/components/atoms/Modal';
import { personalInfo } from '@/data/portfolioData';

/**
 * Sección: Perfil del estudiante.
 * Muestra nombre, foto y descripción profesional.
 * Incluye un botón que abre un diálogo con información adicional.
 */
export default function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="perfil" className="relative mb-10">
        {/* Fondo decorativo con gradiente */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br
                        from-accent-purple/5 via-transparent to-accent-cyan/5
                        border border-bg-border" />

        <div className="relative flex flex-col md:flex-row items-center gap-6 p-8">
          {/* Foto en fondo blanco */}
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden
                          bg-white shadow-[0_0_30px_rgba(0,212,255,0.15)] shrink-0">
            <Image
              src={personalInfo.photo}
              alt={`Foto de ${personalInfo.name}`}
              fill
              className="object-cover"
              priority
            />
            {/* Fallback con iniciales */}
            <div className="absolute inset-0 flex items-center justify-center
                            bg-gradient-to-br from-slate-100 to-slate-200
                            text-slate-700 font-display font-bold text-3xl">
              AO
            </div>
          </div>

          {/* Texto del perfil */}
          <div className="flex flex-col gap-3 flex-1">
            {/* Etiqueta de rol */}
            <span className="inline-flex w-fit items-center gap-1.5 text-xs font-mono
                             text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20
                             px-3 py-1 rounded-full">
              <Icon icon="mdi:briefcase-outline" width={12} />
              Salesforce Sr. Developer
            </span>

            {/* Nombre principal */}
            <h2 className="font-display text-3xl font-bold text-text-primary leading-tight">
              {personalInfo.name}
            </h2>

            {/* Descripción */}
            <p className="text-text-secondary text-sm leading-relaxed max-w-prose">
              {personalInfo.bio}
            </p>

            {/* Botón que abre el modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-1 inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg
                         bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan
                         text-sm font-medium hover:bg-accent-cyan hover:text-bg-primary
                         transition-all duration-300 group"
            >
              <Icon icon="mdi:information-outline" width={16} />
              Conoce más sobre mí
              <Icon icon="mdi:chevron-right"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    width={16} />
            </button>
          </div>
        </div>

        {/* Decorador de esquina */}
        <div className="absolute top-4 right-4 opacity-20">
          <Icon icon="mdi:code-braces" width={40} className="text-accent-cyan" />
        </div>
      </section>

      {/* Modal con información adicional */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Más sobre mí"
      >
        <div className="flex flex-col gap-5">
          {/* Frase motivacional */}
          <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
            <p className="text-accent-cyan text-sm font-display font-medium italic">
              &ldquo;El código es poesía que las máquinas pueden entender.&rdquo;
            </p>
          </div>

          {/* Datos adicionales */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Años de experiencia', value: '4+', icon: 'mdi:briefcase' },
              { label: 'Proyectos completados', value: '15+', icon: 'mdi:check-circle' },
              { label: 'Certificaciones', value: '2', icon: 'mdi:certificate' },
              { label: 'Metodología', value: 'Agile/Scrum', icon: 'mdi:lightning-bolt' },
            ].map((item) => (
              <div key={item.label}
                   className="flex flex-col gap-1 p-3 rounded-lg bg-bg-secondary border border-bg-border">
                <div className="flex items-center gap-2 text-text-muted text-xs">
                  <Icon icon={item.icon} width={12} className="text-accent-purple" />
                  {item.label}
                </div>
                <span className="font-display font-bold text-text-primary text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Intereses */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
              Intereses
            </p>
            <div className="flex flex-wrap gap-2">
              {['Salesforce', 'CRM', 'Automatización', 'Frontend', 'Open Source', 'Videojuegos'].map((i) => (
                <span key={i}
                      className="text-xs px-2 py-1 rounded bg-bg-border text-text-secondary">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
