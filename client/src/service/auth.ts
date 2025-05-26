// auth ile alakalı tüm api istekleri

import { useMutation } from "@tanstack/react-query";
import type { ILoginValues, IRegisterValues, IUserResponse } from "../types";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const authService = {
  register: (data: IRegisterValues) =>
    api.post<IUserResponse>("/auth/register", data),
  login: (data: ILoginValues) => api.post<IUserResponse>("/auth/login", data),
  refresh: () => api.post("/auth/refresh"),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get<IUserResponse>("/auth/me"),
};

// authService ile alakalı tüm api isteklerini custom hook ile yaz

const useAuth = () => {
  const navigate = useNavigate();
  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginValues) => authService.login(data),
    onSuccess: () => {
      navigate("/", { replace: true });
      toast.success("Giriş Yapıldı");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Bir Hata Oluştu");
    },
  });
  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IRegisterValues) => authService.register(data),
    onSuccess: () => {
      navigate("/", { replace: true });
      toast.success("Kayıt Oluşturuldu");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Bir Hata Oluştu");
    },
  });
  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Hesaptan Çıkış Yapıldı");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Bir Hata Oluştu");
    },
  });
  return { login, register, logout };
};

export default useAuth;
