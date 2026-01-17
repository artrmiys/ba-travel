import Globe3D from "../components/Globe3D";
import { ATLAS } from "../data/atlas";

export default function Home({ go }: { go: (hashPath: string) => void }) {
  return (
    <div className="wrap">
      <div className="hero">
        <div className="heroLeft">
          <div className="kicker">PERSONAL TRAVEL ATLAS</div>
          <h1 className="h1">Atlas<br />of places</h1>
          <div className="lead">
            Главная страница со списком стран и городов. Выбирай город слева в меню или кликай точку на глобусе.
          </div>
        </div>

        <div className="heroRight">
          <Globe3D
            atlas={ATLAS}
            onSelect={(country, city) => go(`/${country}/${city}`)}
          />
        </div>
      </div>

      <div className="grid">
        {ATLAS.map((c) => (
          <div key={c.slug} className="card">
            <div className="cardHead">
              <div className="cardTitle">{c.name}</div>
            </div>
            <div className="cardBody">
              {c.cities.map((ct) => {
                const isOpen = ct.status === "open" && !!ct.page;
                return (
                  <button
                    key={ct.slug}
                    className={"rowBtn " + (isOpen ? "open" : "soon")}
                    onClick={() => isOpen ? go(`/argentina/buenos-aires`) : null}
                    title={isOpen ? "Open" : "Soon"}
                  >
                    <span className="dot" />
                    <span className="rowName">{ct.name}</span>
                    <span className="rowTag">{isOpen ? "OPEN" : "SOON"}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
