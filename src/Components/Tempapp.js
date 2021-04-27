import React, {useEffect, useState}from "react";
import "../Components/Css/Style.css";

const Tempapp = () => {
    const [city, setcity] = useState(null);
     const [search, setsearch] = useState("mumbai")

     useEffect (()=>{
         const fetchApi = async ()=>{
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e96128da5b2fa6ee3795fb8a303c881`
         const response = await fetch(url);
         const resJson = await response.json();
         setcity(resJson.main);
         }
         fetchApi();
     },[search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {setsearch(event.target.value)}}
          />
        </div>
        {!city ? (
            <p className="errorMsg">No Data Found</p>
        ) :(   
        <>    
        <div className="info">
        <h2 className="location">
          <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
            {city.temp}°Cel
        
        </h1>
        <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_min}°Cel</h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
</>
        )}
      
     
      </div>
    </>
  );
};
export default Tempapp;

