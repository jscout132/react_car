import Input from "./Input"
import Button from "./Button"
import { server_calls } from "../api/server"
import { chooseCarMake, chooseCarModel, chooseCarColor, 
         chooseCost, chooseMileage, chooseYear,
         chooseID } from "../redux/slices/RootSlice"

import { useForm } from "react-hook-form"
import { useDispatch, useStore } from "react-redux"

interface AddCarProps {
    id?: string,
    data?:{}
}

const AddCarForm = (props:AddCarProps) => {
    const {register, handleSubmit} = useForm ({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data:any, event: any) => {
        console.log(`Serial Number: ${props.id}`);
        if (props.id) {
            server_calls.update(props.id!, data)
            console.log(`Updated: ${ data } ${ props.id }`)
            setTimeout(()=>{window.location.reload()}, 10000);
            event.target.reset()
        } else {
            //use dispatch to update state in store
            dispatch(chooseCarMake(data.car_make));
            dispatch(chooseCarModel(data.car_model));
            dispatch(chooseCarColor(data.car_color));
            dispatch(chooseYear(data.year_));
            dispatch(chooseCost(data.cost_));
            dispatch(chooseMileage(data.mileage));
            dispatch(chooseID(data.id));

            server_calls.create(store.getState())
            setTimeout(()=>{window.location.reload()}, 1000);
        }
    }


    return (
    <div>
        <form onSubmit={(handleSubmit(onSubmit))}>
            <div className="flex">
                <label htmlFor="car_make" className="mr-3">
                    Car Make
                    <Input {...register('car_make')} name='car_make' placeholder="Car Make"/>
                </label>
                <label htmlFor="car_model">
                    Car Model
                    <Input {...register('car_model')} name='car_model' placeholder="Car Model"/>
                </label>
            </div> 

            <div className="flex">
                <label htmlFor="car_color" className="mr-3">
                    Car Color
                    <Input {...register('car_color')} name='car_color' placeholder="Car Color"/>
                </label>
                <label htmlFor="year_">
                    Year
                    <Input {...register('year_')} name='year_' placeholder="Year"/>
                </label>
            </div> 
            <div className="flex">
                <label htmlFor="cost_" className="mr-3">
                    Cost
                    <Input {...register('cost_')} name='cost_' placeholder="Cost"/>
                </label>
                <label htmlFor="mileage" className="mr-3">
                    Mileage
                    <Input {...register('mileage')} name='mileage' placeholder="Mileage"/>
                </label>
            </div> 
            <div>
                <label htmlFor="id">Serial Number</label>
                <Input {...register('id')} name='id' placeholder="Serial Number"/>
            </div> 
            <div className="flex p-1 justify-end">
                <Button>Submit</Button>
            </div>

        </form>
    </div>
  )
}

export default AddCarForm