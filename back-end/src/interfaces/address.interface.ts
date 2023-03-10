export interface IAddressCreate {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}