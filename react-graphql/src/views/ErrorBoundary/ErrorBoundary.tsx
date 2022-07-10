import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  private HasError(): boolean {
    return this.state.hasError
  }

  private ErrorMessage(): string {
    if (this.state.error) {
      return this.state.error.message;
    }
    return '';
  }

  public render(): JSX.Element | ReactNode {
    if (this.HasError()) {
      // You can render any custom fallback UI
      return <h1>Something went wrong: {this.ErrorMessage()}.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
