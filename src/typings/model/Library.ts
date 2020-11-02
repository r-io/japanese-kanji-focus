export interface Library {
  _id: string;
  isBarCode: boolean;
  libraryName: string;
  librarySubDomain: string;
  unsearchableName?: string;
}