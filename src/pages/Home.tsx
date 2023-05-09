import Button from "../components/Button";
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
            <Button>Click here</Button> {/* pull in the car name instead of the word here */}
        </div>
    </section>
    <section className="flex flex-col w-5/12">
        <SideBars className="">
        <Link to='/cars'><p><i className="fa-solid fa-car fa-2xl pr-5" style={{color: "#eab308"}}></i>
            See all cars</p></Link>
        </SideBars>
        <section className="h-8"></section>
        <SideBars>
            <p><i className="fa-solid fa-handshake fa-2xl pr-5" style={{color: "#eab308"}}></i>
            Chat with a salesperson</p>
        </SideBars>
    </section>
    </div>

    <div className="ml-4 mr-4 mt-6 flex flex-row">
        <Squares>
           <p className="font-bold text-3xl">Get Approved</p> 
        </Squares>
        <Squares>
           <p className="font-bold text-3xl">Trade in Value</p> 
        </Squares>
        <Squares>
           <p className="font-bold text-3xl">Order Parts</p> 
        </Squares>

    </div>
    </>
  );
}

export default Home;
