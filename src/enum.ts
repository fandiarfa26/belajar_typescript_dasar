export enum CustomerType {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  REGULER = "REGULER",
}

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
};
