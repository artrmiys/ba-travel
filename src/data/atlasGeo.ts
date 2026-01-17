export type CityCoord = { lat: number; lng: number };

// id должен совпадать с id из ATLAS (src/data/atlas.ts)
export const CITY_COORDS: Record<string, CityCoord> = {
  // Russia
  "ru-tavda": { lat: 58.0417, lng: 65.2726 },
  "ru-ekb": { lat: 56.8389, lng: 60.6057 },
  "ru-ekb-reftinskiy": { lat: 57.0833, lng: 61.6667 },
  "ru-ekb-asbest": { lat: 57.0092, lng: 61.4578 },
  "ru-ekb-rezh": { lat: 57.3700, lng: 61.4000 },
  "ru-ekb-bogdanovich": { lat: 56.7769, lng: 62.0494 },
  "ru-ekb-artemovskiy": { lat: 57.3555, lng: 61.8687 },
  "ru-tyumen": { lat: 57.1522, lng: 65.5272 },
  "ru-surgut": { lat: 61.2540, lng: 73.3962 },
  "ru-penza": { lat: 53.1959, lng: 45.0183 },
  "ru-krasnoyarsk": { lat: 56.0153, lng: 92.8932 },
  "ru-chelyabinsk": { lat: 55.1644, lng: 61.4368 },
  "ru-moscow": { lat: 55.7558, lng: 37.6173 },

  // Belarus
  "by-minsk": { lat: 53.9006, lng: 27.5590 },

  // Armenia
  "am-yerevan": { lat: 40.1872, lng: 44.5152 },
  "am-sevan": { lat: 40.5480, lng: 44.9530 },

  // Georgia
  "ge-tbilisi": { lat: 41.7151, lng: 44.8271 },
  "ge-batumi": { lat: 41.6168, lng: 41.6367 },
  "ge-kutaisi": { lat: 42.2679, lng: 42.6946 },

  // Turkey
  "tr-istanbul": { lat: 41.0082, lng: 28.9784 },

  // Argentina
  "ar-buenos-aires": { lat: -34.6037, lng: -58.3816 },
  "ar-mendoza": { lat: -32.8895, lng: -68.8458 },
  "ar-puerto-madryn": { lat: -42.7692, lng: -65.0385 },

  // Chile
  "cl-santiago": { lat: -33.4489, lng: -70.6693 },
  "cl-valparaiso": { lat: -33.0472, lng: -71.6127 },

  // Colombia
  "co-cartagena": { lat: 10.3910, lng: -75.4794 },
  "co-medellin": { lat: 6.2442, lng: -75.5812 },

  // Panama
  "pa-panama": { lat: 8.9824, lng: -79.5199 },

  // Brazil
  "br-sao-paulo": { lat: -23.5558, lng: -46.6396 },
};
