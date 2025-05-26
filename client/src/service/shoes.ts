import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { IShoes, IShoesFormValues } from "../types";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const shoesService = {
  getAll: () => api.get<IShoes[]>("/shoes"),
  getById: (id: string) => api.get<IShoes>(`/shoes/${id}`),
  create: (data: IShoesFormValues) => api.post<IShoes>("/shoes", data),
  update: (id: string, data: Partial<IShoesFormValues>) =>
    api.put(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};

const useShoes = () =>
  useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoesService.getAll(),
    select: (data) => data.data,
  });

const useShoe = (id: string) =>
  useQuery({
    queryKey: ["shoe", id],
    queryFn: () => shoesService.getById(id),
    select: (data) => data.data,
  });

const useCreateShoe = () => {
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["update"],
    mutationFn: (data: IShoesFormValues) => shoesService.create(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/dashboard");
      toast.success("Ürün Oluşturuldu");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Bir hata oluştu");
    },
  });
};

const useUpdateShoe = (id: string) => {
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["update", id],
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<IShoesFormValues>;
    }) => shoesService.update(id, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      client.invalidateQueries({ queryKey: ["shoe", id] });

      navigate("/dashboard");
      toast.success("Ürün Başarıyla Güncellendi");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Bir Hata Oluştu");
    },
  });
};

const useDeleteShoe = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id: string) => shoesService.delete(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ürün Başarıyla Silindi");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Bir Hata Oluştu");
    },
  });
};

export {
  shoesService,
  useShoes,
  useShoe,
  useCreateShoe,
  useUpdateShoe,
  useDeleteShoe,
};
