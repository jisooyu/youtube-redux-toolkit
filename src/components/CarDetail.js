import React from "react";
import { increase, decrease, removeModel } from "../features/cars/carSlice";
import { useDispatch } from "react-redux";
import { FaArrowUp, FaArrowDown, FaTrashAlt } from "react-icons/fa";

const CarDetail = ({ id, model, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-3 gap-4 justify-items-center'>
      <div className='m-3'>
        <h3 className='pr-3'>{`car model: ${model}`}</h3>
        <button className='pl-12' onClick={() => dispatch(removeModel({ id }))}>
          <FaTrashAlt />
        </button>
      </div>
      <img className='object-cover h-48 w-96' src={img} alt='N.A.' />
      <div>
        <button onClick={() => dispatch(increase({ id }))}>
          <FaArrowUp />
        </button>
        <p className='p-3'>inventory: {quantity}</p>
        <button onClick={() => dispatch(decrease({ id }))}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
