 export interface Usuario {
  id: number;
  firstName?: string;
  secondName?: string;
  firstLastName?: string;
  secondLastName?: string;
  numberId?: number;
  numberCell?: number;
  address?: string;
  email?: string;
  state?: boolean;
}

export interface Inventory {
  id: number;
  description?: string;
  option?: string;
  state?: boolean;
}

export interface Order{
  id: number;
  serviceNumber?: number;
  dateEntry?: string;
  dateExit?: string;
  orderWork?: number;
  price?: number;
  state: boolean;
}


export interface Service {
  id: number;
  description?: string;
  quantity?: number;
  subTotal?: number;
  total?: number;
  observations?: string;
  responsibleTechnician?: string;
  state: boolean;
}
export interface vehiculo{
  id: number;
  brand: string;
  line: string;
  plate: string;
  model: string;
  fuelLevel: number;
  state: boolean;
  orderId: Order;
  inventoryId: Inventory;
  servicioId: Service;
  personId: Usuario;
}

