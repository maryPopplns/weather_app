import 'regenerator-runtime/runtime';
import { RENDER_DATA } from './render_data.js';

const APP = () => {
  const FORM_SUBMIT_HANDLER = async (event) => {
    event.preventDefault();
    const API_KEY = process.env.weather_key;
    const USER_INPUT = document.getElementById('text_input').value;
    try {
      const RESPONSE = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${USER_INPUT}&appid=${API_KEY}`
      );
      const RESOLVED = await RESPONSE.json();
      await RENDER_DATA(RESOLVED);
    } catch (error) {
      console.log(error);
    }
  };

  const INPUT_FORM = document.getElementById('input_form');
  INPUT_FORM.addEventListener('submit', FORM_SUBMIT_HANDLER);
};

export { APP };
