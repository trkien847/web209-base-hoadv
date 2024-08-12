export type Product = {
    id: string;
    title: string;
    price: number;
    isShow: boolean;
    brand: string;
  };
  
  export type ProductInputs = Omit<Product, "id">;
  