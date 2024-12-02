import { useDispatch, useSelector } from "react-redux";
import { ChangeName, ChangeCost, addCar } from "../store"; 

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleChangeName = (event) => {
    dispatch(ChangeName(event.target.value));
  };

  const handleChangeCost = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(ChangeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));  
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Car Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleChangeCost}
              type="number"
            />
          </div>
          <div className="field">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
