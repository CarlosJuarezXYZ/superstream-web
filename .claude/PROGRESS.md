# SuperStream Web — Estado del Proyecto

## Stack
React 18 · TypeScript · Vite · Styled Components · React Icons

---

## Convenciones obligatorias (CLAUDE.md)

- Componentes en `src/components/NombreComponente/`
  - `NombreComponente.tsx`
  - `NombreComponente.styled.ts`
- Páginas en `src/pages/NombrePagina/`
  - `NombrePagina.tsx`
  - `NombrePagina.styled.ts`
- NO usar `index.tsx` ni `styles.ts`
- NO crear carpetas nuevas (`hooks/`, `services/`, etc.) sin aprobación explícita
- Componentes funcionales siempre
- Evitar `any`
- Styled Components para todos los estilos — sin CSS externo

---

## Arquitectura actual

```
src/
├── components/
│   ├── Badge/
│   │   ├── Badge.tsx
│   │   └── Badge.styled.ts
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.styled.ts
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.styled.ts
│   ├── PlatformCard/
│   │   ├── PlatformCard.tsx
│   │   └── PlatformCard.styled.ts
│   └── SectionHeader/
│       ├── SectionHeader.tsx
│       └── SectionHeader.styled.ts
├── pages/
│   ├── Home/
│   │   └── Home.tsx
│   ├── Platforms/
│   │   ├── Platforms.tsx
│   │   └── Platforms.styled.ts
│   ├── AIServices/
│   │   ├── AIServices.tsx
│   │   └── AIServices.styled.ts
│   ├── IPTV/
│   │   ├── IPTV.tsx
│   │   └── IPTV.styled.ts
│   └── Pricing/
│       ├── Pricing.tsx
│       └── Pricing.styled.ts
├── styles/
│   └── GlobalStyles.ts
├── App.tsx
├── main.tsx
├── theme.ts
└── styled.d.ts
```

---

## Componentes implementados

### Badge
- Pill con fondo purple muted y borde brand
- Uso: eyebrow label en secciones y hero
- Props: `children: ReactNode`

### Navbar
- Fixed, sticky scroll (fondo transparente → opaco al hacer scroll)
- Logo con ícono SVG + texto "SuperStream"
- Links de navegación desktop
- Botón CTA "Pedir por WhatsApp"
- Hamburger + menú mobile (pendiente implementar apertura/cierre)

### Hero
- Sección completa con glow, badge, título gradiente, subtítulo
- Dos CTAs: WhatsApp (verde) + Ver planes (purple muted)
- Row de plataformas como chips al pie
- Usa react-icons: `FaWhatsapp`, `FaAmazon`, `SiNetflix`, `SiHbomax`, `SiCrunchyroll`, `SiParamountplus`, `SiYoutube`

### PlatformCard ✦ Reutilizable
- Props: `icon: ReactNode`, `iconBg: string`, `name: string`, `price: number`, `currency?: string` (default `S/`)
- `IconWrapper` recibe `$bg` (transient prop) como color de fondo del ícono
- `PlatformPrice` usa `theme.colors.brand.purple` — color fijo (pendiente variante por color en pasada de refinamiento)
- Hover: sube 4px, cambia fondo y borde a brand

---

## Páginas implementadas

### Home (`pages/Home/Home.tsx`)
- Renderiza únicamente `<Hero />`

### Platforms (`pages/Platforms/Platforms.tsx`)
- Sección: "Plataformas Streaming"
- Usa `PlatformCard` × 8: Netflix, Disney+, HBO Max, Prime Video, Crunchyroll, Paramount+, YouTube Premium, YouTube TV
- Header local con `Badge` + `SectionTitle` + `SectionSubtitle` (styled localmente en `Platforms.styled.ts`)
- Grid 4 columnas desktop / 2 columnas mobile

---

## App.tsx — ensamblaje actual

```tsx
<Navbar />
<Home />       // Hero
<Platforms />  // Streaming cards
```

---

## Secciones pendientes (en orden del demo)

| Sección | Página | Notas |
|---|---|---|
| ~~Herramientas de IA~~ | ~~`AIServices`~~ | ✅ Implementado |
| ~~IPTV~~ | ~~`IPTV`~~ | ✅ Implementado |
| ~~Precios~~ | ~~`Pricing`~~ | ✅ Implementado |
| ~~Beneficios~~ | ~~`Benefits`~~ | ✅ Implementado |
| ~~Términos~~ | ~~`Terms`~~ | ✅ Implementado |
| ~~CTA Final~~ | ~~`CtaFinal`~~ | ✅ Implementado |
| ~~Footer~~ | ~~`Footer`~~ | ✅ Implementado |

---

## Componentes reutilizables

### SectionHeader ✦ Implementado
- Encapsula el patrón `Badge + h2 + p` que se repite en todas las secciones
- Props: `badge: string`, `title: string`, `subtitle?: string`
- `Platforms` ya lo usa — los styled locales duplicados fueron eliminados

---

## Decisiones tomadas en esta sesión

1. **Se mantiene la implementación actual** de todos los componentes — no se modifican salvo problema funcional
2. **React Icons** se mantiene para todos los íconos (no emojis ni SVG inline para íconos de servicios)
3. **Demo como referencia visual**, no pixel-perfect
4. **PlatformCard precio en purple fijo** — el color por variante (verde para IA, amber para IPTV) se abordará en la pasada de refinamiento final
5. **Pasada de refinamiento visual** pendiente al final, cuando estén todas las secciones construidas

---

## Próximos pasos

1. Crear componente `SectionHeader` en `src/components/SectionHeader/`
2. Construir páginas pendientes en orden del demo usando `SectionHeader` y `PlatformCard` donde aplique
3. Actualizar `App.tsx` con cada nueva sección
4. Al finalizar todas las secciones: pasada de refinamiento visual
