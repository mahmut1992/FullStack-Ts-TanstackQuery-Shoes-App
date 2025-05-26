import React, { type FC } from "react";
import type { IShoes } from "../../types";
import Badge from "../../components/card/badge";
import Price from "../../components/card/price";
import { GiSpartan } from "react-icons/gi";

interface Props {
  shoe: IShoes;
}

const Head: FC<Props> = ({ shoe }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge shoe={shoe} />
      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]  ">
        {shoe.name}
      </h1>
      <p className="text-2xl flex gap-1 items-center">
        <Price design="!text-my-blue" shoe={shoe} />
        {shoe.discount > 0 && (
          <span className="text-my-yellow line-through ps-3 text-[17px] ">
            ${shoe.price.toFixed(2)}
          </span>
        )}
      </p>
    </div>
  );
};

export default Head;
