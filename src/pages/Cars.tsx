import CarTable from "../components/CarTable";
import ActionAreaCard from "../components/CarSquare";




const Cars = () => {
  return (
    <>
    <div>
      <CarTable></CarTable>
    </div>
    <div className="flex flex-row mt-5">
      <ActionAreaCard/>

    </div>
    </>
  );
}

export default Cars;
