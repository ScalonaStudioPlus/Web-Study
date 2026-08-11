import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  User,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  Quote,
  Play,
  Star,
} from "lucide-react";

// Assets imported directly from src/assets/
import heroVideoSrc from "@/assets/ai-study-promo.mp4";
import audience from "@/assets/audience.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import logoMascot from "@/assets/logo-mascot.png";

// Step screenshots
import paso5 from "@/assets/paso-5.png";
import paso6 from "@/assets/paso-6.png";
import paso7 from "@/assets/paso-7.png";
import paso8 from "@/assets/paso-8.png";
import paso9 from "@/assets/paso-9.png";

// Example videos
import ejemplo1 from "@/assets/ai-study-10s-cyberpunk.mp4";
import ejemplo2 from "@/assets/ai-study-15s-vertical.mp4";
import ejemplo3 from "@/assets/ai-study-prompt-c-es-subtitulado.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Study — Tu Asistente Inteligente Para Aprender Cualquier Cosa" },
      {
        name: "description",
        content:
          "Convierte artículos de blog o tweets en vídeos cortos con tu avatar y voz clonada. Únete a la lista de espera y obtén un 50% de descuento.",
      },
      {
        property: "og:title",
        content: "AvatarCaster — Transforma enlaces en vídeos en 1 minuto",
      },
      {
        property: "og:description",
        content:
          "Crea vídeos cortos desde cualquier enlace con tu rostro y voz clonada, sin grabar ni editar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/GElJrvnriejAZl5fkP0UYA";

const steps = [
  {
    img: paso5,
    title: "Crea tus cuadernos",
    text: "Organiza cada asignatura en su propio cuaderno y ten todo tu material de estudio ordenado en un solo lugar.",
  },
  {
    img: paso6,
    title: "Añade tus fuentes",
    text: "Sube PDFs, enlaces o apuntes. El Studio IA los convierte en flashcards, mapas mentales, oclusión e infografías.",
  },
  {
    img: paso7,
    title: "Importa con IA",
    text: "La IA analiza tu contenido, detecta los temas clave y genera tarjetas inteligentes adaptadas a tu nivel en segundos.",
  },
  {
    img: paso8,
    title: "Estudia con repaso espaciado",
    text: "Responde, valora tu dificultad y el sistema programa el siguiente repaso para que memorices sin olvidar nada.",
  },
  {
    img: paso9,
    title: "Mide tu progreso",
    text: "Consulta tu precisión, tiempo de estudio, XP y racha al terminar cada sesión para mantener la constancia.",
  },
];

const audiences = [
  {
    title: "Estudiantes Universitarios",
    text: ".",
  },
  {
    title: "Profesionales en Formación",
    text: "\n",
  },
  {
    title: "Estudiantes Autodidactas",
    text: "\n",
  },
];

const testimonials = [
  {
    img: avatar1,
    quote:
      "AvatarCaster ha revolucionado mi forma de crear contenido. Ahora puedo generar vídeos de calidad sin tener que pasar horas grabando y editando.",
    name: "Laura",
    role: "Bloguera",
  },
  {
    img: avatar2,
    quote:
      "Gracias a AvatarCaster, puedo mantener mi canal actualizado sin el estrés de tener que crear vídeos constantemente. ¡Una herramienta imprescindible para cualquier creador!",
    name: "Carlos Martínez Pérez",
    role: "Emprendedor",
  },
  {
    img: avatar3,
    quote:
      "Desde que uso AvatarCaster, mi productividad ha aumentado. Puedo transformar cualquier artículo en un video atractivo en minutos.",
    name: "Sofía",
    role: "Creadora contenido",
  },
];

const videos = [
  { src: ejemplo1, name: "Estilo Cyberpunk", role: "Vídeo corto" },
  { src: ejemplo2, name: "Formato Vertical", role: "Reels / Shorts" },
  { src: ejemplo3, name: "Con Subtítulos", role: "Español" },
];

function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <img
      src={logoMascot}
      alt="Logo del asistente de estudio con IA"
      width={256}
      height={430}
      className={`inline-block h-24 w-auto sm:h-28 ${tone === "light" ? "brightness-110" : ""}`}
    />
  );
}

function Index() {
  const [slide, setSlide] = useState(0);

  return (
    <main className="font-sans text-ink">
      {/* Header */}
      <header className="bg-background py-6 flex justify-center">
        <Logo />
      </header>

      {/* Hero */}
      <section className="bg-brand text-background">
        <div className="mx-auto max-w-3xl px-6 pt-14 pb-0 text-center">
          <h1 className="text-4xl leading-[1.15] sm:text-5xl sm:leading-[1.18]">
            Tu Asistente Inteligente Para Aprender Cualquier Cosa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-95">
            Convierte apuntes, artículos o vídeos en resúmenes, explicaciones y ejercicios a tu
            medida, sin perder horas estudiando. Aprende más rápido y entiende cualquier tema sin
            esfuerzo.
          </p>

          <p className="mt-8 text-base font-bold">¡Únete a la lista de espera ahora!</p>

          <form
            className="mt-4 space-y-3 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="flex items-center gap-3 rounded-md bg-background px-4 py-3.5">
              <User className="size-5 text-ink" strokeWidth={1.75} />
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-transparent text-ink outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-3 rounded-md bg-background px-4 py-3.5">
              <Mail className="size-5 text-ink" strokeWidth={1.75} />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-ink outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#1f1b45] px-6 py-4 text-center text-background transition-opacity hover:opacity-90"
            >
              <span className="block text-base font-bold tracking-wide">
                UNIRME A LA LISTA DE ESPERA
              </span>
            </button>
          </form>
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-16 pb-20">
          <video
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
            width={1920}
            height={1080}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-[#2b2b2b] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl text-brand-light">Cómo funciona</h2>
          <p className="mt-3 text-lg text-background/90">Simple y en sencillos pasos</p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.title} className="bg-background p-3 text-center shadow-sm">
                <div className="flex h-72 w-full items-center justify-center overflow-hidden bg-[#0d1020]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-6 px-4 text-2xl leading-snug">{s.title}</h3>
                <p className="mt-5 px-5 pb-8 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A quién va dirigido */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl">¿A quién va dirigido este producto?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-ink/80">
              Descubre cómo AvatarCaster puede transformar tu flujo de trabajo y simplificar la
              creación de contenido en video.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-14 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-2 top-3 h-full w-full rotate-[-2deg] bg-brand" />
              <img
                src={audience}
                alt="Creador de contenido siendo grabado con un móvil en un estudio"
                width={900}
                height={640}
                loading="lazy"
                className="relative w-full object-cover"
              />
            </div>

            <div className="space-y-10 text-center">
              {audiences.map((a) => (
                <div key={a.title}>
                  <h3 className="text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-background px-6 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl">Experiencias de nuestros usuarios</h2>
          <p className="mt-3 text-lg text-ink/80">Historias reales sobre AvatarCaster</p>

          <div className="relative mt-20">
            <button
              aria-label="Anterior"
              onClick={() => setSlide((s) => Math.max(0, s - 1))}
              className="absolute -left-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#2b2b2b] text-background"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Siguiente"
              onClick={() => setSlide((s) => Math.min(testimonials.length - 1, s + 1))}
              className="absolute -right-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#2b2b2b] text-background"
            >
              <ChevronRight className="size-4" />
            </button>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`relative bg-background px-8 pb-10 pt-16 shadow-[0_2px_14px_rgba(0,0,0,0.08)] ${
                    i === slide ? "" : ""
                  }`}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="absolute -top-10 left-1/2 size-20 -translate-x-1/2 rounded-full object-cover grayscale"
                  />
                  <p className="text-sm italic leading-relaxed text-ink/85">{t.quote}</p>
                  <p className="mt-5 text-lg font-bold">{t.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.role}</p>
                  <Quote className="absolute bottom-6 right-8 size-9 fill-black/5 text-black/5" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="bg-[#f7f7fa] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl leading-snug">Algunos ejemplos creado en menos</h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {videos.map((v) => (
              <div key={v.name} className="relative overflow-hidden">
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="aspect-[9/16] w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-3 pb-12 text-left">
                  <div className="text-background">
                    <p className="text-sm font-bold">{v.name}</p>
                    <p className="text-xs opacity-90">{v.role}</p>
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-full bg-background/85">
                    <Play className="size-4 fill-ink text-ink" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand px-6 py-24 text-center text-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            ¡Únete a la Lista de Espera Y cambia tu Metodología de estudios!
          </h2>
          <p className="mt-6 text-lg">
            Convierte tus apuntes en materiales de estudio interactivos en segundos y
            domina cualquier tema.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex flex-col items-center rounded-md bg-background/25 px-10 py-4 backdrop-blur-sm transition-colors hover:bg-background/35"
          >
            <span className="flex items-center gap-2 text-lg font-medium tracking-wide">
              <Globe className="size-5" /> UNIRME AHORA
            </span>
            <span className="mt-1 text-sm opacity-90">Gratis y sin compromiso</span>
          </a>

          <div className="mt-10 flex items-center justify-center gap-4 text-left">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3].map((a) => (
                <img
                  key={a}
                  src={a}
                  alt=""
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-8 rounded-full border-2 border-brand object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-base font-bold">+255 Usuarios apuntados</p>
              <p className="max-w-sm text-sm opacity-95">
                ¡Apúntate a la lista de espera y sé de los primeros en probarlo!
              </p>
              <div className="mt-1 flex gap-0.5 text-[#f5b301]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b2b2b] px-6 py-14 text-background">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <Logo tone="light" />
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://www.instagram.com/scalona_studios?igsh=MWR6YWJ1aXBqa3YxZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold underline-offset-4 transition-opacity hover:opacity-80 hover:underline sm:text-3xl"
              >
                Scalona Studios
              </a>
              <a href="#" className="text-sm font-bold">
                Política de Privacidad
              </a>
            </div>
            <span className="hidden w-24 md:block" />
          </div>
          <hr className="mt-10 border-background/25" />
          <p className="mt-8 text-center text-sm">Todos los derechos reservados Jhon Mario Escalona&nbsp;/ Scalona Studios</p>
        </div>
      </footer>

    </main>
  );
}
