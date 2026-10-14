import { forwardRef } from 'react'
import { INSTAGRAM_URL } from '../data/links'

/* Parágrafos da apresentação — edite livremente em um só lugar */
const PARAGRAPHS = [
  'Estou cursando Biomedicina e construindo minha trajetória na área da estética, onde encontro uma das coisas que mais amo: ajudar pessoas a se sentirem ainda mais confiantes com elas mesmas.',
  'Atualmente atuo como auxiliar na área de estética e também trabalho com maquiagem, unindo técnica, cuidado e atenção aos detalhes em cada atendimento.',
  'Hoje faço parte da equipe do Nina Cabeleireiros | Salão de Beleza, onde tenho a oportunidade de desenvolver ainda mais meu trabalho e estar cada vez mais próxima de pessoas que valorizam beleza, cuidado e autoestima.',
  'Se você quiser acompanhar um pouco mais da minha rotina, dos meus trabalhos e dessa fase da minha vida, vai ser um prazer ter você por aqui.',
]

/**
 * Seção "Sobre mim" — cartão creme que expande na própria página.
 * A altura anima via grid-template-rows (0fr -> 1fr).
 */
const AboutSection = forwardRef(function AboutSection({ open = false }, ref) {
  return (
    <section
      id="sobre-mim"
      ref={ref}
      aria-hidden={!open}
      className={
        'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ' +
        (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')
      }
    >
      <div className="min-h-0 overflow-hidden">
        <article
          className={
            'rounded-2xl bg-cream/95 px-6 py-7 text-center shadow-[0_10px_30px_rgba(51,40,32,0.22)] ring-1 ring-espresso/10 backdrop-blur-sm ' +
            'transition-all duration-500 ease-out ' +
            (open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0')
          }
        >
          <h2 className="font-serif text-[1.75rem] font-medium leading-tight text-espresso">
            Prazer, sou a Ludmilla.
          </h2>

          <span className="mx-auto mt-4 block h-px w-10 bg-caramel/60" aria-hidden="true" />

          <div className="mt-5 space-y-3 text-left text-[0.9rem] font-normal leading-relaxed text-mocha">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-6 font-serif text-[1.18rem] italic leading-snug text-caramel-deep">
            “Beleza começa quando você se sente bem consigo mesma.”
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[0.64rem] font-medium uppercase tracking-[0.24em] text-espresso/75 underline decoration-caramel/50 decoration-1 underline-offset-[6px] transition-colors hover:text-caramel-deep hover:decoration-caramel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-deep focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite rounded-sm"
          >
            Me acompanhe no Instagram
          </a>
        </article>
      </div>
    </section>
  )
})

export default AboutSection
