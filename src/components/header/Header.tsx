import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../../services/AuthEndPoints";
import { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  const logout = async () => {
    try {
      await postLogout();
      localStorage.removeItem('username');
      localStorage.removeItem('isAuthenticated');
      navigate("/login");
      location.reload()
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const usernameLocalhost = localStorage.getItem("username");
    setUsername(usernameLocalhost || "");
  });

  return (
    <div className="absolute w-screen h-[60px] bg-neutral-800 flex items-center px-2 justify-between">
      <div>
        <span className="text-neutral-300 text-xl">Title</span>
      </div>

      <div className="flex text-sm text-neutral-200 space-x-4">
        <span>
          <Link to={"/home"}>Home</Link>
        </span>
        <span>
          <Link to={"/users"}>Users</Link>
        </span>

        {username.trim().length === 0 ? (
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        ) : (
          <span>{username}</span>
        )}

        <span>
          <span onClick={logout} className="cursor-pointer text-red-300">Logout</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
