import React from "react";
import { toast } from "react-toastify";

const Cart = ({ buyNow, removeItem, cartItem }) => {
  let amount = 0;
  //we can also use map below
  cartItem.forEach((item) => {
    amount = amount + parseInt(item.productPrice, 10);
  });
  return (
    <div class="flex border-4 border-red-600 w-[500px] flex-col  bg-white ">
      <div class="flex-1 py-6 px-6">
        <div class="flex justify-between">
          <p className = "font-bold">
            Shopping cart
          </p>
          <div>
            {cartItem.length >= 1?(" "):(
               <h1 className="font-bold">Card is Empty</h1>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItem.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0  rounded-md border border-gray-200">
                    <img
                      src={item.tinyImage}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a>{item.productName}</a>
                        </h3>
                        <p className="ml-4">{item.productPrice}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty :1</p>

                      <div className="flex">
                        <button
                          onClick={() => removeItem(item)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* if list is empty */}
      {cartItem.length >= 1 ? (
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${amount}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              onClick={() => buyNow()}
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      ) : (
        <h1 className="font-bold">Card is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
