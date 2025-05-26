import React, { type FC } from "react";
import { Formik, Form, Field } from "formik";
import { initialLoginValues } from "../../utils/constants";
import type { ILoginValues } from "../../types";
import Input from "../../components/form/input";
import { Link } from "react-router-dom";
import { loginSchema } from "../../utils/schema";
import useAuth from "../../service/auth";

const Login: FC = () => {
  const { login } = useAuth();
  const handleSubmit = (values: ILoginValues) => {
    login.mutate(values);
  };
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="/logo.svg" alt="KICKS" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold  text-gray-900">
          Hesabınıza Giriş Yapın
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
          initialValues={initialLoginValues}
        >
          <Form className="space-y-8">
            <Input label="Email" name="email" type="email" />
            <Input label="Şifre" name="password" type="password" />

            <div>
              <button
                disabled={login.isPending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        </Formik>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            className="font-semibold text-indigo-600 hover:text-indigo-500"
            to="/register"
          >
            Üye Ol
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
