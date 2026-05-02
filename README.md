# Portafolio Personal — Andrés David Ocampo

Portafolio personal desarrollado para la materia **Ingeniería Web** (Proyecto Evaluativo 1 — 25%).

## 🛠 Tecnologías utilizadas

- **NextJS 14** — Framework de React para producción
- **TypeScript** — Tipado estático
- **TailwindCSS** — Estilos utilitarios
- **@iconify/react** — Biblioteca de íconos

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css       # Estilos globales, variables CSS, fuentes
│   ├── layout.tsx        # Layout raíz con metadata
│   └── page.tsx          # Página principal (ensamblado de secciones)
│
├── components/
│   ├── atoms/            # Componentes base reutilizables
│   │   ├── Badge.tsx
│   │   ├── IconButton.tsx
│   │   ├── Modal.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SectionTitle.tsx
│   │
│   ├── molecules/        # Componentes compuestos por átomos
│   │   ├── EducationCard.tsx
│   │   ├── KnowledgeCard.tsx
│   │   ├── LanguageItem.tsx
│   │   ├── ProgrammingLanguageItem.tsx
│   │   └── ProjectCard.tsx
│   │
│   └── sections/         # Secciones completas de la página
│       ├── EducationSection.tsx
│       ├── Footer.tsx
│       ├── KnowledgeSection.tsx
│       ├── LeftSidebar.tsx
│       ├── PortfolioSection.tsx
│       ├── ProfileSection.tsx
│       └── RightSidebar.tsx
│
├── data/
│   └── portfolioData.ts  # ⭐ EDITAR AQUÍ — todos los datos del portafolio
│
└── types/
    └── index.ts          # Interfaces TypeScript del proyecto
```

## 🚀 Ejecutar localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## 📦 Build para producción

```bash
npm run build
npm start
```

## ✏️ Personalizar el contenido

Todo el contenido del portafolio se centraliza en **`src/data/portfolioData.ts`**. Para actualizar tu información:

1. Edita `personalInfo` con tu nombre, correo, teléfono, etc.
2. Añade tus propios proyectos en el arreglo `projects`
3. Actualiza `education`, `programmingLanguages`, `skills`, etc.
4. Reemplaza `/public/profile.jpg` con tu foto real
5. Actualiza los links de GitHub y LinkedIn en `socialLinks`

## 🌐 Despliegue en Vercel

1. Crea un repositorio en GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta NextJS automáticamente — haz clic en **Deploy**
4. URL: `andres-ocampo.vercel.app`

## 🎨 Diseño

- **Dark mode** con paleta oscura (`#0A0A0F` base)
- Fuentes: **Syne** (display) + **DM Sans** (cuerpo) + **JetBrains Mono** (código)
- Acentos: Cyan (`#00D4FF`), Purple (`#7C3AED`), Green (`#00FF9D`)
- Atomic Design: átomos → moléculas → secciones

## 📝 Componentes reutilizables (Atomic Design)

| Átomo | Usado en |
|-------|----------|
| `ProgressBar` | LanguageItem, ProgrammingLanguageItem |
| `SectionTitle` | KnowledgeSection, EducationSection, PortfolioSection |
| `Badge` | ProjectCard (modal) |
| `Modal` | ProfileSection, ProjectCard |
| `IconButton` | RightSidebar |

---

**Materia:** Ingeniería Web  
**Profesor:** Juan Pablo Arango  
**Entrega:** 3 de mayo de 2026
