import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Your custom fallback UI goes here
      return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red' , }}>
          Something went wrong. Please refresh the page or try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
