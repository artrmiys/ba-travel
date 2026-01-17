const restaurants = [
  { label: "Postres Balcarce San Telmo", href: "https://maps.app.goo.gl/nLeQdRroKf2Q5tpz9" },
  { label: "Nápoles", href: "https://www.lanacion.com.ar/lifestyle/el-anticuario-caotico-que-ya-es-uno-de-los-restaurantes-mas-lindos-de-la-ciudad-nid2102847/" },
  { label: "Motín", href: "https://www.lanacion.com.ar/sabado/el-bodegon-que-le-devolvio-su-identidad-al-bajo-de-san-isidro-nid28032025/" },
];

const reading = [
  { label: "Recoleta (RU)", href: "https://ru-ar.ru/recoleta" },
  { label: "La Boca (RU)", href: "https://ru-ar.ru/boca" },
];

export function BuenosAiresAfterMap() {
  return (
    <section className="baSection" id="links">
      <div className="baSectionHead">
        <h2 className="baH2">Список мест с быстрыми ссылками</h2>
        <div className="baSectionMeta">После карты</div>
      </div>

      <div className="baTwoCol">
        <div className="baCard">
          <div className="baCardTitle">Рестораны</div>
          <ul className="baLinkList">
            {restaurants.map((x) => (
              <li key={x.href}>
                <a className="baLink" href={x.href} target="_blank" rel="noreferrer">
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="baCard">
          <div className="baCardTitle">Почитать интересности</div>
          <ul className="baLinkList">
            {reading.map((x) => (
              <li key={x.href}>
                <a className="baLink" href={x.href} target="_blank" rel="noreferrer">
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
