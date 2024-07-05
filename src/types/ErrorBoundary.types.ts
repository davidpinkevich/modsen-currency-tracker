import { type ReactNode } from "react";

export interface TypeErrorBoundaryProps {
  children?: ReactNode;
}

export interface TypeErrorBoundaryState {
  hasError: boolean;
  info: string;
}
