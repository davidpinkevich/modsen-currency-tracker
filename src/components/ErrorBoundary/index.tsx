import { Component, type ErrorInfo, type ReactNode } from "react";

import {
  type TypeErrorBoundaryProps,
  type TypeErrorBoundaryState
} from "@src/types";

import { Fallback } from "../Fallback";

class ErrorBoundary extends Component<
  TypeErrorBoundaryProps,
  TypeErrorBoundaryState
> {
  constructor(props: TypeErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, info: "" };
  }

  static getDerivedStateFromError(error: Error): TypeErrorBoundaryState {
    return { hasError: true, info: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Type of error: ", error.name);
    console.log("Message: ", error.message);
    console.log("Component Stack: ", info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Fallback logger={this.state.info} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
