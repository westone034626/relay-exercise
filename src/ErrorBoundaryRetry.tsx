import React from "react";

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
type Props = {};
type State = {
  error: Error;
};
class ErrorBoundaryRetry extends React.Component<Props, State> {
  // @ts-ignore
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;

    if (error != null) {
      return (
        <div>
          {/* @ts-ignore */}
          <p>Error: {error.message}</p>
          {/* @ts-ignore */}
          <pre>{JSON.stringify(error.source, null, 2)}</pre>
          {/* @ts-ignore */}
          <button onClick={() => this.setState({ error: null })}>retry</button>
        </div>
      );
    }

    {
    }
    /* @ts-ignore */
    return this.props.children;
  }
}

export default ErrorBoundaryRetry;
