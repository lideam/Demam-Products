import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { Card } from "./Card";

export const OrderStatus = () => {
  const { orders } = useContext(DashboardContext);

  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  ).length;
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  ).length;
  const deletedOrders = orders.filter(
    (order) => order.status === "deleted"
  ).length;

  const distinctPhoneNumbers = [
    ...new Set(orders.map((order) => order.phoneNumber)),
  ].length;

  return (
    <div className="container items-center px-4 py-8 m-auto mt-5">
      <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
       <Card text={pendingOrders} name="Pending Orders" className="fa fa-box" />
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-check-circle"></i>
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {completedOrders}
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Completed Orders</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-trash"></i>
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {deletedOrders}
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Deleted Orders</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-user"></i>
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {distinctPhoneNumbers}
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>NO. of Users Ordered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
