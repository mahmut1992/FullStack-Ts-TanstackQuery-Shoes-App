import React, { type FC } from "react";
import Form from "../../components/form";
import type { IShoesFormValues } from "../../types";
import { useCreateShoe } from "../../service/shoes";

const Create: FC = () => {
  const { mutate } = useCreateShoe();
  const onSubmit = (values: IShoesFormValues) => {
    mutate(values);
  };
  return (
    <div className="max-w-[1000px] mx-auto ">
      <h1 className="text-2xl font-semibold mb-5">Ürün Ekle</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
