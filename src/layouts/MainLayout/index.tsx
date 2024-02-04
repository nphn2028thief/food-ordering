"use client";

import { ReactNode, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import axiosClient from "@/api/axiosClient";
import Navbar from "@/layouts/components/Navbar";
import Footer from "../components/Footer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  clearUser,
  setAccessToken,
  setUser,
} from "@/lib/features/auth/authSlice";
import { IUser } from "@/types/auth";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await axiosClient.post<{ accessToken: string }>(
        "/auth/refresh-token",
        { refreshToken: localStorage.getItem("refreshToken") }
      );
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      dispatch(setAccessToken(data.accessToken));
    },
  });

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const res = await axiosClient.get<IUser>("/auth/get-me");
      return res.data;
    },
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  // Work if call api getMe is error
  useEffect(() => {
    if (isError) {
      dispatch(clearUser());
    }
  }, [dispatch, isError]);

  // Work if call api getMe is success
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  // Work if accessToken is empty
  useEffect(() => {
    if (!accessToken) {
      mutate();
    }
  }, [accessToken, mutate]);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar isLoading={isLoading} />
        <div className="min-h-[calc(100vh_-_var(--header-height))] mt-[calc(var(--header-height)_+_4px)] md:mt-[var(--header-height)] p-4 pt-0">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
