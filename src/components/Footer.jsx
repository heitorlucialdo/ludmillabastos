import { PROFILE } from '../data/links'

export default function Footer() {
  return (
    <footer
      className="animate-fade-up mt-12 flex flex-col items-center text-center"
      style={{ animationDelay: '760ms' }}
    >
      <span className="mb-7 h-px w-12 bg-offwhite/40" aria-hidden="true" />

      <p className="on-photo font-serif text-[1.6rem] font-medium text-offwhite">{PROFILE.name}</p>

      <p className="on-photo mt-4 max-w-[16rem] font-serif text-[1.02rem] italic leading-snug text-offwhite/95">
        Feito com carinho para compartilhar um pouco do meu trabalho.
      </p>

      <p className="on-photo mt-6 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-offwhite/80">
        © 2026 Ludmilla
      </p>
    </footer>
  )
}
