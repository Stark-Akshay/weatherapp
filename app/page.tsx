"use client"

import axios from 'axios';
import Image from 'next/image'
import {FormEvent, useEffect, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import Weather from './components/Weather';
import { ExtendedWeatherData } from './lib/types';


export default function Home() {
  const [weather, setWeather] = useState<ExtendedWeatherData | null>(null);
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const[image, setImage] = useState<string>('https://images.unsplash.com/photo-1606821061030-9eedf225857b?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  const[keyword, setKeyword] = useState<string>('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  
  

  const searchImage = () => {
    const unsplash_url = `https://api.unsplash.com/photos/random?query=${city}&count=1&orientation=landscape&client_id=${process.env.NEXT_PUBLIC_PICTURE_KEY}`
    axios.get(unsplash_url).then((response)=> {
      
      setImage(response.data[0].urls.full);
      
    })

    setKeyword('');
      setCity('');

  }

  const fetchWeather = (e: FormEvent) => {
    setImage('https://images.unsplash.com/photo-1606821061030-9eedf225857b?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    e.preventDefault();
    setLoading(true);
    axios.get<ExtendedWeatherData>(url)
      .then((response) => {
        setWeather(response.data);
        setKeyword(city+' '+response.data.weather.data[0].main);
        console.log(keyword);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
    searchImage();

  };

  return (
    <>
    <div>
      <div className='bg-black/50 z-[1] relative w-[100vw] h-[100vh]'>
        <div className='flex pt-10 flex-col items-center w-full justify-center'>
          <p className='text-4xl pb-5 text-slate-300 font-bold'>Weather App</p>
          <form onSubmit={fetchWeather}>
          <div className=' border-slate-50 rounded-lg border-2 w-[250px] px-2 py-2 flex'>
              <input type="text" 
              placeholder='Search City' 
              className='w-full bg-transparent text-slate-50 focus:outline-none placeholder:text-slate-400' 
              onChange={(e) => setCity(e.target.value)}/>
              <button className='text-slate-300' onClick={fetchWeather}>
                <FaSearch/>
              </button>
          </div>
          </form>
          <div className='px-5 w-full'>
          {weather?.weather && <Weather weather={weather} />}
          </div>
          
        </div>
      </div>
      
      <Image src={image} fill={true} alt='Background Image' className='absolute top-0 left-0 right-0 bottom-0 object-cover z-0'/>
      </div>
      
     

    </>
  )
}
