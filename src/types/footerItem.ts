export type FooterItem = {
  title: string;
  link: string;
  icon?: React.ComponentType | null;
};

export type FooterSection = {
  title: string;
  items: FooterItem[];
  withIcon: boolean;
};
