import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrés David Ocampo | Portafolio',
  description:
    'Portafolio profesional de Andrés David Ocampo — Desarrollador Salesforce Sr. y Estudiante de Ingeniería de Sistemas.',
};

/**
 * Layout raíz de la aplicación.
 * Aplica la fuente global y el fondo oscuro base.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
