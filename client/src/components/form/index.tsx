import React, { type FC, type FormEvent } from "react";
import type { IShoes, IShoesFormValues } from "../../types";
import { Field, Formik, Form as FormikForm } from "formik";
import { inputArray } from "../../utils/constants";
import Input from "./input";

interface Props {
  onSubmit: (value: IShoesFormValues) => void;
  data?: IShoes;
}

const Form: FC<Props> = ({ onSubmit, data }) => {
  const handleSubmit = (values: IShoesFormValues) => {
    onSubmit(values);
    // formun başlangıç verilerini tanımlayalım
  };
  const initialValues = {
    name: data?.name || "",
    price: data?.price || "",
    discount: data?.discount || "",
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm className="flex flex-col gap-5">
        {inputArray.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Field type="radio" name="gender" value="men" id="men" />
            <label htmlFor="men">Erkek</label>
          </div>
          <div className="flex items-center gap-2">
            <Field type="radio" name="gender" value="women" id="women" />
            <label htmlFor="women">Kadın</label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-my-blue py-2 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer"
        >
          Gönder
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
