export type paginationItemsProps<T> = {
  items: T[];
  initialCount?: number;
  step?: number;
};
