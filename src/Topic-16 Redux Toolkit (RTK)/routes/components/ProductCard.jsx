import React from "react";
import { addItem } from "../../Redux/slices/cartSlice"
import { useDispatch } from "react-redux";



const ProductCard = ({ element }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      addItem({
        id: element.id,
        title: element.title,
        description: element.description,
        images: element.images,
        price: element.price,
        category: element.category
      }),
    );
  };

  return (
    <div className="w-75 h-fit p-6 overflow-hidden border-2 border-neutral-200 rounded-2xl">
      <div className="overflow-hidden w-full h-55 border-2 border-neutral-200 rounded-2xl">
        <img
          src={element.images[0]}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <div className="font-semibold">{element.title}</div>
        <div className="font-semibold text-lg">&#36; {element.price} </div>
        <button
          onClick={handleAddItem}
          className="w-full py-1.5 bg-blue-500 text-white font-semibold tracking-wider rounded-md mt-2 text-sm hover:cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
