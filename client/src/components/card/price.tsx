import React, { type FC } from "react";
import type { IShoes } from "../../types";

interface Props {
  shoe: IShoes;
  design?: string;
}

const Price: FC<Props> = ({ shoe, design }) => {
  // discount varsa indirimli fiyatı hesapla
  let price: number = shoe.price;
  if (shoe.discount) {
    price = (shoe.price * (100 - shoe.discount)) / 100;
  }
  return (
    <div
      className={`${
        shoe.discount > 0 ? "text-my-yellow" : "text-white"
      } ${design} `}
    >
      {" "}
      ${price.toFixed(2)}{" "}
    </div>
  );
};

export default Price;
