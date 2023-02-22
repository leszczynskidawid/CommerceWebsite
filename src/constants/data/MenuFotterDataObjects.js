const linksOrderSection = [
  {
    path: "/dostawa",
    name: "dostawa",
  },
  { path: "/zwroty", name: "zwroty" },
  { path: "/raty", name: "raty" },
];
const linksPromoAnnInspireSection = [
  {
    path: "/karty_podarunkowe",
    name: "karty podarunkowe",
  },
  {
    path: "/promocje",
    name: "promocje",
  },
  { path: "aktualności", name: "aktualności" },
];
const linksCompanySection = [
  { path: "/oNas", name: "O nas" },
  { path: "/regulamin", name: "regulamin" },
  { path: "/cookies", name: "Polityka Cookies" },
];

const VALUE_SECTION_MENU_FOOTER = [
  { id: 1, data: linksCompanySection, title: "zamówienie", toggle: false },
  { id: 2, data: linksOrderSection, title: "Logo-sklep", toggle: false },
  {
    id: 3,
    data: linksPromoAnnInspireSection,
    title: "Promocje i inspiracje",
    toggle: false,
  },
];

export { VALUE_SECTION_MENU_FOOTER };
