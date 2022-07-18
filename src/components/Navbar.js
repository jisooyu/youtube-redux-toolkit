import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cars);
  return (
    <div className='bg-orange-800 text-neutral-50 flex justify-around'>
      <div className='flex'>
        <h3 className='p-4 text-2xl'>Redux Toolkit</h3>
      </div>
      <div className='p-4 text-3xl flex'>
        <FaCarAlt />
        <p className='ml-4 text-2xl'>{totalQuantity}</p>
      </div>
    </div>
  );
};

export default Navbar;
