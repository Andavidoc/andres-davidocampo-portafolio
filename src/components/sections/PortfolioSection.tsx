import SectionTitle from '@/components/atoms/SectionTitle';
import ProjectCard from '@/components/molecules/ProjectCard';
import { projects } from '@/data/portfolioData';

/**
 * Sección: Portafolio de proyectos.
 * Muestra cards en un scroll horizontal, cada una con botón "Saber más" que abre un modal.
 */
export default function PortfolioSection() {
  return (
    <section id="portafolio" className="mb-10">
      <SectionTitle
        title="Portafolio"
        subtitle="Proyectos en los que he trabajado"
      />

      {/* Contenedor con scroll horizontal */}
      <div className="relative">
        {/* Degradado derecho como indicador de scroll */}
        <div className="absolute right-0 top-0 h-full w-12 z-10
                        bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />

        <div className="flex gap-4 overflow-x-auto pb-4
                        scrollbar-thin scrollbar-track-bg-secondary scrollbar-thumb-text-muted">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <p className="text-text-muted text-xs mt-2 text-right">
        ← Desliza para ver más →
      </p>
    </section>
  );
}
