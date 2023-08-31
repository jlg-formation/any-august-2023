export interface Article {
  name: string;
  price: number;
  qty: number;
  isUsed: boolean;
  type: "Alimentation" | "Jardin";
  limitDate: undefined | string;
}
