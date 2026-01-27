export interface Portrait {
  id: number;
  title: string;
  category: string;
  img: string;
  size: string;
  portraitSize: string;
  description?: string;
}

export interface PortraitProps {
  item: Portrait;
}
