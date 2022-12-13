export type Order = {
  _id: string;
  name: string;
  description: string;
  price: number;
  employee_id: string;
  table_id: string;
  dishes_ids: {
    id: string;
  }[];
};
