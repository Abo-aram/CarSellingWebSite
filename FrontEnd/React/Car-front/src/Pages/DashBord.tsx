import { FaHome } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


import { IconContext } from 'react-icons';




const DashBord = () => {


  return (
      <IconContext.Provider value={{style:{fontSize:'20px' , paddingRight:'5px', color:'black' }}}>

<div className="shadow-gray-600 shadow-lg bg-gray-100 sticky pl-4 pr-4 pt-8 h-screen w-1/6 max-w-52">
        <h1 className="text-center text-2xl "><strong>WebName</strong></h1>
       
      <div className="mt-20">
       
        <p className="hover-bg-white   flex items-center selected  pt-1 pb-1 border-black rounded-md  pl-1 mt-2"> <FaHome/> <strong>Home</strong></p>
        <p className="hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md  pl-1 mt-2"> <FaCarSide/> <strong>Inventory</strong></p>
        <p className="hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md pl-1 mt-2"> <FaTags/> <strong>Offers</strong></p>
        <p className="hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md  pl-1 mt-2"> <FaMoneyBillWave/> <strong>Sell your car</strong></p>
        <p className="hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md  pl-1 mt-2"> <FaInfoCircle/> <strong>About Us</strong></p>
        <p className="hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md  pl-1 mt-2"> <FaPhone/> <strong> Contact Us</strong></p>
      </div>
    </div>
  </IconContext.Provider>

  );
};
export default DashBord;
