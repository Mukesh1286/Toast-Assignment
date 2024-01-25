import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from './Loading';

const ThirdComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(0);
  const [apiData, setApiData] = useState(null);

 
  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.knowmee.co/api/v1/master/get-country-list'); // Replace with your API endpoint
  
      setTimer(response.data.timer || 0);
    } catch (error) {
      console.error('Error fetching data from the API:', error.message);
      toast.error('Error fetching data from the API.');
    }
  };

  const handleButtonClick = () => {
    const initialTimer = parseInt(inputValue, 10);

    if (!isNaN(initialTimer) && initialTimer > 0) {
      showToast(initialTimer);
    } else {
      toast.error('Please enter a valid positive number for the timer.');
    }
  };

  const showToast = async (initialTimer) => {
    const toastId = toast.info(`${initialTimer}: 1`, {
      autoClose: false,
      hideProgressBar: true,
    });

    const updateToast = () => {
      if (initialTimer > 0) {
        toast.update(toastId, {
          render: `${initialTimer}: 1 `,
        });
        initialTimer -= 1;
      } else {
        toast.dismiss(toastId);
        fetchDataFromApi();
      }
    };

    
    setInterval(updateToast, 1000);
  };

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get('https://api.knowmee.co/api/v1/master/get-country-list'); // Replace with your API endpoint
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching data from the API:', error.message);
      toast.error('Error fetching data from the API.');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  let isLoading;

  return (
    <div className='container mt-5'>
        <h5> Enter Countdown Time</h5>
       <div className='mt-5'>

      <input
        type="number"
        className='p-2 px-5'
        placeholder="Set timer value..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='p-2 px-5 mx-5 bg-primary text-white' onClick={handleButtonClick}>Start Timer</button>
      <p className='mt-5'></p>
      
      <div>
      <h5 className='my-4'>Display Data:-</h5>
      </div>
      <ul>
        {isLoading ? (
            <>
            <Loading/>
            </>
        ):(
            <>
            {Array.isArray(apiData?.responseData) &&
            apiData?.responseData.map((country) => (
              <li className='list' key={country.id}>{country?.country_id}.  {country?.country_name}</li>
            ))}
            </>
        )

        }
          
        </ul>
      
    </div>
   
    </div>


  );
};

export default ThirdComponent;
