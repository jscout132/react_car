// NOT CURRENTLY USING THIS PAGE
import Button from "./Button";

// map through the cars in the database the same way you 
// mapped through the nav links?

interface CarProps{
    className?:string,
    children: React.ReactNode
}
function CarDisplay(props:CarProps) {


  return (
    <section className="flex flex-row 
    justify-between w-7/12 bg-white">
        <div id="ford" className="w-6/12"> 
            <img src="/ford_f150.png" className=""/>
        </div>
    <h3>Featured Car:</h3>
    <Button>Click here</Button>
    </section>

  );
}

export default CarDisplay;
