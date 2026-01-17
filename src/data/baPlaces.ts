export type Day =
  | "31 Dec"
  | "1 Jan"
  | "2 Jan"
  | "3 Jan"
  | "4 Jan"
  | "5 Jan"
  | "6 Jan"
  | "7 Jan";

export type Place = {
  id: string;
  day: Day;
  name: string;
  lat: number;
  lng: number;
  url?: string;
};

export const BA_PLACES: Place[] = [
  // 31 Dec — Centro + New Year
  { id: "obelisco", day: "31 Dec", name: "Obelisco", lat: -34.6037389, lng: -58.3815704 },
  { id: "casa-rosada", day: "31 Dec", name: "Casa Rosada", lat: -34.6080953, lng: -58.3702906 },
  { id: "puente-mujer", day: "31 Dec", name: "Puente de la Mujer", lat: -34.608095, lng: -58.362376 },

  // 1 Jan — Retiro
  { id: "retiro-mitre", day: "1 Jan", name: "Retiro Mitre railway station", lat: -34.592213, lng: -58.37435 },
  { id: "inaug-1915", day: "1 Jan", name: "Inauguración (1915)", lat: -34.5927, lng: -58.3749 },
  { id: "torre-monumental", day: "1 Jan", name: "Torre Monumental", lat: -34.59236, lng: -58.37473 },

  // 2 Jan — Recoleta / Centro
  { id: "el-ateneo", day: "2 Jan", name: "El Ateneo Grand Splendid", lat: -34.59778, lng: -58.4039 },
  { id: "uba", day: "2 Jan", name: "Universidad de Buenos Aires", lat: -34.59952, lng: -58.37334 },
  { id: "floralis", day: "2 Jan", name: "Floralis Genérica", lat: -34.58828, lng: -58.39288 },
  { id: "basilica-pilar", day: "2 Jan", name: "Basílica del Pilar", lat: -34.58891, lng: -58.39327 },
  { id: "recoleta", day: "2 Jan", name: "Recoleta (район)", lat: -34.5883, lng: -58.396 },

  // 3 Jan — Recoleta / Teatro Colón / Palermo
  { id: "recoleta-cemetery", day: "3 Jan", name: "La Recoleta Cemetery", lat: -34.58807, lng: -58.39327 },
  { id: "teatro-colon", day: "3 Jan", name: "Teatro Colón", lat: -34.60104, lng: -58.38353 },
  { id: "ecopark", day: "3 Jan", name: "Buenos Aires Ecopark", lat: -34.57523, lng: -58.41538 },
  { id: "hipodromo", day: "3 Jan", name: "Hipódromo de Palermo", lat: -34.57386, lng: -58.4173 },

  // 4 Jan — San Telmo
  { id: "san-telmo", day: "4 Jan", name: "San Telmo (район)", lat: -34.6175, lng: -58.3731 },
  { id: "mercado-st", day: "4 Jan", name: "Mercado de San Telmo", lat: -34.61869, lng: -58.37177 },
  { id: "zanjon", day: "4 Jan", name: "El Zanjón de Granados", lat: -34.61953, lng: -58.3711 },
  { id: "plaza-dorrego", day: "4 Jan", name: "Plaza Dorrego", lat: -34.6191, lng: -58.3717 },
  { id: "defensa", day: "4 Jan", name: "Calle Defensa", lat: -34.6179, lng: -58.3739 },

  // 5 Jan — La Boca → San Telmo
  { id: "caminito", day: "5 Jan", name: "Caminito", lat: -34.6355, lng: -58.3647 },
  { id: "bombonera", day: "5 Jan", name: "La Bombonera", lat: -34.63561, lng: -58.36467 },
  { id: "mercado-st-2", day: "5 Jan", name: "Mercado de San Telmo", lat: -34.61869, lng: -58.37177 },
  { id: "defensa-2", day: "5 Jan", name: "Calle Defensa", lat: -34.6179, lng: -58.3739 },
  { id: "congreso", day: "5 Jan", name: "Palacio del Congreso", lat: -34.6096, lng: -58.3929 },

  // 6 Jan — Centro + compras (добавил точки)
  { id: "galerias-pacifico", day: "6 Jan", name: "Galerías Pacífico", lat: -34.60324, lng: -58.37304 },
  { id: "mate-mundo", day: "6 Jan", name: "Mate Mundo", lat: -34.6039, lng: -58.3751 },
  { id: "da-vinci", day: "6 Jan", name: "Escuela Da Vinci", lat: -34.6126, lng: -58.3795 },
  { id: "cuchilleria", day: "6 Jan", name: "Cuchillería artesanal", lat: -34.6036, lng: -58.3724 },

  // 7 Jan — Tren de la Costa → Tigre → San Isidro (добавил точки)
  { id: "quinta-trabucco", day: "7 Jan", name: "Quinta Trabucco", lat: -34.5202, lng: -58.4707 },
  { id: "tigre", day: "7 Jan", name: "Tigre", lat: -34.4260, lng: -58.5790 },
  { id: "delta-parana", day: "7 Jan", name: "Delta del Paraná", lat: -34.4109, lng: -58.5795 },
  { id: "san-isidro", day: "7 Jan", name: "San Isidro Cathedral", lat: -34.4715, lng: -58.5112 },
  { id: "plaza-mitre", day: "7 Jan", name: "Plaza Mitre", lat: -34.4712, lng: -58.5121 },
];
