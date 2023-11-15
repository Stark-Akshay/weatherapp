export type Coord = {
    lon: number;
    lat: number;
  };
  
  export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  
  export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;

  };
  
  export type Clouds = {
    all: number;
  };
  
  export type Sys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  
  export type Wind = {
    speed: number;
    deg: number;
    gust: number;
  };
  
  export type ExtendedWeatherData = {
    base: string;
    clouds: Clouds;
    cod: number;
    coord: Coord;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: Sys;
    timezone: number;
    visibility: number;
    weather: {
      data: Weather[];
      length?: number;
      pop?: unknown;
      push?: unknown;
      concat?: unknown;
     
    };
    wind: Wind;
  };