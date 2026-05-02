# Portafolio Personal — Andrés David Ocampo

Portafolio web personal desarrollado como Proyecto Evaluativo 1 (25%) para la materia **Ingeniería Web** de la Universidad de Antioquia.

🔗 **Demo en vivo:** [andres-ocampo.vercel.app](https://andres-ocampo.vercel.app)

---

## 🧑‍💻 Sobre el proyecto

Este portafolio presenta mi perfil profesional como Salesforce Developer Sr. con 4 años de experiencia en el sector TI. Incluye mi trayectoria laboral en Globant, NTT DATA y Evolution, mis certificaciones Salesforce, y los productos que he desarrollado para clientes como Sura Colombia.

---

## 🛠 Tecnologías utilizadas

- **NextJS 14** — Framework de React para producción
- **TypeScript** — Tipado estático
- **TailwindCSS** — Estilos utilitarios
- **@iconify/react** — Biblioteca de íconos

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css       # Estilos globales, variables CSS y fuentes
│   ├── layout.tsx        # Layout raíz con metadata SEO
│   └── page.tsx          # Página principal
│
├── components/
│   ├── atoms/            # Componentes base reutilizables
│   │   ├── Badge.tsx         # Etiqueta de tecnología
│   │   ├── IconButton.tsx    # Botón de ícono con enlace
│   │   ├── Modal.tsx         # Diálogo modal accesible
│   │   ├── ProgressBar.tsx   # Barra de progreso animada
│   │   └── SectionTitle.tsx  # Encabezado de sección
│   │
│   ├── molecules/        # Componentes compuestos
│   │   ├── EducationCard.tsx           # Card de educación/certificación
│   │   ├── KnowledgeCard.tsx           # Card de conocimiento técnico
│   │   ├── LanguageItem.tsx            # Ítem de idioma con progreso
│   │   ├── ProgrammingLanguageItem.tsx # Ítem de lenguaje con progreso
│   │   └── ProjectCard.tsx             # Card de proyecto con modal
│   │
│   └── sections/         # Secciones completas de la página
│       ├── EducationSection.tsx   # Historia educativa y certificaciones
│       ├── Footer.tsx             # Pie de página
│       ├── KnowledgeSection.tsx   # Conocimientos técnicos
│       ├── LeftSidebar.tsx        # Menú lateral izquierdo fijo
│       ├── PortfolioSection.tsx   # Portafolio con scroll horizontal
│       ├── ProfileSection.tsx     # Perfil con modal de información
│       └── RightSidebar.tsx       # Barra lateral con redes sociales
│
├── data/
│   └── portfolioData.ts  # Centralización de todos los datos del portafolio
│
└── types/
    └── index.ts          # Interfaces TypeScript del proyecto
```

---

## 🎨 Diseño

- **Dark mode** con paleta oscura (`#0A0A0F` base)
- Fuentes: **Syne** (títulos) + **DM Sans** (cuerpo) + **JetBrains Mono** (código)
- Acentos: Cyan `#00D4FF`, Purple `#7C3AED`, Green `#00FF9D`
- Diseño responsivo para distintos tamaños de pantalla
- Animaciones CSS con Tailwind keyframes

---

## 🧩 Atomic Design

El proyecto implementa Atomic Design con al menos 6 componentes reutilizados en más de 2 partes del código:

| Átomo | Reutilizado en |
|-------|----------------|
| `ProgressBar` | `LanguageItem`, `ProgrammingLanguageItem` |
| `SectionTitle` | `KnowledgeSection`, `EducationSection`, `PortfolioSection` |
| `Badge` | Modal de `ProjectCard` |
| `Modal` | `ProfileSection`, `ProjectCard` |
| `IconButton` | `RightSidebar` |

---

## 🚀 Ejecutar localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

---

## 📝 Información académica

- **Materia:** Ingeniería Web
- **Profesor:** Juan Pablo Arango
- **Universidad:** Universidad de Antioquia
- **Entrega:** 3 de mayo de 2026