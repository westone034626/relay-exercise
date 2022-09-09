import React, { Suspense } from "react";

import Providers from "./Providers";
import App from "./App";
import Loading from "./Loading";
import ErrorBoundaryRetry from "./ErrorBoundaryRetry";
import NavigationBar from "./components/NavigationBar";

const Root = () => {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        {/* <Suspense fallback={<Loading />}> */}
        <Suspense
          fallback={
            <>
              <NavigationBar style={{ padding: 24 }} />
              <Loading />
            </>
          }
        >
          <App />
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
};

export default Root;
