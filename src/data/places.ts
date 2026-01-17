export type Place = {
  id: string;
  day: string;
  group: string;
  title: string;
  lat: number;
  lng: number;
  url?: string;
};

export const PLACES: Place[] = [
  // 31 Dec — Centro + NYE
  { id: "obelisco", day: "31 Dec", group: "Centro", title: "Obelisco", lat: -34.603762, lng: -58.381466,
    url: "https://en.wikipedia.org/wiki/Obelisco_de_Buenos_Aires" },
  { id: "casa-rosada", day: "31 Dec", group: "Centro", title: "Casa Rosada", lat: -34.607372, lng: -58.37028,
    url: "https://en.wikipedia.org/wiki/Casa_Rosada" },
  { id: "puente-mujer", day: "31 Dec", group: "Puerto Madero", title: "Puente de la Mujer", lat: -34.610125, lng: -58.363722,
    url: "https://en.wikipedia.org/wiki/Puente_de_la_Mujer" },

  // 1 Jan — Retiro
  { id: "retiro-mitre", day: "1 Jan", group: "Retiro", title: "Retiro Mitre station", lat: -34.59106, lng: -58.37492,
    url: "https://en.wikipedia.org/wiki/Retiro_Mitre_railway_station" },
  { id: "torre-monumental", day: "1 Jan", group: "Retiro", title: "Torre Monumental", lat: -34.59222, lng: -58.37361,
    url: "https://en.wikipedia.org/wiki/Torre_Monumental" },

  // 2 Jan — Recoleta / Centro
  { id: "el-ateneo", day: "2 Jan", group: "Recoleta / Centro", title: "El Ateneo Grand Splendid", lat: -34.595989, lng: -58.394356,
    url: "https://en.wikipedia.org/wiki/El_Ateneo_Grand_Splendid" },
  { id: "uba-derecho", day: "2 Jan", group: "Recoleta / Centro", title: "UBA — Facultad de Derecho", lat: -34.5826299, lng: -58.3919796,
    url: "https://es.wikipedia.org/wiki/Facultad_de_Derecho_(Universidad_de_Buenos_Aires)" },
  { id: "floralis", day: "2 Jan", group: "Recoleta / Centro", title: "Floralis Genérica", lat: -34.5817318467, lng: -58.3939621024,
    url: "https://turismo.buenosaires.gob.ar/es/otros-establecimientos/floralis-gen%C3%A9rica" },
  { id: "pilar-basilica", day: "2 Jan", group: "Recoleta / Centro", title: "Basílica Nuestra Señora del Pilar", lat: -34.586384, lng: -58.391598,
    url: "https://turismo.buenosaires.gob.ar/es/otros-establecimientos/bas%C3%ADlica-de-nuestra-se%C3%B1ora-del-pilar" },

  // 3 Jan — Recoleta / Teatro Colón / Palermo
  { id: "recoleta-cemetery", day: "3 Jan", group: "Recoleta / Palermo", title: "La Recoleta Cemetery", lat: -34.5875275436, lng: -58.3934409024,
    url: "https://en.wikipedia.org/wiki/La_Recoleta_Cemetery" },
  { id: "teatro-colon", day: "3 Jan", group: "Recoleta / Palermo", title: "Teatro Colón", lat: -34.601131, lng: -58.383617,
    url: "https://en.wikipedia.org/wiki/Teatro_Col%C3%B3n" },
  { id: "ecopark", day: "3 Jan", group: "Recoleta / Palermo", title: "Buenos Aires Eco-Park", lat: -34.5809833, lng: -58.420025,
    url: "https://en.wikipedia.org/wiki/Buenos_Aires_Eco-Park" },
  { id: "hipodromo-palermo", day: "3 Jan", group: "Recoleta / Palermo", title: "Hipódromo Argentino de Palermo", lat: -34.56654, lng: -58.42818,
    url: "https://en.wikipedia.org/wiki/Hip%C3%B3dromo_Argentino_de_Palermo" },

  // 4 Jan — San Telmo
  { id: "mercado-san-telmo", day: "4 Jan", group: "San Telmo", title: "Mercado de San Telmo", lat: -34.6192692, lng: -58.3725917,
    url: "https://en.wikipedia.org/wiki/Mercado_de_San_Telmo" },
  { id: "zanjon", day: "4 Jan", group: "San Telmo", title: "El Zanjón de Granados", lat: -34.618525, lng: -58.3732137,
    url: "https://en.wikipedia.org/wiki/El_Zanj%C3%B3n_de_Granados" },
  { id: "plaza-dorrego", day: "4 Jan", group: "San Telmo", title: "Plaza Dorrego", lat: -34.6219639, lng: -58.3719917,
    url: "https://en.wikipedia.org/wiki/Plaza_Dorrego" },

  // 5 Jan — La Boca → San Telmo
  { id: "caminito", day: "5 Jan", group: "La Boca", title: "Caminito", lat: -34.63937, lng: -58.3625717,
    url: "https://turismo.buenosaires.gob.ar/es/otros-establecimientos/calle-museo-caminito" },
  { id: "bombonera", day: "5 Jan", group: "La Boca", title: "La Bombonera (outside)", lat: -34.6356109, lng: -58.3647563,
    url: "https://www.bocajuniors.com.ar/la-bombonera" },
  { id: "congreso", day: "5 Jan", group: "Centro", title: "Palacio del Congreso", lat: -34.611389, lng: -58.393333,
    url: "https://www.congreso.gob.ar/palacio.php" },

  // 6 Jan — Centro + compras
  { id: "galerias-pacifico", day: "6 Jan", group: "Centro", title: "Galerías Pacífico", lat: -34.5992508, lng: -58.3753623,
    url: "https://maps.app.goo.gl/QghXSnTWHp1jVoJX9" },

  // 7 Jan — Tigre / San Isidro
  // (точные координаты обновлены по вашей ссылке)
  { id: "quinta-trabucco", day: "7 Jan", group: "Vicente López", title: "Quinta Trabucco", lat: -34.5387559, lng: -58.4985166,
    url: "https://maps.app.goo.gl/bs5KH28jnD9k9Df26" },
  { id: "tigre", day: "7 Jan", group: "Tigre", title: "Tigre", lat: -34.4269, lng: -58.5796,
    url: "https://en.wikipedia.org/wiki/Tigre,_Buenos_Aires" },
  { id: "san-isidro-cathedral", day: "7 Jan", group: "San Isidro", title: "Catedral de San Isidro", lat: -34.4729827, lng: -58.5119283,
    url: "https://en.wikipedia.org/wiki/San_Isidro_Cathedral" },

  // Extra pins (ваши новые ссылки)
  { id: "florida-las-heras-2991", day: "Extra", group: "Florida", title: "Las Heras 2991 (Florida)", lat: -34.5394947, lng: -58.4967465,
    url: "https://maps.app.goo.gl/25dS93rDUiZbTrqC6" },
  { id: "costanera-vl", day: "Extra", group: "Vicente López", title: "Costanera Vicente López", lat: -34.5242159, lng: -58.4678476,
    url: "https://maps.app.goo.gl/8HxPUB4xsgRNzVHbA" },
  { id: "parque-saavedra", day: "Extra", group: "CABA", title: "Parque Saavedra", lat: -34.550819, lng: -58.4798156,
    url: "https://maps.app.goo.gl/W1EeDnCNfVWaSLEAA" },
  { id: "cremolatti", day: "Extra", group: "CABA", title: "Cremolatti", lat: -34.5767779, lng: -58.4118537,
    url: "https://maps.app.goo.gl/hq39Mqnb54qsYewg6" },
  { id: "napoles", day: "Extra", group: "San Telmo", title: "Nápoles", lat: -34.6265114, lng: -58.3717419,
    url: "https://maps.app.goo.gl/RyyTQCcjo7FNadG3A" },
  { id: "motin-del-bajo", day: "Extra", group: "San Isidro", title: "Motín del Bajo", lat: -34.4662324, lng: -58.5072011,
    url: "https://maps.app.goo.gl/atmM83ykiu2MdXGR9" },
];
