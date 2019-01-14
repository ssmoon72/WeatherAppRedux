import axios from 'axios';

const API_KEY = 'a25ee66410657c1733968113e8953ebf';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request console log", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
