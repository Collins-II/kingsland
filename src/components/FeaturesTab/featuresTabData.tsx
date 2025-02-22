import imgPng1 from "@/images/ests/est_1.jpg";
import imgPng2 from "@/images/ests/est_2.jpg";
import imgPng3 from "@/images/ests/est_3.jpg";
import imgPng4 from "@/images/ests/est_4.jpg";
import imgPng5 from "@/images/ests/est_5.jpg";
import imgPng6 from "@/images/ests/est_6.jpg";
import imgPng7 from "@/images/ests/est-7.jpg";

const featuresTabData = [
  {
    id: "tabOne",
    name: "The Executive Villa",
    thumbnail: imgPng3,
    packageSubscription: "Executive",
    propertyType: "5-Bedroom Ultra-Luxury Villa",
    features: [
      "Private swimming pool",
      "Garden",
      "Rooftop terrace",
      "Smart home system",
      "24/7 concierge",
    ],
    amenitiesIncluded: [
      "Access to Golf Course & Clubhouse",
      "Spa & Wellness Center (monthly massage & wellness package)",
      "Gym & Fitness Classes (unlimited access)",
      "Private Parking & Security Services",
      "Exclusive Dining & Lounge Privileges",
      "Free Transportation Shuttle within the estate",
      "Annual Property Maintenance Included",
    ],
    paymentPackages: {
      monthly: 6500,
      yearly: 75000,
      yearlyDiscount: 3000,
    },
  },
  {
    id: "tabTwo",
    name: "The Prestige Townhouse",
    thumbnail: imgPng1,
    packageSubscription: "Prestige",
    propertyType: "3-Bedroom Modern Townhouse",
    features: [
      "Open-plan living",
      "Private balcony",
      "Smart security system",
    ],
    amenitiesIncluded: [
      "Access to Clubhouse & Restaurant Discounts",
      "Gym & Swimming Pool Access",
      "Children’s Play Area & Community Park",
      "Security & Maintenance Services",
      "Golf Course (Limited Access – 5 rounds per month)",
      "Tennis & Squash Court Membership",
    ],
    paymentPackages: {
      monthly: 4200,
      yearly: 48000,
      yearlyDiscount: 2400,
    },
  },
  {
    id: "tabThree",
    name: "The Deluxe Apartment",
    thumbnail: imgPng5,
    packageSubscription: "Apartment",
    propertyType: "2-Bedroom Luxury Apartment",
    features: [
      "Fully furnished",
      "High-speed internet",
      "Balcony with city views",
    ],
    amenitiesIncluded: [
      "Gym & Pool Access",
      "24/7 Security & Concierge",
      "Discounted Spa & Wellness Packages",
      "Retail & Dining Privileges",
      "Community Events & Social Gatherings",
    ],
    paymentPackages: {
      monthly: 2800,
      yearly: 31000,
      yearlyDiscount: 1600,
    },
  },
];

const additionalAddOns = [
  { name: "Personal Chauffeur Service", price: 500, frequency: "monthly" },
  { name: "Golf Course Unlimited Access", price: 1000, frequency: "monthly" },
  { name: "Private Chef Services", price: 800, frequency: "monthly" },
];

export { featuresTabData, additionalAddOns };
