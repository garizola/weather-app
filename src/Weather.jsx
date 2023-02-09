import React, { useState, useEffect } from "react";



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

async function getWeather() {

    try {

        const response = await fetch('https://dark-sky.p.rapidapi.com/39.7851,-86.1595?units=auto&lang=en', options);
        const data = await response.json();

        
        const { temperature, uvIndex, apparentTemperature, summary, precipProbability } = data.currently;
        return  { temperature, uvIndex, apparentTemperature, summary, precipProbability };
        
         

    } catch (e) {
        console.log(e);
    }
}



	



function Weather() {
  
    const [weather, setWeather] = useState({});

    useEffect(() => {
  
        getWeather().then(weather => setWeather(weather));
       

    }, [])
  
 

  return (
    <div className="bg-gray-dark m-auto rounded-xl sm:w-9/12 md:w-6/12 h-fit text-gray-light p-5 flex justify-around flex-col md:flex-row  ">
        <h2 className=" font-bold w-2/5 my-auto text-2xl text-center p-3">Current Temperature: <br/>
            <span className="text-orange text-6xl "> {weather.temperature}° </span>
        </h2>
        <div className="flex flex-col  md:w-2/5 p-3">
            <h2 className=" font-bold">Feels Like Temperature: <br/>
                <span className="text-orange text-3xl"> {weather.apparentTemperature}° </span>
            </h2>
            <h2 className="font-bold">Current Summary: <br/>
                <span className="text-orange text-3xl"> {weather.summary} </span> 
            </h2>
            <h2 className="font-bold">Precipitation Probability: <br/>
                <span className="text-orange text-3xl"> {weather.precipProbability * 100}% </span> 
            </h2>
        </div>
    </div>
  );
}

export default Weather;
