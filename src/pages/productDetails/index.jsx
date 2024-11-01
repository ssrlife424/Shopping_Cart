
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetailsPage() {
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();

    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  console.log(productDetails);

  if (loading) return <h1>Product details loading! Please wait</h1>;

  return (
    <div>
      <div className="max-w-4xl p-6 mx-auto lg:max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 p-6 shadow-sm lg:grid-cols-5">
          <div className="top-0 w-full text-center lg:col-span-3 lg:sticky">
            <div className="relative px-4 py-10 shadow-lg rounded-xl">
              <img
                className="object-cover w-4/5 rounded"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 mx-auto mt-6">
              {productDetails?.images?.length
                ? productDetails?.images.map((imageItem) => (
                    <div className="p-4 shadow-md rounded-xl" key={imageItem}>
                      <img
                        src={imageItem}
                        className="w-24 cursor-pointer"
                        alt="Product secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productDetails?.price}</p>
            </div>
            <div>
              <button
                disabled={
                  productDetails
                    ? cartItems.findIndex(
                        (item) => item.id === productDetails.id
                      ) > -1
                    : false
                }
                onClick={() => handleAddToCart(productDetails)}
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;