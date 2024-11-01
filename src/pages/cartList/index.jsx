import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";
function CartListPage() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl py-4 mx-auto max-md:max-w-xl">
      <h1 className="font-bold text-gray-800 tet-2xl">MY Cart Page</h1>
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {cartItems?.length ? (
            cartItems.map((singleCartItem) => (
              <CartTile key = {singleCartItem.id} singleCartItem={singleCartItem} />
            ))
          ) : (
            <h1>No items available! Please add some item</h1>
          )}
        </div>
        <div className="p-4 bg-gray-100 rounded-sm h-max">
          <h3 className="pb-2 text-xl font-extrabold border-b border-gray-300 text-gray-950">
            Order Summary
          </h3>
          <ul className="space-y-4 text-gray-700">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span>
                ${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="flex gap-2 mt-5 ">
            <button disabled ={cartItems.length === 0} className="px-4 py-3 text-sm font-extrabold text-white bg-black disabled:opacity-65">
              CheckOut
            </button>
            <button
              onClick={() => navigate("/products")}
              className="px-4 py-3 text-sm font-extrabold text-white bg-black"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartListPage;



