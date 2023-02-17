export interface RouteSchema {
  path?: string;
  element: React.ReactNode | null;
  index?: any;
  children?: RouteSchema[];
}
