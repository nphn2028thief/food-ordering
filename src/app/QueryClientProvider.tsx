"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient();

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default QueryClientProvider;
