export type Place = { name: string; url: string }
export type Day = { label: string; title: string; places: Place[] }

export const days: Day[] = [
  {
    label: '31 Dec',
    title: 'Centro + New Year',
    places: [
      { name: 'Obelisco', url: 'https://en.wikipedia.org/wiki/Obelisco_de_Buenos_Aires' },
      { name: 'Casa Rosada (мимо)', url: 'https://en.wikipedia.org/wiki/Casa_Rosada' },
      { name: 'Puente de la Mujer (салют)', url: 'https://en.wikipedia.org/wiki/Puente_de_la_Mujer' },
    ],
  },
  {
    label: '1 Jan',
    title: 'Retiro',
    places: [
      { name: 'Retiro Mitre railway station', url: 'https://en.wikipedia.org/wiki/Retiro_Mitre_railway_station' },
      { name: 'Inauguración (1915)', url: 'https://www.argentina.gob.ar/noticias/2-de-agosto-de-1915-inauguracion-de-la-estacion-retiro' },
      { name: 'Torre Monumental', url: 'https://en.wikipedia.org/wiki/Torre_Monumental' },
    ],
  },
  {
    label: '2 Jan',
    title: 'Recoleta / Centro',
    places: [
      { name: 'El Ateneo Grand Splendid', url: 'https://en.wikipedia.org/wiki/El_Ateneo_Grand_Splendid' },
      { name: 'Universidad de Buenos Aires', url: 'https://es.wikipedia.org/wiki/Universidad_de_Buenos_Aires' },
      { name: 'Floralis Genérica', url: 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/floralis-gen%C3%A9rica' },
      { name: 'Basilica del Pilar', url: 'https://www.consejolandia.com/recoleta' },
      { name: 'Recoleta (район)', url: 'https://en.wikipedia.org/wiki/Recoleta,_Buenos_Aires' },
    ],
  },
  {
    label: '3 Jan',
    title: 'Recoleta / Teatro Colón / Palermo',
    places: [
      { name: 'La Recoleta Cemetery', url: 'https://en.wikipedia.org/wiki/La_Recoleta_Cemetery' },
      { name: 'Teatro Colón', url: 'https://en.wikipedia.org/wiki/Teatro_Col%C3%B3n' },
      { name: 'Buenos Aires Ecopark', url: 'https://en.wikipedia.org/wiki/Buenos_Aires_Ecopark' },
      { name: 'Hipódromo de Palermo', url: 'https://en.wikipedia.org/wiki/Hip%C3%B3dromo_Argentino_de_Palermo' },
    ],
  },
  {
    label: '4 Jan',
    title: 'San Telmo',
    places: [
      { name: 'San Telmo (район)', url: 'https://en.wikipedia.org/wiki/San_Telmo,_Buenos_Aires' },
      { name: 'Mercado de San Telmo', url: 'https://en.wikipedia.org/wiki/Mercado_de_San_Telmo' },
      { name: 'El Zanjón de Granados', url: 'https://en.wikipedia.org/wiki/El_Zanj%C3%B3n_de_Granados' },
      { name: 'Plaza Dorrego', url: 'https://en.wikipedia.org/wiki/Plaza_Dorrego' },
      { name: 'Calle Defensa', url: 'https://es.wikipedia.org/wiki/Calle_Defensa' },
    ],
  },
  {
    label: '5 Jan',
    title: 'La Boca → San Telmo',
    places: [
      { name: 'Caminito', url: 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/calle-museo-caminito' },
      { name: 'Vuelta de Rocha', url: 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/vuelta-de-rocha' },
      { name: 'La Bombonera (снаружи)', url: 'https://www.bocajuniors.com.ar/la-bombonera' },
      { name: 'Mercado de San Telmo', url: 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/mercado-san-telmo' },
      { name: 'Calle Defensa (Maps)', url: 'https://www.google.com/maps/search/?api=1&query=Calle+Defensa+San+Telmo' },
      { name: 'Palacio del Congreso', url: 'https://www.congreso.gob.ar/palacio.php' },
    ],
  },
  {
    label: '6 Jan',
    title: 'Centro + compras',
    places: [
      { name: 'Galerías Pacífico', url: 'https://maps.app.goo.gl/QghXSnTWHp1jVoJX9' },
      { name: 'Mate Mundo', url: 'https://maps.app.goo.gl/ojAuqWW9pPK9PXav6' },
      { name: 'Escuela Da Vinci', url: 'https://maps.app.goo.gl/6AsPd98gDvcQTWzg6' },
      { name: 'Cuchillería artesanal', url: 'https://maps.app.goo.gl/5jnN2osSXDGFxdRe9' },
    ],
  },
  {
    label: '7 Jan',
    title: 'Tren de la Costa → Tigre → San Isidro',
    places: [
      { name: 'Quinta Trabucco', url: 'https://www.lanacion.com.ar/revista-lugares/la-quinta-trabucco-una-casa-de-verano-un-artista-solitario-y-un-parque-publico-nid04122022/' },
      { name: 'Tren de la Costa', url: 'https://en.wikipedia.org/wiki/Tren_de_la_Costa' },
      { name: 'Tigre', url: 'https://en.wikipedia.org/wiki/Tigre,_Buenos_Aires' },
      { name: 'Delta del Paraná', url: 'https://en.wikipedia.org/wiki/Paran%C3%A1_Delta' },
      { name: 'San Isidro', url: 'https://en.wikipedia.org/wiki/San_Isidro,_Buenos_Aires' },
      { name: 'Catedral', url: 'https://en.wikipedia.org/wiki/San_Isidro_Cathedral' },
      { name: 'Plaza Mitre', url: 'https://www.sanisidro.gob.ar/refacci%C3%B3n-plaza-mitre' },
    ],
  },
]

export const restaurants: Place[] = [
  { name: 'Postres Balcarce San Telmo', url: 'https://maps.app.goo.gl/nLeQdRroKf2Q5tpz9' },
  { name: 'Nápoles (история)', url: 'https://www.lanacion.com.ar/lifestyle/el-anticuario-caotico-que-ya-es-uno-de-los-restaurantes-mas-lindos-de-la-ciudad-nid2102847/' },
  { name: 'Motín (история)', url: 'https://www.lanacion.com.ar/sabado/el-bodegon-que-le-devolvio-su-identidad-al-bajo-de-san-isidro-nid28032025/' },
]

export const reading: string[] = [
  'https://ru-ar.ru/recoleta',
  'https://ru-ar.ru/boca',
]
