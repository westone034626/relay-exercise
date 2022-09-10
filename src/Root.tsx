import React, { Suspense } from "react";

import Providers from "./Providers";
import App from "./App";
import Loading from "./Loading";
import ErrorBoundaryRetry from "./ErrorBoundaryRetry";
import NavigationBar from "./components/NavigationBar";
import { AuthProvider } from "./components/AuthProvider";

const Root = () => {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        {/* <Suspense fallback={<Loading />}> */}
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
};

export default Root;
