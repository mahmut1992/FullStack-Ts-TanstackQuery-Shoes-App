import React, { type FC } from "react";
import { Link } from "react-router-dom";
import { useDeleteShoe, useShoes } from "../../service/shoes";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Dashboard: FC = () => {
  const { data, isLoading, error } = useShoes();
  const { mutate, isPending } = useDeleteShoe();
  const handleDelete = (id: string) => {
    if (window.confirm("Silmek istediğinizden emin misiniz?")) {
      mutate(id);
    }
  };

  if (isLoading) return <Loader />;

  if (error) return <Error />;
  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Ürünler</h1>
        <Link
          className="bg-my-blue px-4 py-1 md:px-6 md:py-2 rounded-md text-white hover:bg-my-blue/90 transition cursor-pointer"
          to="/dashboard/create"
        >
          Ürün Ekle
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Resim
              </th>
              <th scope="col" className="px-6 py-3">
                İsim
              </th>
              <th scope="col" className="px-6 py-3">
                Fiyat
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                İndirim (%)
              </th>
              <th scope="col" className="px-6 py-3">
                Eylemler
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((shoe) => (
              <tr
                key={shoe._id}
                className=" odd:bg-white even:bg-gray-50 border-b border-gray-200"
              >
                <td className=" p-1 md:px-6 py-4">
                  <img
                    src={shoe.picture[0]}
                    alt={shoe.name}
                    className="w-16 md:w-28 max-w-full max-h-ful rounded-xl"
                  />
                </td>
                <th
                  scope="row"
                  className="font-semibold px-6 py-4  text-gray-900 whitespace-nowrap"
                >
                  {shoe.name}
                </th>

                <td className="px-6 py-4">${shoe.price} </td>
                <td className="px-6 py-4">
                  {" "}
                  {shoe.discount > 0 ? `${shoe.discount}%` : "Yok"}{" "}
                </td>

                <td className=" px-6 py-4   ">
                  <Link
                    to={`/dashboard/edit/${shoe._id}`}
                    className="font-medium text-white p-1 rounded-md hover:underline bg-blue-500 "
                  >
                    Düzenle
                  </Link>
                  <button
                    disabled={isPending}
                    onClick={() => handleDelete(shoe._id)}
                    className="font-medium text-white hover:underline bg-red-500 p-1 min-w-[63px] rounded-md h-6 mt-2 lg:ml-2  cursor-pointer"
                  >
                    sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
