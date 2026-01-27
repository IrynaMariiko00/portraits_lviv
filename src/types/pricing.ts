interface PricingItem {
  label: string;
  price: string;
}

interface PricingGroup {
  size: string;
  dimensions: string;
  description: string;
  items: PricingItem[];
  isPopular?: boolean;
}

export interface PricingCardProps {
  group: PricingGroup;
}
