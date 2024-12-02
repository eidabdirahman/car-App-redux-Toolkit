import { configureStore } from "@reduxjs/toolkit";
import {FormReducer, ChangeCost, ChangeName } from "./slices/Formslice";
import {carsReducer, ChangesearachTerm ,addCar, removeCar} from './slices/CarsSlice'

const store = configureStore({
    reducer: {
        form: FormReducer,
        cars:carsReducer
    }
});
export {store, addCar, ChangesearachTerm    , removeCar,ChangeName, ChangeCost,   };
