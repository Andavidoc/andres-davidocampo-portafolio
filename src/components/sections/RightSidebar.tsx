'use client';
import IconButton from '@/components/atoms/IconButton';
import { socialLinks } from '@/data/portfolioData';

/**
 * Sección: barra lateral derecha fija con íconos de redes sociales.
 * Los íconos redirigen al perfil del estudiante en cada red social.
 */
export default function RightSidebar() {
  return (
    <aside className="w-16 h-screen sticky top-0 border-l border-bg-border
                      bg-bg-secondary flex-shrink-0 flex flex-col items-center
                      justify-center gap-4">
      {/* Línea decorativa superior */}
      <div className="absolute top-8 w-px h-16 bg-gradient-to-b from-transparent to-bg-border" />

      {/* Íconos de redes sociales */}
      {socialLinks.map((link) => (
        <IconButton
          key={link.name}
          icon={link.icon}
          href={link.url}
          label={link.name}
        />
      ))}

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-8 w-px h-16 bg-gradient-to-t from-transparent to-bg-border" />
    </aside>
  );
}
