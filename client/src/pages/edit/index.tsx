import React, { type FC } from "react";
import Form from "../../components/form";
import type { IShoesFormValues } from "../../types";
import { useShoe, useUpdateShoe } from "../../service/shoes";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";

const Edit: FC = () => {
  const { id } = useParams();
  const { data, isPending } = useShoe(id as string);
  const { mutate } = useUpdateShoe(id as string);
  const onSubmit = (values: IShoesFormValues) => {
    mutate({ id: id as string, data: values });
  };
  if (isPending) return <Loader />;
  return (
    <div className="max-w-[1000px] mx-auto ">
      <h1 className="text-2xl font-semibold mb-4">Ürün Düzenle</h1>
      <Form onSubmit={onSubmit} data={data} />
    </div>
  );
};

export default Edit;
