import { FaHome } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


import { IconContext } from 'react-icons';




const DashBord = () => {


  const Active ="flex items-center selected  pt-1 pb-1 border-black rounded-md  pl-1 mt-2";
  const inActive = "hover-bg-white flex items-center pt-1 pb-1 border-black rounded-md  pl-1 mt-2";


  return (
      <IconContext.Provider value={{style:{fontSize:'20px' , paddingRight:'5px', color:'black' }}}>

<div className="shadow-gray-600 shadow-lg bg-gray-100 sticky pl-4 pr-4 pt-8 h-screen w-1/6 max-w-52">
        <h1 className="text-center text-2xl "><strong>WebName</strong></h1>
       
      <div className="mt-20">
       
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"/"} > <FaHome/>   <strong>Home</strong> </NavLink>
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"Inventory"} ><FaCarSide/> <strong>Inventory</strong> </NavLink>
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"Offers"} ><FaTags/> <strong>Offers</strong> </NavLink>
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"Sellyourcar"} > <FaMoneyBillWave/> <strong>Sell your car</strong></NavLink>
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"AboutUs"} > <FaInfoCircle/> <strong>About Us</strong> </NavLink>
         <NavLink className={({isActive})=>{return isActive ? Active :inActive}} to={"ContactUs"} > <FaPhone/> <strong> Contact Us</strong></NavLink>
      </div>
    </div>
  </IconContext.Provider>

  );
};
export default DashBord;
