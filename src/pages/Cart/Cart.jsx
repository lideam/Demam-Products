import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProductContext } from "../../context";

export const Cart = ({ open, setOpen }) => {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    cart.forEach((product) => {
      tot += product.price * product.quantity;
    });
    setTotal(tot);
  }, [cart]);

  const handleQuantityChange = (e, productId) => {
    const newQuantity = Number(e.target.value);
    updateQuantity(productId, newQuantity);
  };
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-[9999]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-home font-playfair space-x-1 shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.map((product) => (
                          <li key={product._id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.image}
                                className="h-full w-full object-cover object-center"
                                alt={product.name}
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.category}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500 flex gap-2">
                                  <input
                                    type="number"
                                    value={product.quantity}
                                    min="1"
                                    onChange={(e) =>
                                      handleQuantityChange(e, product._id)
                                    }
                                    className="w-16 font-bold disabled:cursor-not-allowed px-2 outline-none border border-clayBrown"
                                  />
                                  Qty
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    onClick={() => removeFromCart(product)}
                                    className="font-medium text-clayBrown hover:text-[#492c18]"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}

                        {cart.length === 0 && (
                          <dotlottie-player
                            src="https://lottie.host/97d093b5-b29a-48af-a265-0e2aaf44a314/KwB3HbFN1n.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                          ></dotlottie-player>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-clayBrown px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#492c18]"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-clayBrown hover:text-clayBrown"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
