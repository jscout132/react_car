import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


let token = 'a8abb8500756'

interface Item {
    id:string,
    car_make: string,
    car_model: string,
    car_color: string,
    year_:string,
    cost_:string,
    mileage:string,
}

function CarSquare() {
    const [data, setData] = useState<Item[]>([]);


    useEffect(() => {
        fetch(`https://feline-heliotrope-summer.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            }
        })
          .then(response => response.json())
          .then(data => setData(data.slice(-5,-1)));
      }, []);
    
  return (
    <div className="m-5 flex flex-row flex-wrap ">
      {data.map(item => (
        <Card key={item.id} 
        className="px-3 m-5 bg-gray-200 shadow-md border-l-8 transition
                 border-gray-200 hover:border-yellow-500">
                <CardContent>
                <Typography variant="h5" component="h5">
                {item.car_make} {item.car_model}
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary">
                Color: {item.car_color}
                </Typography>
                <Typography sx={{ mb:0 }} color="text.secondary">
                Price: {item.cost_}
                </Typography>
                </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CarSquare