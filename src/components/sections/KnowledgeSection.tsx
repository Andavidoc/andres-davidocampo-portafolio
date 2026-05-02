import SectionTitle from '@/components/atoms/SectionTitle';
import KnowledgeCard from '@/components/molecules/KnowledgeCard';
import { knowledge } from '@/data/portfolioData';

/**
 * Sección: Conocimientos del estudiante.
 * Muestra cards con ícono, título y descripción de cada área de expertise.
 */
export default function KnowledgeSection() {
  return (
    <section id="conocimientos" className="mb-10">
      <SectionTitle
        title="Conocimientos"
        subtitle="Áreas técnicas en las que tengo experiencia"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {knowledge.map((item, idx) => (
          <div
            key={item.title}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <KnowledgeCard knowledge={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
