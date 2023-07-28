import { CDN_URL } from "../utils/constant";

const ItemList = ({ itemCards }) => {
  return (
    <div>
      <ul>
        {itemCards?.map((item) => (
          <div key={item.card.info.id}>
            <li className="menu-item mt-[10px] mb-[20px] mx-0 flex justify-between pr-2">
              <div className=" w-9/12 py-4 ">
                <h3 className=" font-bold"> {item.card.info.name}</h3>
                <p className=" font-medium">₹{item.card.info.price / 100}.00</p>
                <p className=" text-[rgba(40,44,63,.45)]">
                  {item.card.info.description}
                </p>
              </div>

              <img
                className="w-[118px] h-[96px]  object-cover rounded mt-1 shadow-xl"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            </li>
            <hr className=" h-[1px] w-full bg-gray-300" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
