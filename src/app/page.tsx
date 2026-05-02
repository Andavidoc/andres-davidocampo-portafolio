import LeftSidebar from '@/components/sections/LeftSidebar';
import RightSidebar from '@/components/sections/RightSidebar';
import ProfileSection from '@/components/sections/ProfileSection';
import KnowledgeSection from '@/components/sections/KnowledgeSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import Footer from '@/components/sections/Footer';

/**
 * Página principal del portafolio.
 * Layout de tres columnas:
 * - Izquierda: menú lateral fijo con info personal
 * - Centro: contenido con scroll vertical
 * - Derecha: barra lateral fija con redes sociales
 */
export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">

      {/* ── Menú lateral izquierdo fijo ── */}
      <LeftSidebar />

      {/* ── Contenido central con scroll ── */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <ProfileSection />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </div>
      </main>

      {/* ── Barra lateral derecha fija ── */}
      <RightSidebar />

    </div>
  );
}
