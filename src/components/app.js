import 'regenerator-runtime/runtime';

const APP = () => {
  const FORM = document.getElementById('input_form');

  const FORM_SUBMIT_HANDLER = async (event) => {
    event.preventDefault();
    const API_KEY = process.env.weather_key;
    const USER_INPUT = document.getElementById('text_input').value;
    const RESPONSE = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${USER_INPUT}&appid=${API_KEY}`
    );
    console.log(RESPONSE);
  };

  FORM.addEventListener('submit', FORM_SUBMIT_HANDLER);
};

export { APP };
