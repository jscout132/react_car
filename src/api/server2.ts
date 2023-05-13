import { useState, useEffect } from 'react';


let token = 'a8abb8500756'

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer: ${token}`
      },
    };

    fetch('https://feline-heliotrope-summer.glitch.me/api/cars', options)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      {data.map(item => (
        <div key={item.serial_number}>
          {item.name}
        </div>
      ))}
    </div>
  );
   
}
export default MyComponent;