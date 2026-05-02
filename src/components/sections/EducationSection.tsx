import SectionTitle from '@/components/atoms/SectionTitle';
import EducationCard from '@/components/molecules/EducationCard';
import { education } from '@/data/portfolioData';

/**
 * Sección: Historia educativa del estudiante.
 * Muestra un timeline vertical con institución, fechas, título y descripción.
 */
export default function EducationSection() {
  return (
    <section id="educacion" className="mb-10">
      <SectionTitle
        title="Educación"
        subtitle="Mi trayectoria académica y certificaciones"
      />
      <div>
        {education.map((edu, idx) => (
          <EducationCard
            key={edu.institution + edu.startDate}
            edu={edu}
            isLast={idx === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
