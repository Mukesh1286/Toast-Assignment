import React, { useState } from 'react';
import { toast } from 'react-toastify';



const FristComponent = () => {
    const [counter, setCounter] = useState(0);
    // const [customMessage, setCustomMessage] = useState('');
  const [timeoutValue, setTimeoutValue] = useState(1000); // Default timeout is set to 3000 milliseconds

  const showToast = () => {   
        toast.info(`Testing  : ${counter}`, {
        //   position: toast.POSITION.TOP_CENTER,
          autoClose: timeoutValue, // Use the timeout value set by the user
        });

   
  };

 

  const handleTimeoutChange = (e) => {
    const newTimeoutValue = parseInt(e.target.value, 10);
    setTimeoutValue(newTimeoutValue);
  };
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    showToast();
  };
    

  return (
    <div className='container mt-5'>
      <h4> Toast Message</h4>
      
      <div className='d-flex mt-3'>
        
      <div className='mt-4'>
      <button 
      className='bg-primary text-white p-2 px-5' 
      onClick={increaseCounter}>Show Toast Message</button>
       </div>

       <div className='mx-5'>
       <h6>Set Timeout (in milliseconds):</h6>
      <div>       
        <input type="number" 
        className='p-2' 
        value={timeoutValue}       
        onChange={handleTimeoutChange} />
      </div>
       </div>
      

      </div>
      

       

      
    </div>

    
  )
}

export default FristComponent