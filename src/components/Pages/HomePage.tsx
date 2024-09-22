import { Outlet } from "react-router-dom";
import GlobalHeader from "../GlobalHeader/GlobalHeader";

const HomePage = () => {
  return (
    <>
      <GlobalHeader />
      <Outlet />
    </>
  );
};

export default HomePage;
