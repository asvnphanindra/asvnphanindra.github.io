export type Product = {
  name: string;
  oneLiner: string;
  href: string;
};

export const products: Product[] = [];

/** Featured subset shown on Home. */
export const featuredProducts = products;
