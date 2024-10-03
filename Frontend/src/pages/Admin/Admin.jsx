import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { Status } from "./Status";
import { Loader } from "../../utils/Loader";
import { Charts } from "./Charts";

export const Admin = () => {
  const { loading } = useContext(DashboardContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="w-full flex flex-col gap-8 py-10 px-20">
        Admin
        <Status />
        <Charts />
      </div>
    </>
  );
};
