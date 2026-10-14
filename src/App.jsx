import { Fragment, useRef, useState } from 'react'
import { LINKS } from './data/links'
import ProfileHeader from './components/ProfileHeader'
import LinkButton from './components/LinkButton'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const aboutRef = useRef(null)

  const toggleAbout = () => {
    const next = !aboutOpen
    setAboutOpen(next)
    // Efeito colateral fica no handler do evento (não dentro do setState),
    // seguindo as boas práticas do React (evita rodar duas vezes no StrictMode).
    if (next) {
      window.setTimeout(() => {
        aboutRef.current?.scrollIntoView({
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
          block: 'center',
        })
      }, 80)
    }
  }

  return (
    <>
      {/* Fundo: apenas a foto */}
      <div aria-hidden="true" className="bg-image fixed inset-0 -z-10" />

      <main
        className="relative mx-auto flex min-h-[100svh] w-full max-w-content flex-col px-5"
        style={{
          paddingTop: 'max(3rem, env(safe-area-inset-top))',
          paddingBottom: 'max(2.25rem, env(safe-area-inset-bottom))',
        }}
      >
        <ProfileHeader />

        <nav aria-label="Serviços e links" className="mt-9 flex flex-col gap-3.5">
          {LINKS.map((link, index) => (
            <Fragment key={link.id}>
              <LinkButton
                link={link}
                index={index}
                isOpen={aboutOpen}
                onToggle={toggleAbout}
              />
              {link.id === 'sobre' && (
                <AboutSection ref={aboutRef} open={aboutOpen} />
              )}
            </Fragment>
          ))}
        </nav>

        <Footer />
      </main>
    </>
  )
}
