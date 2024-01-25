import React, { useState } from "react";
import { toast } from "react-toastify";

const SecondComponent = () => {
  const [counter, setCounter] = useState(0);
  const [customMessage, setCustomMessage] = useState("");
  const [timeoutValue, setTimeoutValue] = useState(1000); // Default timeout is set to 3000 milliseconds

  const handleCustomMessageChange = (e) => {
    setCustomMessage(e.target.value);
  };
  const handleTimeoutChange = (e) => {
    const newTimeoutValue = parseInt(e.target.value, 10);
    if (!isNaN(newTimeoutValue) && newTimeoutValue > 0) {
      setTimeoutValue(newTimeoutValue);
    } else {
      toast.error("Please enter a valid positive integer for timeout.");
    }
  };

  const handleButtonClick = () => {
    if (customMessage.trim() === "") {
      toast.error("Please enter a custom message.");
      return;
    }

    setCounter((prevCounter) => prevCounter + 1);

    const message = `${customMessage}`;

    toast.info(`${message}: ${counter + 1}`, {
      autoClose: timeoutValue,
    });
  };

  return (
    <div className="container mt-5">
      <h4>Enter Custom Toast Text</h4>

      <div className="d-flex mt-5">
        <div>
          <h6>Custom Message:</h6>
          <div>
            <input
              type="text"
              className="p-2"
              placeholder="Enter Toast Message"
              value={customMessage}
              onChange={handleCustomMessageChange}
            />
          </div>
        </div>

        <div className="mx-5">
          <h6>Set Timeout (in milliseconds):</h6>
          <div>
            <input
              type="number"
              className="p-2"
              value={timeoutValue}
              // placeholder='Enter in milliseconds'
              onChange={handleTimeoutChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <button
          className="bg-primary text-white p-2 px-5"
          onClick={handleButtonClick}
        >
          Show Custom Toast Message
        </button>
      </div>
    </div>
  );
};

export default SecondComponent;
