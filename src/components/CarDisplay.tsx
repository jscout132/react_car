// NOT CURRENTLY USING THIS PAGE
import Button from "./Button";
import { server_calls } from "../api/server";
import { useGetData } from "../custom-hooks/FetchData";

import { Card } from '@mui/material';


// map through the cars in the database the same way you 
// mapped through the nav links?

const getData = async() => {
  const result = await server_calls.get()
  console.log ('result', result[0])
  return result
}


function CarDisplay() {

  const {carData, getData} = useGetData();
  let text =''
  for (let i = 0; i<carData.length; i++){
    <section className="flex flex-row justify-between w-6/12 bg-gray-200">
    {/* {text = carData[i]['car_make']} */}
    <h3>{carData[i]['car_make']}</h3>
    </section>
  }

  return (
    
    <section id="cars" className="flex flex-row 
    justify-between w-6/12 bg-gray-200">
    <h3>{text}</h3>
    {/* <button onClick={getData}>click</button> */}

    </section>

  );
}

export default CarDisplay;
