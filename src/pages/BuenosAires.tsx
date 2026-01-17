import BaMap from "../components/BaMap";
import BaItinerary from "../components/BaItinerary";
import { BuenosAiresAfterMap } from "../components/BuenosAiresAfterMap";

import "../styles/ba-page.css";

export default function BuenosAires() {
  return (
    <div className="page baPage">
      <header className="baHero">
        <div className="baKicker">ARGENTINA</div>
        <h1 className="baTitle">Buenos Aires</h1>
        <p className="baLead">
          Список мест с быстрыми ссылками. Одна страница — удобно для шаринга и для превью в Telegram на одном URL.
        </p>

        <nav className="baChips">
          <a className="baChip" href="#map">Карта</a>
          <a className="baChip" href="#links">Ссылки</a>
          <a className="baChip" href="#itinerary">Маршрут</a>
        </nav>
      </header>

      <BaMap />
      <BuenosAiresAfterMap />
      <BaItinerary />
    </div>
  );
}
