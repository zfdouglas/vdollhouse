export type PriceItem = {
  product: string;
  target: string;
  details: string[];
  price: string;
  headerColor: string;
  accentColor: string;
};
export const pricing: PriceItem[] = [
  {
    product: "Basic",
    target: "Homeowners, Budding Interior Designers",
    details: [
      "Preview pre-fab items in your home",
      "Utilize Dollhouse Marketplace",
    ],
    price: "30",
    headerColor: "white",
    accentColor: "#425E48",
  },
  {
    product: "Basic+",
    target: "Realtors and Interior Designers",
    details: [
      "Scan items to be added to virtual dollhouse",
      "Share designs with clients",
    ],
    price: "35",
    headerColor: "white",

    accentColor: "#83946A",
  },
  {
    product: "Plaid",
    target: "Realtors, Interior Designers, & Enterprises",
    details: ["Access to all vDollhouse functionality", "Live Support"],
    price: "45",
    headerColor: "white",

    accentColor: "#95A598",
  },
];
