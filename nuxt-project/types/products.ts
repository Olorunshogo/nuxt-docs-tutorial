
export type Product = {
    id: number;
    title: string;
    image: string;
}

export type ProductInfo = {
    products: Product[];
    categories: string[];
}