const RENDER_DATA = (data) => {
  const CURRENT_DATA = document.getElementById('display_container');
  if (CURRENT_DATA !== null) {
    CURRENT_DATA.remove();
  }

  // const NAME = data.name;
  // const WEATHER_DESCRIPTION = data.weather[0].description;
  // const KELVIN_TEMP = data.main.temp;
  // const HUMIDITY = data.main.humidity;

  const DISPLAY_CONTAINER = document.createElement('div');

  DISPLAY_CONTAINER.id = 'display_container';

  document.getElementsByTagName('main')[0].append(DISPLAY_CONTAINER);
};

export { RENDER_DATA };
