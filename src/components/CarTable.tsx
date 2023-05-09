import { useState } from "react";

import Button from "./Button";
import Module from "./Module";


function CarTable() {
    let [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
    {/* just displaying the cars on this page */}
    <div className="flex flex-row mt-5">
        <Button onClick={ () => handleOpen()}>Add Car</Button>
        <Button>Update Car Info</Button>
        <Button>Delete Car</Button>    
    </div>
    <button onClick={handleClose}> Close </button>
    <Module
        open={open}
    />
    </>
  );
}

export default CarTable;
