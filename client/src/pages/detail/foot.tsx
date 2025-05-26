import React, { type FC } from "react";
import { FaHeart } from "react-icons/fa";
interface Props {
  description: string;
}
const Foot: FC<Props> = ({ description }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 footer-button">Sepete Ekle</button>
          <button className="footer-button">
            <FaHeart />
          </button>
        </div>
        <button className="footer-button bg-my-blue">Hemen Satın Al</button>
      </div>
      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-dark-grey ">
          Bu Ürün Hakkında
        </h2>
        <p>
          {description.split("<br/>").map((i) => (
            <div className="flex flex-col mb-3">
              <p> {i} </p>
            </div>
          ))}
        </p>
      </div>

      {/* eğer bi html etiketinin görevini yapmasını istiyorsak dangerouslySetInnerHTML={{__html:description}} yazarız DOMPrufiy kütüphanesi ile bu tehlikeyi yok ederiz */}
    </div>
  );
};

export default Foot;
