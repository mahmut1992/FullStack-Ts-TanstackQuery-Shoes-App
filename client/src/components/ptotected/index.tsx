import React, { type FC } from "react";
import useUser from "../../service/user";
import Loader from "../loader";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header";

interface Props {
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ allowedRoles }) => {
  // oturumu açık olan kullanıcı verilerini al

  const { user, isLoading } = useUser();

  // kullanıcı verileri yüklenme aşamasındayken loader göster

  if (isLoading) return <Loader />;

  // eğer rolu yetersizse

  if (allowedRoles && !allowedRoles?.includes(user?.role as string))
    return <Navigate to="/" replace />;

  // eğer oturum açıksa

  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );

  // eğer kullanıcı oturumu kapalıysa

  return <Navigate to="/login" replace />;
};

export default Protected;
