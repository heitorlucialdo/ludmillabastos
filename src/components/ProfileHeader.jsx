import { useState } from 'react'
import { PROFILE, INSTAGRAM_URL } from '../data/links'

/**
 * Cabeçalho centralizado: foto nítida (sem gradiente), nome, área de
 * atuação, frase e Instagram. Textos com halo de leitura sobre a foto.
 */
export default function ProfileHeader() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <header className="flex flex-col items-center text-center">
      {/* Foto — círculo limpo e nítido, com anel claro para destacar da foto */}
      <div className="animate-soft-scale relative h-[120px] w-[120px] overflow-hidden rounded-full bg-cream shadow-[0_10px_30px_rgba(51,40,32,0.28)] ring-[3px] ring-offwhite/80">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-cream font-serif text-5xl font-medium text-caramel-deep/70 select-none"
        >
          L
        </span>
        {imgOk && (
          <img
            src={PROFILE.avatar}
            alt={`Foto de ${PROFILE.name}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      {/* Nome */}
      <h1
        className="on-photo animate-fade-up mt-6 font-serif text-[3rem] font-medium leading-[0.95] tracking-[0.005em] text-offwhite"
        style={{ animationDelay: '120ms' }}
      >
        {PROFILE.name}
      </h1>

      {/* Frase */}
      <p
        className="on-photo animate-fade-up mt-4 max-w-[19rem] font-serif text-[1.15rem] italic leading-snug text-offwhite/95"
        style={{ animationDelay: '200ms' }}
      >
        {PROFILE.phrase}
      </p>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="on-photo animate-fade-up mt-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-offwhite underline decoration-offwhite/50 decoration-1 underline-offset-[6px] transition-colors duration-200 hover:text-caramel-light hover:decoration-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
        style={{ animationDelay: '350ms' }}
      >
        @ludmillabastosm
      </a>
    </header>
  )
}
