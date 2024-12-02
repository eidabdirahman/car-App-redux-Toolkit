import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div className="car-value">
      TotalCost: ${totalCost}
    </div>
  );
};

export default CarValue;
