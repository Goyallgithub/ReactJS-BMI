import React, { useState } from 'react'

import './App.css';




const App = () => {

  const [weight,setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const calculateBMI = () => {

    if (weight && height ) {
      let heightInMeters = height ;
      let bmiValue = (weight/(heightInMeters*heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  }

  return (
    <>
      <div className="container-baap">
      <div className="container">
          <h1>BMI Calculator</h1>
          <div className="inputs">
            
          <input type="text" placeholder="Enter Weight" name="text" value={weight} onChange={handleWeightChange} class="input"/>
          <input type="text" placeholder="Enter Height" name="text" value={height} onChange= {handleHeightChange} class="input"/>
         
            
          </div>
          <button className='button'  onClick={calculateBMI}>Calculate BMI</button>

        <div className="result">
          Your BMI is :  {bmi}
        </div>

      </div>
      </div>
     
    </>
  );
};

export default App;
