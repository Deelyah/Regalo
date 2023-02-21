export interface RouteSchema {
  path?: string;
  element: React.ReactNode | null;
  index?: any;
  children?: RouteSchema[];
}

export interface IconProps {
  stroke?: string | undefined;
}

export interface ButtonProps {
  submitting?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  btnText: string;
  spinnerTxt?: string;
  style: string;
}
