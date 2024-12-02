import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm, (state) => state.form.name],
  (data, searchTerm, formName) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: formName
    };
  }
);

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(memoizedCars);

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold ? 'bold' : ''}`}>
        <div className="columns is-vcentered">
          <div className="column">
            <p>
              {car.name} - ${car.cost}
            </p>
          </div>
          <div className="column is-narrow">
            <button
              className="button is-link"
              onClick={() => handleDeleteCar(car)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedCars}</div>;
};

export default CarList;
