import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ itemCards, cart }) => {
  const dispath = useDispatch();

  const handleAddItem = (item) => {
    dispath(addItem(item));
  };

  const handleRemoveItems = (item) => {
    dispath(removeItem(item));
  };
  return (
    <div>
      <ul>
        {itemCards?.map((item, index) => {
          const { id, name, price, description, imageId, defaultPrice } =
            item?.card?.info;
          return (
            <div key={id + index}>
              <li className="menu-item mt-[10px] mb-[20px] mx-0 flex justify-between pr-2">
                <div className=" w-9/12 pt-4 pb-1 ">
                  <h3 className=" font-bold"> {name}</h3>
                  <p className=" font-medium">
                    ₹{(defaultPrice | price) / 100}.00
                  </p>
                  <p className=" text-[rgba(40,44,63,.45)] text-sm">
                    {description}
                  </p>
                </div>
                <div className="relative pt-4">
                  <img
                    className="w-[118px] h-[96px]  object-cover rounded  shadow-xl"
                    src={CDN_URL + imageId}
                    alt={item.card.info.name}
                  />
                  <button
                    className="absolute left-4 top-[92px] bg-white px-6 py-1 border-2 rounded text-green-800 font-bold text-[12px] shadow-lg"
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    ADD
                  </button>
                </div>
              </li>
              {cart && (
                <div className="text-right">
                  <button
                    className="text-center p-2 bg-white border-2 text-green-900 mb-2"
                    onClick={() => {
                      handleRemoveItems(item);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
              <hr className=" h-[1px] w-full bg-gray-300" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
