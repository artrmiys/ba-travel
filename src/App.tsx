import { useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { days, restaurants, reading } from './data/itinerary'
import './styles/app.css'

gsap.registerPlugin(ScrollTrigger)

function Preloader() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({
      onUpdate: () => setPct(Math.round(tl.progress() * 100)),
    })
    tl.to({}, { duration: 0.9 })
    gsap.to('.bar > div', { width: '100%', duration: 0.9, ease: 'power2.out' })
    return () => { tl.kill() }}, [])

  return (
    <div className="preloader">
      <div className="preloaderBox">
        <div className="bar"><div /></div>
        <div className="preloaderText">
          <span>Loading</span>
          <span>{pct}%</span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  // Всегда отключаем восстановление скролла и чистим память ScrollTrigger
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    ScrollTrigger.clearScrollMemory()
    window.scrollTo(0, 0)

    const onPageShow = () => {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
      ScrollTrigger.clearScrollMemory()
      window.scrollTo(0, 0)
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  // Прелоадер
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 950)
    return () => window.clearTimeout(t)
  }, [])

  // Когда прелоадер уходит — принудительно в TOP и refresh триггеров
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'

    if (ready) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
      ScrollTrigger.clearScrollMemory()
      window.scrollTo(0, 0)

      // Делаем refresh после того как браузер применит scrollTo
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        ScrollTrigger.refresh()
      })
    }

    return () => { document.body.style.overflow = '' }
  }, [ready])

  // Reveal-анимации
  useEffect(() => {
    if (!ready) return

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    })
  }, [ready])

  const pills = useMemo(
    () => ['Centro', 'Retiro', 'Recoleta', 'Palermo', 'San Telmo', 'La Boca', 'Tigre', 'San Isidro'],
    []
  )

  return (
    <>
      {!ready && <Preloader />}

      <header className="hero">
        <div className="container" data-reveal>
          <div className="kicker">Buenos Aires · 31 Dec → 7 Jan</div>
          <div className="h1">Маршрут<br/>по дням</div>
          <p className="sub">
            Список мест с быстрыми ссылками. Одна страница — удобно для шаринга
            и для превью в Telegram на одном URL.
          </p>

          <div className="pills" aria-label="Areas">
            {pills.map((p) => <div className="pill" key={p}>{p}</div>)}
          </div>
        </div>
      </header>

      <main>
        {days.map((d) => (
          <section className="section" key={d.label}>
            <div className="container grid">
              <aside className="dayLabel" data-reveal>
                <div className="big">{d.label}</div>
                <div className="small">{d.title}</div>
              </aside>

              <div className="card" data-reveal>
                <h3>{d.title}</h3>
                <ul className="list">
                  {d.places.map((p) => (
                    <li className="item" key={p.url}>
                      <span className="dot" />
                      <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section className="section">
          <div className="container grid">
            <aside className="dayLabel" data-reveal>
              <div className="big">Food</div>
              <div className="small">Рестораны</div>
            </aside>

            <div className="card" data-reveal>
              <h3>Рестораны</h3>
              <ul className="list">
                {restaurants.map((p) => (
                  <li className="item" key={p.url}>
                    <span className="dot" />
                    <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid">
            <aside className="dayLabel" data-reveal>
              <div className="big">Read</div>
              <div className="small">Почитать</div>
            </aside>

            <div className="card" data-reveal>
              <h3>Ссылки</h3>
              <ul className="list">
                {reading.map((u) => (
                  <li className="item" key={u}>
                    <span className="dot" />
                    <a href={u} target="_blank" rel="noreferrer">{u}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container" data-reveal>
          BA itinerary · warm gradients · Vite + React + GSAP
        </div>
      </footer>
    </>
  )
}
