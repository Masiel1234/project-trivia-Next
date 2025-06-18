export interface PlanData {
  name: string;
  price: number;
  originalCurrency: string;
}

export const basePlansData: PlanData[] = [
  { name: "plans.basic_plan", price: 25000, originalCurrency: "COP" },
  { name: "plans.premium_plan", price: 49.00, originalCurrency: "USD" },
  { name: "plans.pro_plan", price: 100000, originalCurrency: "COP" },
];