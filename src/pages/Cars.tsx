import Squares from "../components/Squares";
import CarTable from "../components/CarTable";
import CarDisplay from "../components/CarDisplay";

import { server_calls } from "../api/server";

const Cars = () => {
  return (
    <>
    <CarTable></CarTable>
        <div className="flex flex-row mt-5">
            <Squares>
                Car information
            </Squares>
            <Squares>
                Car information
            </Squares>
            <Squares>
                Car information
            </Squares>
        </div>
    </>
  );
}

export default Cars;
