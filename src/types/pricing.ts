export type PricingPlan = {
  id: "starter" | "business" | "premium";
  badge: string;
  title: string;
  price: string;
  oldPrice: string;
  content: string;
  description: string;
  benefits: string[];
  microCopy: string;
  highlighted?: boolean;
};
