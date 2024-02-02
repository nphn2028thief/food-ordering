"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

import Loading from "@/components/common/Loading";
import { AppStore, makeStore } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";

const GlobalLoading = () => {
  const { isLoading } = useAppSelector((state) => state.loadingSlice);

  return isLoading ? (
    <div className="fixed inset-0 bg-black/15 z-[99999]">
      <Loading className="[&>svg]:w-10 [&>svg]:h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  ) : null;
};

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <GlobalLoading />
      {children}
    </Provider>
  );
};

export default StoreProvider;
