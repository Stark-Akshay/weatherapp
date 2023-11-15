import React from 'react';
import { ExtendedWeatherData, Weather as WeatherType } from '../lib/types';

const Weather: React.FC<{ weather: ExtendedWeatherData }> = ({ weather }) => {
  const mainWeather: WeatherType | undefined = Array.isArray(weather.weather) ? weather.weather[0] : undefined;


  return (
    <>
    <div className='flex flex-row justify-around mt-[5rem] pb-5 w-full'>
        <div className='flex flex-col'>
        {weather.name && <p className='text-5xl text-white'>{weather.name}</p>}
        {mainWeather && (
        <p className=' text-slate-300 text-md'>Weather Status: {mainWeather.description}</p>
        )}
        </div>
       
       {mainWeather && (
        <div>
          {mainWeather.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${mainWeather.icon}.png`}
              alt={`Weather Icon: ${mainWeather.main}`}
              width="80px"
              height="80px"
            />
          )}
        </div>
      )}
    </div>

    <div className='bg-slate-800/80 w-full h-[8rem] mt-10 rounded-lg shadow-md flex justify-center content-center '>
      
       {mainWeather && (
        <div className='flex-wrap flex flex-row justify-around w-full h-full content-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-xl'>Temp</p>
                <p className='text-white text-md'>{weather.main.temp}°C</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-xl'>Feels Like</p>
                <p className='text-white text-md'>{weather.main.feels_like}°C</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-xl'>Wind Speed</p>
                <p className='text-white text-md'>{weather.main.temp} m/s</p>
            </div>
        </div>
       )}
       </div>
 


    </>
    
  );
};

export default Weather;