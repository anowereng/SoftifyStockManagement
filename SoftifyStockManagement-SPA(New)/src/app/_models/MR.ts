export interface MR {
  MrId: number;
  dtMr: Date;
  BinId: string;
  dtLoading: string;
  SupplierId: number;
  Remarks: string;
  mrSubList:ServiceInfo
}

export interface ServiceInfo {
  ProdcutId: Date
  UnitId: string
  SellPrice: string
  CostPrice: string
}