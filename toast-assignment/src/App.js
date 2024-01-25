import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,  
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<FirstComponent />} />
      <Route path="/secondComponent" element={<SecondComponent />} />
      <Route path="/thirdComponent" element={<ThirdComponent />} />
    
    </Routes>
  </BrowserRouter>
  

  <ToastContainer
  position="bottom-center"
  // autoClose={5000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  

/>
{/* Same as */}
{/* <ToastContainer /> */}
    </>
  );
}

export default App;
