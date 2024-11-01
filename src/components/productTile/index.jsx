// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCartContext } from "../../context";

// function ProductTile({ singleProductTile }) {
//   const navigate = useNavigate();
//   const { handleAddToCart,cartItems } = useContext(ShoppingCartContext);
//   function handleNavigateToProductDetailsPage(getCurrentElementById) {
//     console.log(
//       "Navigating to product details page for product with id: ",
//       getCurrentElementById,
//       navigate
//     );
//     navigate(`/product-details/${getCurrentElementById}`);
//   }

//   return (
//     <div className="relative p-6 border cursor-pointer group border-cyan-700 ">
//       <div className="overflow-hidden aspect-w-1 aspect-h-1">
//         <img
//           src={singleProductTile?.thumbnail}
//           alt={singleProductTile?.title}
//           className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 "
//         />
//       </div>
//       <div className="flex items-start justify-between mt-4 space-x-4 ">
//         <div className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
//           <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap ">
//             {singleProductTile?.title}
//           </p>
//         </div>
//         <div className="text-right">
//           <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
//             ${singleProductTile?.price}
//           </p>
//         </div>
//       </div>
//       <button
//         onClick={() =>
//           handleNavigateToProductDetailsPage(singleProductTile?.id)
//         }
//         className="w-full px-5 py-2 mt-5 text-lg font-bold text-white bg-black rounded-none"
//       >
//         View Details
//       </button>
//       <button
//         disabled={
//           cartItems.findIndex((item) => item.id === singleProductTile.id) > -1
//         }
//         onClick={() => handleAddToCart(singleProductTile)}
//         className="w-full px-5 py-2 mt-5 text-lg font-bold text-white bg-black rounded-none disabled:opacity-65 "
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductTile;


import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductTile({ singleProductTile }) {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(ShoppingCartContext);

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/product-details/${getCurrentProductId}`);
  }

  return (
    <div className="relative p-6 border cursor-pointer group border-cyan-700">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="w-full h-full transition-all duration-300 oject-cover group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProductTile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleProductTile?.price}
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          handleNavigateToProductDetailsPage(singleProductTile?.id)
        }
        className="w-full px-5 py-2 mt-5 text-lg font-bold text-white bg-black rounded-none"
      >
        View Details
      </button>
      <button
        disabled={
          cartItems.findIndex((item) => item.id === singleProductTile.id) > -1
        }
        onClick={() => handleAddToCart(singleProductTile)}
        className="w-full px-5 py-2 mt-5 text-lg font-bold text-white bg-black rounded-none disabled:opacity-65"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductTile;