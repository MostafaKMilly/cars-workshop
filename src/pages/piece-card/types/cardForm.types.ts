export type PieceCardForm = {
  code: number;
  description: string;
  latinName: string;
  brand: string;
  model: string;
  serialNumber: number;
  pieceId: number;
  status: string;
  owner: string;
  color: string;
  date: string;
  carpets: string;
  fuel: string;
};

export type Dialog = "brand" | "owner" | undefined;

export type Brands = { id: number; name: string }[];

export type Owners = { id: number; name: string }[];
