/**
 * Botão simples — bloco separado, em caramelo, com o nome centralizado.
 * Sem ícones. A descrição só aparece quando link.showDescription é true
 * (usado apenas no botão da playlist).
 */
export default function LinkButton({ link, index = 0, isOpen = false, onToggle }) {
  const isToggle = link.type === 'toggle'

  const className =
    'animate-fade-up group block w-full rounded-2xl bg-caramel-light px-5 py-[0.95rem] text-center ' +
    'shadow-[0_6px_22px_rgba(51,40,32,0.24)] ring-1 ring-espresso/10 backdrop-blur-[1px] ' +
    'transition-all duration-200 ease-out hover:bg-[#BD9266] hover:shadow-[0_12px_30px_rgba(51,40,32,0.3)] ' +
    'active:scale-[0.985] motion-safe:hover:-translate-y-0.5 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
  const style = { animationDelay: `${300 + index * 80}ms` }

  const inner = (
    <>
      <span className="block font-sans text-[1.03rem] font-medium tracking-[0.02em] text-offwhite [text-shadow:0_1px_2px_rgba(51,40,32,0.55),0_0_8px_rgba(51,40,32,0.3)]">
        {link.title}
      </span>
      {link.showDescription && link.description && (
        <span className="mx-auto mt-1 block max-w-[19rem] font-sans text-[0.74rem] font-normal leading-snug text-offwhite/90 [text-shadow:0_1px_2px_rgba(51,40,32,0.5)]">
          {link.description}
        </span>
      )}
    </>
  )

  if (isToggle) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="sobre-mim"
        aria-label={link.ariaLabel}
        className={className}
        style={style}
      >
        {inner}
      </button>
    )
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
      className={className}
      style={style}
    >
      {inner}
    </a>
  )
}
