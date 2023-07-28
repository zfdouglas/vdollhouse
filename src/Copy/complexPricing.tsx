export const pricingGroups = [
  "House Hunters & Home Decorators",
  "Real Estate Professionals",
  "Decor Retailers",
];
export interface Price {
  displayName: string;
  price: string;
  notes?: string;
}
export interface ComplexPriceGroup {
  displayName: string;
  idealFor: string;
  youGet?: string[];
  price?: {
    generalPrice?: { displayName: string; data: Price[] };
    priceMonthly?: { displayName: string; data: Price[] };
    priceAnnual?: { displayName: string; data: Price[] };
    noPrice?: string;
  };
  specialData?: React.ReactElement;
  buttonNav: string;
  buttonName?: string;
  headerColor: string;
  accentColor: string;
}
export const realEstateProPricing: ComplexPriceGroup[] = [
  {
    displayName: "Starter",
    idealFor: "Independent Real Estate Professionals",
    youGet: ["5 Active Spaces", "2 Users"],
    price: {
      generalPrice: {
        displayName: "General Pricing",
        data: [
          {
            displayName: "General",
            price: "$11.98",
          },
          {
            displayName: "Matterport Starter",
            price: "$9.99",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$1.99",
          },
        ],
      },
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonNav: "prereg",
  },
  {
    displayName: "Professional",
    idealFor: "Small Real Estate Companies",
    youGet: ["25 Active Spaces", "5 Users"],
    price: {
      priceMonthly: {
        displayName: "Monthly Pricing",
        data: [
          {
            displayName: "General",
            price: "$82.99",
          },
          {
            displayName: "Matterport Starter",
            price: "$69",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$13.99",
          },
        ],
      },
      priceAnnual: {
        displayName: "Annual Pricing",
        data: [
          {
            displayName: "General",
            price: "$82.99",
          },
          {
            displayName: "Matterport Starter",
            price: "$708",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$139.99",
            notes: "15% savings",
          },
        ],
      },
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonNav: "prereg",
  },
  {
    displayName: "Professional Plus",
    idealFor: "Mid-Sized Real Estate Companies",
    youGet: ["50 Active Spaces", "10 Users"],
    price: {
      priceMonthly: {
        displayName: "Price Monthly",
        data: [
          {
            displayName: "General",
            price: "$154.99",
          },
          {
            displayName: "Matterport Starter",
            price: "$129",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$25.99",
          },
        ],
      },
      priceAnnual: {
        displayName: "Price Annually",
        data: [
          {
            displayName: "General",
            price: "$1,584",
          },
          {
            displayName: "Matterport Starter",
            price: "$1,320",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$264",
            notes: "15% savings over monthly",
          },
        ],
      },
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonNav: "prereg",
  },
  {
    displayName: "Business",
    idealFor: "Small Real Estate Brokerages",
    youGet: ["125 Active Spaces", "25 Users"],
    price: {
      priceMonthly: {
        displayName: "Price Monthly",
        data: [
          {
            displayName: "General",
            price: "$370.99",
          },
          {
            displayName: "Matterport Starter",
            price: "$309",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$61.99",
            notes: "7% savings over starter",
          },
        ],
      },
      priceAnnual: {
        displayName: "Price Annually",
        data: [
          {
            displayName: "General",
            price: "$3,873",
          },
          {
            displayName: "Matterport Starter",
            price: "$3,228",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$645",
            notes: "15% savings over monthly",
          },
        ],
      },
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonNav: "prereg",
  },
  {
    displayName: "Business Plus",
    idealFor: "Mid-Sized Real Estate Brokerages",
    youGet: ["300 Active Spaces", "60 Users"],
    price: {
      priceMonthly: {
        displayName: "Price Monthly",
        data: [
          {
            displayName: "General",
            price: "$826.99",
          },
          {
            displayName: "Matterport Starter",
            price: "$689",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$137.99",
            notes: "7% savings over starter",
          },
        ],
      },
      priceAnnual: {
        displayName: "Price Monthly",
        data: [
          {
            displayName: "General",
            price: "$8625",
          },
          {
            displayName: "Matterport Starter",
            price: "$7,188",
          },
          {
            displayName: "vDollhouse Starter",
            price: "$1,437",
            notes: "13% savings over monthly",
          },
        ],
      },
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonNav: "prereg",
  },
  {
    displayName: "Enterprise",
    idealFor: "Large Real Estate Brokerages",
    youGet: ["600 Active Spaces", "100 Users"],
    price: {
      noPrice: "Contact Us for a Quote",
    },
    headerColor: "white",
    accentColor: "rgb(66, 94, 72)",
    buttonName: "Contact Sales",
    buttonNav: "prereg",
  },
];

export const freePricing: ComplexPriceGroup = {
  displayName: "Free",
  idealFor: "Home Decorators & House Hunters",
  youGet: [
    "1 Active Spaces",
    "1 User",
    "Access to Realtor Spaces, Decor Marketplace",
  ],
  buttonName: "Get Started Free",
  headerColor: "white",
  accentColor: "#A1BD69",
  buttonNav: "prereg",
};

export const decorMarketplace: ComplexPriceGroup = {
  displayName: "Decor Marketplace Advertising",
  idealFor: "Furniture retailers advertising on vDollhouse marketplace",
  specialData: (
    <div>
      <div style={{ color: "grey" }}>
        <h4>Referral fee of 10% of total sales price</h4>
        <h4>Per Impression: $.00243</h4>
        <h4>Per Recommendation Impression: $.243</h4>
        <div style={{ margin: "4% auto" }}>
          Recommendation Impressions are premium listings of decor based on
          their complement factor with users’ existing decor. Learn more about
          recommendation impressions{" "}
          <a href="" title="Coming Soon">
            here
          </a>
          .
        </div>
      </div>
    </div>
  ),
  buttonName: "Contact Sales",
  buttonNav: "prereg",
  headerColor: "white",
  accentColor: "#A1BD69",
};
