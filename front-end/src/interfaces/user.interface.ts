export interface IUserCreate {
  accountType: "seller" | "buyer";
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  password: string;
  address: IAddress;
}
export interface IUserUpdate {
  id: string;
  accountType: "seller" | "buyer";
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  password: string;
  address: IAddress;
}
interface IAddress {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IProfile {
  id: string;
  accountType: "seller" | "buyer";
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  password: string;
  address: IAddress;
}
