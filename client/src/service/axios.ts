import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // cooki ile saklanan verileri her istekde api ye gönder
  withCredentials: true,
  // api ye gönderilen verinin formatı
  headers: {
    "Content-Type": "application/json",
  },
});

// apiye atılan her istekde veya api den gelen her cevapda çalışan fonksiyon

// axios intercaptor

api.interceptors.response.use(
  // apiden her olumlu cevap geldiğinde çalışır
  (response) => {
    return response;
  },

  // apiden hata geldiğinde çalışır
  async (error) => {
    console.log("intercaptor hatayı yakaladı", error);

    const originalRequest = error.config;

    // hata access tokenın süresinin dolmasından mı kaynaklanıyor
    if (
      error.response.status === 401 &&
      error.response.data.message === "Access token expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      // accsess tokeni yenile
      try {
        authService.refresh();
        return api.request(originalRequest);
      } catch (error) {
        // refresh token süresi dolduysa artık çıkış yapacaz
        authService.logout();
        // login sayfasına yönlendir
        window.location.href = "/login";
        // hatayı fırlat
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
