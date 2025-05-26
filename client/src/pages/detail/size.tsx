import React, { useState, type FC } from "react";
import { numbers } from "../../utils/constants";
interface Props {
  sizes: string;
}
const Size: FC<Props> = ({ sizes }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçimi</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          const inStock = sizes.split(",").includes(num);
          const isSelected = selected === num;
          return (
            <button
              disabled={!inStock}
              key={num}
              onClick={() => toggle(num)}
              className={` py-2 px-4 lg:px-0 rounded-md cursor-pointer transition hover:bg-my-blue hover:text-white disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] ${
                isSelected ? "bg-my-blue text-white " : "bg-white"
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
