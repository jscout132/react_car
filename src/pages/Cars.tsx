import CarTable from "../components/CarTable";
// import CarSquare from "../components/CarSquare";




const Cars = () => {
  return (
    <>
    <div>Note: when updating car information, the ID number needs to stay the same because that was the primary key</div>
    <div>
      <CarTable></CarTable>
    </div>
    <div className="flex flex-row mt-5">
      {/* <CarSquare/> */}

    </div>
    </>
  );
}

export default Cars;
