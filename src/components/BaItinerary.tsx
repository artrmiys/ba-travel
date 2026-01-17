import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { days } from "../data/itinerary";

function dayId(label: string) {
  return `day-${label.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function BaItinerary() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const dayList = useMemo(() => days, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = wrapRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".baDay");

      sections.forEach((section) => {
        const label = section.querySelector(".baDayLabel");
        const card = section.querySelector(".baDayCard");

        gsap.set([label, card], { autoAlpha: 0, y: 22 });

        gsap.to([label, card], {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} id="itinerary">
      <div className="baSectionHead" style={{ marginTop: 42 }}>
        <h2 className="baH2">Маршрут по дням</h2>
        <div className="baSectionMeta">Itinerary</div>
      </div>

      {dayList.map((d) => {
        const id = dayId(d.label);
        const route = (d as any).route ?? (d as any).subtitle ?? "";

        return (
          <section key={id} className="baDay" id={id}>
            <div className="baDayGrid">
              <div className="baDayLabel">
                <div className="baDayNum">{d.label}</div>
                <div className="baDayMeta">{route || d.title}</div>
              </div>

              <div className="baDayCard">
                <div className="baCardTitle">{d.title}</div>

                <ul className="baPlaceList">
                  {d.places.map((p) => (
                    <li key={p.url} className="baPlaceItem">
                      <span className="baBullet" />
                      <a className="baLink" href={p.url} target="_blank" rel="noreferrer">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
