/* eslint-disable no-console */
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

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  public render(): JSX.Element | ReactNode {
    const renderState: State = this.state;
    const renderProps: Props = this.props;
    if (renderState.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong: {renderState.error?.message}.</h1>;
    }

    return renderProps.children;
  }
}

export default ErrorBoundary;
