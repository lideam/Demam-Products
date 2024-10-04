import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";

export const Status = () => {
  const { products, orders, admins } = useContext(DashboardContext);
  if (!products || !orders || !admins) {
    return;
  }
  const totalStock = Array.isArray(products)
    ? products.reduce(
        (total, product) => total + (product.stock ? product.stock : 0),
        0
      )
    : 0;
  return (
    <div class="container items-center px-4 py-8 m-auto mt-5">
      <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
        <div class="w-full p-2 lg:w-1/4 md:w-1/2">
          <div class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div class="flex flex-row justify-between items-center">
              <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-user "></i>
                </div>
              </div>
            </div>
            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {admins.length}
            </h1>
            <div class="flex flex-row justify-between group-hover:text-gray-200">
              <p>Registered Admins</p>
            </div>
          </div>
        </div>
        <div class="w-full p-2 lg:w-1/4 md:w-1/2">
          <div class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div class="flex flex-row justify-between items-center">
              <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-shopping-cart"></i>
                </div>
              </div>
            </div>
            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {products.length}
            </h1>
            <div class="flex flex-row justify-between group-hover:text-gray-200">
              <p>Total Products</p>
            </div>
          </div>
        </div>
        <div class="w-full p-2 lg:w-1/4 md:w-1/2">
          <div class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div class="flex flex-row justify-between items-center">
              <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i className="fa fa-check"></i>
                </div>
              </div>
            </div>
            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {orders.length}
            </h1>
            <div class="flex flex-row justify-between group-hover:text-gray-200">
              <p>Total orders</p>
            </div>
          </div>
        </div>
        <div class="w-full p-2 lg:w-1/4 md:w-1/2">
          <div class="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-sandyBeige hover:to-clayBrown rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div class="flex flex-row justify-between items-center">
              <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="h-6 w-6 group-hover:text-gray-50 flex items-center justify-center">
                  <i class="fa fa-list"></i>
                </div>
              </div>
            </div>
            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {totalStock}
            </h1>
            <div class="flex flex-row justify-between group-hover:text-gray-200">
              <p>Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
