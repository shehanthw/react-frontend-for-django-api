import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="absolute top-[60px] w-full h-[calc(100vh-60px)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
