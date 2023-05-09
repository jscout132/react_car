
type Props = {
    open?: boolean;
    onClose?: () => void;
}

function Module(props: Props) {
    if( !props.open ) return (<></>)
  return (
    <div onClick={ props.onClose } 
        className="fixed w-full h-full flex overflow-auto z-1 
                    justify-center align-middle bg-gray-200 
                    bg-opacity-25">
      <div>

      </div>
    </div>
  );
}

export default Module;
