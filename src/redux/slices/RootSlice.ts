import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState: {
        car_make: "Car Make",
        car_model: "Car Model",
        car_color: "Car Color",
        year_:"Year",
        cost_:"Cost",
        mileage:"Mileage",
        id:"ID",
    },
    reducers: {
        chooseCarMake: (state, action) => {state.car_make = action.payload},
        chooseCarModel: (state, action) => {state.car_model = action.payload},
        chooseCarColor: (state, action) => {state.car_color = action.payload},
        chooseYear: (state, action) => {state.year_ = action.payload},
        chooseCost: (state, action) => {state.cost_ = action.payload},
        chooseMileage: (state, action) => {state.mileage = action.payload},
        chooseID: (state, action) => {state.id = action.payload},
    }
})

export const reducer = rootSlice.reducer
export const { chooseCarMake, chooseCarModel, chooseCarColor, 
               chooseYear, chooseCost, chooseMileage, 
               chooseID } = rootSlice.actions