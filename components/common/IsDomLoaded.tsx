"use client";

import { PropsWithChildren, useEffect, useState } from "react";

const IsDomLoaded = ({ children }: PropsWithChildren) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded && children}</>;
};

export default IsDomLoaded;
