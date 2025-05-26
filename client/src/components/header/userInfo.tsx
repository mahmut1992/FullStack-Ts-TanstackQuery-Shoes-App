import React, { useEffect, useState, type FC } from "react";
import useUser from "../../service/user";
import { FaUserAlt as User, FaSearch as Search } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../service/auth";

const UserInfo: FC = () => {
  const { user } = useUser();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Eğer tıklanan element user iconu değilse modal ı kapat
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".user-info")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    // component unmount olduğunda eventListeneri kaldır

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <button className="xl:text-2xl cursor-pointer md:text-xl max-md:hidden">
        <Search />
      </button>
      <div className="relative cursor-pointer md:text-lg text-center user-info ">
        <User onClick={() => setIsOpen(!isOpen)} />
        {isOpen && user && (
          <div className="absolute top-10 -left-25 bg-white shadow-lg rounded-md p-1 z-10">
            <button className="header-button font-semibold cursor-pointer">
              {user.firstName} {user.lastName}
            </button>
            {user.role === "admin" && (
              <Link onClick={() => setIsOpen(false)} to="/dashboard">
                <button className="header-button">Admin Paneli</button>
              </Link>
            )}
            <button
              disabled={logout.isPending}
              onClick={() => logout.mutate()}
              className="header-button"
            >
              Çıkış Yap
            </button>
          </div>
        )}
      </div>
      <button className="bg-my-yellow text-sm md:text-base xl:text-lg size-[20px] md:size-[24px] xl:size-[32px] rounded-full grid place-items-center ">
        0
      </button>
    </div>
  );
};

export default UserInfo;
