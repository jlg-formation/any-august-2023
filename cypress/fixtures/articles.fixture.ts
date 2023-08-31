import { Article } from "../interfaces/Article";

export const a1: Article = {
  name: "B-",
  price: 12.35,
  qty: 67,
  isUsed: false,
  type: "Alimentation",
  limitDate: undefined,
  //   limitDate: "2023-09-30",
};

export const a2: Article = {
  name: "C-",
  price: 45,
  qty: 100,
  isUsed: true,
  type: "Jardin",
  limitDate: "2023-09-30",
};
