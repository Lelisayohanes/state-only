import React, {useState} from 'react'

function MyComponent() {

  //
  const [car, setCar] = useState(
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2024
    }
  );


  function handleYearChange(event) {
    setCar(c => ({...c,year: event.target.value}));
  }
  function handleModelChange(event) {
    setCar(c => ({ ...c, model: event.target.value }))
  }
  function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }))
  }

  
  return (
    <div>
      <p>your favorite car is : {car.year} {car.make} {car.model} </p>
      <input type='number' value={car.year} onChange={handleYearChange} />
      <input type='text' value={car.make} onChange={handleMakeChange} />
      <input type='text' value={car.model} onChange={handleModelChange} />
    </div>
  )
}

export default MyComponent
