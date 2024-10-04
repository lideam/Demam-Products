import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { Status } from "./Product/Status";
import { Loader } from "../../utils/Loader";
import { Charts } from "./Product/Charts";
import { ProductTable } from "./Product/ProductTable";
import { OrderStatus } from "./Order/OrderStatus";
import { OrderChart } from "./Order/OrderChart";
import { OrderTable } from "./Order/OrderTable";
import { Admins } from "./Admins";

export const Admin = () => {
  const { loading } = useContext(DashboardContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="w-full flex flex-col gap-8 py-10 px-20 bg-home">
        Admin
        <Status />
        <Charts />
        <ProductTable />
        <OrderStatus />
        <OrderChart />
        <OrderTable />
        <Admins />
      </div>
    </>
  );
};
