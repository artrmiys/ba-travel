export type City = {
  name: string;
  slug: string;
  lat?: number;
  lng?: number;
  status: "open" | "soon";
  page?: "ba";
};

export type Country = {
  name: string;
  slug: string;
  cities: City[];
};

export const ATLAS: Country[] = [
  {
    name: "Аргентина",
    slug: "argentina",
    cities: [
      { name: "Буэнос-Айрес", slug: "buenos-aires", lat: -34.6037, lng: -58.3816, status: "open", page: "ba" },
      { name: "Мендоса", slug: "mendoza", lat: -32.8895, lng: -68.8458, status: "soon" },
      { name: "Пуэрто-Мадрин", slug: "puerto-madryn", lat: -42.7692, lng: -65.0385, status: "soon" },
    ],
  },

  {
    name: "Россия",
    slug: "russia",
    cities: [
      { name: "Тавда", slug: "tavda", status: "soon" },
      { name: "Екатеринбург", slug: "yekaterinburg", lat: 56.8389, lng: 60.6057, status: "soon" },
      { name: "пос. Рефтинский", slug: "reftinskiy", status: "soon" },
      { name: "Асбест", slug: "asbest", status: "soon" },
      { name: "Реж", slug: "rezh", status: "soon" },
      { name: "Богданович", slug: "bogdanovich", status: "soon" },
      { name: "Артёмовский", slug: "artemovsky", status: "soon" },
      { name: "Тюмень", slug: "tyumen", lat: 57.1522, lng: 65.5272, status: "soon" },
      { name: "Сургут", slug: "surgut", lat: 61.254, lng: 73.3962, status: "soon" },
      { name: "Пенза", slug: "penza", lat: 53.1959, lng: 45.0183, status: "soon" },
      { name: "Красноярск", slug: "krasnoyarsk", lat: 56.0106, lng: 92.8526, status: "soon" },
      { name: "Челябинск", slug: "chelyabinsk", lat: 55.1644, lng: 61.4368, status: "soon" },
      { name: "Москва", slug: "moscow", lat: 55.7558, lng: 37.6173, status: "soon" },
    ],
  },

  {
    name: "Белоруссия",
    slug: "belarus",
    cities: [{ name: "Минск", slug: "minsk", lat: 53.9006, lng: 27.559, status: "soon" }],
  },

  {
    name: "Украина",
    slug: "ukraine",
    cities: [
      { name: "Евпатория", slug: "evpatoria", lat: 53.9006, lng: 27.559, status: "soon" }
    ],
  },

  {
    name: "Армения",
    slug: "armenia",
    cities: [
      { name: "Ереван", slug: "yerevan", lat: 40.1872, lng: 44.5152, status: "soon" },
      { name: "Севан", slug: "sevan", lat: 40.5484, lng: 44.9487, status: "soon" },
    ],
  },

  {
    name: "Грузия",
    slug: "georgia",
    cities: [
      { name: "Тбилиси", slug: "tbilisi", lat: 41.7151, lng: 44.8271, status: "soon" },
      { name: "Батуми", slug: "batumi", lat: 41.6461, lng: 41.6367, status: "soon" },
      { name: "Кутаиси", slug: "kutaisi", lat: 42.2679, lng: 42.718, status: "soon" },
    ],
  },

  {
    name: "Турция",
    slug: "turkey",
    cities: [{ name: "Стамбул", slug: "istanbul", lat: 41.0082, lng: 28.9784, status: "soon" }],
  },

  {
    name: "Чили",
    slug: "chile",
    cities: [
      { name: "Сантьяго", slug: "santiago", lat: -33.4489, lng: -70.6693, status: "soon" },
      { name: "Вальпараисо", slug: "valparaiso", lat: -33.0472, lng: -71.6127, status: "soon" },
    ],
  },

  {
    name: "Колумбия",
    slug: "colombia",
    cities: [
      { name: "Картахена", slug: "cartagena", lat: 10.391, lng: -75.4794, status: "soon" },
      { name: "Медельин", slug: "medellin", lat: 6.2442, lng: -75.5812, status: "soon" },
    ],
  },

  {
    name: "Панама",
    slug: "panama",
    cities: [{ name: "Панама", slug: "panama-city", lat: 8.9824, lng: -79.5199, status: "soon" }],
  },

  {
    name: "Бразилия",
    slug: "brazil",
    cities: [{ name: "Сан-Пауло", slug: "sao-paulo", lat: -23.5558, lng: -46.6396, status: "soon" }],
  },
];
