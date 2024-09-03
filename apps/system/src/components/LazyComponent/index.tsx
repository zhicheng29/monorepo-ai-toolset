import React, { Suspense } from "react";

import { PageLoader } from "@/components/Loading";

const LazyComponent = (Comp: React.LazyExoticComponent<React.ComponentType>) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Comp />
    </Suspense>
  );
};

export default LazyComponent;
