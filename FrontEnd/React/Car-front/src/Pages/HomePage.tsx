import { FaSearch } from "react-icons/fa";
import { IconContext } from 'react-icons';
import "../App.css";




const HomePage = () => {
  return (
    <>

      <IconContext.Provider value={{style:{fontSize:'18px'}}}>

     
      <div className="p-4 flex flex-col  w-full ">
          <div className="flex items-center border-b-2 border-black pb-3">
            <FaSearch/>
            <input type="text" placeholder="Explore" className="pr-2 pl-2 bg-gray-300 h-8 w-full mr-3 ml-3 rounded-2xl" ></input>
            <input type="button" value="SEARCH"  className="bg-blue-400 rounded-2xl h-8 pl-2 pr-2"></input>
            
      </div>
        
        <div className="flex flex-row flex-wrap  mt-2 pl-2">
              <div className="m-2 flex flex-col text-wrap  max-w-64 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://www.w3schools.com/w3images/la.jpg" className="w-full h-32 object-cover "></img>
                  <h1 className="p-2 " ><strong>CarName</strong></h1>
                  <p className=" p-2 ">description about your cargose in here you can describe the car in a breef way</p>
                  <p className="p-2">100,000$</p>
              
                  <div className="flex flex-row justify-between p-2">
                    <input type="button" value="Add to Cart" className="bg-blue-400 rounded-2xl h-8 mr-1 pl-2 pr-2 w-1/2"></input>
                    <input type="button" value="Buy" className="bg-green-200 rounded-2xl h-8 pl-2 pr-2 ml-1 w-1/2"></input>
                  </div>
              </div>   
          
        </div>
      </div>
   

 </IconContext.Provider>
    </>
  );
};
export default HomePage;
