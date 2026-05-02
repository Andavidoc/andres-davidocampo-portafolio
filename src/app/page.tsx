import LeftSidebar from '@/components/sections/LeftSidebar';
import RightSidebar from '@/components/sections/RightSidebar';
import ProfileSection from '@/components/sections/ProfileSection';
import KnowledgeSection from '@/components/sections/KnowledgeSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import Footer from '@/components/sections/Footer';
import MobileHeader from '@/components/sections/MobileHeader';

/**
 * Página principal del portafolio.
 * Desktop: 3 columnas (sidebar izq fijo + contenido scroll + sidebar der fijo)
 * Móvil: columna única con header compacto en la parte superior
 */
export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">

      {/* Sidebar izquierdo — solo visible en pantallas grandes */}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Contenido central */}
      <main className="flex-1 overflow-y-auto">

        {/* Header compacto — solo visible en móvil */}
        <div className="lg:hidden border-b border-bg-border bg-bg-secondary">
          <MobileHeader />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <ProfileSection />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </div>
      </main>

      {/* Sidebar derecho — solo visible en pantallas grandes */}
      <div className="hidden lg:block">
        <RightSidebar />
      </div>

    </div>
  );
}
