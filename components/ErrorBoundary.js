// components/ErrorBoundary.js
import * as Sentry from '@sentry/nextjs';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, {
      extra: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;