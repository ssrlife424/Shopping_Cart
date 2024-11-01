import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <Fragment>
      <div className="grid items-start grid-cols-3 gap-5">
        <div className="flex items-start col-span-2 gap-4">
          <div className="p-1 bg-gray-400 rounded-sm w-28 h-28 max-sm:w-20 shrink-0">
            <img
              src={singleCartItem?.thumbnail}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="px-4 py-3 text-sm font-extrabold text-white bg-black"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-bold text-[16px]">
            Quantity:{singleCartItem?.quantity}
          </p>
          <div className="flex gap-2 mt-3">
            <button
              className="border bg-slate-50 border-[#000] disabled:opacity-65"
              disabled={singleCartItem?.quantity === 1}
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border bg-slate-50 border-[#000]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
}

export default CartTile;


