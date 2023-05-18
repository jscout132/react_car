import Button from "../components/Button";
import CarSquare from "../components/CarSquare";
import SideBars from "../components/SideBars";
import Squares from "../components/Squares";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="mt-5 flex flex-row bg-gray-400 p-5">
    <section className="flex flex-row 
    justify-around w-7/12 bg-gray-200 shadow-md">
        <div id="ford" className="w-7/12">
            <img src="ford_f150.png"  id="ford"/>
        </div>
        <div className="flex flex-col">
            <h4 className="mt-10 text-2xl font-bold">Featured Car:</h4>
            <p id="ft-car">Ford F150</p>{/*want to pull in the car name details here */}
            <Button>Click here</Button> 
        </div>
    </section>
    <section className="flex flex-col w-5/12">
        <SideBars className="">
        <Link to='/cars'><p className="font-bold"><i className="fa-solid fa-car fa-2xl pr-3" style={{color: "#eab308"}}></i>
            See all cars</p></Link>
        </SideBars>
        <section className="h-8"></section>
        <SideBars>
        <Link to='/sales'><p className="font-bold"><i className="fa-solid fa-handshake fa-2xl pr-3" style={{color: "#eab308"}}></i>
            Chat with a salesperson</p></Link>
        </SideBars>
    </section>
    </div>

    <div className="mx-4 my-6 flex flex-row">
        <Squares>
           <p className="font-bold lg:text-3xl md:text-2xl sm:text-2xl ">Get Approved</p> 
           <p>Take the next step towards getting your dream car</p>
        </Squares>
        <Squares>
           <p className="font-bold lg:text-3xl md:text-2xl sm:text-2xl">Trade in Value</p> 
           <p>See how much your car is be worth</p>
        </Squares>

        <Squares>
            <Link to='/parts'>
           <p className="font-bold lg:text-3xl md:text-2xl sm:text-2xl">Order Parts</p> 
           <p>Get your car in shape with fresh parts</p>
           </Link>

        </Squares>

    </div>

    <div className="mt-5 justify-center bg-gray-400 p-3">
        <h3 className="text-3xl font-bold">New Cars</h3>
        <div className="flex flex-row justify-center">
            <CarSquare/>
        </div>
    </div>

    </>
  );
}

export default Home;
