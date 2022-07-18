import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cars/carSlice";
import Navbar from "./components/Navbar";
import Cars from "./components/Cars";

function App() {
  const { carModels } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [carModels]);
  return (
    <>
      <Navbar />
      <Cars />
    </>
  );
}

export default App;
