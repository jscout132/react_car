import AddCarForm from "./AddCarForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose?: () => void;
}

function Module(props: Props) {
    if( !props.open ) return (<></>)
  return (
    <div onClick={ props.onClose } 
        className="fixed w-full h-full flex overflow-auto z-1 
                    justify-center align-middle bg-gray-200 
                    bg-opacity-25">
        <div onClick={(e) => {
            e.stopPropagation()
        }} 
            className="max-w-800px w-3/5 fixed flex z-1
         bg-white shadow-xl rounded">
            <div className="w-full flex flex-col">
                <div className="flex flex-row space-apart">
                    <p className="flex justify-start m-3 bg-gray-300 p-2 rounded"
                    onClick={props.onClose}>
                        X
                    </p>
                </div>
                <div className="flex flex-col items-center text-center mt-3 p-2">
                    <AddCarForm id={props.id}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Module;
