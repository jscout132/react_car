import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useGetData } from "../custom-hooks/FetchData";
import Button from "./Button";
import Module from "./Module";
import { server_calls } from "../api/server";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'car_make', headerName: "Car Make", flex: 1 },
    { field: 'car_model', headerName: "Car Model", flex: 1 },
    { field: 'car_color', headerName: "Car Color", flex: 1 },
    { field: 'year_', headerName: "Car Year", flex: 1 },
    { field: 'cost_', headerName: "Car Price", flex: 1 },
    { field: 'mileage', headerName: "Mileage", flex: 1 },
]

function CarTable() {
    const [open, setOpen] = useState(false);

    const {carData, getData } = useGetData();

    const [selectionModel, setSelectionModel] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel[0]}`)
        setTimeout(()=>{ window.location.reload() }, 5000)
    }

  return (
    <>
        <Module
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
    {/* just displaying the cars on this page */}
        <div className="flex flex-row mt-5">
            <Button onClick={ () => handleOpen()}>Add Car</Button>
            <Button onClick={ () => handleOpen()}>Update Car Info</Button>
            <Button onClick={deleteData}>Delete Car</Button>    


            <Button>show id</Button>
        </div>
         <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
            style={{height: 400, width:'100%'}}>
                <h2 className="p-3 bg-gray-200">The Cars</h2>
                <DataGrid rows={carData} columns={columns} pageSizeOptions={ [100] }
                checkboxSelection={true} 
                onSelectionModelChange={ (item:any) =>{
                    setSelectionModel(item)
                }}

                />
            

        </div>

    </>
  );
}

export default CarTable;
