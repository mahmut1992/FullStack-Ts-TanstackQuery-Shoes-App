import React, { type FC } from "react";
import type { IShoes } from "../../types";

interface Props {
  shoe: IShoes;
}

const Badge: FC<Props> = ({ shoe }) => {
  return (
    (shoe.discount > 0 || shoe.isNew) && (
      <span
        className={`absolute rounded roundedtl-[12px] rounded-br-[12px]  lg:rounded-br-[24px] lg:rounded-tl-[24px] px-2 py-1 text-sm lg:px-4  lg:py-2 text-white ${
          shoe.discount ? "bg-my-yellow" : "bg-my-blue"
        }`}
      >
        {shoe.discount > 0 ? `${shoe.discount}% ` : "Yeni"}
      </span>
    )
  );
};

export default Badge;
